const initialState = {
  bairro: 'JD São martinho',
  lagrodouro: 'Rua borboleta amarela',
  numero: '57',
  cep: '08081-570',
  complemento: 'casa',
  referencia: 'perto do instituto alana',
  cidade: 'sao paulo',
  uf: 'SP',
  valor: 8.00,
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
