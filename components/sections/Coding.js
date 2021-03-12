import styled, { keyframes } from "styled-components";
import { Grid, Box } from "@material-ui/core";
import {
  Title,
  UnderTitle,
  CodingCard,
  CodingCardBig,
  CodingCardText,
  CodingCardImage,
  StyledText,
  Link,
} from "../Builders";

export const Coding = () => {
  return (
    <StyledBox width="90%">
      <Grid container spacing={1}>
        <Grid item xs={12} fullWidth>
          <UnderTitle>Projects</UnderTitle>
        </Grid>

        <Grid item xs={12} fullWidth>
          <TFcard>
            <Grid container spacing={0} direction="row" alignItems="stretch">
              <Grid item xs={4} fullWidth>
                <TFlogo src="/teknikfokuslogo.png"></TFlogo>
              </Grid>
              <Grid item xs={1} fullWidth></Grid>
              <Grid item xs={7} fullWidth>
                <StyledCardTitle>Teknikfokus Website</StyledCardTitle>
                <StyledCardText>
                  Website for Teknikfokus whish is a career fair arranged by
                  students in the E and D-guilds at Lunds Tekniska Högskola.
                </StyledCardText>
                <LinkSource href="https://www.teknikfokus.se/">
                  View Website
                </LinkSource>
              </Grid>
            </Grid>
          </TFcard>
        </Grid>

        <Grid item xs={6} fullWidth>
          <Haponomcard>
            <Grid container spacing={0}>
              <Grid item xs={6} fullWidth>
                <Haplogo src="/haponom.png"></Haplogo>
              </Grid>
              <Grid item xs={6} fullWidth>
                <StyledCardTitle>Metronome App</StyledCardTitle>
                <StyledCardText>
                  Android app using advanced interaction features to control
                  metronome.
                </StyledCardText>
                <LinkSource href="https://github.com/niklashedstrom/haponom">
                  View Sourcecode
                </LinkSource>
              </Grid>
            </Grid>
          </Haponomcard>
        </Grid>

        <Grid item xs={6} fullWidth>
          <Grid container spacing={1}>
            <Grid item xs={12} fullWidth>
              <NewPortfoliocard>
                <StyledSmallCardTitle>This Portfolio</StyledSmallCardTitle>
                <StyledSmallCardText>
                  Serverside rendered website written in React using
                  Styled-Components.
                </StyledSmallCardText>
                <LinkSource href="https://github.com/arvebratt/portfolio">
                  View Source
                </LinkSource>
              </NewPortfoliocard>
            </Grid>

            <Grid item xs={12} fullWidth>
              <OldPortfoliocard>
                <StyledSmallCardTitle>Old Portfolio</StyledSmallCardTitle>
                <StyledSmallCardText>
                  Pure CSS and HTML website.
                </StyledSmallCardText>
                <LinkSource href="https://arvebratt.com/">
                  View Website
                </LinkSource>{" "}
                <LinkSource href="https://github.com/arvebratt/arvebratt.github.io">
                  View Source
                </LinkSource>
              </OldPortfoliocard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default Coding;

const StyledBox = styled(Box)`
  margin: auto;
`;

const TFlogo = styled.img`
  margin-left: 10%;
  margin-top: 15%;
  max-width: 100%;
`;

const Haplogo = styled.img`
  max-width: 100%;
`;

const StyledCardTitle = styled.p`
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: #fffafa;
  font-size: 4rem;
`;

const StyledCardText = styled.p`
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: #fffafa;
  font-size: 2rem;
`;

const StyledSmallCardTitle = styled.p`
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: #fffafa;
  font-size: 3rem;
`;

const StyledSmallCardText = styled.p`
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: #fffafa;
  font-size: 1.6rem;
`;

const TFcard = styled.div`
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  color: black;
  background-color: #2b343b;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

const Haponomcard = styled.div`
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  color: black;
  background-color: #4c9eb1;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

const OldPortfoliocard = styled.div`
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  color: black;
  background-color: #f2b6a0;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

const NewPortfoliocard = styled.div`
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  color: black;
  background-color: #bfc9a8;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

const LinkSource = styled.a`
  margin-top: 0rem;
  color: #fffafa;
  font-size: 1rem;
`;
