 import { motion } from "framer-motion";
 import { Briefcase, Calendar, MapPin } from "lucide-react";
 
 const experiences = [
   {
     title: "Public Relations Specialist",
     company: "Persona+ SJCE",
     duration: "Apr 2025 - Present · 11 mos",
     location: null,
     logo: "P+",
     color: "from-pink-500 to-rose-500",
   },
   {
     title: "Volunteer",
     company: "Project ReachOut",
     duration: "Dec 2024 - Present · 1 yr 3 mos",
     location: "Mysore, Karnataka, India",
     logo: "PR",
     color: "from-blue-500 to-cyan-500",
   },
   {
     title: "Student Coordinator",
     company: "TESLA SJCE",
     duration: "Nov 2024 - Present · 1 yr 4 mos",
     location: "Mysore, Karnataka, India",
     logo: "T",
     color: "from-violet-500 to-purple-500",
   },
 ];
 
 const Experience = () => {
   return (
     <section id="experience" className="py-20 bg-secondary/30">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
             Experience
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             My journey in leadership, public relations, and community service
           </p>
         </motion.div>
 
         <div className="max-w-3xl mx-auto space-y-6">
           {experiences.map((exp, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
             >
               <div className="flex items-start gap-4">
                 {/* Logo */}
                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                   {exp.logo}
                 </div>
 
                 {/* Content */}
                 <div className="flex-1">
                   <h3 className="text-xl font-semibold text-foreground mb-1">
                     {exp.title}
                   </h3>
                   <p className="text-primary font-medium mb-2">
                     {exp.company}
                   </p>
                   
                   <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                     <div className="flex items-center gap-1">
                       <Calendar className="w-4 h-4" />
                       <span>{exp.duration}</span>
                     </div>
                     {exp.location && (
                       <div className="flex items-center gap-1">
                         <MapPin className="w-4 h-4" />
                         <span>{exp.location}</span>
                       </div>
                     )}
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Experience;