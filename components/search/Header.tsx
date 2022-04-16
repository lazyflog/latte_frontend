import React, {useRef} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  padding: 5px;
  justify-content: center;
  align-items: flex-start;
`;
const SearchContainer = styled.View`
  border: 5px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 5px;
  flex: 1;
`;

const Header: React.FC = () => {
  const searchRef = useRef<TextInput | null>(null);
  const SearchHandler = () => {
    searchRef.current?.focus();
  };
  return (
    <Container>
      <SearchContainer>
        <Button onPress={SearchHandler}>
          <TextInput
            placeholder="지역명/카페명 입력"
            ref={searchRef}
            autoFocus={true}
          />
        </Button>
      </SearchContainer>
    </Container>
  );
};

export default Header;
