import { Link, Outlet } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="hidden w-full border-b bg-blue-50 py-2 md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>info@limostore.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-blue-600" activeProps={{ className: 'font-extrabold text-blue-700 underline' }} activeOptions={{ exact: true }}>
            LimoStore
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              Services
            </Link>
            <Link
              to="/case-studies"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              Case Studies
            </Link>
            <Link
              to="/resources"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              Resources
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              activeProps={{ className: 'font-bold text-blue-600 underline' }}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-100">
        <div className="container py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Us</h3>
              <ul className="space-y-2">
                <li><Link to="/about/story">Our Story</Link></li>
                <li><Link to="/about/team">Our Team</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/consulting">Consulting</Link></li>
                <li><Link to="/services/automation">Automation</Link></li>
                <li><Link to="/services/transformation">Digital Transformation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/resources/whitepapers">Whitepapers</Link></li>
                <li><Link to="/resources/webinars">Webinars</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li><Link to="/contact">Get in Touch</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm">
            © {new Date().getFullYear()} Limo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
