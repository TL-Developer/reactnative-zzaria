import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ContainerStyled,
  ListItemStyled,
} from './styles';

const MenuHome = ({
  navigation,
  menu,
}) => (
  <ContainerStyled>
    {menu.map((item) => (
      <ListItemStyled
        leftIcon={{ name: item.icon }}
        key={item._id}
        title={item.nome}
        onPress={() => navigation.push(item.nome)}
      />
    ))}
  </ContainerStyled>
);

export default MenuHome;
