import * as React from "react";
import "../css/style.scss";
import { Container, Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

const ITEM_HEIGHT = 48;

export default function HeaderSection() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main>
      <Container className="headerContainer" maxWidth={false} sx={{ maxWidth: '1440px;' }}>
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
            <ThemeProvider theme={theme}>
              <Button
                className="translateButton"
                id="composition-button"
                variant="outlined"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                Select language   <KeyboardArrowDownIcon />
              </Button>
            </ThemeProvider>
            <Menu
              id="long-menu"
              className="windowExpanded"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '24ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

      </Container>
    </main>
  );
};

// export default HeaderSection;
