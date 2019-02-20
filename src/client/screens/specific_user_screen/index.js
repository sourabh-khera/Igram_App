import React, { Component, Fragment } from 'react';
import { Text, View, FlatList } from 'react-native';
import moment from 'moment';
import { getImageWidthAndHeight, getPixelRatio } from '../../../utils/commonFuncions';
import TotalPostsCount from '../../components/totalNumPost';
import UserInfo from '../../components/userInfo';
import UserPost from '../../components/userPost';
import styles from './style';

class SpecificUserScreen extends Component {
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
    const ratio = getPixelRatio();
    const profileImageAttributes = getImageWidthAndHeight(100, 100);    
    const { navigation } = this.props;
    const posts = navigation.state.params.posts;
    const { full_name, profile_picture } = posts[0].caption.from;
    const userName = full_name;
    const profileUrl = profile_picture;
    const count = posts.length;
    return (
      <View style={styles.specificUserScreenContainer}>
        <TotalPostsCount
           height={profileImageAttributes.height}
           width={profileImageAttributes.width}
           ratio={ratio}
           userName={userName}
           postCount={count} 
           url={profileUrl}
          />
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderUserPosts}
        />
      
      </View>
    );
  }
}

export default SpecificUserScreen;