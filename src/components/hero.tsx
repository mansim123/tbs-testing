import * as React from "react";
import "../css/style.scss";
import { Container, Button } from "@mui/material";
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
            className="heroImage0"
            src="../images/heroImage0.jpg"
            alt="Hero Eyes"
            placeholder="blurred"
          />
        </div>

        <div style={{ placeItems: "center", display: "grid", }}>
          <StaticImage
            className="heroImageFiller"
            src="../images/heroImageFiller.jpg"
            alt="Background Fizz"
            placeholder="blurred"
          />
          <div className="heroCopyContainer">
            <div className="heroCopyBlack">
              <h1>Be Seen.Be Heard </h1>
            </div>
            <h2>
              Promoting youth participation<br></br> and amplifying young
              <br></br> voices in public life{" "}
            </h2>
            <div className="pad-top-1rem" style={{ placeItems: "center", display: "grid", }}>
              <ThemeProvider theme={theme}>
                <Button target="_blank" href="https://www.google.co.uk" variant="contained" color="primary" disableElevation>Download the full report</Button>
              </ThemeProvider>
              </div>
          </div>
              
        </div>

        <div style={{ placeItems: "center", display: "grid", }}>
          <StaticImage
            className="heroImage1"
            src="../images/heroImage1.jpg"
            alt="Hero Mouth"
            placeholder="blurred"
          />
        </div>

        <Container className="heroContainer" sx={{maxWidth:'1440px;'}} maxWidth={false} disableGutters={true} >
        <div style={{ placeItems: "center", display: "grid", }}>
            <div className="heroSubCopyContainer">
              <h3>
                Young People Are Missing From Public Life,<br></br>
                they need to Be Seen and Be Heard
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
