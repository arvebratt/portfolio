import styled, { keyframes } from 'styled-components';
import { Grid, Box } from '@material-ui/core';
import {
    Title,
    UnderTitle,
    CodingCard,
    CodingCardText,
    CodingCardImage,
    StyledText,
} from '../Builders';

export const Coding = () => {
    return (
        <StyledBox width='90%'>
            <Grid container spacing={1}>
                <Grid item xs={12} fullWidth>
                    <UnderTitle>Coding</UnderTitle>
                </Grid>

                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardImage src='/helenhansson.png'></CodingCardImage>
                        <CodingCardText>
                            <UnderTitle>hejhej</UnderTitle>
                            <StyledText>hej igen</StyledText>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardImage src='/teknikfokus.jpg'></CodingCardImage>
                        <CodingCardText>
                            <UnderTitle>hejhej</UnderTitle>
                            <StyledText>hej igen</StyledText>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardImage src='/portfolio.png'></CodingCardImage>
                        <CodingCardText>
                            <UnderTitle>hejhej</UnderTitle>
                            <StyledText>hej igen</StyledText>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default Coding;

const StyledBox = styled(Box)`
    margin: auto;
`;
