"use client";

export default function ScrollProgress() {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-500 origin-left z-[100]"
      style={{
        transform: "scaleX(0)",
        animation: "scroll-progress auto linear",
        animationTimeline: "scroll()",
      }}
    />
  );
}
