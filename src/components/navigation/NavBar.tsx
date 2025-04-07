'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MAIN_NAV } from '@/constants/navigation';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation link clicks
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setHoverDropdown(null);
  };

  // Toggle dropdown menu (for mobile)
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Handle mouse enter for desktop dropdown
  const handleMouseEnter = (label: string) => {
    setHoverDropdown(label);
  };

  // Handle mouse leave for desktop dropdown
  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown to make it more user-friendly
    setTimeout(() => {
      setHoverDropdown(null);
    }, 100);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <nav className="hidden md:block" ref={dropdownRef}>
              <ul className="flex space-x-6 items-center">
                {MAIN_NAV.map((item) => (
                  <li key={item.path} className="relative">
                    {item.children ? (
                      <div
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className="font-medium text-black hover:text-gray-500 transition-colors flex items-center py-2"
                        >
                          {item.label}
                          <svg
                            className={`ml-1 w-4 h-4 transition-transform ${(hoverDropdown === item.label) ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {hoverDropdown === item.label && (
                          <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg pt-3 pb-2 z-50 border border-gray-100 animate-fadeIn">
                            {/* Invisible bridge to prevent gap */}
                            <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                href={child.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-200 transition-colors"
                                onClick={handleNavLinkClick}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={item.path === '/epikoinonia' ? 'btn-primary btn-sm' : 'font-medium text-black hover:text-gray-500 transition-colors'}
                        onClick={handleNavLinkClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
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
            {MAIN_NAV.map((item) => (
              <li key={item.path}>
                {item.children ? (
                  <div className="py-2">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full font-medium text-black hover:text-gray-500 transition-colors"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    {activeDropdown === item.label && (
                      <div className="mt-2 ml-4 border-l-2 border-gray-200 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className="block py-2 text-sm text-gray-700 hover:text-brand-200 transition-colors"
                            onClick={handleNavLinkClick}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={handleNavLinkClick}
                    className={item.path === '/epikoinonia' ? 'btn-primary w-full block mt-4' : 'block py-2 font-medium text-black hover:text-gray-500 transition-colors'}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
