const initialState = {
  nome: 'tiago juvenal de lima',
  telefone: '991153573',
  celular: '991153573',
  avatar: 'url',
  genero: 'masculino',
  dataNascimento: '11/11/1989',
  cpf: '37284575824',
  email: 'tiago.lima.developer@gmail.com'
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
