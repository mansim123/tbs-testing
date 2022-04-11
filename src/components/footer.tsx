import * as React from "react";
import "../css/style.scss";
import { Container, Grid } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const FooterSection = () => {
  return (
    <main className=" pad-top-3rem">
      <Container className="headerContainer" maxWidth={false}>
      <Container className="introContainer" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
      <Grid className="pad-top-3rem" container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <div className="mainCopyBlack">
              <h1 className="firstStat">76%</h1>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mainCopyBlack">
              <h1 className="secondStat">69%</h1>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mainCopyBlack">
              <h1 className="thirdStat">8 in 10</h1>
            </div>
          </Grid>
        </Grid>
      </Container>
      
      </Container>
    </main>
  );
};

export default FooterSection;
