import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const publications = [
  { author: "Taylor, Jess", url: "https://madelocalmagazine.com/2020/11/art-as-activism/" },
  { author: "Baig, Yousef", url: "https://www.pressdemocrat.com/article/lifestyle/new-santa-rosa-mural-spotlights-women-activists-fighting-for-equality/" },
  { author: "Bonita, Caroline", url: "https://shoplocalhealdsburg.com/f/little-saints-latest-mural-celebrates-a-habesha-coffee-ritual" },
  { author: "Swanson, Charlie", url: "https://bohemian.com/mural-project-pops-up-in-santa-rosa-1/" },
  { author: "Swanson, Charles", url: "https://www.pressdemocrat.com/article/lifestyle/meet-the-recipients-of-sonoma-countys-inaugural-arts-and-cultural-equity-f/" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
};

function PublicationsPage() {
  return (
    <>
      <Helmet>
        <title>Publications - FEVEN ZEWDI</title>
        <meta name="description" content="A list of publications and write-ups about FEVEN ZEWDI's work." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold heading-primary mb-12"
        >
          Publications
        </motion.h1>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {publications.map((pub, index) => (
            <motion.li key={index} variants={itemVariants}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-lg text-body hover:text-gray-900 transition-colors duration-300"
              >
                <span className="font-semibold heading-secondary group-hover:text-black">{pub.author}</span>
                <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-sm text-gray-500 break-all">{pub.url}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
       <div className="h-24"></div>
    </>
  );
}

export default PublicationsPage;