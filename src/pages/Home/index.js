import React from 'react';
import { connect } from 'react-redux';

import { navigationBarOptions } from '../../helpers/navigationBarOptions';
import BarImage from '../../components/BarImage';

import MenuHome from '../../components/Home/menu';
import BotaoCarrinho from '../../components/Carrinho/BotaoCarrinho';

import {
  ContainerStyled,
} from './styles';

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
  headerLeft: <BarImage />,
}

const mapStateToProps = state => ({
  menu: state.menu,
});

export default connect(
  mapStateToProps,
  null,
)
(Home);
