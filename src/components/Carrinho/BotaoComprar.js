import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotaoCarrinhoStyle = styled.View`
  margin-top: auto;
  padding: 5px;
`;

import {
  savePedido,
} from '../../redux-flow/actions/carrinho'

const BotaoCarrinho = ({
  navigation,
  carrinho,
  savePedidoDispatch,
}) => (
  <BotaoCarrinhoStyle>
    <Button
      disabled={carrinho.formaPg.length === 0 ? true : false}
      icon={
        <Icon
          name="shopping-cart"
          size={15}
          color="white"
        />
      }
      title="Fazer Pedido "
      onPress={() => {
        navigation.navigate('Home');
        return savePedidoDispatch();
      }}
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
