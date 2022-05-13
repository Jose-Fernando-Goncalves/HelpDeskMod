import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Background = styled.View`
 width: ${Dimensions.get('window').width}px;
 height: ${Dimensions.get('window').height}px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const AddButtonView = styled.View`
  left: 90%;
`;

export const BackText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-self: center;
`;