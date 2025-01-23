// navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import ViewRecipesScreen from "../screens/ViewRecipesScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
      <Tab.Screen name="View Recipes" component={ViewRecipesScreen} />
    </Tab.Navigator>
  );
}
