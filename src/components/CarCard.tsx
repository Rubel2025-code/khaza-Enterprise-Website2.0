
import React from "react";
import type { Car } from "../types/car.types";

const COLORS = {
  black: "#4A0D20",
blackSoft: "#5A1028",
  red: "#E31E24",
  redDark: "#B5121B",
  white: "#FFFFFF",
  muted: "#B8B8B8",
  border: "rgba(255,255,255,0.12)",
};

const iconStyle: React.CSSProperties = {
  width: 17,
  height: 17,
  flexShrink: 0,
  color: COLORS.red,
};

const FuelIcon = () => (
  <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17" />
    <path d="M3 10h12M7 6h4" />
    <path d="M15 7h2l3 3v8a2 2 0 0 0 4 0v-7l-3-3" />
  </svg>
);

const DoorIcon = () => (
  <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
  </svg>
);

const PeopleIcon = () => (
  <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GearIcon = () => (
  <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 2.94-.09-.03a1.7 1.7 0 0 0-1.83.34l-.07.06h-3.4l-.03-.09a1.7 1.7 0 0 0-1.4-1.2l-.09-.01-2.94-1.7.03-.09a1.7 1.7 0 0 0-.34-1.83l-.06-.07v-3.4l.09-.03a1.7 1.7 0 0 0 1.2-1.4l.01-.09 1.7-2.94.09.03a1.7 1.7 0 0 0 1.83-.34l.07-.06h3.4l.03.09a1.7 1.7 0 0 0 1.4 1.2l.09.01 2.94 1.7-.03.09a1.7 1.7 0 0 0 .34 1.83l.06.07v3.4z" transform="translate(-2 -2) scale(1.16)" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  card: {
    width: "100%",
    minWidth: 0,
    background: COLORS.black,
    borderRadius: 26,
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0,0,0,0.06)",
    transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), box-shadow 350ms ease",
    boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
  },
  imageWrap: {
  position: "relative",
  height: "clamp(175px, 22vw, 245px)",
  overflow: "hidden",
  background: "#EDEDED",
  flexShrink: 0,
},
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "transform 550ms cubic-bezier(0.22,1,0.36,1)",
  },
  categoryBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: "9px 14px",
    borderRadius: 10,
    background: "rgba(139,26,58,0.88)",
    color: COLORS.white,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    backdropFilter: "blur(8px)",
  },
  details: {
  padding: "clamp(16px, 2.5vw, 22px) clamp(14px, 2.5vw, 22px) 24px",
  background: "linear-gradient(145deg, #5A1028, #4A0D20)",
  color: COLORS.white,
  display: "flex",
  flexDirection: "column",
  gap: 0,
  flex: 1,
  minWidth: 0,
  boxSizing: "border-box",
},
  group: {
    margin: 0,
    color: "#D0D0D0",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  accentLine: {
    width: 42,
    height: 3,
    borderRadius: 4,
    background: COLORS.red,
    marginTop: 9,
    marginBottom: 12,
  },
  title: {
  margin: 0,
  fontSize: "clamp(20px, 2vw, 28px)",
  lineHeight: 1.15,
  fontWeight: 900,
  letterSpacing: "-0.5px",
  overflowWrap: "anywhere",
  minWidth: 0,
},
  brand: {
    color: COLORS.white,
  },
  model: {
    color: COLORS.red,
  },
  similar: {
    margin: "7px 0 0",
    fontSize: 12,
    color: COLORS.muted,
  },
  divider: {
    height: 1,
    background: COLORS.border,
    margin: "20px 0",
  },
  specs: {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  columnGap: 8,
  rowGap: 16,
  minWidth: 0,
},
  spec: {
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: 6,
  color: "#F4F4F4",
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.4,
},
  specLabel: {
    minWidth: 0,
    overflowWrap: "anywhere",
  },
  transmission: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    marginTop: 21,
    color: "#F4F4F4",
    fontSize: 12,
    fontWeight: 500,
  },
};

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      style={{
        ...styles.card,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 48px rgba(0,0,0,0.18)"
          : "0 12px 30px rgba(0,0,0,0.10)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(car)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick(car);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${car.brand} ${car.model}`}
    >
      {/* Clean vehicle image */}
      <div style={styles.imageWrap}>
        <img
          src={car.images?.[0]}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          style={{
            ...styles.image,
            transform: hovered ? "scale(1.045)" : "scale(1)",
          }}
        />

        <span style={styles.categoryBadge}>{car.category}</span>
      </div>

      {/* Vehicle title and specifications below the image */}
      <div style={styles.details}>
        <p style={styles.group}>{car.group || car.category}</p>
        <div style={styles.accentLine} />

        <h3 style={styles.title}>
          <span style={styles.brand}>{car.brand} </span>
          <span style={styles.model}>{car.model}</span>
        </h3>

        <p style={styles.similar}>Or similar vehicle</p>

        <div style={styles.divider} />

        <div style={styles.specs}>
          <div style={styles.spec}>
            <FuelIcon />
            <span style={styles.specLabel}>{car.fuel}</span>
          </div>

          <div style={styles.spec}>
            <DoorIcon />
            <span style={styles.specLabel}>{car.doors} Doors</span>
          </div>

          <div style={styles.spec}>
            <PeopleIcon />
            <span style={styles.specLabel}>{car.people} People</span>
          </div>
        </div>

        <div style={styles.transmission}>
          <GearIcon />
          <span>{car.transmission}</span>
        </div>
      </div>
    </article>
  );
};

export default CarCard;
