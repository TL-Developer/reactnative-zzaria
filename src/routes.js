import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import PizzasSalgadasInteira from './pages/Pizzas/Salgadas/inteira';
import Pedido from './pages/Pedido';
import Carrinho from './pages/Carrinho';

const AppNavigator = createStackNavigator(
  {
    Home,
    Pizzas,
    PizzasSalgadasInteira,
    Pedido,
    Carrinho,
  }
);

export default createAppContainer(AppNavigator);
