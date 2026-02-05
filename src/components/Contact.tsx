 import { motion } from "framer-motion";
 import { Linkedin, Mail, MapPin, Send } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Contact = () => {
   return (
     <section id="contact" className="py-20">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
             Get In Touch
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
           <p className="text-muted-foreground max-w-xl mx-auto">
             I'm always open to new opportunities and connections. 
             Feel free to reach out!
           </p>
         </motion.div>
 
         <div className="max-w-2xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="glass-card rounded-2xl p-8"
           >
             <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
               <a
                 href="https://linkedin.com/in/sinchana-s2027sjce"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors group"
               >
                 <Linkedin className="w-6 h-6 text-primary" />
                 <div className="text-left">
                   <p className="text-sm text-muted-foreground">LinkedIn</p>
                   <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                     Connect with me
                   </p>
                 </div>
               </a>
 
               <div className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl">
                 <MapPin className="w-6 h-6 text-primary" />
                 <div className="text-left">
                   <p className="text-sm text-muted-foreground">Location</p>
                   <p className="text-foreground font-medium">
                     Mysore, Karnataka
                   </p>
                 </div>
               </div>
             </div>
 
             <div className="mt-8 text-center">
               <Button size="lg" asChild className="px-8">
                 <a
                   href="https://linkedin.com/in/sinchana-s2027sjce"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <Send className="w-4 h-4 mr-2" />
                   Let's Connect
                 </a>
               </Button>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;