import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./pages/home";
import CocktailInfo from "./pages/cocktail_recipe";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RandomCocktail from "./pages/random_cocktail";

const Stack = createNativeStackNavigator();

function CocktailStack() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{headerShown: true, headerTintColor: "tomato"}}>
            <Stack.Screen name="Home" component={Home} options={{title: "Home"}}/>
            <Stack.Screen name="Cocktail recipe" component={CocktailInfo} options={{title: "Cocktail recipe"}}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (route.name === 'RandomCocktail') {
                        iconName = focused ? 'sync-circle' : 'sync-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={CocktailStack} options={{headerShown: false, unmountOnBlur: true}}/>
                <Tab.Screen name="RandomCocktail" component={RandomCocktail} options={{title: "Cocktail aléatoire"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
