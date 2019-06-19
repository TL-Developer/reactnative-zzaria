const initialState = {
  loading: false,
  list: [
    {
      _id: 0,
      nome: 'Pizzas',
      icon: 'keyboard-arrow-right',
    },
    {
      _id: 1,
      nome: 'Brotos',
      icon: 'keyboard-arrow-right',
    },
    {
      _id: 2,
      nome: 'Esfihas',
      icon: 'keyboard-arrow-right',
    },
    {
      _id: 3,
      nome: 'Beirutes',
      icon: 'keyboard-arrow-right',
    },
    {
      _id: 4,
      nome: 'Bebidas',
      icon: 'keyboard-arrow-right',
    }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CASE':
      return {
        ...state,
      }

    default:
      return state;
  }
};

export default reducer;
