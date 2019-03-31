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

const BotaoCarrinho = ({
  navigation,
  pedidos,
}) => (
  <BotaoCarrinhoStyle>
    <Badge value={pedidos.length} status="error" />
    <Button
      icon={
        <Icon
          name="shopping-cart"
          size={15}
          color="white"
        />
      }
      title=""
      onPress={() => navigation.navigate('Carrinho')}
    />
  </BotaoCarrinhoStyle>
);

const mapStateToProps = state => ({
  pedidos: state.carrinho.pedidos.list,
});

export default connect(
  mapStateToProps,
  null,
)(BotaoCarrinho);
