"use client";

import { useEffect, useState } from "react";

/* The zone name comes from the formatter, so it reads CEST in summer and CET
   in winter instead of a hardcoded label that is wrong half the year. */
const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Paris",
  timeZoneName: "short",
});

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <time className="tabular-nums">{time ?? " "}</time>;
}
