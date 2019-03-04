import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home_screen';
import SearchScreen from '../screens/search_screen';
import ProfileScreen from '../screens/profile_screen';
import IgramHeaderImage from '../components/igramHeaderImage';
import SpecificUserScreen from '../screens/specific_user_screen';
import AddPostScreen from '../screens/add_post_screen';

const commonOptions = {
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
        backgroundColor: '#f8f8f8',
        borderBottomColor: '#efefef',
        borderBottomWidth: 2
    },
    headerTitle: <IgramHeaderImage />,
    headerTintColor: '#000',
    headerBackTitle: null
};

const {headerLeft, gesturesEnabled, ...restOptions} = commonOptions; 

export const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {...commonOptions}
    }
});

export const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {...commonOptions}
    }    
});   

export const AddPostStack = createStackNavigator({
    AddPost: {
        screen: AddPostScreen,
        navigationOptions: {...commonOptions}
    }    
});   

export const SearchStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: {...restOptions}
    },
    SearchedUser: {
        screen: SpecificUserScreen,
        navigationOptions: {...restOptions}
    }
});   
