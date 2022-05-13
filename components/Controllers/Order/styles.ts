import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export type OrderStyleProps = {
  status: 'open' | 'closed';
};

export const Container = styled.View`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Background = styled.View`
 width: ${Dimensions.get('window').width}px;
 height: ${Dimensions.get('window').height}px;
`;

export const Desc = styled.Text`
  color:${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const Placeholder = styled.Image`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
  margin-right: 10px;
`;

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<OrderStyleProps>`
  width: 10px;
  height: 94px;
  background-color: ${({ theme, status }) => status === 'open' ? theme.COLORS.SECONDARY : theme.COLORS.DANGER};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BackText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-self: center;
`;


export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.PRICE};  
  margin-left: 3px;
`;