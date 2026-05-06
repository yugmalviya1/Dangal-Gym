const fs = require('fs');
let c = fs.readFileSync('src/components/Register.tsx', 'utf8');
c = c.replace(/#647153/g, 'brand-red');
c = c.replace(/#e6e8d1/g, 'white');
c = c.replace(/#525c43/g, 'brand-red/90');
c = c.replace(/rgba\(100,113,83,0\.3\)/g, 'rgba(230,57,70,0.3)');
c = c.replace("We'll contact you shortly on", "Please visit the gym to finalize your setup. Your registered phone is");
fs.writeFileSync('src/components/Register.tsx', c);
