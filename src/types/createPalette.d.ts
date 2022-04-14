import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette extends MuiPallete {
    neutral: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    neutral?: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
}
