import * as React from "react";
import "../css/style.scss";
import { Container, Grid, Button } from "@mui/material";
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

const MainSection = () => {
  return (
    <main>
      <Container className="introContainer" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" className="">
          <Grid item xs={12} sm={12} md={7} order={{ xs: 2, sm: 2, md:1 }}>
          <Container className="introContainer introContainerMobile1" sx={{ maxWidth: '680px;' }} maxWidth={false} disableGutters={true}>
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
          <Grid item xs={12} sm={12} md={5} order={{ xs: 1, sm: 1, md:1 }}>
          <div style={{ placeItems: "center", display: "grid", }}>
            <StaticImage
              className="introImage0"
              src="../images/introImage0.jpg"
              alt="Intro image"
              placeholder="blurred"
            />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container className="introContainer pad-top-3rem remove-pad-top" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <div className="yellowBoxCont" style={{ placeItems: "center", display: "grid", }}>
          <div className="yellowCopyContainer">
            <div className="yellowCopyYellowBox">
              <p>
                  The campaign's key objective is to change one piece of legislation or policy, or support<br className="hideMobile hideTablet"></br>
                  programming to promote youth participation in public life, in more than 80 countries<br className="hideMobile hideTablet"></br>
                  around the world where The Body Shop operates.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="pad-top-3rem youngPeopleCont" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={7} order={{ xs: 2, sm: 2, md:1 }}>
        <Container className="introContainer introContainerMobile2" sx={{ maxWidth: '680px;' }} maxWidth={false} disableGutters={true}>
            <h3>
              Young people???s political<br></br>
              participation
            </h3>
            <p className="introCopy">
              Too often, young people are misunderstood as being apathetic or uninterested in civic, social
              and political issues. Yet even in the face of adversity and facing structural barriers, young
              people are continually stepping up as advocates, entrepreneurs and innovators who are leading
              change in their communities and holding decision-makers to account. Young people???s actions and
              unapologetic advocacy have moved the dial on diverse political issues, from climate change and
              mental health, to corruption and gender, to racism and socio-economic inequality. However, while
              youth-led movements around the world have gained increasing momentum, we continue to see gaps
              when it comes to the engagement of young people in formal politics because of a variety of
              structural and cultural barriers which prevent them from fulfilling their right to participate
              in public life.
            </p>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ xs: 1, sm: 1, md:1 }}>
          <div className="" style={{ placeItems: "center", display: "grid", }}>
            <StaticImage
              className="introImage2 hideMobile"
              src="../images/introImage2.jpg"
              alt="Intro image 2"
              placeholder="blurred"
            />
            </div>
            <div style={{ placeItems: "center", display: "grid", }}>
            <StaticImage
              className="introImage2 hideDesktop"
              src="../images/introImage2-m.jpg"
              alt="Intro image 2"
              placeholder="blurred"
            />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container className="introContainer pad-top-2rem advoContainer" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={5}>
        <div style={{ placeItems: "center", display: "grid", }}>
            <StaticImage
              className="introImage0"
              src="../images/introImage3.jpg"
              alt="Intro image"
              placeholder="blurred"
            />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
          <Container className="introContainer" sx={{ maxWidth: '680px;' }} maxWidth={false} disableGutters={true}>
          <h3>
            What we are<br></br>
            advocating for
            </h3>
            <p className="introCopy">
              To advance the needs and rights of young people, and ensure youth
              voices are meaningfully heard within public life and decision making, the
              Be Seen. Be Heard campaign is focused on supporting efforts that
              promote policy and legislation change.
              <br></br><br></br>
              The Be Seen. Be Heard campaign further supports programming that develops
              young people???s leadership skills; empowering the next generation of
              changemakers through capacity building and training opportunities.
            </p>
          </Container>
          </Grid>
          
        </Grid>
      </Container>
      <Container className="pinkBoxContainer pad-top-1rem" sx={{ maxWidth: '1150px;' }} maxWidth={false} disableGutters={true}>
          <h3>Key campaign actions include: </h3>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <div className="mainPinkBox">
              <b>Lowering the voting age for local, municipal or national elections:</b><br></br>
              enfranchising youth voters earlier by mobilizing and supporting youth advocacy efforts.
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="mainPinkBox">
              <b>Removing systemic barriers for young people to participate in public life: </b> 
               challenging legal, social and cultural barriers that obstruct youth voting, candidacy or decision-making presence.
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="mainPinkBox">
              <b>Increasing youth representation through the establishment and recognition of formal youth bodies: </b> 
               ensuring enhanced representation through youth councils, parliaments or committees.
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="mainPinkBox">
              <b>Amplifying young people's leadership in policy development: </b> 
               ensuring there is a meaningful, accountable and long-term youth voice present in key policy-making spaces. 
            </div>
          </Grid>
      </Grid>
      </Container>
      <Container className="pad-top-4rem globalYouthContainer" sx={{ maxWidth: '1225px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} alignItems="center">
          
        <Grid item xs={12} sm={12} md={4}>
        <div style={{ placeItems: "center", display: "grid", }}>
            <StaticImage
              className="introImage4 hideMobile"
              src="../images/introImage4.jpg"
              alt="Intro image 4"
              placeholder="blurred"
            />
            </div>
            <div style={{ placeItems: "center", display: "grid", }}>
              <StaticImage
                className="introImage4 hideDesktop"
                src="../images/introImage4-m.jpg"
                alt="Intro image 4"
                placeholder="blurred"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
          <Container className="introContainer" sx={{ maxWidth: '700px;' }} maxWidth={false} disableGutters={true}>
            <h3>
              Global Youth Report
            </h3>
            <p className="introCopy">
              Did you know that 67% of people believe in a better future, with 15 to 17-year-olds
              being the most optimistic? Or that more than two-thirds (69%) of people agree political
              systems would be better if there were more opportunities for younger people to have a
              say in policy development and change?  
              <br></br><br></br>
              The Be Seen. Be Heard Global Youth Report, unpacks the structural barriers young people
              face in accessing their right to political participation and explores how we can all
              contribute to removing such barriers. It examines the ways in which young people are
              already engaging and contributing to our world, while also interrogating the basis
              for their exclusion. 
            </p>
          </Container>
          </Grid>
        </Grid>
      </Container>
      <Container className="pad-top-3rem statsContainer" sx={{ maxWidth: '1275px;' }} maxWidth={false} disableGutters={true}>
        <h4 className="pad-bottom-3rem">Key findings: </h4>
        <Grid className="" container spacing={2} alignItems="center">
          <Grid className="pad-top-none" item xs={12} sm={12} md={4}>
            <div className="mainCopyBlack" >
              <h1 className="firstStat">76%</h1>
              <p className="pad-bottom-3rem">
                  of under 30s think politicians<br className="hideMobile"></br> 
                  don???t listen to young people
                </p>
            </div>
          </Grid>
          <Grid className="pad-top-20px" item xs={12} sm={12} md={4}>
            <div className="mainCopyBlack">
              <h1 className="thirdStat">8 in 10</h1>
              <p className="pad-bottom-3rem">
                people think that current<br className="hideMobile"></br> 
                political systems need drastic<br className="hideMobile"></br> 
                reforms to be fit for the future
              </p>
            </div>
          </Grid>
          <Grid className="pad-top-20px" item xs={12} sm={12} md={4}>
            <div className="mainCopyBlack">
              <h1 className="secondStat">69%</h1>
              <p>
                of people think that more<br className="hideMobile"></br> 
                opportunities for younger<br className="hideMobile"></br> 
                people to have a say in policy<br className="hideMobile"></br> 
                development would make<br className="hideMobile"></br> 
                political systems better
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container className="introContainer pad-top-2rem" sx={{ maxWidth: '1440px;' }} maxWidth={false} disableGutters={true}>
        <div className="ctaBoxCont" style={{ placeItems: "center", display: "grid", }}>
         
          <div className="ctaCopyContainer">
            <div className="ctaCopyWhiteBox">
              <p>
                Through substantiating the issue and offering concrete recommendations for policy and<br className="hideMobile hideTablet"></br>
                legislative improvements, the report provides a strong basis for local advocacy efforts<br className="hideMobile hideTablet"></br>
                which seek to defend and advance the needs and rights of young people in all their diversity. 
              </p>
              <div className="" style={{ placeItems: "center", display: "grid", }}>
              <ThemeProvider theme={theme}>
                <Button className="pinkButton" target="_blank" href="https://www.google.co.uk" variant="contained" color="primary" disableElevation>Download the full report</Button>
              </ThemeProvider>
              </div>
              <div className="pad-top-1rem" style={{ placeItems: "center", display: "grid", }}>
              <ThemeProvider theme={theme}>
                <Button className="pinkButton downloadButtonPadding" target="_blank" href="https://www.google.co.uk" variant="contained" color="primary" disableElevation>Download the summary</Button>
              </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="pad-top-4rem keyFindingsSection" sx={{ maxWidth: '1060px;' }} maxWidth={false} disableGutters={true}>
        <Grid container spacing={2} alignItems="center">
          
          <Grid item xs={12}>
          <h4>About the Partners  </h4>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="top">
          
        <Grid item xs={12} sm={5}>
            <h5>Office of the UN<br></br>
              Secretary-General???s Envoy on Youth
            </h5>
            <p>
              In 2017, the UN Secretary-General appointed Jayathma
              Wickramanayake of Sri Lanka as his Special Envoy on
              Youth and as the youngest senior official in the history
              of the organization. Ms. Wickramanayake's mandate is
              to harmonize the UN system efforts on youth
              development, enhance the UN response to youth
              needs, advocate for the development needs and rights
              of young people, as well as to bring the work of the
              United Nations on youth closer to them. The Envoy on
              Youth also acts as the advisor to and the representative
              of the Secretary-General on youth related matters.
              <br></br><br></br>
              For more information, follow <u>@UNYouthEnvoy</u> on social
              media and visit our website at <a href="https://www.un.org/youthenvoy/" target="_blank">un.org/youthenvoy.</a>
              
            </p>
            <div className="hideDesktop">
                <StaticImage
                  className="unLogo"
                  src="../images/unLogo-m.png"
                  alt="Un Logo"
                  placeholder="blurred"
                />
              </div>
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <h5>
              The Body Shop
            </h5>
            <p>
            At The Body Shop we seek to create change where and
            when we believe it is needed. We have always operated
            outside of the beauty industry, going beyond to
            address change where other brands don???t go. We are
            not afraid to challenge the status quo to find the right
            solutions. We have a vast and successful history of
            activism and campaigning, from Save the Whales to
            Stop the Burning and Stop Sex Trafficking. 
            <br></br><br></br>
            Campaigning for change is in our heritage. It???s what we
            do. Find out more by visiting <a href="https://www.thebodyshop.com/" target="_blank">thebodyshop.com</a>.
            </p>
            <div className="hideDesktop">
                <StaticImage
                  className="tbsLog"
                  src="../images/tbsLogo-m.png"
                  alt="tbs Logo"
                  placeholder="blurred"
                />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="top">
          <Grid item xs={5}>
              <div className="pad-top-2rem hideMobile">
              <StaticImage
                className="unLogo"
                src="../images/unLogo.png"
                alt="Un Logo"
                placeholder="blurred"
              />
              </div>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <div className="pad-top-1rem">
              <StaticImage
                className="tbsLog hideMobile"
                src="../images/tbsLogo.png"
                alt="tbs Logo"
                placeholder="blurred"
              />
              </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default MainSection;
