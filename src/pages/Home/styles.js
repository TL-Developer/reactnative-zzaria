import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ContainerStyled = styled.ScrollView`
  display: flex;
  background: #831e10;
  flex-direction: column;
  height: ${Math.round(Dimensions.get('window').height)}px;
`;
