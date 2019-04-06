import axios from "axios";
import {
  URI,
  NAMESPACE
} from './env';

const request = axios.create({
  baseURL: URI + NAMESPACE,
});

//request.defaults.headers.common["Authorization"] = 'eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg'

export default request;
