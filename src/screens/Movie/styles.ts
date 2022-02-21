import { LinearGradient } from "expo-linear-gradient";
import styled, { css } from "styled-components/native";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    //colors: theme.COLORS.GRADIENT,
    colors: [theme.COLORS.BACKGROUND, theme.COLORS.BACKGROUND],
    start: { x: 0, y: 0},
    end: { x: 0, y: 1.5},
}))`
    flex: 1;
`;

export const BackDropImage = styled.Image`
    width: 100%;
    height: 400px;
`
export const ImagePoster = styled.Image`
    width: 180px;
    height: 270px;
    border-radius: 8px;
    margin-left: 21px;
    margin-top: -250px;
    border-width: 3px;
    

    ${({ theme }) => css`
        border-color: ${theme.COLORS.SHAPE};
    `};

`;

export const InformationContainer = styled.View`
    justify-content: space-between;
    align-items: baseline;
    margin: 10px 8px 0;
`

export const TitleText = styled.Text`
    font-size: 30px;
    margin: 20px 21px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.PRIMARY_900}
    `};
`;
export const Description = styled.Text`
    font-size: 16px;
    line-height: 20px;
    margin: 20px 21px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.PRIMARY_800};
    `};
`;

export const AditionalDescription = styled.Text`
    font-size: 16px;    
    margin: 20px 21px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.SECONDARY_400};
    `};
`;
