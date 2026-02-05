 import { motion } from "framer-motion";
import { Folder, Trophy, Cloud, Database } from "lucide-react";
 
 const projects = [
   {
    title: "UPI Fraud Detection System",
    description: "Real-time hybrid ML system combining rule-based analysis, anomaly detection, and graph risk analysis to identify fraudulent transactions.",
    tags: ["Python", "PyTorch", "Graph ML", "Real-time"],
     color: "from-pink-500 to-rose-500",
    icon: Trophy,
    badge: "🏆 1st Place - Ashtrang Hackathon",
   },
   {
    title: "Cloud Online Book Store",
    description: "A cloud-based e-commerce platform for books with user authentication, cart management, and secure payment integration.",
    tags: ["Cloud Services", "Web Development", "Database"],
     color: "from-blue-500 to-cyan-500",
    icon: Cloud,
    badge: null,
   },
   {
    title: "Games & Movies Management",
    description: "A comprehensive DBMS project for managing games and movies inventory with CRUD operations, search functionality, and reporting.",
    tags: ["DBMS", "SQL", "Backend"],
     color: "from-violet-500 to-purple-500",
    icon: Database,
    badge: null,
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
                {project.badge && (
                  <div className="mb-4 inline-block px-3 py-1 bg-accent/20 text-primary rounded-full text-xs font-semibold border border-primary/30">
                    {project.badge}
                  </div>
                )}
                
                 <div className="flex items-start justify-between mb-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
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