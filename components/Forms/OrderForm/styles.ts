import styled from 'styled-components/native';


export const Form = styled.View`
  width: 100%;
  align-items: center;
`;


export const ImgButton = styled.TouchableOpacity`

`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 24px;
  align-self: center;
`;


