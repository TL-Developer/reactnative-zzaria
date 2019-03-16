import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './pages/Home';
import Pizzas from './pages/Pizzas';

const AppNavigator = createStackNavigator({
  Home,
  Pizzas,
});

export default createAppContainer(AppNavigator);
