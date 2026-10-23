

// ── Font Families 
export const FONTS = {
  condensed: "'Barlow Condensed', sans-serif",
  regular: "'Barlow', sans-serif",
} as const;

// ── Font Weights ────────────────────────────────────────────────────────────
export const FONT_WEIGHTS = {
  thin: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// ── Color Palette ───────────────────────────────────────────────────────────
export const COLORS = {
  // Primary
  primary: "#8B1A3A",      
  primaryDark: "#6B1229",   
  primaryLight: "#B0244D", 
  accent: "#C0394B",       

  // Neutrals
  white: "#FFFFFF",
  black: "#000000",
  dark: "#1A1A1A",
  lightGray: "#F8F5F2",
  mediumGray: "#777",
  darkGray: "#444",
  borderGray: "#E8E3DF",
  inputGray: "#888",
  disabledGray: "#999",

  // Gold
  gold: "#D4A843",

  // Stars
  star: "#F5A623",

  // Semi-transparent whites
  white60: "rgba(255,255,255,0.60)",
  white50: "rgba(255,255,255,0.50)",
  white85: "rgba(255,255,255,0.85)",
  white90: "rgba(255,255,255,0.90)",
  white75: "rgba(255,255,255,0.75)",
  white65: "rgba(255,255,255,0.65)",
  white55: "rgba(255,255,255,0.55)",

  // Semi-transparent blacks
  black55: "rgba(0,0,0,0.55)",
  black50: "rgba(0,0,0,0.50)",
  black05: "rgba(0,0,0,0.05)",
  black70: "rgba(0,0,0,0.70)",
} as const;

//  Spacing 
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 28,
  xxxl: 32,
  huge: 40,
  massive: 48,
  enormous: 52,
  extreme: 60,
  hero: 64,
} as const;

//  Border Radius 
export const BORDER_RADIUS = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  xxl: 14,
  xxxl: 16,
  circle: "50%",
  round: 20,
} as const;

//  Transitions 
export const TRANSITIONS = {
  fast: "0.2s",
  normal: "0.25s",
  slow: "0.28s",
  slower: "0.3s",
  slowest: "0.5s",
  easeLinear: "linear",
  easeInOut: "ease-in-out",
  easeOut: "ease",
  easeIn: "ease-in",
  cubic: "cubic-bezier(0.34,1.56,0.64,1)",
} as const;

//  Typography Presets 
export const TYPOGRAPHY = {
  h1: {
    fontFamily: FONTS.condensed,
    fontSize: 60,
    fontWeight: FONT_WEIGHTS.black,
    letterSpacing: -1,
  },
  h2: {
    fontFamily: FONTS.condensed,
    fontSize: 42,
    fontWeight: FONT_WEIGHTS.black,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: FONTS.condensed,
    fontSize: 34,
    fontWeight: FONT_WEIGHTS.black,
    letterSpacing: -0.5,
  },
  h4: {
    fontFamily: FONTS.condensed,
    fontSize: 26,
    fontWeight: FONT_WEIGHTS.black,
    lineHeight: 1,
  },
  h5: {
    fontFamily: FONTS.condensed,
    fontSize: 22,
    fontWeight: FONT_WEIGHTS.black,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: FONTS.condensed,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.extrabold,
    letterSpacing: "-0.2px",
  },
  bodyLarge: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    fontWeight: FONT_WEIGHTS.normal,
  },
  body: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: 1.65,
  },
  bodySmall: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: 1.6,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  labelSmall: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    fontWeight: FONT_WEIGHTS.normal,
  },
} as const;

//  Shadows 
export const SHADOWS = {
  none: "none",
  sm: "0 2px 10px rgba(0,0,0,0.2)",
  md: "0 2px 12px rgba(0,0,0,0.08)",
  lg: "0 4px 16px rgba(0,0,0,0.12)",
  xl: "0 8px 24px rgba(0,0,0,0.15)",
  xxl: "0 24px 56px rgba(0,0,0,0.28)",
  modal: "0 32px 80px rgba(0,0,0,0.35)",
} as const;

//  Breakpoints
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;