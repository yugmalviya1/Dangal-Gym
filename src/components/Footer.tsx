import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <a href="#" className="mb-6 inline-block hover:scale-105 transition-transform duration-300">
              <img 
                src="/dangal gym led board.png" 
                alt="Dangal Gym" 
                className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" 
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 pr-4 font-medium">
              Bhopal's most elite fitness facility. Train hard. Stay hungry. Fight strong.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Instagram} />
              <SocialLink icon={Facebook} />
              <SocialLink icon={Twitter} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">Navigate</h4>
            <ul className="space-y-4">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#facilities">Facilities</FooterLink>
              <FooterLink href="#programs">Programs</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#reviews">Reviews</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">Programs</h4>
            <ul className="space-y-4">
              <FooterLink href="#programs">Weight Loss</FooterLink>
              <FooterLink href="#programs">Muscle Gain</FooterLink>
              <FooterLink href="#programs">Strength Training</FooterLink>
              <FooterLink href="#programs">Personal Coaching</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>2 B, near SBI Bank, Awadhpuri, Bhopal</li>
              <li>+91 98765 43210</li>
              <li>info@dangalgym.in</li>
              <li className="mt-6 pt-6 border-t border-white/5">
                <span className="block text-white font-bold uppercase tracking-widest text-[10px] mb-3 text-brand-red">Gym Timings</span>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Mon–Sat</span>
                    <span className="text-xs text-white">6AM - 11AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Mon–Sat</span>
                    <span className="text-xs text-white">5PM - 10PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Sunday</span>
                    <span className="text-xs text-zinc-600 italic">Closed</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-600">
          <div>© {new Date().getFullYear()} Dangal Gym. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all rounded-full">
      <Icon size={18} />
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center group">
        {children}
      </a>
    </li>
  );
}
