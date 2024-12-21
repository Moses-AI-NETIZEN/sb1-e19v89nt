import React from 'react';
import { scrollToSection } from '@/utils/scroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="text-gray-600 hover:text-green-700 transition-colors"
    >
      {children}
    </a>
  );
}