import React from 'react';
import styled from 'styled-components/native';
import { Platform, View, Text, Picker } from 'react-native';
import { Badge, Button, ListItem, Divider, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CarrinhoStyle = styled.View`
  display: flex;
  padding: 5px;
  margin: 10px;
  background: #fff;
`;

const BotaoCarrinho = ({
  navigation,
  carrinho,
  pagamentos,
  setFormaPgDispatch,
  setTrocoDispatch,
}) => (
  <CarrinhoStyle>
    <Text>Pedido:</Text>
    {
      carrinho.pedidos.list.map(pedido => (
        <View key={pedido.pedidoId}>
          <ListItem
            title={pedido.nome}
            subtitle={pedido.descricao}
            badge={{ value: pedido.valor, textStyle: { color: 'white' }, containerStyle: { marginTop: 10 } }}
          />
          <Divider key={pedido.id} style={{ backgroundColor: 'red' }} />
        </View>
      ))
    }
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
          value={JSON.stringify(pg)}
        />
      ))}
    </Picker>
    {
      carrinho.formaPg.indexOf('Dinheiro') !== -1 && (
        <View>
          <Input
            placeholder="Troco para quanto"
            value={carrinho.troco}
            onChange={(e) => setTrocoDispatch(e.nativeEvent.text)}
            />
          <Text>Troco para R$: {carrinho.troco}</Text>
        </View>
      )
    }
  </CarrinhoStyle>
);

export default BotaoCarrinho;
