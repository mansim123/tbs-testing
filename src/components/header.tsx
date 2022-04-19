import * as React from "react";
import "../css/style.scss";
import { Container, Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Helmet from "react-helmet";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    }
  },
});

const whichLanguage = [
  {
      value: "en|af",
      language: "code"
  }
]

const options = [
  'Afrikaans',
  'Albanian',
  'Arabic',
  'Armenian',
  'Azerbaijani',
  'Basque',
  'Belarusian',
  'Bulgarian',
  'Catalan',
  'Chinese (Simplified)',
  'Chinese (Traditional)',
  'Croatian',
  'Czech',
  'Danish',
  'Dutch',
  'English',
  'Estonian',
  'Filipino',
  'Finnish',
  'French',
  'Galiciane',
  'Georgian',
  'German',
  'Greek',
  'Haitian Creole',
  'Hebrew',
  'Hindi',
  'Hungarian',
  'Icelandic',
  'Indonesian',
  'Irish',
  'Japanese',
  'Korean',
  'Latvian',
  'Lithuanian',
  'Macedonian',
  'Malay',
  'Maltese',
  'Norwegian',
  'Persian',
  'Polish',
  'Portuguese',
  'Romanian',
  'Russian',
  'Serbian',
  'Slovak',
  'Slovenian',
  'Spanish',
  'Swahili',
  'Swedish',
  'Thai',
  'Turkish',
  'Ukrainian',
  'Urdu',
  'Vietnamese',
  'Welsh',
  'Yiddish',
];



export default function HeaderSection() {

  return (
    <main>
      
      <Container className="headerContainer" maxWidth={false} sx={{ maxWidth: '1440px;' }}>
      <Helmet>
        <script type="text/javascript" src="http://free-website-translation.com/scripts/fwt.js" />
      </Helmet>
        
        <div
          style={{
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            position: "relative",
          }}
        >
          {/* Any content here will be centered in the component */}
          <StaticImage
            className="BeSeenBeHeard"
            src="../images/headerImage_BeSeenBeHeard.png"
            alt="Be Seen Be Heard"
            placeholder="blurred"
          />
          <div className="buttonCont">
          <a href="http://free-website-translation.com/" id="ftwtranslation_button">
          <StaticImage 
          src="http://free-website-translation.com/img/fwt_button_en.gif"
          id="ftwtranslation_image"
          alt="FWT Homepage Translator"
          />
          </a>   
          </div>
        </div>

      </Container>
    </main>
  );

    

};
