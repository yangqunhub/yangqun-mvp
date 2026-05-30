"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/system", label: "我的系统" },
  { href: "/services", label: "服务流程" },
  { href: "/journey", label: "成长轨迹" },
  { href: "/contact", label: "联系方式" },
];

const colors = {
  primary: "#8B7355",
  text: "#2D2A26",
  textSecondary: "#6B6560",
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}>
      <nav style={{ maxWidth: "72rem", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontSize: "1.25rem", fontWeight: "600", color: colors.text }}>
          杨泽群
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: "0.875rem", color: colors.textSecondary }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          style={{ display: "none", padding: "0.5rem", color: colors.text }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ padding: "1rem 1.5rem 1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: "1rem", color: colors.textSecondary, padding: "0.5rem 0" }} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}