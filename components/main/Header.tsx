import React from 'react';
import styled from 'styled-components/native';
import Logo from '../../assets/Logo.svg';
import SearchIcon from '../../assets/SearchIcon.svg';
import {LightTheme} from '../../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import useTheme from '../../hooks/ui/useTheme';

const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

type RootStackParamList = {
  Main: undefined;
  Search: undefined;
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type Props = {navigation: MainScreenNavigationProp};

const Button = styled.TouchableOpacity`
  padding: 5px;
`;
const Header: React.FC<Props> = props => {
  const theme = useTheme();

  return (
    <Container>
      <Logo fill={theme.colors.text} />
      <Button
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={() => {
          props.navigation.navigate('Search');
        }}>
        <SearchIcon fill={theme.colors.text} />
      </Button>
    </Container>
  );
};

export default Header;
