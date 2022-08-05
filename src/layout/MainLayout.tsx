import React from 'react';
import Header from '@/components/Header';
import Nav from '@/common/Nav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return(
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
