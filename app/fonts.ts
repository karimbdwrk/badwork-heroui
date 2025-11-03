import { Geist, Russo_One } from "next/font/google";

export const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});