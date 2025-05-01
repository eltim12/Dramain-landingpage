import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

import logo from "@/assets/nav-logo.svg";
import joinButton from "@/assets/nav-join-button.svg";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      // Added dark mode class directly if needed, ensure consistent styling
      className="dark w-full md:px-[46px] fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      height="80px"
    >
      {/* Left Section: Brand - Always visible */}
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1 my-[10px]"
            color="foreground"
            href="/"
          >
            <img src={logo} alt="Dramein Logo" className="w-auto h-[40px]" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Section: Navigation Links - Hidden below 'lg' breakpoint */}
      {/* This entire NavbarContent block will now be hidden until 'lg' */}
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {/* The inner div is no longer needed for hiding, parent handles it */}
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} className="mx-[32px]">
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "text-white :font-medium",
                "whitespace-nowrap hover:text-gray-400 transition-colors duration-200"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Section: Actions */}
      {/* Use 'hidden sm:flex' to hide on xs, show on sm and up */}
      {/* 'justify="end"' will push it right */}
      <NavbarContent className="hidden sm:flex" justify="end">
        {/* Download Button - Hidden below 'md' (remains unchanged) */}
        <NavbarItem className="hidden md:flex">
          {/* Using Button component correctly now */}
          <Button
            as={Link} // Render button as a link
            href={siteConfig.links.sponsor} // Make sure this links correctly
            radius="lg"
            variant="bordered"
            className="border-white hover:bg-white/10" // Example styling for bordered button
            aria-label="Join/Download" // Add aria-label for accessibility
          >
            <img
              src={joinButton}
              alt="Dramein join button"
              className="w-auto h-[24px]"
            />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile: Menu Toggle - Only visible below 'sm' */}
      {/* This content correctly shows only on extra-small screens */}
      <NavbarContent className="sm:hidden text-white" justify="end">
        <NavbarMenuToggle aria-label="Open menu" /> {/* Add aria-label */}
      </NavbarContent>

      {/* Mobile: Menu Content - Remains largely the same */}
      {/* Ensure 'dark' class is applied if needed for theme consistency */}
      <NavbarMenu className="dark bg-background/80 backdrop-blur-md">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                // Apply mobile-specific text styles if needed
                className="w-full center my-3" // Ensure link takes full width for tapping
                color={"foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {/* Download button in mobile menu */}
          {/* <NavbarMenuItem>
            <Button
              as={Link}
              href={siteConfig.links.sponsor}
              color="primary"
              variant="flat"
              className="w-full" // Make button full width
              size="lg" // Match link size
            >
              Download for free
            </Button>
          </NavbarMenuItem> */}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};