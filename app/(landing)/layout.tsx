import FooterComponent from '@/components/main-layout/footer'
import HeaderComponent from '@/components/main-layout/header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <HeaderComponent />
        <div className="flex-1 text-primary-03">{children}</div>
        <FooterComponent />
    </>
  )
}

export default Layout