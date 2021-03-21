import { colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        background: {
            default: colors.common.white,
            dark: "#f4f6f8",
            paper: colors.common.white,
        },
        primary: {
            main: "#f44336",
        },
        secondary: {
            main: "#3ea6ff",
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
        },
    },
});

export default theme;
