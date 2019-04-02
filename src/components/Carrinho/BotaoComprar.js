import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotaoCarrinhoStyle = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

import {
  savePedido,
} from '../../redux-flow/actions/carrinho'

const BotaoCarrinho = ({
  navigation,
  savePedidoDispatch,
}) => (
  <BotaoCarrinhoStyle>
    <Button
      icon={
        <Icon
          name="shopping-cart"
          size={15}
          color="white"
        />
      }
      title="Fazer Pedido "
      onPress={() => savePedidoDispatch()}
    />
  </BotaoCarrinhoStyle>
);

const mapDispatchToProps = dispatch => ({
  savePedidoDispatch: payload => dispatch(savePedido()),
});

export default connect(
  null,
  mapDispatchToProps,
)(BotaoCarrinho);
