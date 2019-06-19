import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';

export const ContainerStyled = styled.ScrollView`
  display: flex;
`;

export const ListItemStyled = styled(ListItem)`
  background: #fff;
`;

export const ItemStyled = styled.View`
  display: flex;
  padding: 5px 0;
  margin: 2px 0;
  background: #fff;
`;
