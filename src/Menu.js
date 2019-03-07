import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Pizzas from 'containers/Pizzas';

export default createDrawerNavigator({
  Pizzas: {
    screen: () => <Pizzas />,
    navigationOptions: {
      title: 'Pizzas',
    },
  },
}, {
  drawerWidth: 300,
});
