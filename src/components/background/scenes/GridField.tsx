"use client";

export default function GridField() {
  return (
    <>
      {/* Soft radial light */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-20
          bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Noise texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.035]
          bg-[url('/textures/noise.png')]
          pointer-events-none
        "
      />
    </>
  );
}
