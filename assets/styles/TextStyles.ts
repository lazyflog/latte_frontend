import styled from 'styled-components/native';
import { Themes } from '../../styles';

export const MainText = styled.Text<{theme: Themes}>`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text};
  padding: 15px;
`;

export const MainImageText = styled.Text`
font-weight: 700;
color: #fff;
font-size: 16px;
position: absolute;
bottom: 0;
padding: 10px;

elevation: 8;
shadow-color: #333;
shadow-offset: 0px 0px;
shadow-opacity: 0.5;
shadow-radius: 2px;
`;