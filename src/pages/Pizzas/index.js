import React, { Component } from 'react';
import { Platform, ScrollView } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import styled from 'styled-components/native';

import { navigationBarOptions } from '../../helpers/navigationBarOptions';
import BarImage from '../../components/BarImage';

import MenuPizzas from '../../components/Pizzas/menu';
import Modal from '../../components/Modal';

const PizzasStyled = styled.ScrollView`
  display: flex;
  background: #831e10;
`;

const Pizzas = ({
  navigation,
}) => (
  <PizzasStyled>
    <MenuPizzas navigation={navigation} />
  </PizzasStyled>
);

Pizzas.navigationOptions = {
  title: 'Tipo de Pizzas',
  ...navigationBarOptions,
  headerLeft: <BarImage />,
}

export default Pizzas;
