// src/app/ClientCleanup.tsx
"use client";

import { useEffect } from "react";

/**
 * Removes browser-extension injected attributes that break React hydration.
 * Runs **once** after the first paint (setTimeout 0) → after React hydration.
 */
export default function ClientCleanup() {
  useEffect(() => {
    const cleanup = () => {
      // Guard: DOM may not be ready yet (rare in layout, but safe)
      if (!document.body) return;

      const attrsToRemove: (string | RegExp)[] = [
        "bis_skin_checked",
        "bis_register",
        "bis_size",
        "bis_id",
        /^__processed_/,
        // Add more if you see them (e.g., Grammarly, 1Password)
        // /^data-gr-/
      ];

      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT
      );

      const elements: Element[] = [];
      let node: Element | null;

      while ((node = walker.nextNode() as Element | null)) {
        elements.push(node);
      }

      elements.forEach((el) => {
        attrsToRemove.forEach((attr) => {
          if (typeof attr === "string") {
            el.removeAttribute(attr);
          } else if (attr instanceof RegExp) {
            Array.from(el.attributes).forEach(({ name }) => {
              if (attr.test(name)) {
                el.removeAttribute(name);
              }
            });
          }
        });
      });
    };

    // Run **after** React hydration
    const timer = setTimeout(cleanup, 0);
    return () => clearTimeout(timer);
  }, []);

  // Render nothing
  return null;
}