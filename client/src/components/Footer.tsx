import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-card text-foreground py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2 text-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Isabel
              <span className="text-primary mx-3">&</span>
              Rustin
            </h2>
            <p className="text-foreground text-lg">
              Parish of the Holy Family
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;