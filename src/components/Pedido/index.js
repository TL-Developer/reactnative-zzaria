import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

import { Platform, View, ScrollView, Text, Picker } from 'react-native';
import { ListItem, Button, Input, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScrollViewContainer = styled.View`
  flex: 1;
  background: #fff;
`;

const PedidoStyle = styled.View`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const PedidoTitleStyle = styled.Text`
  font-size: 20px;
  flex: 1;
  padding: 5px;
`;

const PedidoDescriptionStyle = styled.Text`
  font-size: 14px;
  flex: 2;
  padding: 5px;
`;

const PedidoValorStyle = styled.Text`
  font-size: 22px;
  color: red;
  flex: 1;
  padding: 5px;
`;

const PedidoBordaStyle = styled.View`
  font-size: 14px;
  flex: 1;
  padding: 5px;
`;

const PedidoObservacoesStyle = styled.View`
  font-size: 14px;
  flex: 1;
  padding: 5px;
`;

const PedidoActionsStyle = styled.View`
  display: flex;
`;

const PedidoActionsQuantidadeStyle = styled.View`
  font-size: 14px;
`;

const PedidoActionsBtnAdicionarStyle = styled.View`
  font-size: 14px;
`;

class Pedido extends PureComponent {
  state = {
    pedido: {
      borda: 'Sem',
      qtd: 1,
      observacoes: '',
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
          qtd: state.pedido.qtd += 1,
        },
      }));
    } else if (type === 'minus' && pedido.qtd > 1) {
      this.setState(state => ({
        ...state,
        pedido: {
          ...state.pedido,
          qtd: state.pedido.qtd -= 1,
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
      somaValorPedidosDispatch,
    } = this.props;

    const {
      pedido,
    } = this.state;

    addAoCarrinhoDispatch(pedido);
    somaValorPedidosDispatch();

    navigation.navigate('Home');
  }

  handleObservacoes = (value) => {
    this.setState(state => ({
      ...state,
      pedido: {
        ...state.pedido,
        observacoes: value,
      },
    }));
  };

  render() {
    const {
      pedido,
    } = this.state;

    return (
      <ScrollViewContainer>
        <PedidoStyle>
          <PedidoTitleStyle>{ pedido.nome }</PedidoTitleStyle>
          <PedidoDescriptionStyle>{ pedido.descricao }</PedidoDescriptionStyle>
          <PedidoValorStyle>R${ parseFloat(pedido.valor).toFixed(2) }</PedidoValorStyle>
          <Divider style={{ backgroundColor: '#ccc' }} />
          <PedidoBordaStyle>
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
          </PedidoBordaStyle>
          <Divider style={{ backgroundColor: '#ccc' }} />
          <PedidoObservacoesStyle>
            <Text>Observações</Text>
            <Input
              onChangeText={(value) => this.handleObservacoes(value)}
              placeholder="Ex. sem cebola..."
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />
          </PedidoObservacoesStyle>
          <PedidoActionsStyle>
            <PedidoActionsQuantidadeStyle>
              <Button
                disabled={pedido.qtd === 1}
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
              <Text>Quantidade: {pedido.qtd}</Text>
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
            </PedidoActionsQuantidadeStyle>

            <PedidoActionsBtnAdicionarStyle>
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
            </PedidoActionsBtnAdicionarStyle>
          </PedidoActionsStyle>
        </PedidoStyle>
      </ScrollViewContainer>
    );
  }
}

export default Pedido;
