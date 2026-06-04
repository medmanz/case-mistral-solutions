"use client";

import { useEffect, useState } from "react";
import { Agentation } from "agentation";

/**
 * Renders the Agentation dev toolbar — except when the URL has
 * `?clean=1` (or `?screenshot=1`). Useful when you want a clean
 * screenshot of a sandbox page without the floating dev panel in
 * the bottom-right.
 */
export function AgentationGate() {
  const [clean, setClean] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("clean") === "1" || params.get("screenshot") === "1") {
      setClean(true);
    }
  }, []);

  if (clean) return null;
  return <Agentation />;
}
