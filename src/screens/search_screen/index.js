import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import TextInput from '../../components/textInput';
import styles from './style';

class SearchScreen extends Component {
  state = {
    filteredPosts: [],
  }
  handleChange = (e) => {
    const {userPosts} = this.props; 
    let filteredPosts = userPosts.filter(item => item.caption.from.full_name.toLowerCase().trim().match(e));
    this.setState({filteredPosts});
  }
  render() {
    return (
      <View style={styles.searchScreenContainer}>
        <View style={styles.searchTextInputContainer}>
          <TextInput 
            label="Search..."
            inputStyles={styles.searchTextInput}
            placeholderColor="#5f5f5f"  
            handleTextChange={this.handleChange}
            textColor="#5f5f5f"
            selectionColor="#5f5f5f"
          />
        </View>
         <View style={styles.userListContainer}>
             <Text style={styles.userName}>Sourabh Khera</Text>
             <Ionicons name="chevron-right" size={40} />
         </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
   userPosts: state.postReducer.userPosts, 
});
export default connect(mapStateToProps)(SearchScreen);