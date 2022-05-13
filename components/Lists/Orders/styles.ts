import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 44px;   
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Pesquisa = styled.View`
  flex-direction: row;
  justify-content: space-between;

`;

export const SearchButton = styled.TouchableOpacity`


`;

export const Search = styled.TextInput`
  width: 88%;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
`;
export const SearchContainer = styled.View`
  width: 50%;
  border-radius: 20px;
  height: 34px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 14px;
  padding: 8px;
  font-size: 12px;
  flex-direction: row;
  align-items: center;
`;

export const AddVenda = styled.View`
  width: 80px;
  height: 80px;
  bottom: 17px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 12px;
`;

export const Counter = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  margin-bottom: 12px;
`;

