const initialState = {
  loading: false,
  list: [
    {
      _id: 0,
      nome: 'Pizzas',
      icon: 'timer',
    },
    {
      _id: 1,
      nome: 'Brotos',
      icon: 'timer',
    },
    {
      _id: 2,
      nome: 'Esfihas',
      icon: 'timer',
    },
    {
      _id: 3,
      nome: 'Beirutes',
      icon: 'timer',
    },
    {
      _id: 4,
      nome: 'Bebidas',
      icon: 'timer',
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
