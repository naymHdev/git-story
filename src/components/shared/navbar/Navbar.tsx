"use client";

import Link from "next/link";
import GPContainer from "../../ui/GPContainer";
import { useState } from "react";
import clsx from "clsx";
import GPButton from "../../ui/GPButton";

const navMenus = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  { name: "Blog", href: "#blog" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <header className="">
        <GPContainer padding="sm" className=" border-b border-secondary">
          <div className=" flex items-center justify-between">
            {/*  --------- Logo --------- */}
            <div>
              <Link
                href={"/"}
                prefetch={false}
                className="flex items-center gap-2 group"
              >
                <span className="font-bold text-lg tracking-tight text-foreground">
                  GitPost <span className="text-primary">Ai</span>
                </span>
              </Link>
            </div>

            {/* --------- Desktop Nav --------- */}
            <div className="hidden md:flex items-center gap-1 divide-x divide-border">
              {navMenus?.map((menu) => (
                <div key={menu.name}>
                  <Link
                    onMouseEnter={() => setActiveLink(menu.name)}
                    onMouseLeave={() => setActiveLink(null)}
                    href={menu.href}
                  >
                    <p
                      className={clsx(
                        "px-3 py-2 text-sm font-medium text-primary",
                        activeLink === menu.name
                          ? "bg-secondary transform transition-transform scale-105"
                          : "",
                      )}
                    >
                      {menu.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            {/* ---------- Desktop CTA ---------- */}
            <div className="hidden md:flex items-center gap-2">
              <GPButton className="bg-gradient-primary  hover:bg-secondary border-secondary border px-10">
                Sign In
              </GPButton>
              <GPButton className=" bg-primary text-background hover:bg-text-disabled hover:opacity-80">
                Get Started Free
              </GPButton>
            </div>
          </div>
        </GPContainer>
      </header>
    </>
  );
};

export default Navbar;
