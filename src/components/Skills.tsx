 import { motion } from "framer-motion";
 
 const skillCategories = [
   {
     title: "Communication",
     skills: ["Public Speaking", "Written Communication", "Presentation Skills", "Interpersonal Skills"],
   },
   {
     title: "Leadership",
     skills: ["Team Management", "Event Coordination", "Project Planning", "Decision Making"],
   },
   {
     title: "Technical",
     skills: ["Microsoft Office", "Social Media Management", "Content Creation", "Data Analysis"],
   },
   {
     title: "Soft Skills",
     skills: ["Problem Solving", "Time Management", "Adaptability", "Collaboration"],
   },
 ];
 
 const Skills = () => {
   return (
     <section id="skills" className="py-20 bg-secondary/30">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
             Skills
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
           {skillCategories.map((category, categoryIndex) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
               className="glass-card rounded-2xl p-6"
             >
               <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 bg-primary rounded-full" />
                 {category.title}
               </h3>
               <div className="flex flex-wrap gap-2">
                 {category.skills.map((skill, skillIndex) => (
                   <motion.span
                     key={skill}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                     className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                   >
                     {skill}
                   </motion.span>
                 ))}
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Skills;