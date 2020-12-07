import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme(

    {
        // direction: "rtl",
        typography: {
            fontFamily: ["Poppins"].join(",")
        },

        palette: {
            primary: {

                main: "#17c191",

            },
            secondary: {

                main: "#3783e7",

            },
            error: {

                main: "#f018a6",

            }
        },


        props: {

            MuiButtonBase: {

                disableRipple: false
            },


            MuiPopover: {
                elevation: 1
            }
        }
    }
);

export function MaterialThemeProvider(props) {
    const { children } = props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
