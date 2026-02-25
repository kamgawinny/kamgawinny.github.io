'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ChaptersMenu } from './ChaptersMenu';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Sidebar onChaptersClick={() => setIsMenuOpen(true)} />
      <ChaptersMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
