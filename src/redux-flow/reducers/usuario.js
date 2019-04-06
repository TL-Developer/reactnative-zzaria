const initialState = {
  nome: 'tiago juvenal de lima',
  telefones: {
    fixo: '11-25855522',
    celular: '11-958995522',
  },
  token: 'eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg',
  avatar: 'url',
  genero: 'masculino',
  dataNascimento: '11/11/1989',
  cpf: '37284575824',
  email: 'tiago.lima.developer@gmail.com',
  endereco: {
    bairro: {
      _id: 108,
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
