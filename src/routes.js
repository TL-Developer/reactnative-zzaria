import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './pages/Home';
import PizzasSalgadasMeioaMeio from './pages/PizzasSalgadas/meioAmeio';
import PizzasSalgadasInteira from './pages/PizzasSalgadas/inteira';

const AppNavigator = createStackNavigator({
  Home,
  PizzasSalgadasMeioaMeio,
  PizzasSalgadasInteira,
});

export default createAppContainer(AppNavigator);
