const initialState = {
  loading: false,
  list: [
    {
      _id: 135,
      nome: 'Dinheiro',
    },
    {
      _id: 123,
      nome: 'Cartao de crédito',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CASE':
      return {
        ...state,
        pizzasSalgadas: {
          ...state.pizzasSalgadas,
          list: action.payload
        }
      }

    default:
      return state;
  }
};

export default reducer;
