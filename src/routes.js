import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import PizzasSalgadasInteira from './pages/Pizzas/Salgadas/inteira';

const AppNavigator = createStackNavigator({
  Home,
  Pizzas,
  PizzasSalgadasInteira,
});

export default createAppContainer(AppNavigator);
