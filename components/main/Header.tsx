import React from 'react';
import styled from 'styled-components/native';
import Logo from '../../assets/Logo.svg';
import SearchIcon from '../../assets/SearchIcon.svg';
import {LightTheme} from '../../styles';

const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  padding: 5px;
`;

const Header: React.FC = props => {
  return (
    <Container>
      <Logo />
      <Button
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={() => {
          props.navigation.navigate('Search');
        }}>
        <SearchIcon />
      </Button>
    </Container>
  );
};

export default Header;
