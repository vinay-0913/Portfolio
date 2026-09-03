"use client";

export default function HeroLighting() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0">
      {/* 1. Fine Film Grain Texture (SVG Turbulence overlay) */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Micro-ambient Center Depth (Barely perceptible natural luminance) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1100px] h-[550px] sm:h-[650px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.008) 45%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* 3. Deep Perimeter Edge Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(5, 5, 5, 0.65) 80%, #050505 100%)",
        }}
      />

      {/* 4. Bottom Edge Dissolve to blend with lower sections */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.8) 70%, #0a0a0a 100%)",
        }}
      />
    </div>
  );
}
