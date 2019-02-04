import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';
import TextInput from '../../components/textInput';
import FilteredUser from '../../components/filteredUser';
import styles from './style';

class SearchScreen extends Component {
  state = {
    filteredPosts: [],
    searchUser: '',
  }
  handleChange = (e) => {
    const { userPosts } = this.props;
    let filteredPosts = userPosts.filter(item => item.caption.from.full_name.toLowerCase().trim().match(e));
    let uniqPosts = [...new Set(filteredPosts.map(item => item.caption.from.id))].map(id => filteredPosts.find(s => s.caption.from.id === id))
    this.setState({ filteredPosts: uniqPosts, searchUser: e });
  }
  handleClick = (id) => () => {
    const { navigation, userPosts } = this.props;
    const searchedPosts = userPosts.filter(item => item.caption.from.id === id);
    navigation.navigate('SearchedUser', {'posts': searchedPosts});
  }
  renderedFilteredUserList = ({ item }) => {
    const { caption } = item;
    const { full_name, id } = caption.from;
    return (
      <FilteredUser userName={full_name} handleClick={this.handleClick(id)} />
    )
  }
  render() {
    const { userPosts } = this.props;
    const { filteredPosts, searchUser } = this.state;
    const renderUserList = filteredPosts.length ?
      <FlatList
        data={filteredPosts}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderedFilteredUserList}
      /> : null;
    return (
      <View style={styles.searchScreenContainer}>
        <View style={styles.searchTextInputContainer}>
          <TextInput
            label="Search user..."
            inputStyles={styles.searchTextInput}
            placeholderColor="#5f5f5f"
            handleTextChange={this.handleChange}
            textColor="#5f5f5f"
            selectionColor="#5f5f5f"
          />
        </View>
        {renderUserList}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userPosts: state.postReducer.userPosts,
});
export default connect(mapStateToProps)(SearchScreen);