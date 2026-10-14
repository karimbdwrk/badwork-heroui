"use client";

import { useEffect } from "react";
import NextLink from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-center px-5 sm:px-8 pt-24 pb-32">
      <p className="font-mono text-xs text-bw-muted">Error</p>
      <h1 className="mt-4 max-w-[16ch] text-4xl sm:text-6xl font-semibold tracking-tighter leading-[0.95]">
        This page failed to load.
      </h1>
      <p className="mt-6 max-w-[42ch] text-sm sm:text-base leading-relaxed text-bw-muted">
        Something broke on our side. Try again, or head back to the home page.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          className="h-12 rounded-md bg-foreground px-8 font-medium tracking-tight text-background transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98]"
          type="button"
          onClick={() => reset()}
        >
          Try again
        </button>
        <NextLink
          className="text-sm underline decoration-bw-line underline-offset-[6px] transition-colors duration-200 hover:decoration-bw-fg"
          href="/"
        >
          Back to home
        </NextLink>
      </div>
    </section>
  );
}
