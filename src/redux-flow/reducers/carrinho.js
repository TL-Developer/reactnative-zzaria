const initialState = {
  pizzas: {
    list: [
      {
        name: 'calabresa',
        description: 'mussarela e calabresa',
        valor: 25.50,
      }
    ],
    total: 100,
  },
  brotos: {
    list: [],
    total: 100,
  },
  esfihas: {
    list: [],
    total: 100,
  },
  beirutes: {
    list: [],
    total: 100,
  },
  bebidas: {
    list: [],
    total: 100,
  },
  pagamento: 'dinheiro',
  total: 100.50,
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
