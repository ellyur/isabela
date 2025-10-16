import { motion } from 'framer-motion';

import guestsImage from "@assets/ad9b225f-bb28-4bb2-a530-6a53b54ee90a_1760596619082.png";
import principalSponsorsImage from "@assets/Gemini_Generated_Image_gv3ykfgv3ykfgv3y_1760596115946.png";

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <p className="text-sm text-foreground/80 mb-3">(Parents and Principal Sponsors)</p>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
                <div className="mt-6">
                  <p className="text-sm text-foreground/80 mb-3 text-center">Any Shades of Gray</p>
                  <div className="flex justify-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#c8c8c6' }}></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#949597' }}></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#c1b6b0' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
                <div className="mt-6">
                  <p className="text-sm text-foreground/80 mb-3 text-center">Shades of Black</p>
                  <div className="flex justify-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#000000' }}></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#1a1a1a' }}></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#2d2d2d' }}></div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 border border-primary/20 rounded-xl p-6">
                  <p className="text-lg font-display font-bold text-foreground mb-3 text-center">
                    Black Formal Attire
                  </p>
                  <p className="text-sm text-foreground text-center leading-relaxed">
                    No jeans, no shirts, no white dress for ladies.
                    <br />
                    Strictly formal attire.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default DressCodeSection;