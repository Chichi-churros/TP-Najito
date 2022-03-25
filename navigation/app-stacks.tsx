import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/CocktailScreen";
import DetailsScreen from "../screens/IngredientsScreen";
import SettingsScreen from "../screens/DescriptionScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Cocktails: undefined;
  Details: undefined;
  Ingredients: undefined;
};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cocktails" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside settings tab
const SettingsStack = createStackNavigator<RootStackParamList>();
export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Ingredients" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Cocktails">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Ingredients">;
}
