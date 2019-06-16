import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const PizzaSalgadaMeioaMeio = ({
  navigation,
  loading,
  pizzas,
}) => (
  <ScrollView>
    {pizzas.length > 0 && (
      pizzas.map(pizza => (
        <View key={pizza._id}>
          <ListItem
            title={pizza.nome}
            subtitle={pizza.descricao}
            badge={{ value: pizza.valorGrande, textStyle: { color: 'white' }, containerStyle: { marginTop: 10 } }}
            onPress={() => navigation.push('Pedido', {
              pedido: {
                pedidoId: pizza._id,
                nome: pizza.nome,
                descricao: pizza.descricao,
                valor: parseInt(pizza.valorGrande),
                type: 'pizza',
              },
            })}
          />
          <Divider key={pizza.id} style={{ backgroundColor: 'red' }} />
        </View>
      ))
    )
    }

    {(pizzas.length === 0 && !loading) &&
      <Text>Não temos pizzas.</Text>
    }
  </ScrollView>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default PizzaSalgadaMeioaMeio;
