"use client";

export default function StudioBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Base warm studio tone */}
      <div className="absolute inset-0 bg-[#edeae4]" />

      {/* Diagonal light streaks — like sunlight through blinds */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              125deg,
              rgba(255, 255, 255, 0.0) 0%,
              rgba(255, 255, 255, 0.7) 8%,
              rgba(255, 255, 255, 0.0) 16%,
              rgba(255, 255, 255, 0.0) 20%,
              rgba(255, 255, 255, 0.55) 28%,
              rgba(255, 255, 255, 0.0) 36%,
              rgba(255, 255, 255, 0.0) 42%,
              rgba(255, 255, 255, 0.45) 50%,
              rgba(255, 255, 255, 0.0) 58%,
              rgba(255, 255, 255, 0.0) 64%,
              rgba(255, 255, 255, 0.35) 72%,
              rgba(255, 255, 255, 0.0) 80%,
              rgba(255, 255, 255, 0.0) 86%,
              rgba(255, 255, 255, 0.25) 94%,
              rgba(255, 255, 255, 0.0) 100%
            )
          `,
          filter: "blur(30px)",
        }}
      />

      {/* Bright top-left sun glow */}
      <div
        className="absolute"
        style={{
          top: "-15%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 40%, transparent 70%)",
        }}
      />

      {/* Soft vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.06) 100%)",
        }}
      />
    </div>
  );
}
