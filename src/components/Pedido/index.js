import React, { PureComponent } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, Picker, TextInput } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    } = this.props;

    navigation.navigate('Home');
  }

  render() {
    const {
      pedido,
    } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Text>{JSON.stringify(pedido)}</Text>

        {(pedido.type === 'pizza' || pedido.type === 'brotos' || pedido.type === 'esfihas') && (
          <Picker
            style={{
              height: 50,
              width: 400,
            }}
            selectedValue={pedido.borda}
            onValueChange={(value) => this.handleBorda(value)}
          >
            <Picker.Item
              label="Sem"
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
        )
        }

        <Text>Observações</Text>
        <TextInput
          multiline={true}
          numberOfLines={6}
          placeholder="Ex: sem cebola..."
        />

        <Text>Quantidade: { pedido.quantidade }</Text>
        <Button
          disabled={pedido.quantidade === 1}
          icon={
            <Icon
              name="minus"
              size={15}
              color="white"
            />
          }
          onPress={() => this.handleQuantidade('minus')}
        />
        <Button
          icon={
            <Icon
              name="plus"
              size={15}
              color="white"
            />
          }
          onPress={() => this.handleQuantidade('plus')}
        />

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
      </ScrollView>
    );
  }
}

export default Pedido;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
