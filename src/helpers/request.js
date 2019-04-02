import axios from "axios";

const request = axios.create({
  baseURL: 'https://napoles-pizzaria.herokuapp.com/api/produtos/'
});

//request.defaults.headers.common["Authorization"] = 'eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg'

export default request;
