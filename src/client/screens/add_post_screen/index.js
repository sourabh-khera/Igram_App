import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight, CameraRoll, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import RNHeicConverter from 'react-native-heic-converter';
import { getImageWidthAndHeight, getPixelRatio } from '../../../utils/commonFuncions';
import { addNewUserPost } from '../../actions/async.actions/posts_async';
import styles from  './style';

let self;
class AddPostScreen extends Component {
  constructor(){
    super();
    self = this;
    this.state = { photos: '', selectedPhoto: ''};
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
      CameraRoll.getPhotos({
          first: 20,
          assetType: 'Photos',
        })
        .then(r => {
          this.setState({photos: r.edges, selectedPhoto: r.edges[0]});
        })
        .catch((err) => {
          console.log(err);
           //Error Loading Images
        });   
   }
  
  handlePostButton = () => {
    const { addUserPost, token } = this.props;
    const { selectedPhoto } = this.state;
    const res = selectedPhoto.node.image.uri.replace(/(JPG|PNG|HEIC)/g, 'HEIC');
    RNHeicConverter
    .convert({ // options
        path: res,
    })
    .then((result) => {
      console.log(result);
      addUserPost(token, result.path);
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
    const postImageAttributes = getImageWidthAndHeight(0, 250);
    const ratio = getPixelRatio();
    const boxPostAttributes = getImageWidthAndHeight(121, 120);
    const { photos, selectedPhoto } = this.state;
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
        <Image source={{uri: photos && photos.length && selectedPhoto.node.image.uri}} style={{ width: '100%', height: postImageAttributes.height / ratio }} />
        {displayThumnails}
      </View>
    )
  }
}
const mapStateToProps = state => ({
 token: state.userReducer.token,
});

const mapDispatchToProps = dispatch => ({
  addUserPost: (token, uri) => dispatch(addNewUserPost(token, uri)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);