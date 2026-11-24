'use client'

import { useState, useEffect } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import BadworkLogo from "./BadworkLogo";

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setShowLogo(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.5; // 50vh

      setShowLogo(scrollPosition > threshold);
    };

    handleScroll(); // Vérifier la position initiale
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);


  return (
    <HeroUINavbar maxWidth="full" 
              className={clsx(
                "transition-opacity duration-300",
                showLogo ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink aria-label="badwork, accueil" className="flex justify-start items-center gap-1 rounded-sm" href="/">
              <BadworkLogo width={120} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2">
          <ThemeSwitch className="" classNames={{}} />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
