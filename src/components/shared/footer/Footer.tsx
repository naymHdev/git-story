"use client";

import { motion } from "framer-motion";
import {
  Youtube,
  Twitter,
  Linkedin,
  Monitor,
  Sun,
  Moon,
  Globe,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import GPContainer from "../../ui/GPContainer";

// ─── Types ───────────────────────────────────────────────────────────────────

type Theme = "system" | "light" | "dark";
type Language = "English" | "বাংলা" | "Español";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "MCP Server", href: "#" },
      { label: "Backend Testing", href: "#" },
      { label: "Frontend Testing", href: "#" },
      { label: "Data Testing", href: "#" },
      { label: "AI Agent/Model Testing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Hackathon", href: "#" },
      { label: "Discover", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Use Cases", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "X / Twitter" },
  { icon: FaDiscord as React.ElementType, href: "#", label: "Discord" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordmarkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ThemeToggle() {
  const [active, setActive] = useState<Theme>("system");

  const options: { value: Theme; icon: React.ElementType }[] = [
    { value: "system", icon: Monitor },
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
  ];

  return (
    <div className="flex items-center gap-1 rounded-none border border-white/10 bg-white/5 p-1">
      {options.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setActive(value)}
          className={`relative rounded-md p-1.5 transition-all duration-200 ${
            active === value
              ? "bg-[#22c55e]/20 text-[#22c55e]"
              : "text-white/40 hover:text-white/70"
          }`}
          aria-label={`${value} theme`}
        >
          <Icon size={14} strokeWidth={1.8} />
        </button>
      ))}
    </div>
  );
}

function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Language>("English");
  const languages: Language[] = ["English", "বাংলা", "Español"];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 rounded-none border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/60 transition-colors hover:text-white/90"
      >
        <Globe size={13} strokeWidth={1.8} />
        <span>{selected}</span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="absolute bottom-full mb-1 right-0 w-32 rounded-none border border-white/10 bg-[#141414] py-1 shadow-xl z-50"
        >
          {languages.map((lang) => (
            <li key={lang}>
              <button
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                className={`w-full px-3 py-1.5 text-left text-xs transition-colors hover:bg-white/5 ${
                  selected === lang ? "text-[#22c55e]" : "text-white/60"
                }`}
              >
                {lang}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-secondary  overflow-hidden">
      <GPContainer>
        {/* ── Top grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-10 pt-14 pb-10 md:grid-cols-[1fr_repeat(4,auto)] md:gap-16"
        >
          {/* Left: Stay Updated */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Stay Updated
            </h2>

            {/* Discord CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full max-w-[240px] items-center justify-between rounded-none border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
            >
              <span className="font-mono text-secondary text-sm tracking-wide">
                Join Discord
              </span>
              <ChevronRight
                size={15}
                className="text-white/40 transition-transform group-hover:translate-x-0.5"
              />
            </motion.a>

            {/* SOC2 Badge */}
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
              <div className="text-center leading-none">
                <p className="text-[8px] font-semibold uppercase tracking-widest text-white/50">
                  AICPA
                </p>
                <p className="text-[11px] font-bold text-white/80">SOC2</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Link columns */}
          {footerColumns.map((col) => (
            <motion.div
              key={col.title}
              variants={itemVariants}
              className="flex flex-col gap-4"
            >
              <h3 className="text-[13px] font-medium text-primary">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-white/55 transition-colors duration-150 hover:text-white/90"
                    >
                      <span className="text-secondary">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-white/[0.06]" />

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-start gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Social icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-8 w-8 items-center justify-center rounded-none border border-white/10 bg-white/4  transition-colors hover:border-white/20 hover:text-white/80"
              >
                <span className="text-primary">
                  <Icon size={14} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right: theme + language + copyright */}
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />
            <LanguageSelect />
            <span className="text-xs text-white/35 font-mono">
              Copyright © 2026 GitPostAI
            </span>
          </div>
        </motion.div>
      </GPContainer>

      {/* ── Watermark wordmark ── */}
      <motion.div
        variants={wordmarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <p
          className="whitespace-nowrap text-center font-black uppercase leading-none tracking-tighter text-white/[0.04]"
          style={{ fontSize: "clamp(64px, 14vw, 180px)" }}
        >
          GitPostAI
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
