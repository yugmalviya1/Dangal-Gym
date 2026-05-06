const fs = require('fs');
let c = fs.readFileSync('src/components/Register.tsx', 'utf8');

// Fix the brackets
c = c.replace(/\[brand-red\]/g, 'brand-red');
c = c.replace(/\[white\]/g, 'white');
c = c.replace(/\[brand-red\/90\]/g, 'brand-red/90');
c = c.replace(/\[brand-red\/30\]/g, 'brand-red/30');
c = c.replace(/\[brand-red\/10\]/g, 'brand-red/10');
c = c.replace(/\[brand-red\/20\]/g, 'brand-red/20');

// Add the offer section right before the "Available Offers" label
const offerHtml = `
                    <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-4 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Special Offer</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">Get Flat ₹500 Off on any plan purchase.</p>
                      <p className="text-xs text-gray-400 mb-3">Add item worth ₹10,000.00 amount more to avail</p>
                      <button type="button" className="text-xs font-bold text-brand-red uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                        + Add Item(s)
                      </button>
                    </div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">`;

c = c.replace('<label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">', offerHtml);

fs.writeFileSync('src/components/Register.tsx', c);
