import {MainText} from '../assets/styles/TextStyles';
import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/search/Header';
import {Keyboard} from 'react-native';

const SearchView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
const KeyboardView = styled.TouchableWithoutFeedback`
  flex: 1;
`;

const Search: React.FC = () => {
  return (
    <KeyboardView onPress={Keyboard.dismiss}>
      <SearchView>
        <Header />
      </SearchView>
    </KeyboardView>
  );
};

export default Search;
