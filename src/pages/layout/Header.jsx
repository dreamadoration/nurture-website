import React, { useState } from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="w-full bg-blue-900 text-white">
        <div className="mx-auto flex ml-4 mr-4 md:ml-10 md:mr-10 items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1555123-4567" className="flex items-center gap-2 hover:underline">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@nurture.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@nurture.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
          <a href="#registration"className="hidden md:block">
  <Button
    size="lg"
    className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
               text-white font-bold px-2 py-1 text-sm rounded-lg cursor-pointer
               shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
  >
    Register for Demo
  </Button>
</a>

            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" className="hover:text-teal-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-teal-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-teal-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nurture</a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#packages">Packages</NavLink>

            <NavDropdown
              label="Story"
              open={openDropdown === "story"}
              onClick={() => toggleDropdown("story")}
            >
              <DropdownLink href="/#">Our Story</DropdownLink>
              <DropdownLink href="#team">Team</DropdownLink>
              <DropdownLink href="/#">Values & Mission</DropdownLink>
            </NavDropdown>

            <NavDropdown
              label="Programs"
              open={openDropdown === "programs"}
              onClick={() => toggleDropdown("programs")}
            >
              <DropdownLink href="/#">Mode of training</DropdownLink>
              <DropdownLink href="#services">Services</DropdownLink>
              <DropdownLink href="/#">Nurture for Business</DropdownLink>
            </NavDropdown>

            <NavLink href="">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 border rounded" onClick={() => setMobileOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-teal-700">Menu</h2>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <MobileLink href="/">Home</MobileLink>
              <MobileLink href="#packages">Packages</MobileLink>

              <MobileDropdown label="Story">
                <MobileLink href="/">Our Story</MobileLink>
                <MobileLink href="#team">Team</MobileLink>
                <MobileLink href="/">Values & Mission</MobileLink>
              </MobileDropdown>

              <MobileDropdown label="Programs">
                <MobileLink href="/">Mode of training</MobileLink>
                <MobileLink href="#services">Services</MobileLink>
                <MobileLink href="">Nurture for Business</MobileLink>
              </MobileDropdown>

              <MobileLink href="/">Contact</MobileLink>

              <button className="mt-6 px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------- Small Reusable Components ----------------- */
function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-blue-900 text-slate-700">{children}</a>
  );
}

function NavDropdown({ label, open, onClick, children }) {
  return (
    <div className="relative">
      <button onClick={onClick} className="flex items-center gap-1 hover:text-blue-900 text-slate-700">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-40 rounded-md bg-white border border-[#ddd] shadow-md">
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownLink({ href, children }) {
  return (
    <a href={href} className="block pt-3 pb-2 pl-2 pr-2 text-md border-b border-[#ddd]  hover:bg-slate-100">{children}</a>
  );
}

function MobileLink({ href, children }) {
  return (
    <a href={href} className="px-2 py-2 rounded hover:bg-slate-100 text-slate-700">{children}</a>
  );
}

function MobileDropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-2 py-2 rounded hover:bg-slate-100 text-slate-700"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="ml-4 flex flex-col">{children}</div>}
    </div>
  );
}

export default Header;
