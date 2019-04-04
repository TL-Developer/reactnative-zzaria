const initialState = {
  bairro: {
    _id: 142,
    nome: 'jd. Noemia',
    valor: '2,00'
  },
  cep: '08081-570',
  cidade: 'São Paulo',
  uf: 'SP',
  endereco: 'Rua Borboleta Amarela',
  numero: '45',
  referencia: 'aaaaa',
  complemento: 'casa',
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
