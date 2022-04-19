import * as React from "react";
import "../css/style.scss";
import { Container, Button, Grid } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ebbede',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },  
});

const HeroSection = () => {
  return (
    <main>
      <Container className="heroContainer" maxWidth={false}>
        <div style={{ placeItems: "center", display: "grid", }}>
          <StaticImage
            className="heroImage0 hideMobile"
            src="../images/heroImage0.jpg"
            alt="Hero Eyes"
            placeholder="blurred"
          />
          <StaticImage
            className="heroImage0 hideDesktop"
            src="../images/heroImage0-m.jpg"
            alt="Hero Eyes"
            placeholder="blurred"
          />
        </div>

        <div style={{ placeItems: "center", display: "grid", }}>
          {/* <StaticImage
            className="heroImageFiller hideMobile"
            src="../images/heroImageFiller.jpg"
            alt="Background Fizz"
            placeholder="blurred"
          /> */}
          {/* <StaticImage
            className="heroImageFiller hideDesktop"
            src="../images/heroImageFiller-m.jpg"
            alt="Background Fizz"
            placeholder="blurred"
          /> */}
          <Container className="heroCopyContainerBg" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
            <Container className="heroCopyContainer" sx={{ maxWidth: '830px;' }} maxWidth={false} disableGutters={true}>
              <Grid container spacing={0} alignItems="center">
                
                <Grid item xs={12} sm={6}>
                <div className="heroCopyBlack">
                  <h1 className="heroCopyBlackLeft">Be Seen.</h1>
                </div>
                </Grid>
                <Grid className="pad-top-05rem-mob" item xs={12} sm={6}>
                <div className="heroCopyBlack">
                  <h1 className="heroCopyBlackRight">Be Heard</h1>
                </div>
                </Grid>
              </Grid>
              <h2 className="">
                Promoting youth participation<br className="hideMobile"></br> and amplifying young
                <br className="hideMobile"></br> voices in public life{" "}
              </h2>
              <div className="pad-top-1rem removeDivCenterStyle pad-top-2rem-mob" style={{ placeItems: "center", display: "grid", }}>
                <ThemeProvider theme={theme}>
                  <Button className="heroButton" target="_blank" href="https://www.google.co.uk" variant="contained" color="primary" disableElevation>Download the full report</Button>
                </ThemeProvider>
                </div>
            </Container>
          </Container>
              
        </div>

        <div style={{ placeItems: "center", display: "grid", }}>
          <StaticImage
            className="heroImage1 hideMobile"
            src="../images/heroImage1.jpg"
            alt="Hero Mouth"
            placeholder="blurred"
          />
          <StaticImage
            className="heroImage1 hideDesktop"
            src="../images/heroImage1-m.jpg"
            alt="Hero Mouth"
            placeholder="blurred"
          />
        </div>

        <Container className="heroContainer" sx={{maxWidth:'1440px;'}} maxWidth={false} disableGutters={true} >
        <div style={{ placeItems: "center", display: "grid", }}>
            <div className="heroSubCopyContainer">
              <h3>
                Young people are missing from public life, <br className="hideMobile"></br>
                they need to be seen and be heard
              </h3>
              <p>
              Every day, policy-makers around the world make important decisions about the future of our communities, countries and even our planet. Yet
              young people continue to be routinely excluded from these decision-making spaces, despite being the generation that will disproportionately
              inherit the consequences of the choices we make today. While nearly half of the world's population is under 30, only 2.8% of parliamentarians
              are under 30 and the average age of our political leaders is 62.  
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </main>
  );
};

export default HeroSection;
