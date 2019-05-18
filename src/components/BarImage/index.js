import React, { Component } from 'react';
import styled from 'styled-components/native';

import { View, Image } from 'react-native';

const BarImageStyled = styled.View`
  flex-direction: row;
`;

const BarImage = () => (
  <BarImageStyled>
    <Image
      source={{
        uri:
          'https://raw.githubusercontent.com/TL-Developer/napoles/master/public/images/topo/bg_mascote.png',
      }}
      style={{
        width: 45,
        height: 45,
        marginLeft: 15,
      }}
    />
  </BarImageStyled>
);

export default BarImage;
