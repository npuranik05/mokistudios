"use client";

import { useEffect } from "react";

/** Registers the service worker (production only) so the site is
    installable as an app and loads on flaky connections. */
export default function RegisterSW() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);

  return null;
}
