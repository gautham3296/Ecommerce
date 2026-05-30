/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  hideText?: boolean;
}

export function LogoIcon({ className = "w-6 h-6", active = false }: { className?: string; active?: boolean }) {
  return (
    <svg 
      className={`${className} transition-all duration-500`}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rounded workspace boundary / desktop shape */}
      <rect 
        x="8" 
        y="14" 
        width="84" 
        height="72" 
        rx="20" 
        className="stroke-primary" 
        strokeWidth="6" 
        strokeLinejoin="round" 
      />
      
      {/* Premium minimal Desk Shelf / Monitor Riser bar */}
      <line 
        x1="18" 
        y1="50" 
        x2="82" 
        y2="50" 
        className="stroke-primary" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />

      {/* Styled mechanical keyboard / organizer tray lines in lower half */}
      <rect 
        x="28" 
        y="62" 
        width="44" 
        height="12" 
        rx="4" 
        className={`${active ? 'fill-secondary stroke-primary' : 'fill-primary/20 stroke-primary'}`}
        strokeWidth="4" 
        strokeLinejoin="round" 
      />

      {/* Aesthetic workspace ambient accent element (Monitor/tablet holder notch) */}
      <path 
        d="M40 28 L60 28 M45 36 L55 36" 
        className="stroke-secondary" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export default function Logo({ className = "", iconClassName = "w-7 h-7", textClassName = "", hideText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Graphic Container with subtle accent background and hover scale motion */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary-container/10 border border-outline-variant/20 shadow-3xs overflow-hidden group-hover:border-primary/30 transition-all duration-300">
        <LogoIcon className={`${iconClassName} text-primary group-hover:scale-105`} />
        {/* Animated ambient backlight effect */}
        <span className="absolute inset-0 bg-radial from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      {!hideText && (
        <div className="flex flex-col justify-center">
          <span className={`font-serif text-base sm:text-lg md:text-xl font-extrabold text-primary tracking-tight leading-tight group-hover:text-primary-hover transition-colors ${textClassName}`}>
            pc<span className="text-secondary">essentials</span>
            <span className="text-secondary/60 text-[10px] md:text-xs font-mono font-medium ml-0.5 tracking-normal">.store</span>
          </span>
          <span className="text-[8px] font-sans font-bold uppercase tracking-[0.25em] text-on-surface-variant/70 leading-none">
            Workspace Atelier
          </span>
        </div>
      )}
    </div>
  );
}
