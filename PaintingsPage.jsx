
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const paintings = [
  {
    id: 1,
    src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/10f2fe53-f982-49fc-9874-9344aafc86e9/d7c0735f05653af4d5300f93991dacfb.jpg",
    alt: "Painting of a woman with elaborate braided hair and white flowers floating around her"
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/10f2fe53-f982-49fc-9874-9344aafc86e9/2eb4807e37bcab81a902624e45d65563.jpg",
    alt: "Abstract painting with orange, red, and black tones, featuring small blue and white shapes"
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/10f2fe53-f982-49fc-9874-9344aafc86e9/29d244625714c3e288264d010f9f82da.jpg",
    alt: "Colorful abstract watercolor painting with ink line drawings resembling fantastical structures"
  }
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
};

function PaintingsPage() {
  return (
    <>
      <Helmet>
        <title>Paintings - FEVEN ZEWDI</title>
        <meta name="description" content="A collection of paintings by FEVEN ZEWDI." />
      </Helmet>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {paintings.map((painting) => (
          <motion.div 
            key={painting.id} 
            className="overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src={painting.src} alt={painting.alt} className="w-full h-auto object-cover aspect-square" />
          </motion.div>
        ))}
      </motion.div>
      <div className="h-24"></div>
    </>
  );
}

export default PaintingsPage;
