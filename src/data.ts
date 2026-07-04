import { Project, Service, Skill, TimelineItem, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'neonoir-branding',
    title: 'Aether Noir Brand Identity',
    category: 'Branding',
    shortDescription: 'High-end streetwear label combining dark luxury, cyberpunk minimalism, and premium modular graphics.',
    description: 'Aether Noir is a luxury cyberpunk fashion house based in Tokyo. The project demanded a visual brand system that communicates stealth luxury, technical performance, and high-street avant-garde fashion. I constructed a modular typographic system, geometric core icons, and an immersive packaging identity.',
    thumbnailGradient: 'from-charcoal via-graphite to-purple-900',
    brandingSystem: {
      concept: 'Anarchy meets high luxury. Using modular grids, industrial layout patterns, and severe typography tracking to create a premium, unapproachable haute-couture feel.',
      keywords: ['Haute-Couture', 'Cyberpunk', 'Modular', 'Stealth Luxury', 'Avant-Garde']
    },
    logoVariations: [
      { name: 'Primary Emblem', type: 'Geometric Monogram', purpose: 'Apparel embroidery, metal hardware, chest branding' },
      { name: 'Wordmark System', type: 'Custom Sans-Serif Wide', purpose: 'Luxury tags, hangar engravings, website header' },
      { name: 'Sub-brand Stamp', type: 'Grid-based Glyph', purpose: 'Packaging seals, limited capsule collections, care labels' }
    ],
    colorPalette: [
      { name: 'Matte Onyx', hex: '#050505' },
      { name: 'Electric Velvet', hex: '#8A2EFF' },
      { name: 'Surgical White', hex: '#FFFFFF' },
      { name: 'Carbon Graphite', hex: '#1C1C1E' }
    ],
    typography: [
      { role: 'Headings / Display', fontName: 'Space Grotesk Bold', size: 'Wide Tracking (0.25em)' },
      { role: 'Sub-labels / UI', fontName: 'JetBrains Mono Medium', size: 'Normal' },
      { role: 'Body Copy', fontName: 'Inter Regular', size: 'High line-height (1.6)' }
    ],
    designProcess: [
      { step: '01', title: 'Conceptual Moodboard', text: 'Gathering structural references from brutalist architecture, Japanese techno-industrial aesthetics, and premium technical wear.' },
      { step: '02', title: 'Grid Construction', text: 'Drafting the monogram on a strict 16x16 modular grid, balancing positive/negative spaces to make the emblem look crisp at both 16px and 16m.' },
      { step: '03', title: 'System Validation', text: 'Simulating the brand identity on leather texture embossing, high-reflective silver fabrics, and matte luxury polymer boxes.' }
    ],
    beforeAndAfter: {
      before: 'Uncoordinated standard serif typography with basic gothic logos lacking any unified layout or modern technical edge.',
      after: 'A highly structural, modular, and instantly recognizable luxury cyberpunk brand signature that scales seamlessly across apparel, print, and physical storefronts.'
    },
    clientTestimonial: {
      quote: "Hetsh's creative vision has single-handedly elevated our streetwear brand from a local startup to a global luxury staple. His precision, design-thinking, and structural rigor are incomparable.",
      author: 'Ren Takahashi',
      company: 'CEO, Aether Noir',
      rating: 5,
      avatarSeed: 'takahashi'
    },
    projectResults: [
      { text: '350% increase in brand inquiry engagement' },
      { text: 'Winner of the Golden Pixel Award for Premium Branding (2025)' },
      { text: 'Successful rollout of 14 separate capsule collections with matching custom packaging' }
    ].map(r => r.text),
    mockupInteractiveType: 'identity'
  },
  {
    id: 'nova-dynamics',
    title: 'Nova Dynamics Brand Engine',
    category: 'Logo Design',
    shortDescription: 'Precision geometric logo system for a next-generation aerospace and deep-space logistics corporation.',
    description: 'Nova Dynamics specializes in asteroid mining, satellite networks, and space commerce. They required a logo that feels heavy, engineering-perfect, and astronomically advanced. The design relies on the golden ratio and strict circular intersecting axes.',
    thumbnailGradient: 'from-charcoal via-graphite to-lime-900',
    brandingSystem: {
      concept: 'Astral alignments and golden ratio geometries. A seamless fusion of the letters N, D, and a heavy upward thrust axis representing cosmic acceleration.',
      keywords: ['Astro-tech', 'Golden Ratio', 'Symmetry', 'Brutalist', 'Aerospace']
    },
    logoVariations: [
      { name: 'The Core Engine', type: 'Golden Ratio Badge', purpose: 'Spacecraft hull decals, space-suit badges, main building signage' },
      { name: 'Linear Variant', type: 'Horizontal Line Work', purpose: 'Technical blueprint headers, software UIs, legal documentations' },
      { name: 'Isometric Icon', type: '3D Extrusion Model', purpose: 'Immersive website animations, merchandise branding' }
    ],
    colorPalette: [
      { name: 'Space Void Black', hex: '#000000' },
      { name: 'Hyper Lime', hex: '#A6FF00' },
      { name: 'Asteroid Silver', hex: '#E2E8F0' },
      { name: 'Thruster Blue', hex: '#00F0FF' }
    ],
    typography: [
      { role: 'Display Header', fontName: 'Space Grotesk Black', size: 'Ultra Bold, Tight Kerning' },
      { role: 'Technical Stats', fontName: 'JetBrains Mono Bold', size: 'Caps Only, Lime colored' },
      { role: 'Supporting Info', fontName: 'Inter Light', size: '14px' }
    ],
    designProcess: [
      { step: '01', title: 'Golden Ratio Drafting', text: 'Using fibonacci golden circles to formulate the primary curve of the ND wings, guaranteeing dynamic visual harmony.' },
      { step: '02', title: 'Symmetry Calibration', text: 'Removing 1% off-center visual weight to satisfy the eye, compensating for human optical illusion.' },
      { step: '03', title: 'Mockup Simulation', text: 'Rendering the mark onto rocket carbon fiber plating, glowing screen hulls, and corporate titanium access passes.' }
    ],
    beforeAndAfter: {
      before: 'A generic orbit swoop with a standard default font that looked like 90s clip art.',
      after: 'A pristine, premium galactic engine emblem that stands out as a symbol of technological dominance and galactic ambition.'
    },
    clientTestimonial: {
      quote: "Hetsh designed a logo that is not just a brand mark, but an engineering masterpiece. It sits proudly on our launch hulls and makes our aerospace assets look incredibly advanced.",
      author: 'Dr. Evelyn Vance',
      company: 'Director of Ops, Nova Dynamics',
      rating: 5,
      avatarSeed: 'vance'
    },
    projectResults: [
      { text: 'Logo deployed on 3 orbital rocket launches and over 200 telemetry consoles' },
      { text: 'Pristine vectors that scale up to 50 meters wide without losing circular symmetry' },
      { text: 'Featured in Global Design Archive "Top Tech Logos of the Decade"' }
    ].map(r => r.text),
    mockupInteractiveType: 'identity'
  },
  {
    id: 'hyperdrive-energy',
    title: 'Hyper-Drive Energy Can',
    category: 'Packaging',
    shortDescription: 'High-octane carbonated beverage packaging featuring ultra-bright matte-finish contrast typography.',
    description: 'Hyper-Drive is an esports-centric energy drink formulated for deep focus and reflexes. The packaging design avoids typical noisy designs, opting instead for a minimal layout with massive neon typography, high-contrast matte surfaces, and clean functional lines.',
    thumbnailGradient: 'from-charcoal via-graphite to-red-900',
    brandingSystem: {
      concept: 'High-visibility industrial warnings. Incorporating extreme warning stripes, high-voltage lightning graphics, and premium typographic hierarchy.',
      keywords: ['Esports', 'High-Octane', 'Packaging', 'Matte Finish', 'Kinetic']
    },
    logoVariations: [
      { name: 'Core Warn Logo', type: 'Chevron Graphic', purpose: 'Front of the can, product cartons, team jerseys' },
      { name: 'Zero-Sugar Glyph', type: 'Horizontal Warning', purpose: 'Can collar tag, diet variants' },
      { name: 'Energy Seal', type: 'Nutritional Monogram', purpose: 'Bottom stamp of validity' }
    ],
    colorPalette: [
      { name: 'Absolute Dark', hex: '#0B0B0C' },
      { name: 'Volt Lime', hex: '#A6FF00' },
      { name: 'Nuclear Crimson', hex: '#FF2D55' },
      { name: 'Pure Platinum', hex: '#F8FAFC' }
    ],
    typography: [
      { role: 'Product Title', fontName: 'Space Grotesk Extra Bold', size: 'Huge, 90-degree rotated' },
      { role: 'Warning Code', fontName: 'JetBrains Mono Bold', size: 'Red highlight container' },
      { role: 'Nutrition Facts', fontName: 'Inter SemiBold', size: 'Ultra Compact' }
    ],
    designProcess: [
      { step: '01', title: 'Ergonomic Grid', text: 'Structuring text placement relative to where fingers hold the can to ensure key branding remains 100% visible from any camera angle.' },
      { step: '02', title: 'Color Vibrancy Testing', text: 'Configuring exact CMYK/Pantone values to ensure the neon elements punch through with extreme brightness on aluminum material.' },
      { step: '03', title: 'Rotational Blueprint', text: 'Creating a continuous graphic around the cylindrical can, ensuring a seamless visual loop.' }
    ],
    beforeAndAfter: {
      before: 'A noisy, low-resolution gradient wave with unreadable gothic fonts and a cheap-looking flame graphic.',
      after: 'A bold, premium, matte black collectors can that esports players proudly display on their live-streams.'
    },
    clientTestimonial: {
      quote: "Our retail shelf placement conversion rates doubled immediately upon rolling out Hetsh's design. The matte texture and neon contrast make the can look incredibly high-end.",
      author: 'Marcus "Apex" Stone',
      company: 'Founder, Hyper-Drive Lab',
      rating: 5,
      avatarSeed: 'stone'
    },
    projectResults: [
      { text: 'Winner of the Pentawards Packaging Design Bronze Medal' },
      { text: 'Over 12 million physical cans distributed and sold across 24 countries' },
      { text: '98% positive design recognition ratings in focus groups' }
    ].map(r => r.text),
    mockupInteractiveType: 'packaging'
  },
  {
    id: 'vaporwave-poster',
    title: 'Vaporwave Dreamscape Poster',
    category: 'Posters',
    shortDescription: 'A premium vector art poster exploring retro-futurism, grid structures, and pastel neon gradients.',
    description: 'Designed as a limited-edition art print for a synthwave music label, this poster explores the nostalgic melancholy of 80s computer graphics combined with modern luxury layouts. It is composed of high-fidelity vector wireframes, chrome reflections, and premium glowing gridlines.',
    thumbnailGradient: 'from-slate-900 via-purple-950 to-pink-900',
    brandingSystem: {
      concept: 'Nostalgic digital escapism. A combination of surreal Greek marble structures, chrome grid horizons, and glowing digital suns.',
      keywords: ['Vaporwave', 'Nostalgia', 'Chrome Gradients', 'Vector Wireframe', 'Luxury Art']
    },
    logoVariations: [
      { name: 'Nostalgia Monogram', type: 'Retro Chrome Badge', purpose: 'Corner watermark print authentication' },
      { name: 'Label Mark', type: 'Minimalist Wave Form', purpose: 'Artist collaborations, track packaging' }
    ],
    colorPalette: [
      { name: 'Twilight Purple', hex: '#300060' },
      { name: 'Bubblegum Neon', hex: '#FF2D55' },
      { name: 'Cyber Turquoise', hex: '#00F0FF' },
      { name: 'Warm Sunset Glow', hex: '#FDF000' }
    ],
    typography: [
      { role: 'Headline', fontName: 'Space Grotesk Light', size: 'Super elegant, light tracking' },
      { role: 'Watermarks', fontName: 'JetBrains Mono Thin', size: 'Extremely small, precise coordinate system' }
    ],
    designProcess: [
      { step: '01', title: 'Perspective Wireframing', text: 'Building a 3D grid perspective grid using mathematical horizon lines to draw the viewer into the center.' },
      { step: '02', title: 'Chrome Styling', text: 'Drawing complex gradient vector shapes manually in Illustrator to simulate chrome reflections.' },
      { step: '03', title: 'Noise Texturing', text: 'Overlaying a high-end film grain and retro halftone noise to make the digital print feel warm and physical.' }
    ],
    beforeAndAfter: {
      before: 'Flat digital vectors that lacked lighting depth and depth layers, looking artificial and unfinished.',
      after: 'A rich, cinematic masterpiece of vector nostalgic design with glowing light beams and authentic vintage texture.'
    },
    clientTestimonial: {
      quote: "The poster sold out its 500-unit physical screen-printed run in exactly 4 minutes. Our community is begging for a re-release. Hetsh is a genius of aesthetic design.",
      author: 'Sylvia Chen',
      company: 'Creative Producer, RetroWave Records',
      rating: 5,
      avatarSeed: 'chen'
    },
    projectResults: [
      { text: '500/500 physical art prints sold out instantly' },
      { text: 'Over 40k likes across design community portals (Dribbble & Behance)' },
      { text: 'Purchased for inclusion in the Modern Retro Art Exhibit in Berlin' }
    ].map(r => r.text),
    mockupInteractiveType: 'poster'
  },
  {
    id: 'aura-crypto-ui',
    title: 'Aura Crypto Wallet Interface',
    category: 'UI Design',
    shortDescription: 'High-end mobile crypto transaction portal showcasing dark glassmorphism, responsive charts, and luxury neon elements.',
    description: 'Aura is a digital wallet designed exclusively for high-net-worth Web3 investors. The interface treats cryptocurrency balances like physical luxury items, utilizing dark graphite surfaces, soft neon glows, highly polished glass cards, and smooth, lag-free transitions.',
    thumbnailGradient: 'from-charcoal via-slate-900 to-indigo-950',
    brandingSystem: {
      concept: 'Fluid security. Combining smooth rounded layouts, glass reflections, and high-performance charts that make crypto management feel premium and secure.',
      keywords: ['Crypto', 'Fintech', 'Glassmorphism', 'UI Design', 'Premium Dark Theme']
    },
    logoVariations: [
      { name: 'App Icon', type: 'Glass Gradient Orb', purpose: 'App Store branding, home-screen shortcut' },
      { name: 'System Logo', type: 'Interlocking Infinity Loop', purpose: 'Wallet navigation bar, transaction receipt header' }
    ],
    colorPalette: [
      { name: 'Aura Charcoal', hex: '#0C0C0D' },
      { name: 'Neon Violet', hex: '#8A2EFF' },
      { name: 'Ether Lime', hex: '#A6FF00' },
      { name: 'Soft Glass White', hex: 'rgba(255, 255, 255, 0.08)' }
    ],
    typography: [
      { role: 'Monetary Figures', fontName: 'Space Grotesk Regular', size: 'Optimized for numbers' },
      { role: 'Section Headers', fontName: 'Inter Bold', size: 'Clean, medium spacing' },
      { role: 'Crypto Codes', fontName: 'JetBrains Mono Medium', size: '12px, high-contrast' }
    ],
    designProcess: [
      { step: '01', title: 'Interactive Wireframing', text: 'Prototyping seamless thumb-swipe paths in Figma, optimizing navigation so all high-frequency features sit within 45% reachable screen space.' },
      { step: '02', title: 'Glass Styling', text: 'Crafting the exact multi-layered drop shadow and white inner stroke formula to simulate semi-transparent glowing glass.' },
      { step: '03', title: 'Micro-animations', text: 'Adding subtle spring-based motion curves to tab triggers, ensuring the UI responds instantly with visual tactile weight.' }
    ],
    beforeAndAfter: {
      before: 'A confusing, cluttered database grid of crypto stats with boring gray table layouts and no sense of high-end branding.',
      after: 'A pristine, premium visual sanctuary that makes checking investment portfolios feel like stepping into a high-end private banking salon.'
    },
    clientTestimonial: {
      quote: "Our app retention rates soared by 74% post the interface redesign by Hetsh. Our users love showing off the dark luxury interface. He understands digital premium design.",
      author: 'Alexandre Sterling',
      company: 'Founder, Aura Capital',
      rating: 5,
      avatarSeed: 'sterling'
    },
    projectResults: [
      { text: 'Aura App store rating jumped from 3.8 to 4.9 stars' },
      { text: '$1.4B in transactions processed through the newly designed dashboard' },
      { text: 'Named "Best Mobile Fintech Design" at the Interactive Design Awards' }
    ].map(r => r.text),
    mockupInteractiveType: 'ui'
  },
  {
    id: 'pixel-thumbnails',
    title: 'High-CTR Tech Creator Assets',
    category: 'YouTube Thumbnails',
    shortDescription: 'Professional visual assets and high-impact thumbnails crafted for high-performance content creators.',
    description: 'In the attention economy, thumbnails are the ultimate gateway to traffic. For leading tech channels, I created a collection of high-CTR, dramatic, photorealistic thumbnails. They combine high-contrast lighting, beautiful 3D product renders, and hyper-clean vector typography.',
    thumbnailGradient: 'from-charcoal via-slate-950 to-red-950',
    brandingSystem: {
      concept: 'Dynamic eye-direction. Using contrasting warm and cool light sources, bold layout angles, and ultra-high-resolution focal objects to capture attention.',
      keywords: ['Attention-Economy', 'High CTR', 'Contrast Lighting', 'Sleek Render', 'Bold Typography']
    },
    logoVariations: [
      { name: 'Watermark', type: 'Creator Signet', purpose: 'Discreet branding corner' }
    ],
    colorPalette: [
      { name: 'Soot Black', hex: '#080809' },
      { name: 'Cyber Crimson', hex: '#FF2D55' },
      { name: 'Volt yellow', hex: '#F97316' },
      { name: 'Clean White', hex: '#FFFFFF' }
    ],
    typography: [
      { role: 'Impact Words', fontName: 'Space Grotesk Extra Bold', size: 'Thick, custom sheared 8 degrees' },
      { role: 'Supporting Codes', fontName: 'JetBrains Mono Bold', size: 'Glowing badge' }
    ],
    designProcess: [
      { step: '01', title: 'Eye Tracking Layout', text: 'Creating a diagonal visual flow from the focal image (right) to the bold text (left), keeping key items out of the bottom-right timestamp corner.' },
      { step: '02', title: 'Lighting & Depth', text: 'Adding artificial rim lighting to subject cutouts and deep ambient occlusion shadows to make the graphics look incredibly 3D and premium.' },
      { step: '03', title: 'Color Grading', text: 'Boosting mid-tone local contrast and saturation selectively to ensure the graphic pops even on a tiny mobile screen in a crowded feed.' }
    ],
    beforeAndAfter: {
      before: 'Cluttered, low-contrast, messy screenshots with basic Arial text and ugly red arrows.',
      after: 'Cinematic, clean, ultra-premium mini-posters that represent professional, authoritative production values.'
    },
    clientTestimonial: {
      quote: "Hetsh's thumbnails single-handedly increased our average CTR from 4.2% to 11.8%. That translated to millions of additional views. He is a master of visual attention.",
      author: 'Ethan Vane',
      company: 'Lead Host, TechChronicle Channel',
      rating: 5,
      avatarSeed: 'vane'
    },
    projectResults: [
      { text: 'Average Click-Through Rate increased by 180% across 50 videos' },
      { text: 'Over 45 million combined organic impressions on Hetsh-designed thumbnails' },
      { text: 'Standardized a premium brand style that established the channel as an authority' }
    ].map(r => r.text),
    mockupInteractiveType: 'thumbnail'
  }
];

export const services: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    iconName: 'Sparkles',
    description: 'Complete high-end visual systems, corporate guidelines, and modular graphic standards.',
    details: 'I build holistic brand universes that establish authority and command luxury prices. From detailed grids to material guidelines, you get a premium design system built for long-term scalability.',
    deliverables: [
      'Visual Identity Blueprint & Guidelines',
      'Grid-perfect Brand Marks & Sub-logos',
      'Typography Selection & Hierarchy Systems',
      'Pantone & CMYK Custom Color Systems',
      'Stationery & Digital Assets Kit'
    ],
    accentColor: 'lime'
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    iconName: 'Cpu',
    description: 'Symmetrical, golden-ratio based vector marks engineered for perfect geometric clarity.',
    details: 'A great logo is a mathematical masterclass. I design memorable, clean, iconic emblems using strict geometric principles that look stellar on a tiny app icon or high on an office tower.',
    deliverables: [
      'Golden Ratio Vector Logos',
      'Monogram & Icon Systems',
      '3D Embossed & Metal Render Previews',
      'Scalable SVG/EPS Source Files',
      'Social Media Logo Variations'
    ],
    accentColor: 'purple'
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    iconName: 'Box',
    description: 'Premium physical wrappers, matte-finish containers, and luxury product unboxings.',
    details: 'Unboxing is an emotional experience. I combine tactile finishes, structural integrity, and bold modern graphic layouts to ensure your physical products stand out on a crowded shelf or screen.',
    deliverables: [
      '3D Packaging Mockups & Renders',
      'Flat Print-ready Dielines & Layouts',
      'Custom Material & Finish Recommendations',
      'Label Graphic Systems',
      'Luxury Unboxing Experience Blueprint'
    ],
    accentColor: 'red'
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    iconName: 'LayoutGrid',
    description: 'Immersive digital interfaces, dark luxury layouts, and responsive desktop/mobile wireframes.',
    details: 'I design digital interfaces that feel like physical luxury. Utilizing advanced glassmorphism, glowing micro-accents, and strict modular grids to make software functional and visually breathtaking.',
    deliverables: [
      'High-Fidelity Figma Prototypes',
      'Premium Dark/Light Interface Mockups',
      'Design System Components & Design Tokens',
      'Responsive Mobile & Desktop Wireframes',
      'Micro-interaction & Animation Guidelines'
    ],
    accentColor: 'lime'
  },
  {
    id: 'posters-marketing',
    title: 'Posters & Print',
    iconName: 'Image',
    description: 'High-impact promotional art, event posters, and collectible modern screen-prints.',
    details: 'Combine classical layout composition with futuristic cyberpunk styling. Perfect for music festivals, lifestyle apparel launches, tech conventions, and gallery collectibles.',
    deliverables: [
      'Vector Poster Designs (Unlimited Scale)',
      'High-resolution CMYK Print Collateral',
      'Custom Halftone & Film Grain Texturizing',
      'Limited Edition Screen-print Specs',
      'Banners & Outdoor Billboard Layouts'
    ],
    accentColor: 'purple'
  },
  {
    id: 'photo-motion',
    title: 'Photo & Motion Graphics',
    iconName: 'Play',
    description: 'Cinematic photo manipulation, glowing color-grading, and sleek video assets.',
    details: 'Bring static graphics to life. I create premium transitions, glowing title screens, custom photo edits, and motion graphic assets optimized for high-end creative studios and gaming brands.',
    deliverables: [
      'Creative Color-Grading & Retouching',
      'Cyberpunk Glow Photo Manipulations',
      'Animated Intros & Outros (60 FPS Lottie/MP4)',
      'Overlay Assets & Stream Graphic Packages',
      'Logo Animation & Kinetic Typography'
    ],
    accentColor: 'red'
  }
];

export const skills: Skill[] = [
  { id: 'photoshop', name: 'Adobe Photoshop', level: 98, category: 'software', color: 'lime' },
  { id: 'illustrator', name: 'Adobe Illustrator', level: 96, category: 'software', color: 'lime' },
  { id: 'figma', name: 'Figma', level: 95, category: 'software', color: 'purple' },
  { id: 'blender', name: 'Blender 3D', level: 82, category: 'software', color: 'purple' },
  { id: 'aftereffects', name: 'Adobe After Effects', level: 88, category: 'software', color: 'red' },
  { id: 'premiere', name: 'Adobe Premiere Pro', level: 85, category: 'software', color: 'red' },
  { id: 'lightroom', name: 'Adobe Lightroom', level: 90, category: 'software', color: 'white' },
  { id: 'indesign', name: 'Adobe InDesign', level: 84, category: 'software', color: 'white' },
  { id: 'canva', name: 'Canva Design', level: 95, category: 'software', color: 'lime' },
  // Creative strengths
  { id: 'typography', name: 'Typography & Layout', level: 97, category: 'creative', color: 'lime' },
  { id: 'color-theory', name: 'Color Psychology', level: 95, category: 'creative', color: 'purple' },
  { id: 'vector', name: 'Vector Construction', level: 98, category: 'creative', color: 'lime' },
  { id: 'unboxing', name: 'Packaging Structure', level: 88, category: 'creative', color: 'red' },
  { id: 'brand-strategy', name: 'Brand Strategy', level: 92, category: 'creative', color: 'purple' },
  { id: 'ctr-optimization', name: 'Visual Hierarchy & CTR', level: 94, category: 'creative', color: 'white' }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'award-2026',
    year: '2026',
    title: 'Elite Creator Designer Award',
    subtitle: 'Global Design Syndicate',
    description: 'Awarded "Elite Designer of the Year" for outstanding contributions to modern digital gaming branding and packaging systems.',
    type: 'award',
    iconName: 'Trophy'
  },
  {
    id: 'freelance-lead',
    year: '2024 - Present',
    title: 'Lead Graphic & Identity Designer',
    subtitle: 'Independent Creative Studio (Freelance)',
    description: 'Spearheading branding campaigns, identity systems, and luxury packaging designs for high-end international clients in Tokyo, New York, and London. Delivered 120+ projects with exceptional satisfaction ratings.',
    type: 'experience',
    iconName: 'Briefcase'
  },
  {
    id: 'agency-senior',
    year: '2022 - 2024',
    title: 'Senior Branding & Packaging Designer',
    subtitle: 'Nexus Studio Agency',
    description: 'Supervised the branding department, designing consumer packaged goods (CPG) and digital user interfaces for major Fortune-500 tech startups. Managed junior designers and print contractors.',
    type: 'experience',
    iconName: 'Briefcase'
  },
  {
    id: 'cert-blender',
    year: '2021',
    title: 'Advanced 3D & Spatial Design Certification',
    subtitle: 'Digital Arts Academy',
    description: 'Intense specialization in polygonal mesh construction, lighting materials, and abstract octane shaders in Blender 3D.',
    type: 'education',
    iconName: 'Award'
  },
  {
    id: 'edu-bachelors',
    year: '2018 - 2022',
    title: 'B.Sc. in Graphic Communication & Design',
    subtitle: 'Metropolitan Institute of Art',
    description: 'First-class honors, specializing in typographic rules, vector geometries, classic editorial layouts, and branding history.',
    type: 'education',
    iconName: 'GraduationCap'
  },
  {
    id: 'future-goals',
    year: '2027 & Beyond',
    title: 'Expanding Spatial & VR Interfaces',
    subtitle: 'Future Blueprint',
    description: 'Deepening study into holographic 3D graphics, spatial computer brand layouts, and ultra-luxury augmented reality product unboxings.',
    type: 'milestone',
    iconName: 'Compass'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sora Hayashi',
    role: 'Creative Director',
    company: 'NeoTokyo Esports',
    quote: "Hetsh's esports graphics, jerseys, and stream frames turned our gaming franchise into an overnight sensation. He didn't just design vectors; he designed our community's pride.",
    rating: 5,
    avatarSeed: 'hayashi'
  },
  {
    id: 'test-2',
    name: 'Eleanor Vance',
    role: 'VP of Marketing',
    company: 'Scribe Technology',
    quote: "We hired Hetsh to redesign our corporate report layouts and brand assets. His typographic precision and use of white space are incredible. He elevated our serious corporate data into an editorial masterpiece.",
    rating: 5,
    avatarSeed: 'vance'
  },
  {
    id: 'test-3',
    name: 'Dominic Russo',
    role: 'Founder',
    company: 'Voltaic Energy',
    quote: "Working with Hetsh on our energy can packaging was seamless. He provided 3D rotating visual models and worked directly with our printing factory to calibrate the neon spot colors perfectly.",
    rating: 5,
    avatarSeed: 'russo'
  },
  {
    id: 'test-4',
    name: 'Meera Patel',
    role: 'Product Lead',
    company: 'Verve App Labs',
    quote: "Hetsh understands how design impacts conversion. The mobile wallet UI he designed is not only visually stunning but our user retention and transactional clicks increased by 65%. Highly recommend!",
    rating: 5,
    avatarSeed: 'patel'
  }
];
