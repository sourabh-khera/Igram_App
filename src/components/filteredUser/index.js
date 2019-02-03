import React from 'react';
import styles from './style';

const filteredUser = () => {
    return (
        <View style={styles.userListContainer}>
          <Text style={styles.userName}>Sourabh Khera</Text>
          <Ionicons name="chevron-right" size={40} />
        </View>
    )
}