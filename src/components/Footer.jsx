import { motion } from 'framer-motion';

export default function Footer() {
  const letters = "MALMAR".split("");
  
  const antiqueStyle = {
    fontFamily: "__antiqueLegacy_623eb9, __antiqueLegacy_Fallback_623eb9",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "14px",
    lineHeight: "14px",
    color: "rgb(0, 0, 0)"
  };

  return (
    <footer className="relative bg-[#fdf0d5] text-[#1a1a1a] pt-16 md:pt-20 px-6 md:px-16 overflow-hidden flex flex-col">

      <div className="max-w-[1400px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* LEFT: NEWSLETTER FORM */}
          <div className="flex flex-col">
            <style>{`
              .footer-mobile-title { font-size: 7.5vw; line-height: 1.2; }
              @media (min-width: 400px) { .footer-mobile-title { font-size: 28px; line-height: 1.2; } }
              @media (min-width: 768px) { .footer-mobile-title { font-size: 35px; line-height: 0.8; } }
            `}</style>
            <h2 className="mb-12 uppercase footer-mobile-title" style={{
              fontFamily: "'SageNav', sans-serif",
              fontWeight: 400,
              color: "rgb(0, 0, 0)"
            }}>
              {/* Desktop View */}
              <div className="hidden md:block">
                <div>JOIN <span className="italic lowercase" style={{ textTransform: "none" }}>the</span></div>
                <div>WORLD</div>
                <div><span className="italic lowercase mr-2" style={{ textTransform: "none" }}>of</span> MALMAR</div>
              </div>
              
              {/* Mobile View */}
              <div className="block md:hidden" style={{ lineHeight: "1.2" }}>
                <div className="whitespace-nowrap">JOIN <span className="italic lowercase mx-1" style={{ textTransform: "none" }}>the</span> WORLD</div>
                <div className="whitespace-nowrap"><span className="italic lowercase mr-2" style={{ textTransform: "none" }}>of</span> MALMAR</div>
              </div>
            </h2>

            <p className="text-[14px] leading-relaxed mb-10 max-w-sm" style={antiqueStyle}>
              Subscribe to join our community and stay up to date with the studio.
            </p>

            <form className="space-y-8 w-full max-w-md">
              <div className="flex flex-row gap-4 md:gap-8">
                <input
                  type="text"
                  placeholder="FIRST NAME *"
                  className="bg-transparent border-b border-black/30 w-full py-2 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{ ...antiqueStyle, fontSize: "10px" }}
                />
                <input
                  type="text"
                  placeholder="LAST NAME *"
                  className="bg-transparent border-b border-black/30 w-full py-2 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{ ...antiqueStyle, fontSize: "10px" }}
                />
              </div>

              <input
                type="email"
                placeholder="EMAIL *"
                className="bg-transparent border-b border-black/30 w-full py-2 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                style={{ ...antiqueStyle, fontSize: "10px" }}
              />

              <label className="flex items-start gap-3 cursor-pointer mt-6">
                <div className="relative">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border border-black/40 rounded-none checked:bg-black/80 mt-1 cursor-pointer" />
                </div>
                <p className="text-[11px] leading-relaxed opacity-70" style={antiqueStyle}>
                  I consent to my information being collected in accordance with the Elicyon privacy policy
                </p>
              </label>

              <button
                type="button"
                className="border-b border-black pb-1 hover:opacity-50 transition-opacity mt-4"
                style={{ ...antiqueStyle, fontSize: "12px", fontWeight: 600 }}
              >
                SUBMIT FORM
              </button>
            </form>
          </div>

          {/* RIGHT: LINKS */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 pt-4 lg:pt-0">
            <div className="flex flex-col space-y-2">
              {["PROJECTS", "SERVICES", "FAQS", "CONTACT"].map((link) => (
                <span key={link} className="cursor-pointer hover:opacity-50 transition-opacity" style={antiqueStyle}>
                  {link}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {["INSTAGRAM", "PINTEREST", "LINKEDIN", "FACEBOOK"].map((link) => (
                <span key={link} className="cursor-pointer hover:opacity-50 transition-opacity" style={antiqueStyle}>
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- BIG LOGO TEXT WITH SHUTTER EFFECT --- */}
      <motion.div 
        className="w-full mt-24 mb-12 z-10 overflow-hidden flex justify-center"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className="flex select-none">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + (i * 0.08),
                duration: 1.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              style={{
                fontFamily: "'SageNav', sans-serif",
                fontSize: "clamp(60px, 22vw, 303px)",
                lineHeight: "clamp(60px, 22vw, 303px)",
                color: "rgb(0, 0, 0)",
                textTransform: "uppercase",
                display: "inline-block"
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="hidden md:block w-full py-4 z-10 bg-[#fdf0d5]">
        <div className="max-w-[1400px] mx-auto flex flex-row justify-between items-center gap-6 text-[11px] opacity-60" style={antiqueStyle}>
          <div className="flex gap-8 hover:opacity-100 transition-opacity">
            <span className="cursor-pointer font-bold">Privacy Policy</span>
            <span className="cursor-pointer font-bold">Terms & Conditions</span>
          </div>
          <div className="text-right">
            <span>REGISTERED TRADE MARK OF MALAMAR STUDIO © 2026</span>
          </div>
        </div>
      </div>

      {/* --- MOBILE BOTTOM LAYER --- */}
      <div className="flex flex-col md:hidden w-full mt-16 mb-4 z-10">
        {/* Logo Replacement */}
        <div className="w-full flex justify-center mb-8">
          <img src="/logo.png" alt="Malmar Logo" className="h-[35px] sm:h-[45px] w-auto object-contain object-center opacity-90" />
        </div>
        
        {/* Legal Text */}
        <div className="w-full flex flex-col text-[8.5px] min-[390px]:text-[10px] uppercase opacity-70 tracking-widest font-medium" style={antiqueStyle}>
          <div className="flex justify-start gap-[20%] w-full mb-3">
            <span className="cursor-pointer">TERMS OF SERVICE</span>
            <span className="cursor-pointer">PRIVACY POLICY</span>
          </div>
          <div className="text-left w-full">
            <span>REGISTERED TRADE MARK OF MALMAR 2026</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
