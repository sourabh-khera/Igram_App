import React, { Component, Fragment } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchUsersPosts } from '../../actions/async.actions/posts_async';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import UserInfo from '../../components/userInfo';
import UserPost from '../../components/userPost';
import Loader from '../../components/loader';
import styles from './style';

class HomeScreen extends Component {

  componentDidMount(){
    const { getUserPosts } = this.props;
    getUserPosts();
  }
  render() {
    const { showLoader } = this.props;
    const ratio = getPixelRatio();
    const profileImageAttributes = getImageWidthAndHeight(50, 50);
    const postImageAttributes = getImageWidthAndHeight(0, 250);  
    const renderScreen = showLoader ? <Loader moveLeft={38} moveTop={33} /> :  
    <Fragment>
      <UserInfo 
        height={profileImageAttributes.height}
        width={profileImageAttributes.width}
        ratio={ratio}
      />
      <UserPost 
        height={postImageAttributes.height}
        ratio={ratio}  
      />
  </Fragment>
    return (
      <View style={styles.homeScreenContainer}>
         {renderScreen}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  showLoader: state.commonReducer.showLoader,
})
const mapDispatchToProps = dispatch => ({
  getUserPosts: () => dispatch(fetchUsersPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);