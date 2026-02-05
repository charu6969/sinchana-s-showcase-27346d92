 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { Menu, X, Linkedin } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const navItems = [
   { label: "About", href: "#about" },
   { label: "Skills", href: "#skills" },
   { label: "Experience", href: "#experience" },
   { label: "Education", href: "#education" },
   { label: "Projects", href: "#projects" },
 ];
 
 const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <motion.nav
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
       }`}
     >
       <div className="container mx-auto px-6">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <a href="#" className="text-xl font-bold text-primary">
             Sinchana S
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navItems.map((item) => (
               <a
                 key={item.label}
                 href={item.href}
                 className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
               >
                 {item.label}
               </a>
             ))}
             <Button size="sm" asChild>
               <a
                 href="https://linkedin.com/in/sinchana-s2027sjce"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Linkedin className="w-4 h-4 mr-2" />
                 LinkedIn
               </a>
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden text-foreground p-2"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
 
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden pb-4"
           >
             <div className="flex flex-col gap-4">
               {navItems.map((item) => (
                 <a
                   key={item.label}
                   href={item.href}
                   className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {item.label}
                 </a>
               ))}
               <Button size="sm" asChild className="w-fit">
                 <a
                   href="https://linkedin.com/in/sinchana-s2027sjce"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <Linkedin className="w-4 h-4 mr-2" />
                   LinkedIn
                 </a>
               </Button>
             </div>
           </motion.div>
         )}
       </div>
     </motion.nav>
   );
 };
 
 export default Navbar;