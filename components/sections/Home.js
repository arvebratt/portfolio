import styled, { keyframes } from 'styled-components';
import { Container, Grid, Paper } from '@material-ui/core';
import { Title, UnderTitle } from '../Builders';

const Home = () => {
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12} fullWidth>
                    <Title>Alexander Arvebratt</Title>
                    <UnderTitle>Personal portfolio</UnderTitle>
                </Grid>

                <Grid item xs={12} fullWidth>
                    <a>
                        <StyledSpan></StyledSpan>
                        <StyledSpan></StyledSpan>
                        <StyledSpan></StyledSpan>
                    </a>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;

const animation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }

`;

const StyledSpan = styled.span`
    position: absolute;
    width: 24px;
    height: 24px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    animation: ${animation} 2s infinite;
    opacity: 0;
    box-sizing: border-box;

    &:nth-of-type(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    &:nth-of-type(2) {
        margin-top: 1rem;
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
    }

    &:nth-of-type(3) {
        margin-top: 2rem;
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
`;
