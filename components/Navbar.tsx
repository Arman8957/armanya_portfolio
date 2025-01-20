"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Full-stack Web Development</HoveredLink>
            <HoveredLink href="#">System Design</HoveredLink>
            <HoveredLink href="#">Blockchain</HoveredLink>
            <HoveredLink href="#">AI Enthusiast</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Ability">
          <div className="  text-sm grid grid-cols-2 gap-5 p-4">
            <ProductItem
              title="Algochurn"
              href="#"
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="#"
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="#"
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="#"
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Blog</HoveredLink>
            <HoveredLink href="#">Stack</HoveredLink>
            <HoveredLink href="#">Team</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
