import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from "../styles/colors";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entrada } from "../screens/Entrada";
import { Mapa } from "../screens/Mapa";

type MenuDrawerParam = {
    Entrada: undefined;
    Mapas: undefined;
}
export interface coords {
    origem: {
        latitude: number,
        longitude: number,
    },
    destino:
    {
        latitude: number,
        longitude: number,
    }
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Entrada">

export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation;
    route: any;
}

export function DrawerNavigation () {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
              backgroundColor: 'white',
              width: 250,
            },
          }}
        >
            <Drawer.Screen name='Entrada' component={Entrada}/>
            <Drawer.Screen name='Mapas' component={Mapa}/>
        </Drawer.Navigator>
    )
}