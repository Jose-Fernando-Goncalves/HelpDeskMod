import styled, {css} from 'styled-components/native';


export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 10px;
`;

export const Placeholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 1px dashed ${({ theme }) => theme.COLORS.SUBTEXT};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const PlaceholderTitle = styled.Text`
    font-size: 14px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;