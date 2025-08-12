
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>FEVEN ZEWDI - Artist Portfolio</title>
        <meta name="description" content="FEVEN ZEWDI is a multi-disciplinary artist. Explore her paintings, murals, sculptures and projects." />
      </Helmet>
      
      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-12 lg:mb-16"
      >
        <img  
          className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg" 
          alt="Artist FEVEN ZEWDI standing next to colorful abstract mural artwork"
          src="https://images.unsplash.com/photo-1571171152254-a1ec3ac7e535" />
      </motion.div>

      {/* Artist Bio */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto space-y-6 lg:space-y-8"
      >
        <p className="text-lg lg:text-xl leading-relaxed text-body">
          Feven Zewdi is a multi-disciplinary artist based in Northern California. Her work considers our continual process of growth and healing, and the ways we find joy and strength through connections with nature, one another, and ourselves.
        </p>

        <p className="text-lg lg:text-xl leading-relaxed text-body">
          Feven studied Anthropology at Vassar College and did her field work in Madagascar and France. She received her MA at California College of the Arts. Feven has been Artist in Residence for Google, and her work has been shown throughout the Bay Area and abroad, including Amelie Maison Paris, Headlands Center for the Arts, Southern Exposure, San Jose Institute of Contemporary Art, Traywick Contemporary, Pro Arts, The Lab, the diRosa Preserve, New Langton Arts, and national film festivals. She has been a guest on Full Expression Podcast and co-hosted the Headspace Podcast to talk about creativity as a tool for life. Her work has been awarded grants from the NAEA, Creative Sonoma, and California Arts Council. In 2022, she created the viral hotline of kids life advice called Peptoc. It received over 10 million calls in its first 9 months, and continues to get thousands of calls today (call 707-8-PEPTOC1).
        </p>

        <p className="text-lg lg:text-xl leading-relaxed text-body">
          In addition to her studio work, Feven is the founder and director of Roving Venue (RV), an itinerant gallery that produces innovative community-based public art projects in rural Sonoma County. Projects include a pie parade, sound tours, large scale puppet performances, building projections, and a box car regatta with rolling art sculptures.
        </p>
      </motion.div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </>
  );
}

export default HomePage;
