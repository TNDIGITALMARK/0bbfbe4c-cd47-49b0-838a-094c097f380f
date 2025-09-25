"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CTAButton } from "./cta-button";
import { Menu, X, Diamond } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Get Quote", href: "/quote" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gemstone-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Diamond className="w-8 h-8 text-gemstone-gold group-hover:text-gemstone-gold/80 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold text-gemstone-white group-hover:text-gemstone-gold transition-colors">
                GEMSTONE
              </span>
              <span className="font-source-sans text-xs text-gemstone-gold uppercase tracking-wider">
                LIGHTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-source-sans text-gemstone-white hover:text-gemstone-gold transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+1-555-GEMSTONE"
              className="font-source-sans text-gemstone-white hover:text-gemstone-gold transition-colors text-sm"
            >
              (555) GEMSTONE
            </a>
            <CTAButton size="sm">
              GET FREE QUOTE
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gemstone-white hover:text-gemstone-gold transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gemstone-charcoal/95 backdrop-blur-md border-t border-gemstone-dark-gray">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-source-sans text-gemstone-white hover:text-gemstone-gold transition-colors duration-200 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gemstone-dark-gray">
                <a
                  href="tel:+1-555-GEMSTONE"
                  className="block font-source-sans text-gemstone-white hover:text-gemstone-gold transition-colors text-base mb-4"
                >
                  (555) GEMSTONE
                </a>
                <CTAButton className="w-full">
                  GET FREE QUOTE
                </CTAButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };