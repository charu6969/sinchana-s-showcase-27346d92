 import { motion } from "framer-motion";
 import { User, Heart, Target } from "lucide-react";
 
 const About = () => {
   return (
     <section id="about" className="py-20">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
             About Me
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <div className="max-w-4xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="glass-card rounded-2xl p-8 mb-8"
           >
             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
               Hello! I'm <span className="text-primary font-semibold">Sinchana S</span>, 
               a passionate student at SJCE, Mysore with a strong interest in public relations, 
               community service, and student leadership. I believe in making a positive impact 
               through collaboration and meaningful connections.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               Currently serving as a Public Relations Specialist at Persona+ SJCE, 
               a Student Coordinator at TESLA SJCE, and volunteering with Project ReachOut. 
               I'm dedicated to personal growth and contributing to my community.
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-3 gap-6">
             {[
               {
                 icon: User,
                 title: "Leadership",
                 description: "Coordinating teams and managing initiatives at college organizations",
               },
               {
                 icon: Heart,
                 title: "Community Service",
                 description: "Volunteering and making a positive impact in local communities",
               },
               {
                 icon: Target,
                 title: "Public Relations",
                 description: "Building connections and enhancing organizational presence",
               },
             ].map((item, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                 className="glass-card rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
               >
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                   <item.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;