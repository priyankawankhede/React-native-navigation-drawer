import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  ProfileScreen 
} from "./screens";

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen
})

export default createAppContainer(DrawerNavigator);

