 import { motion } from "framer-motion";
 import { Linkedin, Mail, MapPin } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Hero = () => {
   return (
     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
         <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
       </div>
 
       <div className="container mx-auto px-6 py-20">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
           {/* Profile Image */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             className="relative"
           >
             <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
               <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                 <span className="text-6xl lg:text-8xl font-bold text-primary">S</span>
               </div>
             </div>
             <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-lg border border-border">
               <span className="text-2xl">✨</span>
             </div>
           </motion.div>
 
           {/* Content */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-center lg:text-left max-w-xl"
           >
             <p className="text-primary font-medium mb-2">Hello, I'm</p>
             <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
               Sinchana S
             </h1>
             <p className="text-xl text-muted-foreground mb-6">
               Public Relations Specialist | Student Coordinator | Volunteer
             </p>
             
             <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
               <MapPin className="w-4 h-4" />
               <span>Mysore, Karnataka, India</span>
             </div>
 
             <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
               <Button asChild>
                 <a 
                   href="https://linkedin.com/in/sinchana-s2027sjce" 
                   target="_blank" 
                   rel="noopener noreferrer"
                 >
                   <Linkedin className="w-4 h-4 mr-2" />
                   Connect on LinkedIn
                 </a>
               </Button>
               <Button variant="outline" asChild>
                 <a href="#experience">
                   View Experience
                 </a>
               </Button>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;