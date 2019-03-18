import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight, CameraRoll, Image, FlatList, TouchableWithoutFeedback, Dimensions } from 'react-native';
import RNHeicConverter from 'react-native-heic-converter';
import { getImageWidthAndHeight, getPixelRatio } from '../../../utils/commonFuncions';
import { addNewUserPost } from '../../actions/async.actions/posts_async';
import styles from  './style';

let self;
class AddPostScreen extends Component {
  constructor(){
    super();
    self = this;
    this.state = { photos: '', selectedPhoto: '', postHeight: 0, postWidth: 0};
  }
  static navigationOptions = ({ navigation }) => {
     return {
       headerRight: (
           <TouchableHighlight underlayColor='transparent' style={{marginRight: 20}} onPress={()=>self.handlePostButton()}>
              <Text style={{fontFamily: 'Helvetica', fontSize: 16}}>Post</Text>
           </TouchableHighlight>
       ),
     }
   }
  componentDidMount() {
    const postImageAttributes = getImageWidthAndHeight(0, 250);
    const ratio = getPixelRatio();
    const {height, width} = Dimensions.get('window');
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({
          photos: r.edges, 
          selectedPhoto: r.edges[0], 
          postHeight: postImageAttributes.height / ratio, 
          postWidth: width
        });
      })
      .catch((err) => {
        console.log(err);
          //Error Loading Images
      });
   
   }
  
  handlePostButton = () => {
    const { addUserPost, token } = this.props;
    const { selectedPhoto, postHeight, postWidth } = this.state;
    const res = selectedPhoto.node.image.uri.replace(/(JPG|PNG|HEIC)/g, 'HEIC');
    RNHeicConverter
    .convert({ // options
        path: res,
        quality: 0.5
    })
    .then((result) => {
      console.log(result);
      addUserPost(token, result.path, postHeight, postWidth);
    })
    .catch(err => console.log(err)); 
  }

  renderThumbnails = ({ item, index }) => {
    const ratio = getPixelRatio();
    const boxPostAttributes = getImageWidthAndHeight(121, 120);
    const { selectedPhoto, photos } = this.state;
    return (
      <TouchableWithoutFeedback onPress={()=>this.handleThumbnailClick(index)}>
        <Image 
          source={{uri: item.node.image.uri}} 
          style={[{ width: boxPostAttributes.width / ratio, 
           height: boxPostAttributes.height / ratio, 
           marginTop: 3,
           marginLeft: 3,
          }, selectedPhoto.node.image.uri === photos[index].node.image.uri ? {opacity: 0.5}: null]}
        />
      </TouchableWithoutFeedback> 
     )
  }
  handleThumbnailClick  = index => {
    const { photos, selectedPhoto } = this.state;
    this.setState({selectedPhoto: photos[index]}, ()=>{console.log(this.state.selectedPhoto)});   
  }
  render() {
    const { photos, selectedPhoto, postHeight, postWidth } = this.state;
    const displayThumnails = photos && photos.length ?
    <FlatList
      data={photos}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={this.renderThumbnails}
      numColumns={3}
      extraData={this.state}
    />
    : null;
    return (
      <View style={styles.addPostContainer}>
        <Image source={{uri: photos && photos.length && selectedPhoto.node.image.uri}} style={{ width: postWidth, height: postHeight }} />
        {displayThumnails}
      </View>
    )
  }
}
const mapStateToProps = state => ({
 token: state.userReducer.token,
});

const mapDispatchToProps = dispatch => ({
  addUserPost: (token, uri, height, width) => dispatch(addNewUserPost(token, uri, height, width)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);