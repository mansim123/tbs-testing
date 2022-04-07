import * as React from "react";
import "../css/style.scss";
import { Container, Grid } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const MainSection = () => {
  return (
    <main>
      <Container className="introContainer" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={7}>
          <Container className="introContainer" sx={{ maxWidth: '680px;' }} maxWidth={false} disableGutters={true}>
            <p className="introCopy">
              Young people have the right to be included in political decision-making. The Be
              Seen. Be Heard campaign recognizes at its core that young people have a vital
              role to play in the decisions that affect us all. As escalating global conflict, the
              ongoing climate crisis and worsening socio-economic issues continue to
              plague our world, we increasingly need fresh perspectives to guide
              transformative political decision-making that breaks beyond the status quo.
              <br></br><br></br>
              That is why The Body Shop and the Office of the United Nations
              Secretary-General's Envoy on Youth have joined forces on a global campaign to
              support young people's political participation and amplify young voices in
              public life.
            </p>
          </Container>
          </Grid>
          <Grid item xs={5}>
            <StaticImage
              className="introImage0"
              src="../images/introImage0.jpg"
              alt="Intro image"
              placeholder="blurred"
            />
          </Grid>
        </Grid>
      </Container>
      <Container className="introContainer" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
      <div className="pad-top-3rem" style={{ placeItems: "center", display: "grid", }}>
          <StaticImage
            className="introImage1"
            src="../images/introImage1.jpg"
            alt="Intro image 1"
            placeholder="blurred"
          />
        </div>
      </Container>
      <Container className="pad-top-1rem" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
          <Container className="introContainer" sx={{ maxWidth: '810px;' }} maxWidth={false} disableGutters={true}>
            <h3>
              Young People’s Political<br></br>
              Participation
            </h3>
            <p className="introCopy">
              Too often, young people are misunderstood as being apathetic or uninterested in civic, social
              and political issues. Yet even in the face of adversity and facing structural barriers, young
              people are continually stepping up as advocates, entrepreneurs and innovators who are leading
              change in their communities and holding decision-makers to account. Young people’s actions and
              unapologetic advocacy have moved the dial on diverse political issues, from climate change and
              mental health, to corruption and gender, to racism and socio-economic inequality. However, while
              youth-led movements around the world have gained increasing momentum, we continue to see gaps
              when it comes to the engagement of young people in formal politics because of a variety of
              structural and cultural barriers which prevent them from fulfilling their right to participate
              in public life.
            </p>
          </Container>
          </Grid>
          <Grid item xs={4}>
            <StaticImage
              className="introImage2"
              src="../images/introImage2.jpg"
              alt="Intro image 2"
              placeholder="blurred"
            />
          </Grid>
        </Grid>
      </Container>
      <Container className="introContainer pad-top-2rem" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={5}>
            <StaticImage
              className="introImage0"
              src="../images/introImage3.jpg"
              alt="Intro image"
              placeholder="blurred"
            />
          </Grid>
          <Grid item xs={7}>
          <Container className="introContainer" sx={{ maxWidth: '680px;' }} maxWidth={false} disableGutters={true}>
          <h3>
            What We Are<br></br>
            Advocating For
            </h3>
            <p className="introCopy">
              To advance the needs and rights of young people, and ensure youth
              voices are meaningfully heard within public life and decision making, the
              Be Seen. Be Heard campaign is focused on supporting efforts that
              promote policy and legislation change. 
            </p>
          </Container>
          </Grid>
          
        </Grid>
      </Container>
      <Container className="pinkBoxContainer" sx={{ maxWidth: '1080px;' }} maxWidth={false} disableGutters={true}>
          <h4>Key campaign actions include: </h4>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <div className="mainPinkBox">
              <b>Lowering the voting age for local, municipal or national elections:</b><br></br>
              enfranchising youth voters earlier by implementing comprehensive civic education programmes for youth.
            </div>
          </Grid>
          <Grid className="" item xs={6}>
            <div className="mainPinkBox">
              <b>Removing systemic barriers for young people to participate in public life: </b> 
               challenging legal, social and cultural barriers that obstruct youth voting, candidacy or decision-making presence.
            </div>
          </Grid>
          <Grid className="" item xs={6}>
            <div className="mainPinkBox">
              <b>Increasing youth representation through the establishment and recognition of formal youth bodies: </b> 
               ensuring enhanced representation through youth councils, parliaments or committees.
            </div>
          </Grid>
          <Grid className="" item xs={6}>
            <div className="mainPinkBox">
              <b>Amplifying young people's leadership in policy development: </b> 
              ensuring there is a meaningful, accountable and long-term youth voice present in key policy-making spaces. 
            </div>
          </Grid>
      </Grid>
      </Container>
      <Container className="pad-top-1rem" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} alignItems="center">
          
          <Grid item xs={4}>
            <StaticImage
              className="introImage2"
              src="../images/introImage2.jpg"
              alt="Intro image 2"
              placeholder="blurred"
            />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Container className="introContainer" sx={{ maxWidth: '810px;' }} maxWidth={false} disableGutters={true}>
            <h3>
              Young People’s Political<br></br>
              Participation
            </h3>
            <p className="introCopy">
              Too often, young people are misunderstood as being apathetic or uninterested in civic, social
              and political issues. Yet even in the face of adversity and facing structural barriers, young
              people are continually stepping up as advocates, entrepreneurs and innovators who are leading
              change in their communities and holding decision-makers to account. Young people’s actions and
              unapologetic advocacy have moved the dial on diverse political issues, from climate change and
              mental health, to corruption and gender, to racism and socio-economic inequality. However, while
              youth-led movements around the world have gained increasing momentum, we continue to see gaps
              when it comes to the engagement of young people in formal politics because of a variety of
              structural and cultural barriers which prevent them from fulfilling their right to participate
              in public life.
            </p>
          </Container>
          </Grid>
      </Container>
    </main>
  );
};

export default MainSection;
