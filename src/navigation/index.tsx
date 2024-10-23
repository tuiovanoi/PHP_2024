import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './MenuDrawer.natigation'

export default function Navigation(){
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
}

