const initialState = {
  loading: false,
  list: [
    {
      _id: Math.floor(Math.random(10) * 100),
      nome: 'Selecione',
    },
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
