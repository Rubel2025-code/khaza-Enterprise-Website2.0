import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { Car } from "../types/car.types";
import { COLORS, FONTS, FONT_WEIGHTS, SPACING, BORDER_RADIUS, TRANSITIONS, SHADOWS } from "../constants/Styleconstants";


//  Icon 

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FuelIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V6a2 2 0 012-2h8a2 2 0 012 2v16" /><path d="M3 11h12" />
    <path d="M15 6h2a2 2 0 012 2v3a2 2 0 002 2v5a2 2 0 01-4 0v-5a2 2 0 000-4V7" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const DoorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2" /><circle cx="15" cy="12" r="1" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

//  Types 
interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
}


//  Component

const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setActiveImg(0);
  }, [car]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (car) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [car]);

  const goTo = useCallback((dir: "left" | "right") => {
    if (!car || animating) return;
    setSlideDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setActiveImg((prev) =>
        dir === "right"
          ? (prev + 1) % car.images.length
          : (prev - 1 + car.images.length) % car.images.length
      );
      setSlideDir(null);
      setAnimating(false);
    }, 250);
  }, [car, animating]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? "right" : "left");
    setTouchStartX(null);
  };

  if (!car) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "blur(6px)",
          animation: "fadeIn 0.2s ease",
        }}
      />



      {/* Modal */}


      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: SPACING.xl,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: COLORS.white,
            borderRadius: BORDER_RADIUS.round,
            width: "100%",
            maxWidth: 900,
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
            animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: SHADOWS.modal,
          }}
        >

          {/* Image Swiper  */}


          <div
            style={{
              position: "relative",
              height: 380,
              overflow: "hidden",
              flexShrink: 0,
              background: COLORS.dark,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={activeImg}
              src={car.images[activeImg]}
              alt={`${car.brand} ${car.model} - view ${activeImg + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                animation: animating
                  ? slideDir === "right"
                    ? "slideOutLeft 0.25s ease forwards"
                    : "slideOutRight 0.25s ease forwards"
                  : "slideInFade 0.3s ease",
              }}
            />


            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, transparent 55%, ${COLORS.black70} 100%)`,
                pointerEvents: "none",
              }}
            />

            {/* Car title */}

            <div style={{ position: "absolute", bottom: SPACING.lg, left: SPACING.xl }}>
              <p
                style={{
                  color: COLORS.white65,
                  fontSize: 12,
                  fontWeight: FONT_WEIGHTS.semibold,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: FONTS.condensed,
                  margin: 0,
                }}
              >
                {car.group}
              </p>
              <h2
                style={{
                  fontFamily: FONTS.condensed,
                  fontWeight: FONT_WEIGHTS.black,
                  fontSize: 36,
                  color: COLORS.white,
                  lineHeight: 1,
                  margin: "2px 0 0",
                }}
              >
                {car.brand}{" "}
                <span style={{ color: COLORS.accent }}>{car.model}</span>
              </h2>
              <p style={{ color: COLORS.white55, fontSize: 13, margin: "3px 0 0" }}>
                or similar
              </p>
            </div>

            {/* Prev+ Next buttons */}


            {car.images.length > 1 && (
              <>
                <button
                  onClick={() => goTo("left")}
                  style={navBtnStyle("left")}
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => goTo("right")}
                  style={navBtnStyle("right")}
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>
              </>
            )}



            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                background: COLORS.black55,
                display: "flex",
              }}
            >
              {car.images.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: i === activeImg ? COLORS.white : "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: `width ${TRANSITIONS.normal} ${TRANSITIONS.easeOut}, background ${TRANSITIONS.fast} ${TRANSITIONS.easeOut}`,
                  }}
                />
              ))}
            </div>


            {/* Thumbnail */}

            <div
              style={{
                position: "absolute",
                top: SPACING.md,
                right: SPACING.xxl,
                display: "flex",
                gap: SPACING.sm,
              }}
            >
              {car.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: 52,
                    height: 36,
                    borderRadius: BORDER_RADIUS.sm,
                    overflow: "hidden",
                    border: i === activeImg ? `2px solid ${COLORS.accent}` : `2px solid ${COLORS.white50}`,
                    cursor: "pointer",
                    padding: 0,
                    transition: `border-color ${TRANSITIONS.fast}`,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </button>
              ))}
            </div>


            {/* Close button */}

            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: SPACING.md,
                right: SPACING.md,
                background: COLORS.black55,
                backdropFilter: "blur(4px)",
                border: "none",
                color: COLORS.white,
                cursor: "pointer",
                width: 36,
                height: 36,
                borderRadius: BORDER_RADIUS.circle,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: `background ${TRANSITIONS.fast}`,
              }}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          {/*  Details   */}
          <div style={{ overflowY: "auto", padding: `${SPACING.xl}px ${SPACING.xl + 4}px ${SPACING.xl + 4}px` }}>



            {/* Stats  */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: SPACING.md,
                marginBottom: SPACING.xxl,
              }}
            >
              {[
                { icon: <FuelIcon />, label: "Fuel", value: car.fuel },
                { icon: <DoorIcon />, label: "Doors", value: `${car.doors} Doors` },
                { icon: <PeopleIcon />, label: "Seats", value: `${car.people} People` },
                { icon: <GearIcon />, label: "Gearbox", value: car.transmission },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: COLORS.lightGray,
                    borderRadius: BORDER_RADIUS.xl,
                    padding: `${SPACING.md}px ${SPACING.lg}px`,
                    display: "flex",
                    flexDirection: "column",
                    gap: SPACING.xs,
                  }}
                >
                  <div style={{ color: COLORS.primary }}>{stat.icon}</div>
                  <p
                    style={{
                      fontSize: 11,
                      color: COLORS.inputGray,
                      fontWeight: FONT_WEIGHTS.semibold,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: FONT_WEIGHTS.bold,
                      color: COLORS.dark,
                      margin: 0,
                    }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>


            {/* Description */}
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: COLORS.darkGray,
                marginBottom: SPACING.xxl,
              }}
            >
              {car.description}
            </p>

            {/* Features */}
            <h4
              style={{
                fontFamily: FONTS.condensed,
                fontWeight: FONT_WEIGHTS.extrabold,
                fontSize: 18,
                color: COLORS.dark,
                letterSpacing: "-0.2px",
                marginBottom: SPACING.md,
              }}
            >
              Included Features
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING.sm, marginBottom: SPACING.xxxl }}>
              {car.features.map((f) => (
                <span
                  key={f}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: SPACING.xs,
                    background: "#FFF0F3",
                    border: `1px solid rgba(139,26,58,0.15)`,
                    borderRadius: BORDER_RADIUS.md,
                    padding: `7px 13px`,
                    fontSize: 13,
                    fontWeight: FONT_WEIGHTS.semibold,
                    color: COLORS.primary,
                  }}
                >
                  <CheckIcon /> {f}
                </span>
              ))}
            </div>


            {/* CTA row */}


            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                borderTop: `1px solid ${COLORS.borderGray}`,
                paddingTop: SPACING.xl,
                gap: SPACING.md,
              }}
            >
              <button
                onClick={onClose}
                style={{
                  padding: `13px 28px`,
                  borderRadius: BORDER_RADIUS.lg,
                  border: `2px solid ${COLORS.borderGray}`,
                  background: "transparent",
                  fontSize: 14,
                  fontWeight: FONT_WEIGHTS.bold,
                  color: COLORS.mediumGray,
                  cursor: "pointer",
                  fontFamily: FONTS.condensed,
                  letterSpacing: "0.5px",
                }}
              >
                BACK
              </button>



              <button
                onClick={() => {
                  onClose();
                  navigate("/");
                  setTimeout(() => {
                    const bookingForm = document.getElementById("booking-form");
                    if (bookingForm) {
                      bookingForm.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }, 300);
                }}
                style={{
                  padding: `13px 32px`,
                  borderRadius: BORDER_RADIUS.lg,
                  border: "none",
                  background: COLORS.primary,
                  fontSize: 14,
                  fontWeight: FONT_WEIGHTS.bold,
                  color: COLORS.white,
                  cursor: "pointer",
                  fontFamily: FONTS.condensed,
                  letterSpacing: "1px",
                  transition: `background ${TRANSITIONS.fast}`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.primaryDark)}
                onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.primary)}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes slideInFade { from { opacity: 0; transform: scale(1.03) } to { opacity: 1; transform: scale(1) } }
        @keyframes slideOutLeft { from { opacity: 1; transform: translateX(0) } to { opacity: 0; transform: translateX(-40px) } }
        @keyframes slideOutRight { from { opacity: 1; transform: translateX(0) } to { opacity: 0; transform: translateX(40px) } }
      `}</style>
    </>
  );
};

const navBtnStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  [side]: SPACING.lg,
  transform: "translateY(-50%)",
  background: COLORS.black50,
  backdropFilter: "blur(4px)",
  border: "none",
  color: COLORS.white,
  width: 40,
  height: 40,
  borderRadius: BORDER_RADIUS.circle,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: `background ${TRANSITIONS.fast}`,
  zIndex: 2,
});

export default CarDetailModal;