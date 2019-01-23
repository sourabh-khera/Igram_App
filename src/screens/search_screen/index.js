import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import TextInput from '../../components/textInput';
import styles from './style';

class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.searchScreenContainer}>
        <View style={styles.searchTextInputContainer}>
          <TextInput 
            label="Search..."
            inputStyles={styles.searchTextInput}
            placeholderColor="#000"  
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

export default SearchScreen;