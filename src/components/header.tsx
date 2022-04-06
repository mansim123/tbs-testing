import * as React from "react";
import "../css/style.scss";
import { Container } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const HeaderSection = () => {
  return (
    <main>
      <Container className="headerContainer" maxWidth={false}>
        <div
          style={{
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          {/* Any content here will be centered in the component */}
          <StaticImage
            className="BeSeenBeHeard"
            src="../images/headerImage_BeSeenBeHeard.png"
            alt="Be Seen Be Heard"
            placeholder="blurred"
          />
        </div>
      </Container>
    </main>
  );
};

export default HeaderSection;
