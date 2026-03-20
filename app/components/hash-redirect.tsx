"use client";

import { useLayoutEffect } from "react";

export function HashRedirect({ hash }: { hash: string }) {
  useLayoutEffect(() => {
    const { search } = window.location;
    const h = hash.replace(/^#/, "");
    window.location.replace(`/${search}#${h}`);
  }, [hash]);

  return (
    <p className="text-center text-zinc-500 py-24 text-sm">Loading…</p>
  );
}
