"use client";

import Link from "next/link";
import GPContainer from "../../ui/GPContainer";
import GPButton from "../../ui/GPButton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronRight } from "lucide-react";
import clsx from "clsx";

const navMenus = [
  { name: "Features", href: "/features" },
  { name: "Workflow", href: "/work-flow" },
  { name: "Pricing", href: "/pricing" },
  { name: "Docs", href: "/docs" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "sticky top-0 z-50 border-b border-linkedin/70 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-sm",
        )}
      >
        <GPContainer padding="sm">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              prefetch={false}
              className="flex items-center gap-2 group"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center justify-center size-7 rounded-md bg-primary text-primary-foreground"
              >
                <Zap className="size-4" strokeWidth={2.5} />
              </motion.div>
              <span className="font-bold text-base tracking-tight text-foreground">
                GitPost<span className="text-primary">Ai</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5 divide-x divide-border">
              {navMenus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  onMouseEnter={() => setActiveLink(menu.name)}
                  onMouseLeave={() => setActiveLink(null)}
                  className="relative px-3 py-1.5 text-sm font-medium hover:text-foreground rounded-none transition-colors duration-150"
                >
                  {/* Hover pill bg */}
                  <AnimatePresence>
                    {activeLink === menu.name && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-none bg-secondary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10 text-primary">
                    {menu.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
              <Link href={"/sign-in"}>
                <GPButton className="bg-gradient-primary  hover:bg-secondary border-secondary border px-12">
                  Sign In
                </GPButton>
              </Link>
              <Link href={"/sign-up"}>
                <GPButton className=" bg-primary text-background hover:bg-text-disabled hover:opacity-80">
                  Get Started Free
                </GPButton>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center size-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="size-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="size-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </GPContainer>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-72 border-l border-border shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-14 border-b border-border shrink-0">
                <span className="font-semibold text-sm text-foreground">
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X className="size-4" />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {navMenus.map((menu, i) => (
                  <motion.div
                    key={menu.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.045,
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={menu.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <span className=" text-primary">{menu.name}</span>
                      <ChevronRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navMenus.length * 0.045 + 0.05,
                  duration: 0.25,
                }}
                className="px-4 pb-6 pt-3 border-t border-border space-y-2 shrink-0"
              >
                <GPButton className="bg-gradient-primary  hover:bg-secondary border-secondary border w-full">
                  Sign In
                </GPButton>
                <GPButton className=" bg-primary text-background hover:bg-text-disabled hover:opacity-80 w-full">
                  Get Started Free
                </GPButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
