import React, { useRef } from "react"
import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Mail, Menu, Phone, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logoImage from "../../assets/images/logo.png"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";


const storyItems = [
  { title: "About Us", href: "/about" },
  { title: "Team", href: "/team" },
  { title: "Value & Mission", href: "/values" },
]

const programItems = [
  { title: "Mode of Training", href: "/training" },
  { title: "Services", href: "services" },
  { title: "Nurture for Business", href: "/nurture" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  const navigate = useNavigate() 
   const location = useLocation()
    const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

 const handleDemoClick = () => {
  setMobileMenuOpen(false);
  scrollToSection("registration");
};
const scrollToSection = (sectionId) => {
  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: sectionId } });
  } else {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
};

let timeoutRef = useRef(null);

const handleEnter = (section) => {
  clearTimeout(timeoutRef.current);
  setOpenSection(section);
};

const handleLeave = () => {
  timeoutRef.current = setTimeout(() => setOpenSection(null), 200);
};

  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-blue-900 text-white">
        <div className="mx-auto flex ml-4 mr-4 md:ml-10 md:mr-10 items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:9711303396" className="flex items-center gap-2 hover:underline">
              <Phone className="w-4 h-4" />
              <span>+91 9711303396</span>
            </a>
            <a href="mailto:support@nurtureorg.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">support@nurtureorg.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>

          <div className="flex items-center gap-3" >
          <button
  onClick={() => scrollToSection("registration")}
  className="hidden sm:flex bg-gradient-to-r rounded-[6px] from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
             text-white font-bold px-2 py-1 text-sm cursor-pointer
             shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
>
  Register for Demo
</button>

            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/share/1K7RavQ1kE/" target="_blank" rel="noreferrer" className="hover:text-teal-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/nurtureorg07?igsh=MWVmazV1eHVyNjVycg==
" target="_blank" rel="noreferrer" className="hover:text-teal-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nurture-training-solutions-7b940a38a" target="_blank" rel="noreferrer" className="hover:text-teal-300">
                <Linkedin className="w-5 h-5" />
              </a>
               <a href="https://www.youtube.com/@NurtureTrainingSolutions" target="_blank" rel="noreferrer" className="hover:text-teal-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#ddd] bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center space-x-2">
      <a href="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
     <img className="w-[80px]" src={logoImage} alt = "Nurture" />
      </a>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-rubik">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="#" className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium" onClick={() => scrollToSection("packages")}>
              Packages
            </Link>

            {/* Story Dropdown */}
            <div
  onMouseEnter={() => handleEnter("ourStory")}
  onMouseLeave={handleLeave}
  className="relative"
>
  <Popover open={openSection === "ourStory"}>
    <PopoverTrigger asChild>
      <span className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 cursor-pointer font-medium">
        Story <ChevronDown className="w-4 h-4" />
      </span>
    </PopoverTrigger>

    <PopoverContent className="w-64 bg-white border-gray-200 p-0   shadow-lg font-rubik ">
      {storyItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block w-full px-3 py-4 text-gray-700 border-b border-[#ddd] hover:bg-cyan-50 hover:text-blue-900  font-heebo font-semibold"
        >
          {item.title}
        </Link>
      ))}
    </PopoverContent>
  </Popover>
</div>



            {/* Programs Dropdown */}
                   <div
      onMouseEnter={() => handleEnter("program")}
      onMouseLeave={handleLeave}
      className="relative"
    >
      <Popover open={openSection === "program"}>
        {/* Hover Trigger */}
        <PopoverTrigger asChild>
          <span className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 font-medium cursor-pointer">
            Programs <ChevronDown className="w-4 h-4" />
          </span>
        </PopoverTrigger>

        {/* Dropdown Content */}
        <PopoverContent
          align="start"
          className="w-64 bg-white border border-gray-200 shadow-lg font-rubik p-0"
        >
          {programItems.map((item) => (
            <div key={item.href}>
              {item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className="block w-full px-3 py-4 text-gray-700 border-b border-[#ddd] hover:bg-cyan-50 hover:text-blue-900  font-heebo font-semibold"
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-3 py-4 text-gray-700 border-b border-[#ddd] hover:bg-cyan-50 hover:text-blue-900  font-heebo font-semibold"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>

            <Link to="/contact" className="text-gray-700 hover:text-cyan-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
           <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 hover:bg-gray-100"
        >

        <Menu className="!h-[120px] !w-8" />

          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-80 bg-white border-gray-200 px-6 py-6 font-rubik"
      >
        <div className="flex flex-col space-y-6">
          {/* Simple Links */}
          <Link
            to="/"
            className="text-lg font-medium text-gray-700 hover:text-cyan-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
           <Link to="#" className="text-lg text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium" onClick={() => scrollToSection("packages")}>
              Packages
            </Link>

          {/* Accordion: Story */}
          <div>
            <button
              onClick={() => toggleSection("story")}
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 menu-main"
            >
              <span className="menu-main text-lg font-medium text-gray-700">Story</span>
              {openSection === "story" ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openSection === "story" && (
              <div className="mt-2 pl-4 space-y-2">
                {storyItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-gray-600 hover:text-cyan-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Accordion: Programs */}
       <div>
  <button
    onClick={() => toggleSection("programs")}
    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 menu-main"
  >
    <span className="menu-main text-lg font-medium text-gray-700">Programs</span>
    {openSection === "programs" ? (
      <ChevronUp className="w-5 h-5" />
    ) : (
      <ChevronDown className="w-5 h-5" />
    )}
  </button>

  {openSection === "programs" && (
    <div className="mt-2 pl-4 space-y-2">
      {programItems.map((item) =>
        item.href.startsWith("/") ? (
          // Normal page link
          <Link
            key={item.href}
            to={item.href}
            className="block text-gray-600 hover:text-cyan-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.title}
          </Link>
        ) : (
          // Scroll to section on Home
          <button
            key={item.href}
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToSection(item.href);
            }}
            className="block text-left text-gray-600 hover:text-cyan-600 w-full"
          >
            {item.title}
          </button>
        )
      )}
    </div>
  )}
</div>

          <Link
            to="/contact"
            className="text-lg font-medium text-gray-700 hover:text-cyan-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
                           text-white font-bold px-2 py-1 text-sm rounded-[6px] cursor-pointer
                           shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                           onClick={handleDemoClick}
              >
                Register for Demo
              </Button>
        </div>
      </SheetContent>
    </Sheet>
        </div>
      </header>
    </>
  )
}

export default Header
