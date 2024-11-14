import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './MenuDrawer.natigation'

export default function Navigation(){
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
}

