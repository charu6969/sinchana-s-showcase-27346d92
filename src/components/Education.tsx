 import { motion } from "framer-motion";
 import { GraduationCap, Calendar, MapPin } from "lucide-react";
 
 const educationData = [
   {
     degree: "Bachelor of Engineering",
     institution: "Sri Jayachamarajendra College of Engineering (SJCE)",
     location: "Mysore, Karnataka",
     duration: "2023 - 2027 (Expected)",
     description: "Pursuing undergraduate degree with focus on engineering and technology.",
   },
   {
     degree: "Pre-University Education",
     institution: "PU College",
     location: "Karnataka, India",
     duration: "2021 - 2023",
     description: "Completed higher secondary education with science stream.",
   },
 ];
 
 const Education = () => {
   return (
     <section id="education" className="py-20">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
             Education
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <div className="max-w-3xl mx-auto">
           <div className="relative">
             {/* Timeline line */}
             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
 
             {educationData.map((edu, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.2 }}
                 className="relative mb-8 last:mb-0"
               >
                 <div className="flex gap-6">
                   {/* Timeline dot */}
                   <div className="hidden md:flex w-16 h-16 bg-primary/10 rounded-full items-center justify-center shrink-0 border-4 border-background relative z-10">
                     <GraduationCap className="w-6 h-6 text-primary" />
                   </div>
 
                   {/* Content */}
                   <div className="flex-1 glass-card rounded-2xl p-6">
                     <h3 className="text-xl font-semibold text-foreground mb-2">
                       {edu.degree}
                     </h3>
                     <p className="text-primary font-medium mb-3">
                       {edu.institution}
                     </p>
                     <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                       <div className="flex items-center gap-1">
                         <Calendar className="w-4 h-4" />
                         <span>{edu.duration}</span>
                       </div>
                       <div className="flex items-center gap-1">
                         <MapPin className="w-4 h-4" />
                         <span>{edu.location}</span>
                       </div>
                     </div>
                     <p className="text-muted-foreground text-sm">
                       {edu.description}
                     </p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Education;