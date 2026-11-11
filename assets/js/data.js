/* =========================================================
   Tech Care – content layer
   All copy is bilingual: { bn: '...', en: '...' }
   Plain script (no modules) so it works with file:// too.
   ========================================================= */

/* Local images (assets/img/<name>.jpg) */
const TC_IMG = {
  hero: 'assets/img/hero.jpg',
  software: 'assets/img/software.jpg',
  hardware: 'assets/img/hardware.jpg',
  chip: 'assets/img/chip.jpg',
  computer: 'assets/img/computer.jpg',
  fasttrack: 'assets/img/fasttrack.jpg',
  certified: 'assets/img/certified.jpg',
  business: 'assets/img/business.jpg',
  tools: 'assets/img/tools.jpg',
  service: 'assets/img/service.jpg',
  lab: 'assets/img/lab.jpg'
};

const TC_COMPANY = {
  name: { bn: 'টেক কেয়ার', en: 'Tech Care' },
  legal: { bn: 'টেক কেয়ার মোবাইল সার্ভিসিং ট্রেনিং সেন্টার', en: 'Tech Care Mobile Servicing Training Center' },
  tagline: {
    bn: 'দক্ষ হাতের ছোঁয়ায় নির্ভরযোগ্য মোবাইল সেবা ও প্রশিক্ষণ',
    en: 'Reliable mobile service and training, crafted by skilled hands'
  },
  phone: '+880 1700-000000',
  phone2: '+880 1800-000000',
  email: 'info@techcare.com.bd',
  address: {
    bn: '১২৩ মেইন রোড, মিরপুর-১০, ঢাকা-১২১৬',
    en: '123 Main Road, Mirpur-10, Dhaka-1216'
  },
  hours: {
    bn: 'শনি - বৃহস্পতি | সকাল ৯টা - রাত ৮টা',
    en: 'Sat - Thu | 9:00 AM - 8:00 PM'
  }
};

/* ---------- Repair services (business side) ---------- */
const TC_SERVICES = [
  {
    id: 'screen',
    img: TC_IMG.service,
    title: { bn: 'ডিসপ্লে ও টাচ রিপ্লেসমেন্ট', en: 'Display & Touch Replacement' },
    desc: {
      bn: 'অরিজিনাল ও হাই-কোয়ালিটি ডিসপ্লে ব্যবহার করে ৩০ মিনিটে স্ক্রিন পরিবর্তন, ফ্রেম চেঞ্জ ও টাচ ক্যালিব্রেশন।',
      en: 'Screen swap, frame change and touch calibration within 30 minutes using original and A-grade panels.'
    },
    price: { bn: '৳১,২০০ থেকে শুরু', en: 'From BDT 1,200' }
  },
  {
    id: 'battery',
    img: TC_IMG.hardware,
    title: { bn: 'ব্যাটারি ও চার্জিং সলিউশন', en: 'Battery & Charging Solution' },
    desc: {
      bn: 'ফাস্ট ড্রেন, অতিরিক্ত গরম হওয়া, চার্জ না নেওয়া—ব্যাটারি, কানেক্টর ও চার্জিং আইসি লেভেল পর্যন্ত সমাধান।',
      en: 'Fast drain, overheating, no-charge issues solved down to the battery, connector and charging IC level.'
    },
    price: { bn: '৳৮০০ থেকে শুরু', en: 'From BDT 800' }
  },
  {
    id: 'software',
    img: TC_IMG.software,
    title: { bn: 'সফটওয়্যার ফ্ল্যাশিং ও আনলক', en: 'Software Flashing & Unlock' },
    desc: {
      bn: 'ডেড বুট, বুটলুপ, প্যাটার্ন/FRP লক, ভাইরাস এবং IMEI রিস্টোর—অ্যাডভান্সড ফ্ল্যাশ টুল দিয়ে নিরাপদে।',
      en: 'Dead boot, bootloop, pattern/FRP lock, virus removal and IMEI restore handled safely with pro flashing tools.'
    },
    price: { bn: '৳৫০০ থেকে শুরু', en: 'From BDT 500' }
  },
  {
    id: 'chip',
    img: TC_IMG.chip,
    title: { bn: 'চিপ লেভেল সার্ভিসিং', en: 'Chip Level Servicing' },
    desc: {
      bn: 'মাইক্রোস্কোপ ও BGA রিওয়ার্ক স্টেশন দিয়ে পাওয়ার সেকশন, CPU, PMIC ও ওয়াটার ড্যামেজ রিপেয়ার।',
      en: 'Power section, CPU, PMIC and water-damage repair using microscope and BGA rework station.'
    },
    price: { bn: '৳২,৫০০ থেকে শুরু', en: 'From BDT 2,500' }
  },
  {
    id: 'data',
    img: TC_IMG.tools,
    title: { bn: 'ডাটা রিকভারি', en: 'Data Recovery' },
    desc: {
      bn: 'ডেড ফোন, ব্রোকেন ডিসপ্লে বা ভুল ফরম্যাট থেকেও ছবি, ভিডিও ও কন্টাক্ট রিকভার করার চেষ্টা করা হয়।',
      en: 'Photos, videos and contacts recovered from dead phones, broken displays or accidental formats.'
    },
    price: { bn: '৳১,৫০০ থেকে শুরু', en: 'From BDT 1,500' }
  },
  {
    id: 'maintenance',
    img: TC_IMG.lab,
    title: { bn: 'প্রিভেন্টিভ মেইনটেন্যান্স', en: 'Preventive Maintenance' },
    desc: {
      bn: 'ফোনের ভেতরের ক্লিনিং, থার্মাল পেস্ট রিফ্রেশ, চার্জিং পোর্ট ক্লিনিং ও পারফরম্যান্স টিউনিং।',
      en: 'Internal cleaning, thermal paste refresh, charging port cleaning and performance tuning.'
    },
    price: { bn: '৳৪০০ থেকে শুরু', en: 'From BDT 400' }
  }
];

/* ---------- Courses ---------- */
const TC_COURSES = [
  {
    id: 'software-basic',
    cat: 'software',
    img: TC_IMG.software,
    featured: true,
    title: { bn: 'মোবাইল সফটওয়্যার (বেসিক)', en: 'Mobile Software (Basic)' },
    short: {
      bn: 'ফ্ল্যাশিং, আনলক ও সফটওয়্যার ট্রাবলশুটিংয়ের হাতে-কলমে ভিত্তি তৈরি করুন।',
      en: 'Build a hands-on foundation in flashing, unlocking and software troubleshooting.'
    },
    fee: 6000,
    oldFee: 8000,
    duration: { bn: '১.৫ মাস (১২ ক্লাস)', en: '1.5 Months (12 Classes)' },
    batch: { bn: 'রেগুলার', en: 'Regular' },
    level: { bn: 'বিগিনার', en: 'Beginner' },
    seats: 15,
    outcomes: [
      { bn: 'সব ব্র্যান্ডের ফোন ফ্ল্যাশ করা', en: 'Flash phones of all major brands' },
      { bn: 'FRP ও প্যাটার্ন লক রিমুভ করা', en: 'Remove FRP and pattern locks' },
      { bn: 'ডেড বুট ফোন রিভাইভ করা', en: 'Revive dead-boot devices' }
    ],
    tools: [
      { bn: 'নিজস্ব ফ্ল্যাশ বক্স ব্যবহারের সুযোগ', en: 'Access to institute flash boxes' },
      { bn: 'ফার্মওয়্যার আর্কাইভ অ্যাক্সেস', en: 'Firmware archive access' }
    ],
    syllabus: [
      { bn: 'মোবাইল হার্ডওয়্যার ও সফটওয়্যার পরিচিতি', en: 'Mobile hardware and software overview' },
      { bn: 'অপারেটিং সিস্টেম ইনস্টলেশন ও বেসিক সেটিংস', en: 'OS installation and basic settings' },
      { bn: 'ফ্ল্যাশ টুল সেটআপ (SP Flash, Odin, QFIL)', en: 'Flashing tool setup (SP Flash, Odin, QFIL)' },
      { bn: 'FRP, প্যাটার্ন ও অ্যাকাউন্ট লক রিমুভাল', en: 'FRP, pattern and account lock removal' },
      { bn: 'বুটলুপ ও ডেড বুট সলিউশন', en: 'Bootloop and dead-boot solutions' },
      { bn: 'IMEI ব্যাকআপ ও রিস্টোর করা', en: 'IMEI backup and restore' },
      { bn: 'ভাইরাস ক্লিনিং ও পারফরম্যান্স টিউনিং', en: 'Virus cleaning and performance tuning' },
      { bn: 'লাইভ ক্লায়েন্ট কেস প্র্যাকটিস', en: 'Live client case practice' }
    ]
  },
  {
    id: 'hardware-basic',
    cat: 'hardware',
    img: TC_IMG.hardware,
    featured: true,
    title: { bn: 'মোবাইল হার্ডওয়্যার (বেসিক)', en: 'Mobile Hardware (Basic)' },
    short: {
      bn: 'ডিসঅ্যাসেম্বলি, পার্টস চেনা ও মাল্টিমিটার দিয়ে ফল্ট ফাইন্ডিং শিখুন।',
      en: 'Learn disassembly, part identification and fault finding with a multimeter.'
    },
    fee: 8000,
    oldFee: 10000,
    duration: { bn: '২ মাস (১৬ ক্লাস)', en: '2 Months (16 Classes)' },
    batch: { bn: 'রেগুলার', en: 'Regular' },
    level: { bn: 'বিগিনার', en: 'Beginner' },
    seats: 15,
    outcomes: [
      { bn: 'যেকোনো ফোন নিরাপদে খোলা ও জোড়া লাগানো', en: 'Safely open and reassemble any phone' },
      { bn: 'মাল্টিমিটার দিয়ে ফল্ট ধরা', en: 'Trace faults with a multimeter' },
      { bn: 'ডিসপ্লে, ব্যাটারি ও চার্জিং পার্টস পরিবর্তন', en: 'Replace display, battery and charging parts' }
    ],
    tools: [
      { bn: 'প্রফেশনাল টুল কিট সেট', en: 'Professional tool kit set' },
      { bn: 'প্র্যাকটিস ডিভাইস ও স্পেয়ার পার্টস', en: 'Practice devices and spare parts' }
    ],
    syllabus: [
      { bn: 'সার্ভিসিং টুলস ও সেফটি প্রোটোকল', en: 'Servicing tools and safety protocol' },
      { bn: 'ফোন ডিসঅ্যাসেম্বলি ও অ্যাসেম্বলি', en: 'Phone disassembly and assembly' },
      { bn: 'কম্পোনেন্ট আইডেন্টিফিকেশন (IC, রেজিস্টর, ক্যাপাসিটর)', en: 'Component identification (IC, resistor, capacitor)' },
      { bn: 'মাল্টিমিটার ও ডিসি পাওয়ার সাপ্লাই ব্যবহার', en: 'Using multimeter and DC power supply' },
      { bn: 'চার্জিং সেকশন ট্রাবলশুটিং', en: 'Charging section troubleshooting' },
      { bn: 'ডিসপ্লে, টাচ ও ফ্লেক্স কেবল রিপ্লেসমেন্ট', en: 'Display, touch and flex cable replacement' },
      { bn: 'মাইক্রো-সোল্ডারিং বেসিক', en: 'Micro-soldering basics' },
      { bn: 'ক্লায়েন্ট হ্যান্ডওভার ও ওয়ারেন্টি নীতি', en: 'Client handover and warranty policy' }
    ]
  },
  {
    id: 'advanced-chip-level',
    cat: 'hardware',
    img: TC_IMG.chip,
    featured: true,
    title: { bn: 'অ্যাডভান্সড চিপ লেভেল রিপেয়ার', en: 'Advanced Chip Level Repair' },
    short: {
      bn: 'মাইক্রোস্কোপ ও BGA রিওয়ার্ক স্টেশনে সার্কিট লেভেল ইঞ্জিনিয়ারিং।',
      en: 'Circuit level engineering on microscope and BGA rework station.'
    },
    fee: 15000,
    oldFee: 18000,
    duration: { bn: '৩ মাস (২৪ ক্লাস + ল্যাব)', en: '3 Months (24 Classes + Lab)' },
    batch: { bn: 'স্পেশাল', en: 'Special' },
    level: { bn: 'অ্যাডভান্সড', en: 'Advanced' },
    seats: 10,
    outcomes: [
      { bn: 'স্কিমেটিক পড়ে ফল্ট ট্রেস করা', en: 'Read schematics and trace faults' },
      { bn: 'CPU, PMIC ও পাওয়ার আইসি রিবল করা', en: 'Reball CPU, PMIC and power ICs' },
      { bn: 'ওয়াটার ড্যামেজ ফোন সফলভাবে রিভাইভ', en: 'Successfully revive water-damaged phones' }
    ],
    tools: [
      { bn: 'BGA রিওয়ার্ক স্টেশন ও মাইক্রোস্কোপ', en: 'BGA rework station and microscope' },
      { bn: 'সাউন্ড কেস ও রিফ্লো প্রোফাইল ট্রেনিং', en: 'Sound case and reflow profile training' }
    ],
    syllabus: [
      { bn: 'বেসিক ইলেকট্রনিক্স ও সার্কিট থিওরি', en: 'Basic electronics and circuit theory' },
      { bn: 'স্কিমেটিক ডায়াগ্রাম রিডিং', en: 'Schematic diagram reading' },
      { bn: 'পাওয়ার সেকশন ও লাইন ট্রেসিং', en: 'Power section and line tracing' },
      { bn: 'BGA রিবলিং (CPU, PMIC, RAM)', en: 'BGA reballing (CPU, PMIC, RAM)' },
      { bn: 'ওয়াটার ড্যামেজ ক্লিনিং প্রসেস', en: 'Water damage cleaning process' },
      { bn: 'ব্ল্যাক স্ক্রিন ও নো পাওয়ার কেস সলভিং', en: 'Solving black screen and no-power cases' },
      { bn: 'ল্যাব অ্যাসেসমেন্ট ও লাইভ রিপেয়ার', en: 'Lab assessment and live repair' }
    ]
  },
  {
    id: 'computer-fundamental',
    cat: 'computer',
    img: TC_IMG.computer,
    featured: false,
    title: { bn: 'কম্পিউটার ফান্ডামেন্টাল', en: 'Computer Fundamental' },
    short: {
      bn: 'ট্রেনিং সেন্টারে কাজ শুরু করার আগে কম্পিউটার ও টাইপিংয়ে আত্মবিশ্বাস গড়ুন।',
      en: 'Gain confidence in computers and typing before starting at any service center.'
    },
    fee: 4000,
    oldFee: 5000,
    duration: { bn: '১ মাস (১২ ক্লাস)', en: '1 Month (12 Classes)' },
    batch: { bn: 'রেগুলার', en: 'Regular' },
    level: { bn: 'একদম নতুনদের জন্য', en: 'Absolute Beginner' },
    seats: 20,
    outcomes: [
      { bn: 'উইন্ডোজ ও গুগল টুলস ব্যবহার', en: 'Use Windows and Google tools' },
      { bn: 'বাংলা ও ইংরেজি টাইপিং গতি বাড়ানো', en: 'Increase Bengali and English typing speed' },
      { bn: 'ড্রাইভার ও সফটওয়্যার ইনস্টলেশন', en: 'Install drivers and software' }
    ],
    tools: [
      { bn: 'প্র্যাকটিস ল্যাব অ্যাক্সেস', en: 'Practice lab access' },
      { bn: 'টাইপিং সফটওয়্যার সাপোর্ট', en: 'Typing software support' }
    ],
    syllabus: [
      { bn: 'কম্পিউটার হার্ডওয়্যার পরিচিতি', en: 'Computer hardware overview' },
      { bn: 'উইন্ডোজ ইনস্টলেশন ও ড্রাইভার সেটআপ', en: 'Windows installation and driver setup' },
      { bn: 'MS Office ও গুগল ওয়ার্কস্পেস', en: 'MS Office and Google Workspace' },
      { bn: 'টাইপিং প্র্যাকটিস (বাংলা ও ইংরেজি)', en: 'Typing practice (Bengali and English)' },
      { bn: 'ইন্টারনেট, ইমেইল ও ক্লাউড ব্যাকআপ', en: 'Internet, email and cloud backup' },
      { bn: 'বেসিক ট্রাবলশুটিং', en: 'Basic troubleshooting' }
    ]
  },
  {
    id: 'fast-track',
    cat: 'software',
    img: TC_IMG.fasttrack,
    featured: false,
    title: { bn: 'ফাস্ট ট্র্যাক মোবাইল সার্ভিসিং', en: 'Fast Track Mobile Servicing' },
    short: {
      bn: 'কম সময়ে সর্বোচ্চ চাহিদার রিপেয়ার শিখে দ্রুত কাজ শুরু করুন।',
      en: 'Learn the most in-demand repairs quickly and start working sooner.'
    },
    fee: 10000,
    oldFee: 13000,
    duration: { bn: '২১ দিন (ইনটেনসিভ)', en: '21 Days (Intensive)' },
    batch: { bn: 'স্পেশাল', en: 'Special' },
    level: { bn: 'ইন্টারমিডিয়েট', en: 'Intermediate' },
    seats: 12,
    outcomes: [
      { bn: 'দ্রুত রিপেয়ার প্রসেস আয়ত্ত করা', en: 'Master a fast repair workflow' },
      { bn: 'প্রতি ফোনে সময় কমিয়ে আনা', en: 'Cut turnaround time per device' },
      { bn: 'জব বা ফ্রিল্যান্স শুরু করার যোগ্যতা', en: 'Ready for a job or freelance work' }
    ],
    tools: [
      { bn: 'রেডি রিপেয়ার চেকলিস্ট', en: 'Ready repair checklist' },
      { bn: 'প্রাইসিং ও ইনভয়েস টেমপ্লেট', en: 'Pricing and invoice templates' }
    ],
    syllabus: [
      { bn: 'ফাস্ট ডায়াগনোসিস ফ্রেমওয়ার্ক', en: 'Fast diagnosis framework' },
      { bn: 'সবচেয়ে কমন ১০টি রিপেয়ার', en: 'The 10 most common repairs' },
      { bn: 'ট্রাবলশুটিং টুল ব্যবহার', en: 'Using troubleshooting tools' },
      { bn: 'সফটওয়্যার কুইক সলিউশন', en: 'Quick software solutions' },
      { bn: 'কাস্টমার কমিউনিকেশন স্ক্রিপ্ট', en: 'Customer communication scripts' },
      { bn: 'লাইভ ওয়ার্কশপ অ্যাসেসমেন্ট', en: 'Live workshop assessment' }
    ]
  },
  {
    id: 'certified-professional',
    cat: 'combo',
    img: TC_IMG.certified,
    featured: false,
    title: { bn: 'সার্টিফাইড মোবাইল সার্ভিসিং প্রফেশনাল', en: 'Certified Mobile Servicing Professional' },
    short: {
      bn: 'সফটওয়্যার + হার্ডওয়্যার + চিপ লেভেল—সম্পূর্ণ প্যাকেজ, শেষে সার্টিফিকেট ও ইন্টার্নশিপ।',
      en: 'Software + Hardware + Chip level in one package, ending with a certificate and internship.'
    },
    fee: 20000,
    oldFee: 25000,
    duration: { bn: '৪ মাস + ১ মাস ইন্টার্নশিপ', en: '4 Months + 1 Month Internship' },
    batch: { bn: 'প্রফেশনাল', en: 'Professional' },
    level: { bn: 'অ্যাডভান্সড', en: 'Advanced' },
    seats: 8,
    outcomes: [
      { bn: 'স্বীকৃত সার্টিফিকেট অর্জন', en: 'Earn a recognized certificate' },
      { bn: 'আমাদের সার্ভিস সেন্টারে ইন্টার্নশিপ', en: 'Internship at our service center' },
      { bn: 'চাকরির জন্য পোর্টফোলিও তৈরি', en: 'Build a job-ready portfolio' }
    ],
    tools: [
      { bn: 'সার্টিফিকেট ও রেফারেন্স সাপোর্ট', en: 'Certificate and reference support' },
      { bn: 'লাইফটাইম স্টুডেন্ট কমিউনিটি', en: 'Lifetime student community' }
    ],
    syllabus: [
      { bn: 'সফটওয়্যার সলিউশন (পূর্ণ মডিউল)', en: 'Software solutions (full module)' },
      { bn: 'হার্ডওয়্যার রিপেয়ার (পূর্ণ মডিউল)', en: 'Hardware repair (full module)' },
      { bn: 'চিপ লেভেল ডায়াগনোসিস', en: 'Chip level diagnosis' },
      { bn: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড টেস্টিং', en: 'Industry standard testing' },
      { bn: 'কাস্টমার হ্যান্ডলিং ও ওয়ারেন্টি', en: 'Customer handling and warranty' },
      { bn: 'ইন্টার্নশিপ ও ফাইনাল অ্যাসেসমেন্ট', en: 'Internship and final assessment' }
    ]
  },
  {
    id: 'business-startup',
    cat: 'business',
    img: TC_IMG.business,
    featured: false,
    title: { bn: 'মোবাইল সার্ভিসিং ব্যবসা শুরু', en: 'Mobile Servicing Business Startup' },
    short: {
      bn: 'টেকনিক্যাল স্কিলের পাশাপাশি সার্ভিস সেন্টার দাঁড় করানোর পূর্ণ পরিকল্পনা।',
      en: 'A complete plan to set up your own service center alongside technical skill.'
    },
    fee: 12000,
    oldFee: 15000,
    duration: { bn: '১৫ দিন', en: '15 Days' },
    batch: { bn: 'স্পেশাল', en: 'Special' },
    level: { bn: 'সব লেভেল', en: 'All Levels' },
    seats: 20,
    outcomes: [
      { bn: 'খরচ-লভ্যতার হিসাব তৈরি', en: 'Build a cost and profit model' },
      { bn: 'পার্টস সাপ্লাই চেইন সেটআপ', en: 'Set up a parts supply chain' },
      { bn: 'অনলাইন মার্কেটিং দিয়ে কাস্টমার আনা', en: 'Bring customers through online marketing' }
    ],
    tools: [
      { bn: 'বিজনেস প্ল্যান টেমপ্লেট', en: 'Business plan template' },
      { bn: 'লোগো ও ব্র্যান্ডিং গাইড', en: 'Logo and branding guide' }
    ],
    syllabus: [
      { bn: 'সার্ভিস সেন্টার সেটআপ ও অবস্থান নির্বাচন', en: 'Setting up a service center and choosing a location' },
      { bn: 'প্রাথমিক বিনিয়োগ ও খরচ বিশ্লেষণ', en: 'Initial investment and cost analysis' },
      { bn: 'পার্টস ক্রয় ও সাপ্লায়ার ম্যানেজমেন্ট', en: 'Parts purchasing and supplier management' },
      { bn: 'প্রাইসিং, ইনভয়েস ও ওয়ারেন্টি পলিসি', en: 'Pricing, invoices and warranty policy' },
      { bn: 'গ্রাহক সেবা ও কমপ্লেইন হ্যান্ডলিং', en: 'Customer service and complaint handling' },
      { bn: 'ফেসবুক, গুগল ও লোকাল মার্কেটিং', en: 'Facebook, Google and local marketing' }
    ]
  },
  {
    id: 'combo-master',
    cat: 'combo',
    img: TC_IMG.tools,
    featured: false,
    title: { bn: 'সফটওয়্যার + হার্ডওয়্যার কম্বো মাস্টার', en: 'Software + Hardware Combo Master' },
    short: {
      bn: 'দুই কোর্স একসাথে করে টাকা ও সময় দুটোই বাঁচান।',
      en: 'Save both money and time by taking two courses together.'
    },
    fee: 18000,
    oldFee: 22000,
    duration: { bn: '৩.৫ মাস (২৮ ক্লাস)', en: '3.5 Months (28 Classes)' },
    batch: { bn: 'রেগুলার', en: 'Regular' },
    level: { bn: 'ইন্টারমিডিয়েট', en: 'Intermediate' },
    seats: 12,
    outcomes: [
      { bn: 'একজন কমপ্লিট টেকনিশিয়ান হওয়া', en: 'Become a complete technician' },
      { bn: 'যেকোনো কমন ও মিড-লেভেল ফল্ট সলভ', en: 'Solve any common and mid-level fault' },
      { bn: 'কোর্স ফিতে ২৫% পর্যন্ত সাশ্রয়', en: 'Save up to 25% on combined fees' }
    ],
    tools: [
      { bn: 'কম্বো কিট ও ফার্মওয়্যার অ্যাক্সেস', en: 'Combo kit and firmware access' },
      { bn: 'ফ্রি রিভিশন ক্লাস', en: 'Free revision classes' }
    ],
    syllabus: [
      { bn: 'সফটওয়্যার মডিউল (পূর্ণ)', en: 'Software module (full)' },
      { bn: 'হার্ডওয়্যার মডিউল (পূর্ণ)', en: 'Hardware module (full)' },
      { bn: 'মাইক্রো-সোল্ডারিং প্র্যাকটিস', en: 'Micro-soldering practice' },
      { bn: 'ডিসপ্লে ও চার্জিং কেস স্টাডি', en: 'Display and charging case studies' },
      { bn: 'গ্রাহক প্রজেক্ট ওয়ার্ক', en: 'Client project work' },
      { bn: 'ফাইনাল অ্যাসেসমেন্ট', en: 'Final assessment' }
    ]
  }
];

/* ---------- Testimonials ---------- */
const TC_TESTIMONIALS = [
  {
    name: 'Rasel Siddiki',
    role: { bn: 'ফ্রিল্যান্স টেকনিশিয়ান, ঢাকা', en: 'Freelance Technician, Dhaka' },
    text: {
      bn: 'কোর্স শেষ করার এক মাসের মধ্যেই নিজের ছোট সার্ভিস সেন্টার চালু করেছি। চিপ লেভেল ক্লাসটা সবচেয়ে বেশি কাজে এসেছে।',
      en: 'Within a month of finishing I opened my own small service center. The chip level classes helped me the most.'
    },
    rating: 5
  },
  {
    name: 'Md. Sojol Sarder',
    role: { bn: 'উদ্যোক্তা, মিরপুর', en: 'Entrepreneur, Mirpur' },
    text: {
      bn: 'ট্রেনিং করে আজ আমি উদ্যোক্তা হয়ে কাজ করছি। মেন্টররা ক্লাসের বাইরেও যেকোনো সমস্যায় পাশে ছিলেন।',
      en: 'After the training I am working as an entrepreneur today. The mentors stood beside me even outside class hours.'
    },
    rating: 5
  },
  {
    name: 'Saimon Hossain',
    role: { bn: 'স্টুডেন্ট', en: 'Student' },
    text: {
      bn: 'পড়াশোনার পাশাপাশি পার্ট-টাইম কাজ শুরু করেছি। ক্লাসের সময়টা আমাদের ক্লাস রুটিন মেনে ঠিক করে দেওয়া হয়েছে।',
      en: 'I started part-time work alongside my studies. The class timings were arranged around our university routine.'
    },
    rating: 5
  },
  {
    name: 'Mohammed Ali Hossain',
    role: { bn: 'টেকনিশিয়ান, চট্টগ্রাম', en: 'Technician, Chattogram' },
    text: {
      bn: 'বাস্তব ফোন নিয়েই প্র্যাকটিস করানো হয়, তাই প্রথম চাকরিতেই আত্মবিশ্বাসের সাথে কাজ করতে পেরেছি।',
      en: 'We practiced on real phones, so I could work confidently in my very first job.'
    },
    rating: 4
  },
  {
    name: 'Md. Delowar Hossen',
    role: { bn: 'ব্যবসায়ী, নারায়ণগঞ্জ', en: 'Business Owner, Narayanganj' },
    text: {
      bn: 'ব্যবসা শুরুর মডিউলটা দারুণ। খরচ, পার্টস সাপ্লাই আর মার্কেটিং—সব হিসাব করে বুঝিয়ে দেওয়া হয়েছে।',
      en: 'The business startup module is excellent. Costs, parts supply and marketing were all explained with real numbers.'
    },
    rating: 5
  },
  {
    name: 'Nusrat Jahan',
    role: { bn: 'গ্রাজুয়েট, টেক কেয়ার', en: 'Graduate, Tech Care' },
    text: {
      bn: 'মেয়েদের জন্যও পরিবেশ খুবই আরামদায়ক। শিক্ষকরা ধৈর্য ধরে বারবার দেখিয়ে দিয়েছেন।',
      en: 'The environment is very comfortable for women too. The instructors patiently demonstrated everything repeatedly.'
    },
    rating: 5
  }
];

/* ---------- Stats ---------- */
const TC_STATS = [
  { value: 2400, suffix: '+', label: { bn: 'মোট শিক্ষার্থী', en: 'Total Students' } },
  { value: 86, suffix: '+', label: { bn: 'সম্পন্ন ব্যাচ', en: 'Completed Batches' } },
  { value: 11, suffix: '+', label: { bn: 'বছরের অভিজ্ঞতা', en: 'Years of Experience' } },
  { value: 6, suffix: '', label: { bn: 'অ্যাডভান্সড সার্ভিসিং ল্যাব', en: 'Advanced Servicing Labs' } }
];

/* ---------- Blog ---------- */
const TC_BLOGS = [
  {
    id: 'free-seminar-2026',
    img: TC_IMG.fasttrack,
    date: { bn: '০৫ নভেম্বর, ২০২৬', en: '05 November, 2026' },
    author: { bn: 'টেক কেয়ার টিম', en: 'Tech Care Team' },
    cat: { bn: 'সেমিনার', en: 'Seminar' },
    title: { bn: 'ফ্রি মোবাইল সার্ভিসিং সেমিনার ২০২৬ — ছাত্রদের জন্য বিশেষ সুযোগ', en: 'Free Mobile Servicing Seminar 2026 — a special chance for students' },
    excerpt: {
      bn: 'ক্লাসের সময়ের সাথে সামঞ্জস্য রেখে আয়োজিত ফ্রি সেমিনারে জব প্রস্তুতি, ইন্টার্নশিপ ও পার্ট-টাইম সার্ভিসিং নিয়ে সরাসরি পরামর্শ পাবেন।',
      en: 'A free seminar arranged around class hours where you get direct guidance on job preparation, internships and part-time servicing.'
    },
    content: [
      { h: { bn: 'সেমিনারে কী থাকছে?', en: 'What the seminar covers' },
        p: { bn: 'প্রতি মাসে আমরা দুইটি ফ্রি সেমিনার আয়োজন করি, যেখানে নতুনদের জন্য টুলস চেনা থেকে শুরু করে প্রথম ক্লায়েন্ট হ্যান্ডলিং পর্যন্ত পুরো পথচলা দেখানো হয়। সেমিনারে আসা সবাইকে একটি স্টার্টার চেকলিস্ট দেওয়া হয়।',
             en: 'We run two free seminars every month where beginners are walked through everything from identifying tools to handling their first client. Everyone attending receives a starter checklist.' } },
      { h: { bn: 'স্কলারশিপের সুযোগ', en: 'Scholarship opportunity' },
        p: { bn: 'সেমিনারে অংশ নিয়ে ছোট একটি অ্যাসেসমেন্ট দিলে ১০ জন শিক্ষার্থীকে কোর্স ফিতে আংশিক স্কলারশিপ দেওয়া হয়। এটি বিশেষভাবে তাদের জন্য যারা পড়াশোনার পাশাপাশি দক্ষতা অর্জন করতে চান।',
             en: 'After a short assessment at the seminar, ten students receive partial scholarships on course fees. This is aimed at those who want to build skills alongside their studies.' } }
    ]
  },
  {
    id: 'chip-level-career',
    img: TC_IMG.chip,
    date: { bn: '২১ অক্টোবর, ২০২৬', en: '21 October, 2026' },
    author: { bn: 'ইঞ্জি. রাকিব হাসান', en: 'Engr. Rakib Hasan' },
    cat: { bn: 'ক্যারিয়ার', en: 'Career' },
    title: { bn: 'চিপ লেভেল রিপেয়ার শিখে ক্যারিয়ার গড়ার পূর্ণ রোডম্যাপ', en: 'A complete roadmap for a career in chip level repair' },
    excerpt: {
      bn: 'কেন চিপ লেভেল টেকনিশিয়ানদের বাজার মূল্য বেশি, কোন স্কিল আগে শিখবেন আর কীভাবে প্র্যাকটিস চালিয়ে যাবেন।',
      en: 'Why chip level technicians are paid more, which skills to learn first and how to keep practising.'
    },
    content: [
      { h: { bn: 'কেন চিপ লেভেল আলাদা?', en: 'Why chip level stands apart' },
        p: { bn: 'সাধারণ পার্টস রিপ্লেসমেন্টের বাজারে প্রতিযোগিতা অনেক বেশি। কিন্তু স্কিমেটিক পড়ে পাওয়ার লাইন ট্রেস করা, BGA রিবল করা অথবা ওয়াটার ড্যামেজ বোর্ড রিভাইভ করা—এই দক্ষতা আছে এমন টেকনিশিয়ানের সংখ্যা অনেক কম। তাই সমান অভিজ্ঞতায় চিপ লেভেল টেকনিশিয়ানের ইনকাম প্রায় দুই গুণ।',
             en: 'The market for basic part replacement is crowded. But far fewer technicians can read schematics, trace power lines, reball BGAs or revive water damaged boards. That is why a chip level technician typically earns close to twice as much at the same experience level.' } },
      { h: { bn: 'শেখার ক্রম', en: 'The order to learn in' },
        p: { bn: 'প্রথমে বেসিক ইলেকট্রনিক্স ও মাল্টিমিটার, এরপর হার্ডওয়্যার ডিসঅ্যাসেম্বলি, তারপর স্কিমেটিক পড়া এবং সবশেষে BGA রিওয়ার্ক। এই ক্রম উল্টে গেলে হতাশা আসে, কারণ ভিত্তি ছাড়া রিওয়ার্ক শেখা মানে ট্রায়াল-এন্ড-এরর।',
             en: 'Start with basic electronics and the multimeter, then hardware disassembly, then schematic reading and only then BGA rework. Reversing this order causes frustration, because learning rework without fundamentals turns into trial and error.' } },
      { h: { bn: 'প্র্যাকটিস ধরে রাখার উপায়', en: 'How to keep your skill sharp' },
        p: { bn: 'সপ্তাহে অন্তত তিনটি ডেড বোর্ড নিয়ে কাজ করুন, প্রতিটি কেসের নোট রাখুন এবং স্ক্র্যাপ বোর্ডে রিবলিং প্র্যাকটিস চালিয়ে যান। আমাদের গ্র্যাজুয়েটদের জন্য ল্যাব সপ্তাহে দুই দিন খোলা থাকে।',
             en: 'Work on at least three dead boards a week, keep notes on every case and keep reballing on scrap boards. Our lab stays open two days a week for graduates.' } }
    ]
  },
  {
    id: 'tools-guide',
    img: TC_IMG.tools,
    date: { bn: '০৯ অক্টোবর, ২০২৬', en: '09 October, 2026' },
    author: { bn: 'টেক কেয়ার টিম', en: 'Tech Care Team' },
    cat: { bn: 'গাইড', en: 'Guide' },
    title: { bn: 'নতুনদের জন্য মোবাইল সার্ভিসিং টুলস গাইড (বাজেট অনুযায়ী)', en: 'Mobile servicing tools guide for beginners (by budget)' },
    excerpt: {
      bn: 'কোন টুলগুলো আগে কিনবেন, কোনটায় টাকা নষ্ট করবেন না এবং একটি স্টার্টার বাগের আসল খরচ কত।',
      en: 'Which tools to buy first, which ones waste money, and what a starter bag really costs.'
    },
    content: [
      { h: { bn: 'যা যা অবশ্যই লাগবে', en: 'The must-have minimum set' },
        p: { bn: 'প্রফেশনাল স্ক্রুড্রাইভার সেট, প্লাস্টিক প্রাই টুল, টুইজার, হিট গান, মাল্টিমিটার, DC পাওয়ার সাপ্লাই—এই ছয়টি দিয়ে শুরু করা যায়। দামি মাইক্রোস্কোপ বা BGA স্টেশন পরে কিনবেন, যখন কাজ বাড়বে।',
             en: 'A professional screwdriver set, plastic pry tools, tweezers, a heat gun, a multimeter and a DC power supply are enough to start. Buy the expensive microscope or BGA station later, once the work increases.' } },
      { h: { bn: 'যেখানে টাকা নষ্ট হয়', en: 'Where money gets wasted' },
        p: { bn: 'প্রথম দিনেই সবচেয়ে বড় টুল কিট কেনা, কম দামের সোল্ডারিং আয়রন কেনা এবং অপ্রয়োজনীয় ফ্ল্যাশ বক্স কেনা—এই তিনটিই নতুনদের সবচেয়ে বড় ভুল।',
             en: 'Buying the biggest tool kit on day one, cheap soldering irons and unnecessary flash boxes are the three biggest beginner mistakes.' } }
    ]
  },
  {
    id: 'business-plan',
    img: TC_IMG.business,
    date: { bn: '২৮ সেপ্টেম্বর, ২০২৬', en: '28 September, 2026' },
    author: { bn: 'মো. শাহীন আলম', en: 'Md. Shahin Alam' },
    cat: { bn: 'ব্যবসা', en: 'Business' },
    title: { bn: 'ছোট রিপেয়ার শপ থেকে বড় সার্ভিস সেন্টার — A to Z প্ল্যান', en: 'From a small repair shop to a full service center — the A to Z plan' },
    excerpt: {
      bn: 'লোকেশন নির্বাচন, বিনিয়োগ, প্রাইসিং এবং মাসিক হিসাব—একটি সার্ভিস সেন্টার লাভজনক করতে যা যা দরকার।',
      en: 'Location, investment, pricing and monthly accounting — everything needed to make a service center profitable.'
    },
    content: [
      { h: { bn: 'লোকেশন থেকেই অর্ধেক যুদ্ধ', en: 'Location is half the battle' },
        p: { bn: 'স্কুল-কলেজ বা অফিস এলাকার পাশে ছোট দোকান বড় বাজারের চেয়ে ভালো কাজ করে, কারণ ওয়াক-ইন কাস্টমার বেশি থাকে। ছোট পরিসরে শুরু করে ক্যাশ ফ্লো দাঁড় করিয়ে পরে সম্প্রসারণ করাই নিরাপদ।',
             en: 'A small shop near a school, college or office area usually performs better than one in a big market because walk-in traffic is higher. Starting small, stabilizing cash flow and expanding later is the safer route.' } },
      { h: { bn: 'প্রাইসিং ও লভ্যতা', en: 'Pricing and profitability' },
        p: { bn: 'পার্টসের দামের সাথে সার্ভিস চার্জ আলাদা করে দেখানো উচিত। এতে কাস্টমার আস্থা বাড়ে এবং পার্টসের দাম বাড়লেও আপনার লভ্যতা স্থির থাকে।',
             en: 'Parts cost and service charge should be shown separately. This builds customer trust and keeps your margin stable even when part prices rise.' } }
    ]
  }
];
