import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import styles from './style';

const filteredUser = ({ userName, handleClick }) => {
    return (
        <TouchableOpacity onPress={handleClick} style={styles.userListContainer}>
                <Text style={styles.userName}>{userName}</Text>
                <Ionicons name="chevron-right" size={40} />
        </TouchableOpacity>
    );
}

export default filteredUser;