import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';

export const ContainerStyled = styled.ScrollView`
  display: flex;
`;

export const ListItemStyled = styled(ListItem)`
  margin: 1px 0;
  background: #ccc;
`;
