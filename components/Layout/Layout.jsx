import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const Layout = ({ children, ...props }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <Navbar {...props} />
        {children}
        <Footer />
      </div>
    </>
  )
}
