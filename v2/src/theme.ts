import { alpha, createTheme, type Theme } from "@mui/material/styles";

const brand = {
  cyan: "#55DDFF",
  cyanBright: "#9CF1FF",
  indigo: "#312450",
  navy: "#101d39",
  pink: "#FF5491",
  rose: "#FF5491",
  paper: "#182848",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: brand.cyan,
      light: brand.cyanBright,
      dark: "#21b8de",
      contrastText: "#001722",
    },
    secondary: {
      main: brand.pink,
      light: "#FF8AB4",
      dark: "#D93673",
      contrastText: "#22010E",
    },
    background: {
      default: "#0a1630",
      paper: brand.paper,
    },
    text: {
      primary: "#f5f9ff",
      secondary: "#c6d4f8",
    },
    divider: alpha("#e6f4ff", 0.16),
    success: {
      main: "#54d3ac",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily:
      '"DM Sans", "Satoshi Variable", "Satoshi", "Avenir Next", "Segoe UI", "Helvetica", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 650,
      letterSpacing: "-0.015em",
      lineHeight: 1.2,
    },
    body1: {
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 650,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(85, 221, 255, 0.14), transparent 35%), radial-gradient(circle at 85% 2%, rgba(255, 84, 145, 0.18), transparent 30%), linear-gradient(180deg, #13274f 0%, #0b1732 55%, #0b1833 100%)",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          borderBottom: `1px solid ${alpha("#ffffff", 0.10)}`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
          paddingBlock: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(160deg, ${alpha("#ffffff", 0.06)}, ${alpha(
            "#55DDFF",
            0.02,
          )}, ${alpha("#FF5491", 0.03)})`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          border: `1px solid ${alpha("#e6f4ff", 0.18)}`,
          backgroundColor: alpha("#0f1f41", 0.75),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: alpha("#09152e", 0.55),
        },
      },
    },
  },
});

// Shared component shape / typography overrides reused by the light section theme.
const sharedComponents: Theme["components"] = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { borderRadius: 999, paddingInline: 18, paddingBlock: 10 },
    },
  },
  MuiCard: { styleOverrides: { root: { borderRadius: 12 } } },
};

export const lightSectionTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0099BB",
      contrastText: "#ffffff",
    },
    secondary: {
      main: brand.pink,
      contrastText: "#ffffff",
    },
    background: {
      default: "#F5F7FA",
      paper: "#ffffff",
    },
    text: {
      primary: "#0A1630",
      secondary: "#3A507A",
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily:
      '"DM Sans", "Satoshi Variable", "Satoshi", "Avenir Next", "Segoe UI", "Helvetica", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 },
    h3: { fontWeight: 650, letterSpacing: "-0.015em", lineHeight: 1.2 },
    body1: { lineHeight: 1.65 },
    button: { fontWeight: 650, letterSpacing: "0.02em", textTransform: "none" },
  },
  components: sharedComponents,
});
