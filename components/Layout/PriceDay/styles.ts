import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 20%;
  margin-top: 20px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.View`

`;

export const Edit = styled.View`
  width: 30px;
  height: 30px;
  background-color:${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -14px;
  left: 45%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  left: 30%;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding-left: 14px;
  top: -10px;

`;
