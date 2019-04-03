import React from 'react';
import styled from 'styled-components/native';
import { Platform, View, Text, Picker } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CarrinhoStyle = styled.View`
  margin: 10px;
`;

const BotaoCarrinho = ({
  navigation,
  carrinho,
  pagamentos,
  setFormaPgDispatch,
}) => (
  <CarrinhoStyle>
    <Text>{JSON.stringify(carrinho)}</Text>
    <Text>{carrinho.formaPg}</Text>
    <Text>Forma de pagamento</Text>
    <Picker
      style={{
        height: 50,
        width: 400,
      }}
      selectedValue={carrinho.formaPg}
      onValueChange={(value) => setFormaPgDispatch(value)}
    >
      {pagamentos.list.map(pg => (
        <Picker.Item
          key={pg._id}
          label={pg.nome}
          value={pg.nome}
        />
      ))}
    </Picker>
  </CarrinhoStyle>
);

export default BotaoCarrinho;