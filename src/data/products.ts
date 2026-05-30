/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "../types";

export const products: Product[] = [
  {
    id: "mechanical-keyboard",
    name: "Nomad Wireless Mechanical Keyboard",
    scientificName: "Model: NT-850 Pro",
    price: 8499,
    originalPrice: 11999,
    description: "A clean, compact mechanical keyboard featuring hot-swappable yellow silent linear switches, dye-sublimated premium PBT keycaps, and dual wireless mode functionality. Encased in a beautiful CNC-milled aluminum chassis.",
    shortDescription: "Tactile wireless mechanical keyboard designed for high-end whisper-quiet typing.",
    flavorProfile: "Space Grey Anodized Base & Matte Carbon Keycaps",
    tags: ["Premium Desk", "Wireless", "Best Seller"],
    category: "Workspace",
    heroImage: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Whisper-Quiet Switches",
        description: "Custom pre-lubed silent linear switches keep late-night work sessions quiet without sacrificing travel.",
        icon: "keyboard",
      },
      {
        title: "Dual Wireless Connection",
        description: "Connect up to 3 devices simultaneously via Bluetooth 5.1 or low-latency 2.4GHz wireless.",
        icon: "wifi",
      },
      {
        title: "CNC Aluminum Base",
        description: "Precisely milled solid metal chassis ensures absolute stability, weighted grip, and zero deck flex.",
        icon: "cpu",
      },
    ],
    contraindications: [
      "Keep away from direct water; not fully IPX waterproof",
      "Do not expose to high humidity or damp conditions",
      "Clean only with a non-abrasive microfiber cloth",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Power Switch",
        description: "Toggle the power selector at the rear side to Bluetooth (BT) or 2.4G wireless mode.",
      },
      {
        step: "02",
        title: "Establish Connection",
        description: "Hold Fn + Q key for 3 seconds to initiate pairing. Select 'Nomad NT-850' on your computer.",
      },
      {
        step: "03",
        title: "Customize Layout",
        description: "Flick the toggle to Mac or Windows layout, adjust keycaps, and enjoy premium silent typing.",
      },
    ],
  },
  {
    id: "leather-desk-mat",
    name: "Full-Grain Leather Desk Mat",
    scientificName: "Vegetable Tanned Leather",
    price: 3499,
    originalPrice: 4499,
    description: "Sourced from premium vegetable-tanned full-grain leather, this desk mat protects your tabletop and provides a perfectly smooth surface for your mouse, keyboard, and sketchbooks.",
    shortDescription: "Sleek and natural full-grain desk mat to structure your desktop environment.",
    flavorProfile: "Smooth Saddle Brown, Hand-Stitched Heavy Margins",
    tags: ["Premium Desk", "Genuine Leather"],
    category: "Workspace",
    heroImage: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Premium Protection",
        description: "Resistant to minor scratches, heat, and splashes, safeguarding your expensive table woods.",
        icon: "shield",
      },
      {
        title: "Perfect Mouse Glide",
        description: "Rich dense leather fiber allows optical and laser sensors to track with pixel-perfect accuracy.",
        icon: "mouse",
      },
      {
        title: "Natural Patina Evolution",
        description: "Over time, the vegetable tanner develops a gorgeous, organic luster unique to your handling.",
        icon: "trending_up",
      },
    ],
    contraindications: [
      "Avoid soaking in water; wipe dry immediately in case of spills",
      "Store away from persistent direct exposure to scorching heat",
      "Condition every six months with specialized leather balm",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Unroll",
        description: "Carefully unpack your desk mat and lay it flat across your wooden or metal desktop.",
      },
      {
        step: "02",
        title: "Settle",
        description: "Place heavy notebooks on the corners for 24 hours to eliminate the initial storage curve.",
      },
      {
        step: "03",
        title: "Polish",
        description: "Lightly wipe down with a dry cloth to disperse natural oils and prepare for mouse tracking.",
      },
    ],
  },
  {
    id: "leather-laptop-sleeve",
    name: "Merino Wool & Leather Laptop Sleeve",
    scientificName: "Model: WS-13 Classic",
    price: 4199,
    originalPrice: 4999,
    description: "A custom-fit protective sleeve tailored with dense, water-resistant local German Merino wool felt and vegetable-tanned leather accents. Designed for modern slim profiles.",
    shortDescription: "Merino wool and classic saddle leather protective laptop carrier sleeve.",
    flavorProfile: "Heather Grey Felt with Bourbon Tan Leather Accent",
    tags: ["Sleeves", "Laptop Comfort"],
    category: "Sleeves",
    heroImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Scratch Absorption",
        description: "Soft inner Merino wool lining cushions your laptop completely from key scratch threats.",
        icon: "item_member",
      },
      {
        title: "Magnetic Snap System",
        description: "Concealed snaps close securely without scratching your notebook's anodized finish.",
        icon: "lock",
      },
      {
        title: "Slit Tech Pocket",
        description: "Back flat leather slider slot holds slim diaries, notes, cable straps, and cardholders.",
        icon: "category",
      },
    ],
    contraindications: [
      "Not machine washable; damp sponge clean spot areas only",
      "Do not bleach, hot iron, or expose to high humidity",
      "Ensure laptop is fully dry before inserting into felt",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Slide In",
        description: "Slide your 13-inch or 14-inch thin laptop gently into the spacious wool slot.",
      },
      {
        step: "02",
        title: "Engage Snaps",
        description: "Fold the high-grain leather flap downward until the magnetic locking snaps click shut.",
      },
      {
        step: "03",
        title: "Travel Easy",
        description: "Carry hand-held as an elegant portfolio or slip seamlessly into your daily commute bag.",
      },
    ],
  },
  {
    id: "minimalist-candle",
    name: "Santal Blend Organic Soy Candle",
    scientificName: "Therapeutic Scented Wax",
    price: 1899,
    originalPrice: 2499,
    description: "Hand-poured 100% natural soy wax candle custom formulated with notes of rich smokey santal wood, cardamom, sweet vanilla, and deep dry amber. Encased in a beautiful concrete container.",
    shortDescription: "Captivating warm amber and santal candle to maintain deep creative focus.",
    flavorProfile: "Warm Cardamom, Santal wood, Sweet Vanilla, & Rich Amber",
    tags: ["Lifestyle", "Aromatic", "Focus"],
    category: "Lifestyle",
    heroImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "100% Cotton Wicks",
        description: "Natural lead-free cotton wicks provide up to 50 hours of toxic-free, smokeless slow burn.",
        icon: "wb_sunny",
      },
      {
        title: "Calming Ambience",
        description: "Designed for home office spaces to promote calm and elevate cognitive focus.",
        icon: "psychology",
      },
      {
        title: "Minimalist Stoneware",
        description: "Encased in an artisanal concrete container that serves as an aesthetic pen pot after use.",
        icon: "home",
      },
    ],
    contraindications: [
      "Never leave a burning candle entirely unattended",
      "Place on high heat-resistant level surfaces away from drapes",
      "Keep securely out of reach of active crawling children",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Trim Wick",
        description: "Always trim the cotton wick to 1/4 inch before lighting to prevent wild soot.",
      },
      {
        step: "02",
        title: "Initial Burn",
        description: "Let the candle burn for 2 hours on your first light until a full liquid wax pool forms.",
      },
      {
        step: "03",
        title: "Enjoy Aromatics",
        description: "Inhale the warm cedar and santal fumes to anchor your workspace focus.",
      },
    ],
  },
  {
    id: "borosilicate-tumbler",
    name: "Double-Walled Glass Tumbler",
    scientificName: "Insulated Borosilicate Mug",
    price: 1299,
    description: "Hand-blown double-walled glasses designed to insulate hot craft coffee or keep cold brews freezing, sweaty-free, and delightful.",
    shortDescription: "Minimal heat-retaining double-walled borosilicate tumbler glass.",
    flavorProfile: "Ultra-Clear Solid Glass & Tactile Walnut Wood Collar",
    tags: ["Lifestyle", "Thermal Glass"],
    category: "Lifestyle",
    heroImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Insulated Integrity",
        description: "Double walls seal vacuum space, keeping liquids hot or cool for hours without burning fingers.",
        icon: "local_cafe",
      },
      {
        title: "Sweat-Free Outer Wall",
        description: "Zero condensation rings build up on your wooden tables, matching perfectly with desk mats.",
        icon: "water_drop",
      },
      {
        title: "Sustainably Sourced",
        description: "Fitted with a gorgeous, solid walnut shock ring for safe, organic tactile grip.",
        icon: "forest",
      },
    ],
    contraindications: [
      "Do not microwave with the wooden collar attached",
      "Hand wash gently; dishwashers can degrade walnut ring seal",
      "Avoid dropping from heights onto rigid floorings",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Fill Glass",
        description: "Pour in your fresh espresso shots, dynamic steep teas, or iced matchas.",
      },
      {
        step: "02",
        title: "Walnut Guard",
        description: "Ensure the natural walnut wooden sleeve is pressed tightly around the glass mid-line.",
      },
      {
        step: "03",
        title: "Savor Taste",
        description: "Sip with comfort, knowing your desk is completely protected from condensation.",
      },
    ],
  },
  {
    id: "tech-pouch",
    name: "Waxed Canvas Tech Organizer Pouch",
    scientificName: "Model: TP-02 Daily",
    price: 2999,
    originalPrice: 3500,
    description: "A water-repellent rugged waxed canvas exterior with twelve distinct elastic loops and compartments to secure your power adaptors, wireless mice, backup battery banks, and cords.",
    shortDescription: "Waterproof canvas accessory organizer built to store cords on the go.",
    flavorProfile: "Charcoal Slate Canvas & YKK Matte Waterproof Zippers",
    tags: ["Carry", "Travel Active"],
    category: "Carry",
    heroImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Bento Storage Logic",
        description: "Internal origami pockets flex to maximize storage and fit chunky hubs comfortably.",
        icon: "grid_view",
      },
      {
        title: "Waterproof Exterior",
        description: "Industrial strength 15oz waxed cotton canvas prevents accidental liquids from reaching circuits.",
        icon: "water_damage",
      },
      {
        title: "Rugged Quick Strap",
        description: "Includes side heavy loops for quick carabiner attachment to backpack systems.",
        icon: "link",
      },
    ],
    contraindications: [
      "Avoid dry cleaning or laundry washing machines",
      "Clean canvas gently with cold water and soft brush",
      "Re-wax every 2 years to maintain absolute water protection",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Sort Chargers",
        description: "Slide heavy power chargers inside the primary bottom elastic partitions.",
      },
      {
        step: "02",
        title: "Organize Cables",
        description: "Tie and coil your connection cords, slipping them under secure elastic loops.",
      },
      {
        step: "03",
        title: "Lock Zip",
        description: "Close the heavy weather-sealed zip-line and travel with total modular simplicity.",
      },
    ],
  },
  {
    id: "leather-cable-straps",
    name: "Saddle Leather Cable Wraps (Set of 3)",
    scientificName: "Model: CW-03",
    price: 899,
    description: "Crafted from hand-cut thick saddle leather off-scraps, securing peripheral cords, daily phone chargers, and headphone lines cleanly.",
    shortDescription: "Premium hand-cut genuine leather straps with brass lock buttons.",
    flavorProfile: "Full-Grain Whiskey Leather & Solid Golden Snaps",
    tags: ["Essentials", "Desk Order"],
    category: "Essentials",
    heroImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Solid Brass Snaps",
        description: "Fitted with corrosion-proof heavy metal snaps that open and close thousands of times.",
        icon: "lock_open",
      },
      {
        title: "Desk Order System",
        description: "Eliminate cable nests behind screens and establish desktop clarity instantly.",
        icon: "checklist",
      },
      {
        title: "Genuine Scraps",
        description: "Eco-friendly zero-waste initiative utilizing leftover off-cuts from leather craft shops.",
        icon: "recycling",
      },
    ],
    contraindications: [
      "Keep straps out of direct exposure to persistent waters",
      "Do not overstretch past the intended snap boundary",
      "Condition once a year with saddle grease if desired",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Coil Wire",
        description: "Carefully wrap your device cable in a clean circular package structure.",
      },
      {
        step: "02",
        title: "Wrap Strap",
        description: "Position the high-grade leather strap center around your gathered cable pack.",
      },
      {
        step: "03",
        title: "Snap Lock",
        description: "Press the heavy brass click snaps together tightly to seal the bundle.",
      },
    ],
  },
  {
    id: "minimalist-clock",
    name: "Acoustic Minimalist Wooden Clock",
    scientificName: "Model: AC-01 Smart",
    price: 4500,
    description: "Solid ash wood facade concealing a warm numeric LED display. Activates softly with sound detection and dims automatically during sleeping hours.",
    shortDescription: "Elegant wooden desk clock with acoustic-sensor display activation.",
    flavorProfile: "Natural Satin Birch Face & Hidden Soft LEDs",
    tags: ["Essentials", "Acoustic Sensor"],
    category: "Essentials",
    heroImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Acoustic Awake Sensor",
        description: "Display activates for 15 seconds in response to a light tap or handclap.",
        icon: "volume_up",
      },
      {
        title: "Auto Night Dimmer",
        description: "Reduces brightness by 50% between 8:00 PM and 7:00 AM for soft sleeping.",
        icon: "nightlight",
      },
      {
        title: "Dual Power Supply",
        description: "Can run continuously on USB power or utilize AAA battery fail-safes.",
        icon: "battery_charging_full",
      },
    ],
    contraindications: [
      "Avoid dropping; solid interior acoustic sensors are sensitive",
      "Keep away from hot fluids or steaming damp environments",
      "Clean timber only with specialized micro-wax woods wax",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Connect USB",
        description: "Plug the premium woven USB cable into the rear slot to activate active display.",
      },
      {
        step: "02",
        title: "Calibrate Time",
        description: "Hold the rear SET key for 2 seconds to synchronize hours and active dates.",
      },
      {
        step: "03",
        title: "Slight Clap",
        description: "Clap gently nearby to activate the beautiful hidden LED numerical interface.",
      },
    ],
  },
  {
    id: "minimalist-bottle",
    name: "Vacuum Insulated Thermal Flask",
    scientificName: "Model: VK-500 Flask",
    price: 2200,
    description: "Dual-layer food-grade stainless steel bottle. Keeps drinks freezing cold for 24 hours or steaming hot for up to twelve hours.",
    shortDescription: "Minimalist stainless double-wall vacuum water bottle flask.",
    flavorProfile: "Matte Slate Powder Coating & Pure Steel Handle",
    tags: ["Lifestyle", "Eco Hydration"],
    category: "Lifestyle",
    heroImage: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Dual Vacuum Space",
        description: "Advanced vacuum wall completely shields contents from ambient warmth.",
        icon: "thermostat",
      },
      {
        title: "Food Safe Steel",
        description: "Pure BPA-free 18/8 food-grade stainless steel inside guarantees pristine taste.",
        icon: "done",
      },
      {
        title: "Powder Stain Finish",
        description: "Tough textured exterior powder paint offers slip-safe touch even with sweating hands.",
        icon: "pan_tool",
      },
    ],
    contraindications: [
      "Do not place in standard micro devices or home freezers",
      "Avoid carbonated beverages to prevent extreme pressures",
      "Clean periodically with soapy warm vinegar waters",
    ],
    brewingRitual: [
      {
        step: "01",
        title: "Pre-Condition",
        description: "Fill with near-boiling water for 1 minute before adding hot craft coffees.",
      },
      {
        step: "02",
        title: "Cap Securely",
        description: "Thread the heavy brushed steel leakproof cap clockwise until sealed tight.",
      },
      {
        step: "03",
        title: "Drink Cold",
        description: "Toss into your work bag and enjoy refreshing cold water late in the evening.",
      },
    ],
  },
];
