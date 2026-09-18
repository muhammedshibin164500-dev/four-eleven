import { ServiceItem, GalleryItem, ReviewItem } from '../types';

export const GARAGE_INFO = {
  name: "FOUR ELEVEN CAR GARAGE",
  shortName: "FOUR ELEVEN",
  tagline: "Engineered for the Extraordinary",
  phone: "+91 75105 04507",
  directLine: "+91 75105 04507",
  emergencyLine: "+91 75105 04507",
  rawPhone: "7510504507",
  email: "service@fourelevengarage.com",
  vipEmail: "concierge@fourelevengarage.com",
  address: "411 Apex Boulevard, Performance District, CA 90210",
  hours: "Monday – Saturday: 08:00 AM – 07:30 PM | Sunday: By VIP Appointment Only",
  stats: [
    { label: "Track & Supercars Tuned", value: "2,450+" },
    { label: "Master Tech Experience", value: "18+ Yrs" },
    { label: "Dyno Power Output Cap", value: "1,500 HP" },
    { label: "Verified 5-Star Rating", value: "4.98 / 5" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bespoke-tuning",
    category: "performance",
    title: "Bespoke ECU Remapping & Dyno Tuning",
    shortDesc: "Custom engine calibration and telemetry fine-tuning on our AWD 1,500 HP Mustang dynamometer for maximum responsive power and reliability.",
    fullDesc: "Our master calibrators develop bespoke ignition, fuel, boost, and throttle maps tailored specifically to your vehicle's mechanical configuration and driving style. Each tune undergoes comprehensive pre-tune diagnostic smoke tests, live wideband lambda monitoring, and full dyno verification before delivery.",
    turnaround: "1 - 2 Business Days",
    warranty: "3-Year Software & Calibration Guarantee",
    startingPrice: "$1,450",
    popular: true,
    icon: "Gauge",
    features: [
      "Custom Stage 1, Stage 2 & Stage 3 Dyno-Calibrated Remaps",
      "Live AWD Dynamometer Power & Torque Graphs Provided",
      "Bespoke Throttle Map & Transmission (TCU) Calibration",
      "Pop & Bang / Exhaust Burble Flap Modulation (Optional)",
      "High-Octane & Ethanol (E85) Flex-Fuel Configurations",
      "Factory OEM Backup Preserved & Reversible Anytime"
    ],
    equipment: ["Mustang 1500 AWD Dyno Cell", "Alientech K-TAG / KESS3 Master", "BHP Fuel Telemetry Rig"],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "concourse-detailing",
    category: "detailing",
    title: "9H Ceramic Coating & Concourse Correction",
    shortDesc: "Multi-stage paint correction under specialized LED inspection arrays, sealed with aerospace-grade 9H graphene ceramic shield.",
    fullDesc: "Transform and protect your vehicle's finish. We measure clear-coat depth across 120 body panel points before commencing 2 to 4 stages of rotary and dual-action machine jeweling to eradicate 95%+ of swirl marks and scratches, followed by multi-layer hydrophobic ceramic application.",
    turnaround: "2 - 3 Days",
    warranty: "5-Year Certified Warranty with Annual Inspections",
    startingPrice: "$1,850",
    popular: true,
    icon: "Sparkles",
    features: [
      "Precision Ultrasonic Paint Thickness Measurement",
      "Multi-Stage Rotary & Dual-Action Paint Jeweling",
      "9H Diamond Graphene Hydrophobic Surface Coating",
      "Complete Wheel-Off Ceramic Barrel & Caliper Protection",
      "Leather Hide Conditioning & Anti-UV Interior Sealant",
      "Windshield & Hydrophobic Glass Treatment"
    ],
    equipment: ["Rupes BigFoot Dual Action Polishers", "Scangrip High-CRI SunMatch 4", "Gtechniq & Modesta Certified Coatings"],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "exotic-maintenance",
    category: "maintenance",
    title: "Exotic & Supercar Scheduled Care",
    shortDesc: "Complete factory-compliant servicing for Ferrari, Porsche, McLaren, Lamborghini, Aston Martin, and AMG using OEM diagnostic systems.",
    fullDesc: "Maintain warranty compliance and vehicle pedigree with our meticulous scheduled maintenance protocols. Using official diagnostic tools (PIWIS 4, Leonardo, SD3), our ASE Master Technicians execute rigorous multipoint inspections, fluids exchange with factory-approved Motul 300V / Castrol Edge SRF, and digital service book logging.",
    turnaround: "Same-Day to 1 Day",
    warranty: "12-Month / 12,000-Mile OEM-Grade Guarantee",
    startingPrice: "$950",
    icon: "Wrench",
    features: [
      "Factory Digital Service History Logging",
      "OEM PIWIS, Leonardo & SD3 Diagnostic Scan",
      "Motul 300V Motorsport Fluid Flush & Titanium Filters",
      "High-Performance Spark Plugs & Ignition Coil Upgrades",
      "Comprehensive 150-Point Pre-Purchase & Track Inspection",
      "Detailed High-Resolution Digital Inspection Report"
    ],
    equipment: ["Porsche PIWIS 4 Tester", "Leonardo Diagnostic Hub", "Snap-on Master Pro Rigs"],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ppf-protection",
    category: "detailing",
    title: "Self-Healing XPEL Paint Protection Film",
    shortDesc: "Computer pre-cut, edge-wrapped stealth or ultra-gloss protective barrier resisting rock chips, gravel, and track debris.",
    fullDesc: "Shield vulnerable body panels with 8.5-mil self-healing polyurethane film. We use computer-plotted templates with custom edge extensions to ensure wrapped edges around headlamps, door edges, splitters, and rear arches without any visible blade cuts on paintwork.",
    turnaround: "3 - 5 Days",
    warranty: "10-Year Manufacturer Delamination & Yellowing Warranty",
    startingPrice: "$2,600",
    icon: "ShieldCheck",
    features: [
      "Micro-Edge Wrapped Finish for Invisible Fitment",
      "Available in Ultra-Gloss or Satin Stealth Conversion",
      "Heat-Activated Self-Healing from Minor Scratches",
      "Custom Extended Computer-Plotted Templates (No Blades)",
      "High-Impact Rock Chip Defense for Track Days",
      "Ceramic Top-Coated PPF for Ultra-Hydrophobic Sheen"
    ],
    equipment: ["Graphtec FC9000 Plotter", "DAP Software Suite", "Clean-Room Installation Bays"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "exhaust-chassis",
    category: "performance",
    title: "Titanium Exhaust & Suspension Dynamics",
    shortDesc: "Bespoke Akrapovič, Inconel exhaust fitment, carbon-ceramic brake upgrades, and corner-weighting suspension geometry.",
    fullDesc: "Unleash genuine acoustic resonance and razor-sharp handling. We partner with world-renowned performance engineering houses including Akrapovič, KW Suspensions, and Brembo Racing. Includes precision computerized Hunter laser alignment and digital four-corner scales.",
    turnaround: "1 - 3 Days",
    warranty: "Lifetime Workmanship Guarantee",
    startingPrice: "$2,200",
    icon: "Zap",
    features: [
      "Grade-5 Titanium & Inconel Weight-Saving Exhaust Systems",
      "Corner-Weighting Balance to Exact Driver Weight Specs",
      "Brembo GT & Surface-Transforms Carbon-Ceramic Rotors",
      "KW Variant 4 / Öhlins TTX Adjustable Coilover Tuning",
      "Laser 4-Wheel Alignment for Road or Track Aggression",
      "Valvetronic Sound Modes Integrated with Steering Controls"
    ],
    equipment: ["Hunter Hawkeye Elite Laser Alignment", "Longacre Digital Corner Scales", "TIG Welder Bay"],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vip-concierge",
    category: "maintenance",
    title: "Enclosed Valet Transport & VIP Concierge",
    shortDesc: "White-glove, hydraulic tail-lift enclosed vehicle collection from your residence or track paddock with GPS tracking.",
    fullDesc: "Your time is invaluable. Our private fleet of air-ride enclosed transport trailers provides zero-incline hydraulic loading for low-clearance hypercars. Enjoy real-time GPS telemetry, full comprehensive transport insurance, and dedicated personal service advisory.",
    turnaround: "24/7 Scheduling",
    warranty: "Full Cargo Transit Coverage up to $2.5M",
    startingPrice: "$350",
    icon: "Truck",
    features: [
      "Fully Enclosed Air-Ride Transport with Ultra-Low Ramps",
      "Door-to-Door Residence, Airport, or Circuit Delivery",
      "24/7 Satellite Telemetry GPS Link Shared with Client",
      "Comprehensive Pre-Trip Digital Body Inspection & Covers",
      "Climate-Controlled High-Security Bay Overnight Stays",
      "Dedicated Service Concierge for All Updates & Telemetry"
    ],
    equipment: ["Fleet of Custom Low-Incline Air-Suspension Transporters", "Direct Telemetry App Access"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "porsche-gt3rs",
    title: "Porsche 992 GT3 RS Track Setup",
    vehicle: "2024 Porsche 911 (992) GT3 RS",
    category: "performance",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Titanium Exhaust", "Dyno Remap", "Track Geometry"],
    specs: {
      power: "+42 WHP Gain (565 HP Total)",
      treatment: "Full Titanium Cat-Back & Stage 2 Calibration",
      turnaround: "3 Days",
      parts: "Inconel Headers, Manthey Racing Alignment"
    }
  },
  {
    id: "ferrari-f8",
    title: "Ferrari F8 Tributo Graphene Armor",
    vehicle: "2023 Ferrari F8 Tributo (Rosso Corsa)",
    category: "detailing",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
    tags: ["9H Graphene", "Full Front PPF", "Paint Correction"],
    specs: {
      treatment: "4-Stage Paint Correction & Self-Healing PPF",
      turnaround: "4 Days",
      parts: "XPEL Ultimate Plus & Modesta BC-04"
    }
  },
  {
    id: "lambo-huracan",
    title: "Lamborghini Huracán STO Aero & Audio",
    vehicle: "2023 Lamborghini Huracán STO",
    category: "supercars",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Valvetronic Sound", "Carbon Diffuser", "Ceramic Brakes"],
    specs: {
      power: "640 HP Naturally Aspirated V10",
      treatment: "Bespoke Valved Race System & Track Bleed",
      turnaround: "2 Days",
      parts: "Kline Innovation Valvetronic Inconel"
    }
  },
  {
    id: "amg-black-series",
    title: "Mercedes-AMG GT Black Series Bespoke",
    vehicle: "2022 Mercedes-AMG GT Black Series",
    category: "performance",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Stage 2 ECU", "Downpipes", "Corner Balanced"],
    specs: {
      power: "820 HP / 980 Nm Torque",
      treatment: "Twin-Turbo Calibration & Corner Weighting",
      turnaround: "5 Days",
      parts: "Weistec Downpipes & TCU Shift Calibration"
    }
  },
  {
    id: "classic-911-turbo",
    title: "Porsche 930 Turbo Concourse Restomod",
    vehicle: "1988 Porsche 911 Turbo 'Widowmaker'",
    category: "classics",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    tags: ["Engine Overhaul", "Full Restoration", "Leather Reupholstery"],
    specs: {
      power: "3.3L Turbo Flat-6 Blueprinted",
      treatment: "Nut-and-Bolt Mechanical Overhaul",
      turnaround: "6 Weeks",
      parts: "Mahle Motorsport Pistons, K27 Hybrid Turbo"
    }
  },
  {
    id: "mclaren-720s",
    title: "McLaren 720S Stealth Conversion",
    vehicle: "2023 McLaren 720S Performance",
    category: "supercars",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Stealth PPF", "Carbon Aero", "Akrapovič Titanium"],
    specs: {
      power: "780 HP Dyno Verified",
      treatment: "Complete Satin XPEL Stealth Wrap + 9H Coat",
      turnaround: "6 Days",
      parts: "Vorsteiner Carbon Fiber Aerodynamic Kit"
    }
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Julian Sterling",
    role: "President, Coastal Porsche Club",
    vehicle: "2024 Porsche 992 GT3 RS",
    rating: 5,
    date: "10 days ago",
    comment: "The team at Four Eleven Car Garage operates on a level of precision that matches factory motorsport pits in Weissach. They performed a bespoke titanium exhaust install, ECU remapping, and laser alignment on my GT3 RS. The power delivery is instantaneous, and their transparency with dyno telemetry gave me 100% confidence.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    serviceUsed: "Bespoke ECU Remapping & Exhaust"
  },
  {
    id: "rev-2",
    author: "Alexander Vance",
    role: "Exotic Automobile Collector",
    vehicle: "Ferrari 812 Competizione & SF90 Stradale",
    rating: 5,
    date: "3 weeks ago",
    comment: "I entrust my multi-million dollar collection only to Four Eleven. Their climate-controlled transport picked up my 812 from my private estate, executed full XPEL Stealth PPF and graphene coating, and delivered it back without a single millimeter out of place. The finish is literally optical glass.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    serviceUsed: "Concourse Detailing & Stealth PPF"
  },
  {
    id: "rev-3",
    author: "Elena Rostova",
    role: "GT World Challenge Enthusiast",
    vehicle: "Lamborghini Huracán STO",
    rating: 5,
    date: "1 month ago",
    comment: "Honest, razor-sharp technical mastery. I had a persistent electronic throttle glitch that two official franchise dealers failed to resolve. Four Eleven pinpointed the CAN-bus telemetry discrepancy within 4 hours and had me ready for Laguna Seca that weekend. Phenomenal customer experience.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    serviceUsed: "Advanced Diagnostics & Telemetry"
  },
  {
    id: "rev-4",
    author: "Marcus Thorne",
    role: "Tech Executive & Track Driver",
    vehicle: "Mercedes-AMG GT Black Series",
    rating: 5,
    date: "2 months ago",
    comment: "The white-glove enclosed concierge service is seamless. They handle everything from annual maintenance to custom track wheel corner-weighting. When you walk into their spotless workshop with hex lighting and spotless epoxy floors, you instantly recognize this is not an average shop. It's an automotive sanctuary.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    serviceUsed: "Scheduled Care & Corner Balancing"
  }
];

export const WORKSHOP_FEATURES = [
  {
    title: "1,500 HP AWD Dyno Cell",
    desc: "Acoustically isolated test bay equipped with dual high-CFM variable fans to simulate 160 MPH airflow for flawless thermal calibration."
  },
  {
    title: "Cleanroom Detailing Lab",
    desc: "ISO Class 7 air-filtered, dust-free paint correction and PPF bay with 360-degree high-CRI color-matched LED hex lighting arrays."
  },
  {
    title: "Hunter Hawkeye Elite Alignment",
    desc: "Laser 3D optical wheel alignment and corner-weighting scales measuring down to 0.01 degrees and 0.5 lbs for track-ready dynamics."
  },
  {
    title: "OEM Factory Diagnostic Suites",
    desc: "Official factory telemetry hardware for Porsche (PIWIS 4), Ferrari (SD3/Leonardo), Lamborghini, and McLaren diagnostic architectures."
  }
];
