export type AppLinks = { play?: string; ios?: string; web?: string };

export type ShippedApp = {
  name: string;
  org: string;
  role: string;
  highlight?: string;
  blurb: string;
  stack: string[];
  platforms: string;
  links: AppLinks;
};

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export const apps: ShippedApp[] = [
  {
    name: "JoyRide",
    org: "Ride-hailing super app · Philippines",
    role: "Built from scratch",
    highlight: "10M+ downloads",
    blurb: "Rider and driver apps plus Firebase Cloud Functions, with Google Maps booking and real-time ride updates. Launched Dec 2019.",
    stack: ["React Native", "Redux", "Firebase", "Google Maps"],
    platforms: "Android · iOS",
    links: {
      play: play("com.joyride.rider"),
      ios: "https://apps.apple.com/ph/app/joyride-book-moto-taxi-car/id1482083123",
      web: "https://joyride.com.ph/",
    },
  },
  {
    name: "JoyRide Driver",
    org: "Ride-hailing · Philippines",
    role: "Built from scratch",
    blurb: "Driver app built alongside the rider app, with real-time ride updates over Firebase.",
    stack: ["React Native", "Redux", "Firebase"],
    platforms: "Android",
    links: { play: play("com.joyride.driverv3") },
  },
  {
    name: "Manar Abu Dhabi",
    org: "Department of Culture and Tourism, Abu Dhabi",
    role: "Created the app · largest code author",
    blurb: "Formerly Public Art Abu Dhabi. Interactive art map with POI filters, artwork views, event listings and in-app turn-by-turn route guidance.",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
    platforms: "Android · iOS",
    links: {
      play: play("com.publicartabudhabi"),
      ios: "https://apps.apple.com/us/app/manar-abu-dhabi/id6738164283",
    },
  },
  {
    name: "ClockInMaster",
    org: "Workforce-management SaaS · Pivotium Ltd, UK",
    role: "Co-founder & engineer",
    blurb: "Time and attendance, rota, wage reports and payroll export for restaurants on Android/iOS tablets and web.",
    stack: ["React Native", "Firebase", "Cloud Functions"],
    platforms: "Android · iOS · Web",
    links: {
      play: play("com.foodhub.shiftbuddy"),
      ios: "https://apps.apple.com/us/app/clock-in-master/id6680192687",
      web: "https://clockinmaster.com/",
    },
  },
  {
    name: "YDA Drive",
    org: "Yas Driving Academy, Abu Dhabi",
    role: "Co-built · owned releases",
    blurb: "Trainee app for the academy. I also created the tablet exam app (multilingual, server-scored exams) and co-built the trainer app.",
    stack: ["React Native", "TypeScript", "Redux-Saga"],
    platforms: "Android · iOS",
    links: {
      play: play("ae.yda.trainee"),
      ios: "https://apps.apple.com/us/app/yda-drive/id6753014987",
      web: "https://yda.ae/",
    },
  },
  {
    name: "Foodhub",
    org: "Online food ordering · UK",
    role: "Rewrote the menu experience",
    highlight: "1M+ installs",
    blurb: "Animated, virtualized menu section list with scroll-synced tabs and search, plus location and address flows.",
    stack: ["React Native"],
    platforms: "Android · iOS",
    links: {
      play: play("com.t2s.foodhub"),
      ios: "https://apps.apple.com/gb/app/foodhub-online-takeaways/id1201845916",
      web: "https://foodhub.co.uk/",
    },
  },
  {
    name: "My Business Hub",
    org: "Foodhub merchant app",
    role: "Native → React Native rebuild",
    blurb: "Rebuilt alongside the Fusion tablet POS as one React Native codebase: order, basket and menu modules, pre-orders and printer integration.",
    stack: ["React Native", "AWS AppSync"],
    platforms: "Android · iOS",
    links: {
      play: play("com.t2s.mytakeaway"),
      ios: "https://apps.apple.com/us/app/my-business-hub-mytakeaway/id1125440336",
    },
  },
  {
    name: "Foodhub POS",
    org: "Restaurant point of sale",
    role: "Core POS domain & sync engine",
    blurb: "Table ordering, offline ordering, basket, payments and multi-terminal sync. Distributed to merchants, not on public stores.",
    stack: ["React Native", "SQLite / JSI", "GraphQL"],
    platforms: "Android tablets",
    links: { web: "https://foodhubforbusiness.com/pos" },
  },
  {
    name: "Digital Board",
    org: "Order-display app for TVs",
    role: "Main developer & release owner",
    blurb: "Android TV / Fire TV order-display app for restaurants; owned the v5.0 and v6.0 releases.",
    stack: ["React Native", "Android TV"],
    platforms: "Android TV · Fire TV",
    links: { play: play("com.t2s.t2sproduct.tv") },
  },
  {
    name: "Drive2Success",
    org: "Foodhub delivery driver app",
    role: "Foodhub's first React Native app",
    blurb: "Single-handed rewrite of the native driver app with real-time background location via custom native modules and weekly OTA updates.",
    stack: ["React Native", "Native modules", "CodePush"],
    platforms: "Android · iOS",
    links: {
      play: play("com.ignite_drive2success"),
      ios: "https://apps.apple.com/gb/app/drive2success/id1014490190",
    },
  },
];
