 import { motion } from "framer-motion";
 import { ExternalLink, Folder } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const projects = [
   {
     title: "Campus Event Management",
     description: "Led the planning and coordination of college cultural events, managing a team of volunteers and ensuring successful execution.",
     tags: ["Event Planning", "Team Leadership", "Coordination"],
     color: "from-pink-500 to-rose-500",
   },
   {
     title: "Community Outreach Initiative",
     description: "Organized community service programs through Project ReachOut, impacting local communities in Mysore.",
     tags: ["Volunteering", "Community Service", "Social Impact"],
     color: "from-blue-500 to-cyan-500",
   },
   {
     title: "Public Relations Campaign",
     description: "Developed and executed PR strategies for Persona+ SJCE, enhancing the organization's visibility and engagement.",
     tags: ["PR Strategy", "Content Creation", "Branding"],
     color: "from-violet-500 to-purple-500",
   },
 ];
 
 const Projects = () => {
   return (
     <section id="projects" className="py-20 bg-secondary/30">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
             Projects & Initiatives
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((project, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
             >
               {/* Header gradient */}
               <div className={`h-2 bg-gradient-to-r ${project.color}`} />
               
               <div className="p-6">
                 <div className="flex items-start justify-between mb-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                     <Folder className="w-6 h-6 text-primary" />
                   </div>
                 </div>
 
                 <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                   {project.title}
                 </h3>
                 
                 <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                   {project.description}
                 </p>
 
                 <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag) => (
                     <span
                       key={tag}
                       className="px-2 py-1 bg-secondary text-muted-foreground rounded-md text-xs"
                     >
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Projects;