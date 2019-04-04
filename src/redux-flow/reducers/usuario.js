const initialState = {
  nome: 'tiago juvenal de lima',
  telefones: {
    fixo: '991153573',
    celular: '991153573',
  },
  avatar: 'url',
  genero: 'masculino',
  dataNascimento: '11/11/1989',
  cpf: '37284575824',
  email: 'tiago.lima.developer@gmail.com',
  endereco: {
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
  }
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
