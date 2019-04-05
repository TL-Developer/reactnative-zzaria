import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

import { Platform, View, ScrollView, Text, Picker } from 'react-native';
import { ListItem, Button, Input, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScrollViewContainer = styled.View`
  flex: 1;
`;

const ActionsStyle = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center
`

const PedidoStyle = styled.View`
  margin: 5px;
`;

const PedidoTitleStyle = styled.Text`
  font-size: 20px;
`;

const PedidoDescriptionStyle = styled.Text`
  font-size: 14px;
`;

const PedidoValorStyle = styled.Text`
  font-size: 22px;
  color: red;
`;

class Pedido extends PureComponent {
  state = {
    pedido: {
      borda: 'Sem',
      quantidade: 1,
    },
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      navigation,
    } = this.props;

    this.setState(state => ({
      ...state,
      pedido: {
        ...state.pedido,
        ...navigation.state.params.pedido,
      },
    }));
  }

  handleQuantidade = (type) => {
    const {
      pedido,
    } = this.state;

    if (type === 'plus') {
      this.setState(state => ({
        ...state,
        pedido: {
          ...state.pedido,
          quantidade: state.pedido.quantidade += 1,
        },
      }));
    } else if (type === 'minus' && pedido.quantidade > 1) {
      this.setState(state => ({
        ...state,
        pedido: {
          ...state.pedido,
          quantidade: state.pedido.quantidade -= 1,
        },
      }));
    }
  }

  handleBorda = (value) => {
    this.setState(state => ({
      ...state,
      pedido: {
        ...state.pedido,
        borda: value,
      },
    }));
  }

  handleAddAoCarrinho = () => {
    const {
      navigation,
      addAoCarrinhoDispatch,
    } = this.props;

    const {
      pedido,
    } = this.state;

    addAoCarrinhoDispatch(pedido);

    navigation.navigate('Home');
  }

  render() {
    const {
      pedido,
    } = this.state;

    return (
      <ScrollViewContainer>
        <PedidoStyle>
          <PedidoTitleStyle>{ pedido.nome }</PedidoTitleStyle>
          <PedidoDescriptionStyle>{ pedido.descricao }</PedidoDescriptionStyle>
          <PedidoValorStyle>{ pedido.valor }</PedidoValorStyle>
        </PedidoStyle>

        <Divider style={{ backgroundColor: 'red' }} />

        <View>
          {(pedido.type === 'pizza' || pedido.type === 'brotos' || pedido.type === 'esfihas') && (
            <View>
              <Text>Selecione a borda</Text>
              <Picker
                style={{
                  height: 50,
                  width: 400,
                }}
                selectedValue={pedido.borda}
                onValueChange={(value) => this.handleBorda(value)}
              >
                <Picker.Item
                  label="Sem borda"
                  value="Sem borda"
                />
                <Picker.Item
                  label="Catupiry"
                  value="Catupiry"
                />
                <Picker.Item
                  label="Doce"
                  value="Doce"
                />
              </Picker>
            </View>
            )
            }

          <Text>Observações</Text>
          <Input
            placeholder="Ex. sem cebola..."
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
        </View>

        <ActionsStyle>
          <View>
            <Button
              disabled={pedido.quantidade === 1}
              icon={
                <Icon
                  name="minus"
                  size={15}
                  color="blue"
                />
              }
              type="clear"
              onPress={() => this.handleQuantidade('minus')}
            />
            <Text>Quantidade: { pedido.quantidade }</Text>
            <Button
              icon={
                <Icon
                  name="plus"
                  size={15}
                  color="blue"
                />
              }
              type="clear"
              onPress={() => this.handleQuantidade('plus')}
            />
          </View>

          <View>
            <Button
              icon={
                <Icon
                  name="shopping-cart"
                  size={15}
                  color="white"
                />
              }
              title=" Adicionar ao carritinho"
              onPress={() => this.handleAddAoCarrinho()}
            />
          </View>
        </ActionsStyle>
      </ScrollViewContainer>
    );
  }
}

export default Pedido;
