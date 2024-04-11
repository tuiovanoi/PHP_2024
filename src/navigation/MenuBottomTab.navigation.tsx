import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenSlide1, ScreenSlide2 } from '../screens';
import { AntDesign } from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuStackParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Slide1" component={ScreenSlide1}
            options={{
                tabBarIcon: () => (
                    <AntDesign name="slideshare" size={24} color="black" />

                )
            }}
            />
            <AntDesign name="Slide2" component={ScreenSlide2}
            options={{
                tabBarIcon: () => (
                    <AntDesign name="sliders" size={24} color="black" />
                )
            }}
            />
        </Tab.Navigator>
    );
}