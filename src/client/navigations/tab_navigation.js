import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { HomeStack, SearchStack, ProfileStack, AddPostStack } from './stack_navigation';

const TabNavigator =  createBottomTabNavigator(
  {
    Home: HomeStack,
    AddPost: AddPostStack,
    Search: SearchStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';  
        } else if (routeName === 'AddPost') {
          iconName = 'md-aperture';
        } else if (routeName === 'Search') {
          iconName = 'md-search';
        } else if (routeName === 'Profile') {
          iconName = 'md-person';
        } 
        return <Ionicons name={iconName} size={28} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {  
       backgroundColor: '#f8f8f8',
       borderTopColor: '#dbdbdb',
       borderTopWidth: 1
      },
    },
  }
);

export default createAppContainer(TabNavigator);