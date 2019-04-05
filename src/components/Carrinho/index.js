import React from 'react';
import styled from 'styled-components/native';
import { Platform, View, Text, Picker } from 'react-native';
import { Badge, Button, ListItem, Divider } from 'react-native-elements';
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
    <Text>Pedido:</Text>
    {
      carrinho.pedidos.list.map(pedido => (
        <View key={pedido.id}>
          <ListItem
            key={pedido.id}
            title={pedido.nome}
            subtitle={pedido.descricao}
            badge={{ value: pedido.valor, textStyle: { color: 'white' }, containerStyle: { marginTop: 10 } }}
          />
          <Divider key={pedido.id} style={{ backgroundColor: 'red' }} />
        </View>
      ))
    }
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
