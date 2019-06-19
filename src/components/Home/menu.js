import React from 'react';

import {
  ContainerStyled,
  ListItemStyled,
  ItemStyled,
} from './styles';

const MenuHome = ({
  navigation,
  menu,
}) => (
  <ContainerStyled>
    {menu.map((item) => (
      <ItemStyled>
        <ListItemStyled
          leftIcon={{ name: item.icon }}
          key={item._id}
          title={item.nome}
          onPress={() => navigation.push(item.nome)}
        />
      </ItemStyled>
    ))}
  </ContainerStyled>
);

export default MenuHome;
