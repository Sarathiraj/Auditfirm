import { createTheme } from "@mui/material/styles";
import "./theme.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002C6E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2D6C00",
    },
  },
  typography: {
    // fontfamily: ["Montserrat"],
    h6: {
      fontFamily: "Inter",
      fontSize: "12px",
      wordWrap: "break-word",
    },
    h5: {
      fontFamily: "Inter",
      fontSize: "16px",
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "18px",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "20px",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontWeight: "bold",
    },
    h1: {
      fontFamily: "Montserrat",
      fontSize: "30px",
      fontWeight: "bold",
    },
  },
});

export default theme;
