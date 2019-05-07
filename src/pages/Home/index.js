import React from 'react';
import { connect } from 'react-redux';
import { navigationBarOptions } from '../../helpers/navigationBarOptions';

import {
  ContainerStyled,
} from './styles';

import MenuHome from '../../components/Home/menu';
import BotaoCarrinho from '../../components/Carrinho/BotaoCarrinho';

const Home = ({
  navigation,
  menu,
}) => (
  <ContainerStyled>
    <MenuHome navigation={navigation} menu={menu.list} />
    <BotaoCarrinho navigation={navigation} />
  </ContainerStyled>
);

Home.navigationOptions = {
  title: 'Página inicial',
  ...navigationBarOptions,
}

const mapStateToProps = state => ({
  menu: state.menu,
});

export default connect(
  mapStateToProps,
  null,
)
(Home);
