import React from 'react';

const Footer: React.FC = () => {
  const handleNotImplemented = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Will update for you");
  };

  return (
    <footer className="bg-black px-6 py-24 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">
              MONIKA <br/> <span className="text-sanctum-orange">LADIES FITNESS</span>
            </h2>
            <p className="max-w-sm text-white/50 text-sm">
                Owned by Monika Nandedkar. Nanded's trusted women-only fitness center offering personalized Yoga, Zumba, and strength training.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24 text-sm tracking-widest uppercase text-white/60">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sanctum-orange">Social</h4>
              <a href="https://instagram.com/monika_ladies_fitness_club" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" onClick={handleNotImplemented} className="hover:text-white transition-colors">Facebook</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sanctum-orange">Studio</h4>
              <a href="#locations" className="hover:text-white transition-colors">Location</a>
              <a href="#disciplines" className="hover:text-white transition-colors">Services</a>
              <a href="#locations" className="hover:text-white transition-colors">Join</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 uppercase tracking-widest">
            © 2025 Monika Ladies Fitness Club. Nanded.
          </p>
          <p className="text-xs text-white/30 uppercase tracking-widest">
            Shree Nagar, Nanded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;