import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Entrada } from '../screens/Entrada';
import { Mapa } from '../screens/Mapas';
import { colors } from '../styles/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
type TabParamList = {
    Entrada: undefined
    Mapas: Coords
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Entrada'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.white,
        }}
    >
        <Tab.Screen name='Entrada' component={Entrada}
        options={{
            tabBarIcon: () => (
                <Ionicons name="person" size={24} color={colors.white} />
            ),
        }}
    />
    <Tab.Screen name='Mapas' component={Mapa}
    options={{
        tabBarIcon: () => (
            <AntDesign name="message1" size={24} color={colors.white} />
        ),
        }}
    />
    </Tab.Navigator>
    )
}