import React from "react";
import type { Car } from "../types/car.types";

const COLORS = {
  dark: "#111827",
  black05: "rgba(0, 0, 0, 0.05)",
  black70: "rgba(0, 0, 0, 0.7)",
  black55: "rgba(0, 0, 0, 0.55)",
  white85: "rgba(255, 255, 255, 0.85)",
  white60: "rgba(255, 255, 255, 0.6)",
  white50: "rgba(255, 255, 255, 0.5)",
  white90: "rgba(255, 255, 255, 0.9)",
  white: "#ffffff",
  accent: "#38bdf8",
  primary: "#4b091a",
};

const FONTS = {
  condensed: "Inter, sans-serif",
  regular: "Inter, sans-serif",
};

const FONT_WEIGHTS = {
  black: 900,
  extrabold: 800,
  semibold: 600,
  medium: 500,
  normal: 400,
};

const SPACING = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 36,
};

const BORDER_RADIUS = {
  sm: 8,
  xxxl: 32,
};

const TRANSITIONS = {
  slow: "0.35s",
  slower: "0.45s",
  cubic: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeOut: "ease-out",
};

const SHADOWS = {
  lg: "0 20px 40px rgba(0, 0, 0, 0.12)",
  xxl: "0 30px 60px rgba(0, 0, 0, 0.18)",
};



//Icons

const FuelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V6a2 2 0 012-2h8a2 2 0 012 2v16" />
    <path d="M3 11h12" />
    <path d="M15 6h2a2 2 0 012 2v3a2 2 0 002 2v5a2 2 0 01-4 0v-5a2 2 0 000-4V7" />
  </svg>
);

const DoorIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const GearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

//  Styles 

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: COLORS.dark,
    borderRadius: BORDER_RADIUS.xxxl,
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    transition: `transform ${TRANSITIONS.slow} ${TRANSITIONS.cubic}, box-shadow ${TRANSITIONS.slow}`,
    display: "flex",
    flexDirection: "column",
  },
  imgWrap: {
    position: "relative",
    height: 240,
    overflow: "hidden",
    flexShrink: 0,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: `transform ${TRANSITIONS.slower} ${TRANSITIONS.easeOut}`,
    display: "block",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to bottom, ${COLORS.black05} 0%, ${COLORS.black70} 100%)`,
    pointerEvents: "none",
  },
  badge: {
    position: "absolute",
    top: SPACING.md,
    left: SPACING.md,
    background: COLORS.black55,
    backdropFilter: "blur(4px)",
    color: COLORS.white85,
    fontFamily: FONTS.condensed,
    fontSize: 11,
    fontWeight: FONT_WEIGHTS.black,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding: `${SPACING.xs}px ${SPACING.sm}px`,
    borderRadius: BORDER_RADIUS.sm,
  },
  titleArea: {
    position: "absolute",
    bottom: SPACING.lg,
    left: SPACING.lg,
    right: SPACING.lg,
  },
  grupo: {
    color: COLORS.white60,
    fontSize: 11,
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: SPACING.xs,
    fontFamily: FONTS.condensed,
  },
  carName: {
    fontFamily: FONTS.condensed,
    fontSize: 26,
    fontWeight: FONT_WEIGHTS.black,
    color: COLORS.white,
    lineHeight: 1,
    margin: 0,
  },
  carNameAccent: {
    color: COLORS.accent,
  },
  similar: {
    color: COLORS.white50,
    fontSize: 12,
    marginTop: SPACING.xs,
    fontFamily: FONTS.regular,
  },
  footer: {
    background: COLORS.primary,
    padding: `${SPACING.md}px ${SPACING.lg}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
  },
  specs: {
    display: "flex",
    gap: SPACING.xxl,
    alignItems: "center",
    flexWrap: "wrap",
  },
  specItem: {
    display: "flex",
    alignItems: "center",
    gap: SPACING.xs,
    color: COLORS.white90,
    fontSize: 12,
    fontWeight: FONT_WEIGHTS.medium,
    fontFamily: FONTS.regular,
  },
  price: {
    fontFamily: FONTS.condensed,
    fontWeight: FONT_WEIGHTS.extrabold,
    fontSize: 18,
    color: COLORS.white,
    letterSpacing: "-0.5px",
    whiteSpace: "nowrap",
  },
  priceSmall: {
    fontSize: 11,
    fontWeight: FONT_WEIGHTS.normal,
    opacity: 0.75,
  },
};


//  Component

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? SHADOWS.xxl : SHADOWS.lg,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(car)}
    >
      
      {/* Image */}

      <div style={styles.imgWrap}>
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          style={{
            ...styles.img,
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <div style={styles.overlay} />
        <div style={styles.badge}>{car.category}</div>
        <div style={styles.titleArea}>
          <p style={styles.grupo}>{car.group}</p>
          <h3 style={styles.carName}>
            {car.brand}{" "}
            <span style={styles.carNameAccent}>{car.model}</span>
          </h3>
          <p style={styles.similar}>or similar</p>
        </div>
      </div>

      {/* Footer */}
      
      <div style={styles.footer}>
        <div style={styles.specs}>
          <span style={styles.specItem}>
            <FuelIcon /> {car.fuel}
          </span>
          <span style={styles.specItem}>
            <DoorIcon /> {car.doors} Doors
          </span>
          <span style={styles.specItem}>
            <PeopleIcon /> {car.people} People
          </span>
          <span style={styles.specItem}>
            <GearIcon /> {car.transmission}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;