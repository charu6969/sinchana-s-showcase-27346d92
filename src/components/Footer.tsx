 import { Linkedin, Heart } from "lucide-react";
 
 const Footer = () => {
   return (
    <footer className="py-8 bg-background border-t border-border">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Sinchana S • Made with</span>
             <Heart className="w-4 h-4 text-primary fill-primary" />
           </div>
 
           <a
             href="https://linkedin.com/in/sinchana-s2027sjce"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
           >
             <Linkedin className="w-5 h-5" />
            <span className="text-sm">linkedin.com/in/sinchana-s2027sjce</span>
           </a>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;