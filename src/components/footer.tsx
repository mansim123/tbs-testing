import * as React from "react";
import "../css/style.scss";
import { Container, Grid } from "@mui/material";

const FooterSection = () => {
  return (
    <main className="pad-top-3rem">
      <Container className="footerContainer" maxWidth={false}>
      <Container className="" sx={{ maxWidth: '1000px;' }} maxWidth={false} disableGutters={true}>
      <Grid className="pad-top-1rem" container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
              <p className=""><b>Link category title</b></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">External link to The UN #1</a></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">External link to The UN #2</a></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">External link to The UN #3</a></p>
          </Grid>
          <Grid item xs={12} sm={4}>
              <p className=""><b>Link category title</b></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">External link to The UN #1</a></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">External link to The UN #2</a></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">External link to The UN #3</a></p>
          </Grid>
          <Grid item xs={12} sm={4}>
              <p className=""><b>Link category title</b></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">Privacy  Policy</a></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">Terms of Use</a></p>
              <p className=""><a href="https://www.google.co.uk" target="_blank">Cookie policy</a></p>
          </Grid>
        </Grid>
      </Container>
      <Container className=" pad-top-1rem" sx={{ maxWidth: '1220px;' }} maxWidth={false} disableGutters={true}>
            <hr></hr>
      </Container>
      <Container className="termsCopy pad-top-1rem" sx={{ maxWidth: '1220px;' }} maxWidth={false} disableGutters={true}>
            <p>© 2022 The Body Shop International Limited</p>
            <p>Registered office: Watersmead, Littlehampton, West Sussex, BN17 6LS, United Kingdom; registered in England no. 1284170</p>
      </Container>
      </Container>
    </main>
  );
};

export default FooterSection;
