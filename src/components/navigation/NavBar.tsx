'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation link clicks
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Modern White Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center text-text-dark" onClick={handleNavLinkClick}>
              <Image
                src="/images/Doctordigital SVG-logo.svg"
                alt="Doctor Digital - Ιατρικό Μάρκετινγκ"
                width={220}
                height={60}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 items-center">
                <li><Link href="/" className="font-medium text-black hover:text-gray-500 transition-colors">Αρχική</Link></li>
                <li><Link href="/ypiresies" className="font-medium text-black hover:text-gray-500 transition-colors">Υπηρεσίες</Link></li>
                <li><Link href="/case-studies" className="font-medium text-black hover:text-gray-500 transition-colors">Case Studies</Link></li>
                <li><Link href="/blog" className="font-medium text-black hover:text-gray-500 transition-colors">Blog</Link></li>
                <li><Link href="/epikoinonia" className="btn-primary btn-sm">Επικοινωνία</Link></li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text-dark"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (toggled by state) */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} bg-white p-4 md:hidden shadow-md`}>
        <nav>
          <ul className="space-y-4">
            <li><Link href="/" onClick={handleNavLinkClick} className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Αρχική</Link></li>
            <li><Link href="/ypiresies" onClick={handleNavLinkClick} className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Υπηρεσίες</Link></li>
            <li><Link href="/case-studies" onClick={handleNavLinkClick} className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Case Studies</Link></li>
            <li><Link href="/blog" onClick={handleNavLinkClick} className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Blog</Link></li>
            <li><Link href="/epikoinonia" onClick={handleNavLinkClick} className="btn-primary w-full mt-4">Επικοινωνία</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
