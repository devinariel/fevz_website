import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Milestone } from 'lucide-react';

const projects = [
  { year: "2022", author: "Swanson, Charles", url: "https://www.pressdemocrat.com/article/lifestyle/meet-the-recipients-of-sonoma-countys-inaugural-arts-and-cultural-equity-f/", title: "Recipient of Sonoma County's Inaugural Arts and Cultural Equity Grant" },
  { year: "2021", author: "Swanson, Charlie", url: "https://bohemian.com/mural-project-pops-up-in-santa-rosa-1/", title: "Mural Project Pops Up in Santa Rosa" },
  { year: "2021", author: "Bonita, Caroline", url: "https://shoplocalhealdsburg.com/f/little-saints-latest-mural-celebrates-a-habesha-coffee-ritual", title: "Little Saint's Latest Mural Celebrates a Habesha Coffee Ritual" },
  { year: "2020", author: "Baig, Yousef", url: "https://www.pressdemocrat.com/article/lifestyle/new-santa-rosa-mural-spotlights-women-activists-fighting-for-equality/", title: "New Santa Rosa Mural Spotlights Women Activists" },
  { year: "2020", author: "Taylor, Jess", url: "https://madelocalmagazine.com/2020/11/art-as-activism/", title: "Art as Activism Feature" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
};

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects - FEVEN ZEWDI</title>
        <meta name="description" content="A chronological timeline of FEVEN ZEWDI's projects and press mentions." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold heading-primary mb-16"
        >
          Projects & Press
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-12">
                <div className="absolute left-4 top-1 -translate-x-1/2">
                  <span className="block h-8 w-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                     <Milestone className="w-4 h-4 text-gray-500" />
                  </span>
                </div>
                <div>
                   <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">{project.year}</span>
                   <h2 className="text-2xl font-bold heading-secondary mt-1">{project.title}</h2>
                   <p className="mt-2 text-body">
                     Write-up by {project.author}.{' '}
                     <a 
                       href={project.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                     >
                       Read More <ExternalLink className="ml-1 w-4 h-4"/>
                     </a>
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="h-24"></div>
    </>
  );
}

export default ProjectsPage;