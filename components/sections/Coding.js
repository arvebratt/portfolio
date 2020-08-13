import styled, { keyframes } from 'styled-components';
import { Container, Grid, Paper, Box } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { Title, UnderTitle, CodingCard, CodingCardText } from '../Builders';

export const Coding = () => {
    return (
        <StyledBox width='90%'>
            <Grid container spacing={1}>
                <Grid item xs={12} fullWidth>
                    <UnderTitle>Coding</UnderTitle>
                </Grid>

                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardText>
                            <p>hejhej</p>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardText>
                            <p>hejhej</p>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardText>
                            <p>hejhej</p>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
                <Grid item xs={8} fullWidth>
                    <CodingCard>
                        <CodingCardText>
                            <p>hejhej</p>
                        </CodingCardText>
                    </CodingCard>
                </Grid>
                <Grid item xs={4} fullWidth>
                    <CodingCard>
                        <CodingCardText>
                            <p>hejhej</p>
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
