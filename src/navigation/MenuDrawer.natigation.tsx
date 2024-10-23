import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from "../styles/colors";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "../screens/Slide1";
import { Imagens } from "../screens/Slide2";

type MenuDrawerParam = {
    Camera: undefined;
    Imagem: undefined;
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Camera">

export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation;
}

export function DrawerNavigation () {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 250,
            },
          }}
        >
            <Drawer.Screen name='Camera' component={Camera}/>
            <Drawer.Screen name='Imagem' component={Imagens}/>
        </Drawer.Navigator>
    )
}