// src/components/ui/glowing-effect.jsx

"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils"; // Correct relative path
// No longer need 'animate' from 'motion'
// import { animate } from "motion";

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    // movementDuration is no longer needed as we aren't animating the angle
    // movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }) => {
    const containerRef = useRef(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(0);

    const handleMove = useCallback(
      (e) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }
          
          // --- NEW LOGIC: Calculate relative mouse position ---
          const relativeX = mouseX - left;
          const relativeY = mouseY - top;
          element.style.setProperty("--glow-x", `${relativeX}px`);
          element.style.setProperty("--glow-y", `${relativeY}px`);
          // --- END NEW LOGIC ---

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          // --- REMOVED: All angle calculation and animation logic ---
          // The old logic for rotating the conic gradient is no longer needed.
        });
      },
      [inactiveZone, proximity] // movementDuration removed from dependencies
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border border-neutral-800 opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={{
            // --- UPDATED CSS Variables ---
            "--blur": `${blur}px`,
            "--spread": spread,
            // '--start' is no longer needed
            "--active": "0",
            "--glow-x": "0px", // Initial position for the glow
            "--glow-y": "0px", // Initial position for the glow
            "--glowingeffect-border-width": `${borderWidth}px`,
            // '--repeating-conic-gradient-times' is no longer needed
            "--gradient":
              variant === "white"
                ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / 5)
                )`
                : `radial-gradient(circle, #dd7bbb 20%, #dd7bbb00 40%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #c11ed7ff calc(25% / 5),
                  #fd6ec4ff calc(50% / 5), 
                  #b119f7ff calc(75% / 5),
                  #dd7bbb calc(100% / 5)
                )`,
          }}
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[calc(var(--active)*50)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              // --- THE KEY CHANGE: Replaced conic-gradient with radial-gradient mask ---
              "after:[mask-image:linear-gradient(#0000,#0000),radial-gradient(circle_calc(var(--spread)_*_1px)_at_var(--glow-x)_var(--glow-y),white,transparent)]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };