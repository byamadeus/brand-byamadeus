import React from 'react';
import Script from 'next/script';

const navLinks = [
  { label: 'About', href: '#' },
  { label: 'Archive', href: '#' },
];

export function Nav() {
  return (
    <>
    <Script 
        src="/portfolio-nav.js" 
        strategy="afterInteractive"  // Load after page is interactive
      />
    <portfolio-nav></portfolio-nav>
    {/* This is the buttons for Navs in other sites */}
    {/* <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-[1] font-['Noto_Sans',_sans-serif]"> 
      <div className="group relative flex items-center justify-center 
                      bg-[rgba(255,255,255,0.36)] backdrop-blur-[4px] 
                      border gap-[4px] border-[rgba(10,10,10,0.1)] rounded-full 
                      p-1.5 transition-all duration-300">
        
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-1 px-4 py-2 rounded-[24px] 
                       text-[rgb(10,10,10)] no-underline text-lg font-medium 
                       tracking-[0.02em] whitespace-nowrap
                       transition-all duration-300
                       hover:bg-[rgba(209,209,209,0.57)] hover:text-black"
          >
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </nav> */}
    </>
  );
}