const initialState = {
  loading: false,
  list: [
    {
      _id: 0,
      nome: 'Pizzas',
      icon: 'pizza',
    },
    {
      _id: 1,
      nome: 'Brotos',
      icon: 'pizza_slice',
    },
    {
      _id: 2,
      nome: 'Esfihas',
      icon: 'pizza_slice',
    },
    {
      _id: 3,
      nome: 'Beirutes',
      icon: 'pizza_slice',
    },
    {
      _id: 4,
      nome: 'Bebidas',
      icon: 'pizza_slice',
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
