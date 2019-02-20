import React, { Component, Fragment } from 'react';
import { Text, View, FlatList } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchUsersPosts } from '../../actions/async.actions/posts_async';
import { getImageWidthAndHeight, getPixelRatio } from '../../../utils/commonFuncions';
import UserInfo from '../../components/userInfo';
import UserPost from '../../components/userPost';
import Loader from '../../components/loader';
import styles from './style';

class HomeScreen extends Component {

  componentDidMount() {
    const { getUserPosts } = this.props;
    getUserPosts();
  }
  renderUserPosts = ({ item }) => {
    const { caption, images } = item;
    const { full_name, profile_picture } = caption.from;
    const { url } = images.standard_resolution;
    const profileImageAttributes = getImageWidthAndHeight(50, 50);
    const postImageAttributes = getImageWidthAndHeight(0, 250);
    const ratio = getPixelRatio();
    const createdTime = moment(parseInt(caption.created_time)).format('Do MMM, h:mmA');
    return (
      <Fragment>
        <UserInfo
          height={profileImageAttributes.height}
          width={profileImageAttributes.width}
          ratio={ratio}
          userName={full_name}
          url={profile_picture}
        />
        <UserPost
          height={postImageAttributes.height}
          ratio={ratio}
          url={url}
          createdAt={createdTime}
        />
      </Fragment>
    )
  }
  render() {
    const { showLoader, userPosts } = this.props;
    const renderScreen = showLoader ? <Loader moveLeft={38} moveTop={33} /> :  
    <FlatList
      data={userPosts}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={this.renderUserPosts}
    />
    return (
      <View style={styles.homeScreenContainer}>
        {renderScreen}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  showLoader: state.commonReducer.showLoader,
  userPosts: state.postReducer.userPosts,
})
const mapDispatchToProps = dispatch => ({
  getUserPosts: () => dispatch(fetchUsersPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);