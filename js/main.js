/* ==========================================================================
   FINDORA — shared data + interactions
   Loaded on every page. Every init() function no-ops safely if the markup
   it targets isn't present on the current page.
   ========================================================================== */

/* ---------------------------------- Icons ---------------------------------- */
const ICONS = {
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  bed:'<path d="M2 17V8a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v3"/><path d="M2 17h20"/><path d="M22 17v-4a2 2 0 0 0-2-2h-8"/><path d="M2 21v-4"/><path d="M22 21v-4"/>',
  bath:'<path d="M4 12h16a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1Z"/><path d="M7 12V6a2 2 0 0 1 3.5-1.3"/><path d="M4 21v1"/><path d="M20 21v1"/>',
  maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  car:'<path d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="2.5" y="11" width="19" height="6" rx="2"/><circle cx="7.5" cy="17.5" r="1.7"/><circle cx="16.5" cy="17.5" r="1.7"/>',
  mapPin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  chevronLeft:'<polyline points="15 18 9 12 15 6"/>',
  chevronRight:'<polyline points="9 18 15 12 9 6"/>',
  chevronDown:'<polyline points="6 9 12 15 18 9"/>',
  x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  menu:'<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail:'<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  messageCircle:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  helpCircle:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  logOut:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  checkCircle:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  list:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
  zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  shield:'<path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5z"/>',
  dumbbell:'<rect x="1.5" y="9" width="3" height="6" rx="1"/><rect x="19.5" y="9" width="3" height="6" rx="1"/><line x1="6.5" y1="12" x2="17.5" y2="12"/><rect x="4.5" y="7" width="2" height="10" rx="1"/><rect x="17.5" y="7" width="2" height="10" rx="1"/>',
  paw:'<circle cx="7" cy="7" r="1.6"/><circle cx="12" cy="5.3" r="1.6"/><circle cx="17" cy="7" r="1.6"/><circle cx="19.3" cy="11.7" r="1.6"/><path d="M6.5 12.6c-2 1-2.7 3.4-1.6 5.1 1 1.6 3 2.2 4.7 1.4l1-.5a3.4 3.4 0 0 1 2.8 0l1 .5c1.7.8 3.7.2 4.7-1.4 1.1-1.7.4-4.1-1.6-5.1-1.9-1-4.3-1.5-5.5-1.5s-3.6.5-5.5 1.5Z"/>',
  camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  edit:'<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
  trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  sort:'<path d="M3 8l4-4 4 4"/><path d="M7 4v16"/><path d="M21 16l-4 4-4-4"/><path d="M17 20V4"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="7" x2="9" y2="7.01"/><line x1="15" y1="7" x2="15" y2="7.01"/><line x1="9" y1="11" x2="9" y2="11.01"/><line x1="15" y1="11" x2="15" y2="11.01"/><line x1="9" y1="15" x2="9" y2="15.01"/><line x1="15" y1="15" x2="15" y2="15.01"/>',
  info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
};
function Icon(name, opts){
  opts = opts || {};
  var size = opts.size || 20, stroke = opts.stroke || 1.6, cls = opts.cls || '', fill = opts.fill || 'none';
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="'+fill+'" stroke="currentColor" stroke-width="'+stroke+'" stroke-linecap="round" stroke-linejoin="round" class="'+cls+'">'+(ICONS[name]||'')+'</svg>';
}

/* ---------------------------------- Images ---------------------------------- */
function uns(id){ return 'https://images.unsplash.com/'+id+'?auto=format&fit=crop&w=1400&q=80'; }
const IMG = {
  house1: uns('photo-1722421492323-eaf9c401befe'),
  house2: uns('photo-1613977257363-707ba9348227'),
  house3: uns('photo-1580587771525-78b9dba3b914'),
  house4: uns('photo-1512917774080-9991f1c4c750'),
  house5: uns('photo-1523217582562-09d0def993a6'),
  house6: uns('photo-1600596542815-ffad4c1539a9'),
  house7: uns('photo-1627141234469-24711efb373c'),
  house8: uns('photo-1706808849780-7a04fbac83ef'),
  apt1: uns('photo-1571236673892-13d222da2019'),
  apt2: uns('photo-1624204386084-dd8c05e32226'),
  living1: uns('photo-1583847268964-b28dc8f51f92'),
  living2: uns('photo-1724582586529-62622e50c0b3'),
  kitchen1: uns('photo-1556911220-bff31c812dba'),
  kitchen2: uns('photo-1617228069096-4638a7ffc906'),
  bedroom1: uns('photo-1616594039964-ae9021a400a0'),
  bedroom2: uns('photo-1750420556288-d0e32a6f517b'),
  bathroom1: uns('photo-1584622650111-993a426fbf0a'),
  bathroom2: uns('photo-1638799869566-b17fa794c4de'),
  agentM: 'https://i.pravatar.cc/160?img=12',
  agentF: 'https://i.pravatar.cc/160?img=47',
  user: 'https://i.pravatar.cc/160?img=68'
};

/* ---------------------------------- Data ---------------------------------- */
const AMENITY_META = {
  wifi:{icon:'wifi', label:'Wi-Fi'},
  parking:{icon:'car', label:'Parking'},
  power:{icon:'zap', label:'Power Backup'},
  security:{icon:'shield', label:'Security'},
  pet:{icon:'paw', label:'Pet Friendly'},
  gym:{icon:'dumbbell', label:'Gym'}
};

const AGENTS = {
  aarav:{ name:'Aarav Menon', role:'Senior Property Consultant', phone:'+91 98765 43210', email:'aarav.menon@findora.in', avatar:IMG.agentM },
  meera:{ name:'Meera Pillai', role:'Property Consultant', phone:'+91 90484 21167', email:'meera.pillai@findora.in', avatar:IMG.agentF }
};

const PROPERTIES = [
  { slug:'brookside-haven', name:'Brookside Haven', type:'House', listing:'rent', featured:true,
    location:'Kakkanad, Kochi', lat:10.0159, lng:76.3419, price:12000, period:'Month',
    beds:3, baths:2, area:1200, garage:1, rating:4.5, reviews:128, furnishing:'Semi Furnished', daysAgo:2,
    cover:IMG.house1, gallery:[IMG.house1, IMG.kitchen1, IMG.living1, IMG.bedroom1, IMG.bathroom1],
    description:['Beautiful modern home tucked into a quiet corner of Kakkanad, with a spacious open-plan kitchen and living area designed for everyday family life.','Floor-to-ceiling windows carry natural light through every room, while the private garage and landscaped backyard make it easy to settle in.'],
    amenities:['wifi','parking','power','security','pet'], agent:AGENTS.aarav,
    details:{ id:'#FD25412', furnishing:'Semi Furnished', listedBy:'Aarav Menon', available:'15 May 2026', floors:2, year:2022 } },

  { slug:'lakeside-house', name:'Lakeside House', type:'House', listing:'rent',
    location:'Fort Kochi, Kerala', lat:9.9658, lng:76.2422, price:15000, period:'Month',
    beds:3, baths:2, area:1500, garage:1, rating:4.6, reviews:94, furnishing:'Furnished', daysAgo:5,
    cover:IMG.house2, gallery:[IMG.house2, IMG.living2, IMG.kitchen2, IMG.bedroom2, IMG.bathroom1],
    description:['A calm, light-filled retreat near Fort Kochi\u2019s waterfront, with a layout that flows naturally from the living room out to a private garden.','Finished with warm wood tones and a fully equipped kitchen, it is built for relaxed mornings and easy weekend hosting.'],
    amenities:['wifi','parking','security','pet'], agent:AGENTS.meera,
    details:{ id:'#FD25413', furnishing:'Furnished', listedBy:'Meera Pillai', available:'1 June 2026', floors:2, year:2021 } },

  { slug:'urban-retreat', name:'Urban Retreat', type:'House', listing:'rent',
    location:'Edappally, Kerala', lat:10.0257, lng:76.3084, price:18000, period:'Month',
    beds:2, baths:2, area:1100, garage:1, rating:4.3, reviews:61, furnishing:'Unfurnished', daysAgo:9,
    cover:IMG.house3, gallery:[IMG.house3, IMG.kitchen1, IMG.bathroom2, IMG.living1],
    description:['A compact, efficient home in Edappally built for city living \u2014 close to schools, offices and the metro, without giving up outdoor space.','The layout keeps bedrooms private while the living and dining areas stay open and bright throughout the day.'],
    amenities:['wifi','power','security'], agent:AGENTS.aarav,
    details:{ id:'#FD25414', furnishing:'Unfurnished', listedBy:'Aarav Menon', available:'Immediate', floors:1, year:2019 } },

  { slug:'maple-villa', name:'Maple Villa', type:'Villa', listing:'buy',
    location:'Kochi, Kerala', lat:9.9312, lng:76.2673, price:4200000, period:null,
    beds:3, baths:3, area:1400, garage:1, rating:4.7, reviews:142, furnishing:'Furnished', daysAgo:1,
    cover:IMG.house4, gallery:[IMG.house4, IMG.living1, IMG.kitchen2, IMG.bedroom1, IMG.bathroom2],
    description:['A striking two-storey villa in the heart of Kochi with a dedicated home office, a covered veranda and driveway space for two cars.','Every room carries the same restrained, modern palette \u2014 from the entry hall through to the primary suite.'],
    amenities:['wifi','parking','power','security','pet'], agent:AGENTS.meera,
    details:{ id:'#FD25415', furnishing:'Furnished', listedBy:'Meera Pillai', available:'Ready to move', floors:2, year:2023 } },

  { slug:'serene-stays', name:'Serene Stays', type:'Apartment', listing:'rent',
    location:'Panampilly Nagar, Kerala', lat:9.9615, lng:76.2969, price:11000, period:'Month',
    beds:2, baths:2, area:900, garage:0, rating:4.2, reviews:47, furnishing:'Semi Furnished', daysAgo:12,
    cover:IMG.apt1, gallery:[IMG.apt1, IMG.living2, IMG.kitchen1, IMG.bathroom1],
    description:['A quiet two-bedroom apartment in Panampilly Nagar with a compact, well-planned layout and a shared rooftop garden residents can book for events.','Ideal for a small family or a couple who want walkable access to caf\u00e9s, clinics and the metro station nearby.'],
    amenities:['wifi','security','gym'], agent:AGENTS.aarav,
    details:{ id:'#FD25416', furnishing:'Semi Furnished', listedBy:'Aarav Menon', available:'10 May 2026', floors:6, year:2020 } },

  { slug:'elite-residency', name:'Elite Residency', type:'House', listing:'buy',
    location:'Palarivattom, Kerala', lat:10.0021, lng:76.3084, price:3850000, period:null,
    beds:3, baths:2, area:1100, garage:1, rating:4.4, reviews:58, furnishing:'Unfurnished', daysAgo:7,
    cover:IMG.house5, gallery:[IMG.house5, IMG.kitchen2, IMG.bedroom2, IMG.living1],
    description:['A dependable family home in Palarivattom with mature trees along the street and a fenced front yard for children or pets to play safely.','The kitchen was recently renovated with new counters and storage, and the attached garage keeps one car fully covered.'],
    amenities:['wifi','parking','power','security'], agent:AGENTS.meera,
    details:{ id:'#FD25417', furnishing:'Unfurnished', listedBy:'Meera Pillai', available:'Ready to move', floors:2, year:2018 } },

  { slug:'willow-court', name:'Willow Court', type:'Apartment', listing:'rent',
    location:'Kaloor, Kerala', lat:9.9884, lng:76.2999, price:16500, period:'Month',
    beds:3, baths:2, area:1300, garage:1, rating:4.1, reviews:33, furnishing:'Furnished', daysAgo:3,
    cover:IMG.apt2, gallery:[IMG.apt2, IMG.living1, IMG.kitchen1, IMG.bedroom2],
    description:['A bright corner apartment in Kaloor with cross-ventilation in every room and a small balcony that catches the evening breeze.','Residents share access to a small gym and a covered parking bay just steps from the lift.'],
    amenities:['wifi','parking','security','gym'], agent:AGENTS.aarav,
    details:{ id:'#FD25418', furnishing:'Furnished', listedBy:'Aarav Menon', available:'20 May 2026', floors:8, year:2021 } },

  { slug:'cedar-grove', name:'Cedar Grove', type:'Villa', listing:'buy',
    location:'Vyttila, Kerala', lat:9.9679, lng:76.3179, price:5500000, period:null,
    beds:4, baths:3, area:1800, garage:2, rating:4.8, reviews:77, furnishing:'Furnished', daysAgo:15,
    cover:IMG.house6, gallery:[IMG.house6, IMG.living2, IMG.kitchen2, IMG.bedroom1, IMG.bathroom2],
    description:['An expansive four-bedroom villa in Vyttila built around a central courtyard, with a separate guest wing and staff quarters.','The primary suite opens onto a private terrace, and the two-car garage sits beneath a covered carport.'],
    amenities:['wifi','parking','power','security','pet'], agent:AGENTS.meera,
    details:{ id:'#FD25419', furnishing:'Furnished', listedBy:'Meera Pillai', available:'Ready to move', floors:2, year:2024 } },

  { slug:'silver-oak', name:'Silver Oak', type:'Villa', listing:'rent',
    location:'Thrikkakara, Kerala', lat:10.0447, lng:76.3316, price:22000, period:'Month',
    beds:4, baths:3, area:1650, garage:2, rating:4.5, reviews:52, furnishing:'Semi Furnished', daysAgo:6,
    cover:IMG.house7, gallery:[IMG.house7, IMG.kitchen1, IMG.bedroom1, IMG.bathroom1],
    description:['A tall, light villa in Thrikkakara with a double-height living room and a rooftop terrace looking out over the neighbourhood.','Set back from the main road behind a gated driveway, it offers more privacy than most homes in the area.'],
    amenities:['wifi','parking','power','security'], agent:AGENTS.aarav,
    details:{ id:'#FD25420', furnishing:'Semi Furnished', listedBy:'Aarav Menon', available:'1 July 2026', floors:3, year:2022 } },

  { slug:'palm-residency', name:'Palm Residency', type:'Room', listing:'rent',
    location:'Kadavanthra, Kerala', lat:9.9667, lng:76.2917, price:9800, period:'Month',
    beds:1, baths:1, area:550, garage:0, rating:4.0, reviews:21, furnishing:'Furnished', daysAgo:20,
    cover:IMG.house8, gallery:[IMG.house8, IMG.living1, IMG.bathroom2],
    description:['A tidy single room in Kadavanthra, ideal for a student or working professional who wants a low-maintenance base close to the city centre.','Utilities and basic furnishing are included, and the building has round-the-clock security at the gate.'],
    amenities:['wifi','security'], agent:AGENTS.meera,
    details:{ id:'#FD25421', furnishing:'Furnished', listedBy:'Meera Pillai', available:'Immediate', floors:4, year:2017 } }
];

const FAVORITES = new Set(['brookside-haven','lakeside-house','urban-retreat','maple-villa','serene-stays','elite-residency']);

function byslug(slug){ return PROPERTIES.find(function(p){ return p.slug === slug; }); }
function formatINR(num){
  num = Math.round(num);
  var str = String(num);
  var lastThree = str.slice(-3);
  var other = str.slice(0, -3);
  if(other !== ''){ lastThree = ',' + lastThree; }
  var formattedOther = other.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return '\u20B9' + formattedOther + lastThree;
}
function priceHTML(p){
  return formatINR(p.price) + (p.period ? '<span>/'+p.period+'</span>' : '');
}

/* ---------------------------------- Card templates ---------------------------------- */
function propertyCardHTML(p){
  return (
  '<div class="card-property" data-slug="'+p.slug+'">'+
    '<div class="cp-media">'+
      '<a href="property.html?p='+p.slug+'" aria-label="View '+p.name+'"><img src="'+p.cover+'" alt="'+p.name+' exterior" loading="lazy"></a>'+
      '<span class="cp-type">'+p.type+'</span>'+
      '<button class="cp-fav" data-fav="'+p.slug+'" aria-label="Save '+p.name+'">'+Icon('heart',{size:16})+'</button>'+
    '</div>'+
    '<div class="cp-body">'+
      '<div class="cp-top">'+
        '<div><h3><a href="property.html?p='+p.slug+'">'+p.name+'</a></h3>'+
        '<div class="cp-loc">'+Icon('mapPin',{size:13})+'<span>'+p.location+'</span></div></div>'+
        '<div class="cp-price">'+priceHTML(p)+'</div>'+
      '</div>'+
      '<div class="cp-stats">'+
        '<span class="cp-stat">'+Icon('bed',{size:15})+' '+p.beds+' Beds</span>'+
        '<span class="cp-stat">'+Icon('bath',{size:15})+' '+p.baths+' Baths</span>'+
        '<span class="cp-stat">'+Icon('maximize',{size:15})+' '+p.area+' sqft</span>'+
        (p.garage ? '<span class="cp-stat">'+Icon('car',{size:15})+' '+p.garage+' Garage</span>' : '')+
      '</div>'+
    '</div>'+
  '</div>');
}

function propertyRowHTML(p){
  return (
  '<div class="row-property" data-slug="'+p.slug+'">'+
    '<div class="rp-media">'+
      '<a href="property.html?p='+p.slug+'"><img src="'+p.cover+'" alt="'+p.name+'" loading="lazy"></a>'+
      '<button class="rp-fav" data-fav="'+p.slug+'" aria-label="Save '+p.name+'">'+Icon('heart',{size:14})+'</button>'+
    '</div>'+
    '<div class="rp-body">'+
      '<div class="rp-top">'+
        '<div><h3 class="h3"><a href="property.html?p='+p.slug+'">'+p.name+'</a></h3>'+
        '<div class="cp-loc">'+Icon('mapPin',{size:13})+'<span>'+p.location+'</span></div></div>'+
        '<div class="cp-price">'+priceHTML(p)+'</div>'+
      '</div>'+
      '<div class="rp-stats">'+
        '<span class="cp-stat">'+Icon('bed',{size:15})+' '+p.beds+' Beds</span>'+
        '<span class="cp-stat">'+Icon('bath',{size:15})+' '+p.baths+' Baths</span>'+
        '<span class="cp-stat">'+Icon('maximize',{size:15})+' '+p.area+' sqft</span>'+
      '</div>'+
    '</div>'+
  '</div>');
}

function markFavorites(scope){
  var root = scope || document;
  root.querySelectorAll('[data-fav]').forEach(function(btn){
    if(FAVORITES.has(btn.dataset.fav)) btn.classList.add('is-fav');
  });
}

/* ---------------------------------- Toast ---------------------------------- */
function showToast(msg){
  var toast = document.getElementById('toast');
  if(!toast){
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = Icon('checkCircle',{size:16}) + '<span>'+msg+'</span>';
  toast.classList.add('is-visible');
  clearTimeout(toast._t);
  toast._t = setTimeout(function(){ toast.classList.remove('is-visible'); }, 2400);
}

/* ---------------------------------- Header scroll (home hero) ---------------------------------- */
function initHeaderScroll(){
  var header = document.querySelector('.site-header.header-transparent');
  if(!header) return;
  function onScroll(){
    if(window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

/* ---------------------------------- Active nav highlighting ---------------------------------- */
function initActiveNav(){
  var page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(function(a){
    if(a.dataset.nav === page) a.classList.add('is-active');
  });
}

/* ---------------------------------- Favorites (event delegation) ---------------------------------- */
function initFavoriteDelegation(){
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-fav]');
    if(!btn) return;
    var slug = btn.dataset.fav;
    var p = byslug(slug);
    btn.classList.toggle('is-fav');
    if(btn.classList.contains('is-fav')){
      FAVORITES.add(slug);
      showToast((p?p.name:'Property') + ' saved to favourites');
    } else {
      FAVORITES.delete(slug);
      showToast('Removed from favourites');
      if(document.body.dataset.page === 'saved'){
        var card = btn.closest('[data-slug]');
        if(card){
          card.style.transition = 'opacity 200ms ease, transform 200ms ease';
          card.style.opacity = '0'; card.style.transform = 'scale(.96)';
          setTimeout(function(){ card.remove(); checkSavedEmpty(); }, 200);
        }
      }
    }
    document.querySelectorAll('[data-fav="'+slug+'"]').forEach(function(b){
      b.classList.toggle('is-fav', FAVORITES.has(slug));
    });
  });
}
function checkSavedEmpty(){
  var grid = document.getElementById('savedGrid');
  var empty = document.getElementById('savedEmpty');
  if(!grid || !empty) return;
  if(grid.children.length === 0){ empty.style.display = 'block'; }
}

/* ---------------------------------- Chip / pill toggle groups (generic) ---------------------------------- */
function initSimpleToggleGroups(){
  document.querySelectorAll('[data-toggle-group]').forEach(function(group){
    var multi = group.dataset.multi === 'true';
    group.querySelectorAll('[data-toggle-value]').forEach(function(btn){
      btn.addEventListener('click', function(){
        if(multi){
          btn.classList.toggle('is-active');
        } else {
          group.querySelectorAll('[data-toggle-value]').forEach(function(b){ b.classList.remove('is-active'); });
          btn.classList.add('is-active');
        }
        group.dispatchEvent(new CustomEvent('change'));
      });
    });
  });
}

/* ---------------------------------- Home hero search -> properties.html ---------------------------------- */
function initHeroSearch(){
  var form = document.getElementById('heroSearchForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var q = document.getElementById('heroSearchInput').value.trim();
    var active = form.querySelector('.hero-chips .chip.is-active');
    var params = new URLSearchParams();
    if(q) params.set('q', q);
    var val = active && active.dataset.toggleValue;
    var typeMap = { house:'House', apartment:'Apartment', rooms:'Room' };
    if(val === 'rent' || val === 'buy') params.set('listing', val);
    else if(val && typeMap[val]) params.set('type', typeMap[val]);
    window.location.href = 'properties.html' + (params.toString() ? '?'+params.toString() : '');
  });
}

/* ---------------------------------- Read more toggle ---------------------------------- */
function initReadMoreToggles(){
  document.querySelectorAll('[data-readmore]').forEach(function(btn){
    var target = document.querySelector(btn.dataset.readmore);
    if(!target) return;
    btn.addEventListener('click', function(){
      var open = target.classList.toggle('is-expanded');
      target.style.display = 'block';
      btn.textContent = open ? 'Show less' : 'Read more';
    });
  });
}

/* ---------------------------------- Range slider (dual thumb) ---------------------------------- */
function initRangeSliders(){
  document.querySelectorAll('.range-slider').forEach(function(wrap){
    var min = wrap.querySelector('.range-min'), max = wrap.querySelector('.range-max');
    var fill = wrap.querySelector('.fill');
    var out = wrap.parentElement.querySelector('.range-values');
    if(!min || !max) return;
    function fmt(v){ return wrap.dataset.prefix ? formatINR(v) : v; }
    function update(){
      var lo = Math.min(+min.value, +max.value - (+min.step||1));
      var hi = Math.max(+max.value, +min.value + (+min.step||1));
      min.value = lo; max.value = hi;
      var pctLo = (lo - min.min) / (min.max - min.min) * 100;
      var pctHi = (hi - max.min) / (max.max - max.min) * 100;
      if(fill){ fill.style.left = pctLo + '%'; fill.style.width = (pctHi - pctLo) + '%'; }
      if(out){
        var spans = out.querySelectorAll('span');
        if(spans[0]) spans[0].textContent = fmt(lo);
        if(spans[1]) spans[1].textContent = fmt(hi);
      }
      wrap.dispatchEvent(new CustomEvent('rangechange', { detail:{ min:lo, max:hi } }));
    }
    min.addEventListener('input', update);
    max.addEventListener('input', update);
    update();
  });
}

/* ---------------------------------- Mobile filters drawer ---------------------------------- */
function initMobileFiltersDrawer(){
  var fab = document.getElementById('filtersFab');
  var panel = document.getElementById('filtersCard');
  var backdrop = document.getElementById('filtersBackdrop');
  var closeBtn = document.getElementById('filtersClose');
  var applyBtn = document.getElementById('filtersApplyMobile');
  if(!fab || !panel) return;
  function open(){ panel.classList.add('is-open'); backdrop && backdrop.classList.add('is-open'); document.body.style.overflow='hidden'; }
  function close(){ panel.classList.remove('is-open'); backdrop && backdrop.classList.remove('is-open'); document.body.style.overflow=''; }
  fab.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  applyBtn && applyBtn.addEventListener('click', close);
}

/* ---------------------------------- Lightbox (fullscreen gallery) ---------------------------------- */
var LB = { images:[], index:0, name:'' };
function openLightbox(images, index, name){
  LB.images = images; LB.index = index || 0; LB.name = name || '';
  var lb = document.getElementById('lightbox');
  if(!lb) return;
  lb.classList.add('is-open');
  document.body.classList.add('lb-locked');
  renderLightbox();
}
function closeLightbox(){
  var lb = document.getElementById('lightbox');
  if(!lb) return;
  lb.classList.remove('is-open');
  document.body.classList.remove('lb-locked');
}
function renderLightbox(){
  var lb = document.getElementById('lightbox');
  if(!lb) return;
  var img = lb.querySelector('.lightbox-stage img');
  var count = lb.querySelector('.lb-count');
  var thumbs = lb.querySelector('.lightbox-thumbs');
  img.src = LB.images[LB.index];
  count.textContent = (LB.index+1) + ' / ' + LB.images.length + (LB.name ? ' \u00b7 '+LB.name : '');
  thumbs.innerHTML = LB.images.map(function(src, i){
    return '<img src="'+src+'" data-i="'+i+'" class="'+(i===LB.index?'is-active':'')+'" alt="thumbnail '+(i+1)+'">';
  }).join('');
}
function initLightbox(){
  var lb = document.getElementById('lightbox');
  if(!lb || lb.dataset.bound) { bindGalleryTriggers(); return; }
  lb.dataset.bound = 'true';
  lb.querySelector('.lightbox-nav.prev').addEventListener('click', function(){ LB.index = (LB.index - 1 + LB.images.length) % LB.images.length; renderLightbox(); });
  lb.querySelector('.lightbox-nav.next').addEventListener('click', function(){ LB.index = (LB.index + 1) % LB.images.length; renderLightbox(); });
  lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lb.querySelector('.lightbox-thumbs').addEventListener('click', function(e){
    var t = e.target.closest('img'); if(!t) return;
    LB.index = +t.dataset.i; renderLightbox();
  });
  document.addEventListener('keydown', function(e){
    if(!lb.classList.contains('is-open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') lb.querySelector('.lightbox-nav.prev').click();
    if(e.key === 'ArrowRight') lb.querySelector('.lightbox-nav.next').click();
  });
  bindGalleryTriggers();
}
function bindGalleryTriggers(){
  document.querySelectorAll('[data-gallery-open]').forEach(function(el){
    if(el.dataset.galleryBound) return;
    el.dataset.galleryBound = 'true';
    el.addEventListener('click', function(){
      var slug = el.dataset.gallerySlug || document.body.dataset.propertySlug;
      var p = byslug(slug);
      if(p) openLightbox(p.gallery, +(el.dataset.galleryIndex||0), p.name);
    });
  });
}

/* ==========================================================================
   PAGE: index.html — home
   ========================================================================== */
var HERO_SPOTLIGHT = ['brookside-haven', 'lakeside-house', 'maple-villa'];
var heroSpotlightIndex = 0;
function renderHeroFeatured(){
  var card = document.getElementById('heroFeaturedCard');
  if(!card) return;
  var p = byslug(HERO_SPOTLIGHT[heroSpotlightIndex]);
  var bg = document.getElementById('heroBgImg');
  if(bg){
    bg.style.opacity = 0;
    setTimeout(function(){ bg.src = p.cover; bg.style.opacity = 1; }, 200);
  }
  document.getElementById('hfImg').src = p.cover;
  document.getElementById('hfImg').alt = p.name;
  document.getElementById('hfName').textContent = p.name;
  document.getElementById('hfLoc').innerHTML = Icon('mapPin',{size:12}) + '<span>' + p.location + '</span>';
  document.getElementById('hfPrice').innerHTML = priceHTML(p);
  document.getElementById('hfBeds').textContent = p.beds;
  document.getElementById('hfBaths').textContent = p.baths;
  document.getElementById('hfArea').textContent = p.area;
  document.getElementById('hfGarage').textContent = p.garage;
  document.getElementById('hfContact').href = 'property.html?p=' + p.slug + '#agent';
  document.getElementById('hfSchedule').href = 'schedule-visit.html?p=' + p.slug;
}
function initHeroCarousel(){
  var card = document.getElementById('heroFeaturedCard');
  if(!card) return;
  renderHeroFeatured();
  var prevBtn = document.getElementById('heroPrev'), nextBtn = document.getElementById('heroNext');
  if(prevBtn) prevBtn.addEventListener('click', function(){
    heroSpotlightIndex = (heroSpotlightIndex - 1 + HERO_SPOTLIGHT.length) % HERO_SPOTLIGHT.length;
    renderHeroFeatured();
  });
  if(nextBtn) nextBtn.addEventListener('click', function(){
    heroSpotlightIndex = (heroSpotlightIndex + 1) % HERO_SPOTLIGHT.length;
    renderHeroFeatured();
  });
}
function initHomePage(){
  var rail = document.getElementById('bestOffersRail');
  if(!rail) return;
  rail.innerHTML = PROPERTIES.slice(0,8).map(propertyCardHTML).join('');
  markFavorites(rail);
}

/* ==========================================================================
   PAGE: properties.html — explore / listing
   ========================================================================== */
var PRICE_RANGES = {
  rent:{ min:5000, max:25000, step:500 },
  buy:{ min:2000000, max:6000000, step:100000 }
};
var PROP_FILTER = { q:'', listing:'all', type:'all', priceScale:'rent', priceMin:PRICE_RANGES.rent.min, priceMax:PRICE_RANGES.rent.max, beds:'any', baths:'any', furnishing:'any', sort:'newest' };
var PROP_PAGE = 1;
var PROP_PAGE_SIZE = 6;

function setPriceScale(scale){
  PROP_FILTER.priceScale = scale;
  var cfg = PRICE_RANGES[scale];
  var wrap = document.getElementById('priceRange');
  if(!wrap) return;
  var rMin = wrap.querySelector('.range-min'), rMax = wrap.querySelector('.range-max');
  rMin.min = cfg.min; rMin.max = cfg.max; rMin.step = cfg.step; rMin.value = cfg.min;
  rMax.min = cfg.min; rMax.max = cfg.max; rMax.step = cfg.step; rMax.value = cfg.max;
  var label = document.getElementById('priceRangeLabel');
  if(label) label.textContent = scale === 'buy' ? 'Price Range (Purchase)' : 'Price Range (Monthly Rent)';
  rMin.dispatchEvent(new Event('input'));
  rMax.dispatchEvent(new Event('input'));
}

function applyPropertyFilters(){
  var list = PROPERTIES.filter(function(p){
    if(PROP_FILTER.q){
      var q = PROP_FILTER.q.toLowerCase();
      if(p.name.toLowerCase().indexOf(q)===-1 && p.location.toLowerCase().indexOf(q)===-1) return false;
    }
    if(PROP_FILTER.listing !== 'all' && p.listing !== PROP_FILTER.listing) return false;
    if(PROP_FILTER.type !== 'all' && p.type !== PROP_FILTER.type) return false;
    if(p.listing === PROP_FILTER.priceScale){
      if(p.price < PROP_FILTER.priceMin || p.price > PROP_FILTER.priceMax) return false;
    }
    if(PROP_FILTER.beds !== 'any'){
      var bMin = +PROP_FILTER.beds;
      if(PROP_FILTER.beds === '5' ? p.beds < 5 : p.beds !== bMin) return false;
    }
    if(PROP_FILTER.baths !== 'any'){
      if(PROP_FILTER.baths === '4' ? p.baths < 4 : p.baths !== +PROP_FILTER.baths) return false;
    }
    if(PROP_FILTER.furnishing !== 'any' && p.furnishing !== PROP_FILTER.furnishing) return false;
    return true;
  });
  switch(PROP_FILTER.sort){
    case 'price-asc': list.sort(function(a,b){ return a.price-b.price; }); break;
    case 'price-desc': list.sort(function(a,b){ return b.price-a.price; }); break;
    case 'popular': list.sort(function(a,b){ return b.reviews-a.reviews; }); break;
    default: list.sort(function(a,b){ return a.daysAgo-b.daysAgo; });
  }
  return list;
}

function renderPropertiesPage(){
  var grid = document.getElementById('propertiesGrid');
  if(!grid) return;
  var list = applyPropertyFilters();
  var totalPages = Math.max(1, Math.ceil(list.length / PROP_PAGE_SIZE));
  if(PROP_PAGE > totalPages) PROP_PAGE = totalPages;
  var start = (PROP_PAGE-1)*PROP_PAGE_SIZE;
  var pageItems = list.slice(start, start+PROP_PAGE_SIZE);

  var view = document.body.dataset.view || 'grid';
  grid.className = view === 'list' ? '' : 'grid-cards';
  if(view === 'list'){
    grid.innerHTML = pageItems.length ? pageItems.map(propertyRowHTML).join('<div style="height:16px"></div>') : '';
  } else {
    grid.innerHTML = pageItems.map(propertyCardHTML).join('');
  }
  markFavorites(grid);

  var emptyEl = document.getElementById('propertiesEmpty');
  if(emptyEl) emptyEl.style.display = list.length ? 'none' : 'block';

  var countEl = document.getElementById('resultsCount');
  if(countEl) countEl.textContent = list.length + (list.length === 1 ? ' Property Found' : ' Properties Found');

  renderPagination(totalPages);
}

function renderPagination(totalPages){
  var el = document.getElementById('pagination');
  if(!el) return;
  var html = '';
  html += '<button data-page="prev" '+(PROP_PAGE===1?'disabled':'')+' aria-label="Previous page">'+Icon('chevronLeft',{size:16})+'</button>';
  for(var i=1;i<=totalPages;i++){
    html += '<button data-page="'+i+'" class="'+(i===PROP_PAGE?'is-active':'')+'">'+i+'</button>';
  }
  html += '<button data-page="next" '+(PROP_PAGE===totalPages?'disabled':'')+' aria-label="Next page">'+Icon('chevronRight',{size:16})+'</button>';
  el.innerHTML = html;
}

function initPropertiesPage(){
  var grid = document.getElementById('propertiesGrid');
  if(!grid) return;

  var params = new URLSearchParams(window.location.search);
  if(params.get('q')) PROP_FILTER.q = params.get('q');
  if(params.get('listing')) PROP_FILTER.listing = params.get('listing');
  if(params.get('type')) PROP_FILTER.type = params.get('type');
  if(PROP_FILTER.listing === 'buy') setPriceScale('buy');

  var searchInput = document.getElementById('propertiesSearchInput');
  if(searchInput){
    searchInput.value = PROP_FILTER.q;
    searchInput.addEventListener('input', function(){ PROP_FILTER.q = searchInput.value.trim(); PROP_PAGE = 1; renderPropertiesPage(); });
  }

  document.querySelectorAll('[data-listing-tab]').forEach(function(btn){
    if(btn.dataset.listingTab === PROP_FILTER.listing) btn.classList.add('is-active'); else btn.classList.remove('is-active');
    btn.addEventListener('click', function(){
      document.querySelectorAll('[data-listing-tab]').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      PROP_FILTER.listing = btn.dataset.listingTab; PROP_PAGE = 1;
      setPriceScale(btn.dataset.listingTab === 'buy' ? 'buy' : 'rent');
      renderPropertiesPage();
    });
  });

  document.querySelectorAll('[data-type-tab]').forEach(function(btn){
    if(btn.dataset.typeTab === PROP_FILTER.type) btn.classList.add('is-active'); else btn.classList.remove('is-active');
    btn.addEventListener('click', function(){
      document.querySelectorAll('[data-type-tab]').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      PROP_FILTER.type = btn.dataset.typeTab; PROP_PAGE = 1; renderPropertiesPage();
    });
  });

  document.querySelectorAll('[data-beds]').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('[data-beds]').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active'); PROP_FILTER.beds = btn.dataset.beds; PROP_PAGE = 1; renderPropertiesPage();
    });
  });
  document.querySelectorAll('[data-baths]').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('[data-baths]').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active'); PROP_FILTER.baths = btn.dataset.baths; PROP_PAGE = 1; renderPropertiesPage();
    });
  });
  document.querySelectorAll('[data-furnishing]').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('[data-furnishing]').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active'); PROP_FILTER.furnishing = btn.dataset.furnishing; PROP_PAGE = 1; renderPropertiesPage();
    });
  });

  var priceSlider = document.getElementById('priceRange');
  if(priceSlider){
    priceSlider.addEventListener('rangechange', function(e){
      PROP_FILTER.priceMin = e.detail.min; PROP_FILTER.priceMax = e.detail.max; PROP_PAGE = 1; renderPropertiesPage();
    });
  }

  var sortSelect = document.getElementById('sortSelect');
  if(sortSelect){
    sortSelect.addEventListener('change', function(){ PROP_FILTER.sort = sortSelect.value; renderPropertiesPage(); });
  }

  var clearBtn = document.getElementById('clearFilters');
  if(clearBtn){
    clearBtn.addEventListener('click', function(){
      PROP_FILTER = { q:'', listing:'all', type:'all', priceScale:'rent', priceMin:PRICE_RANGES.rent.min, priceMax:PRICE_RANGES.rent.max, beds:'any', baths:'any', furnishing:'any', sort:'newest' };
      PROP_PAGE = 1;
      document.querySelectorAll('[data-listing-tab],[data-type-tab],[data-beds],[data-baths],[data-furnishing]').forEach(function(b){ b.classList.remove('is-active'); });
      document.querySelector('[data-listing-tab="all"]') && document.querySelector('[data-listing-tab="all"]').classList.add('is-active');
      document.querySelector('[data-type-tab="all"]') && document.querySelector('[data-type-tab="all"]').classList.add('is-active');
      document.querySelector('[data-beds="any"]') && document.querySelector('[data-beds="any"]').classList.add('is-active');
      document.querySelector('[data-baths="any"]') && document.querySelector('[data-baths="any"]').classList.add('is-active');
      document.querySelector('[data-furnishing="any"]') && document.querySelector('[data-furnishing="any"]').classList.add('is-active');
      if(searchInput) searchInput.value = '';
      setPriceScale('rent');
      if(sortSelect) sortSelect.value = 'newest';
      renderPropertiesPage();
    });
  }

  document.querySelectorAll('[data-view]').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('[data-view]').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      document.body.dataset.view = btn.dataset.view;
      renderPropertiesPage();
    });
  });

  var pag = document.getElementById('pagination');
  if(pag){
    pag.addEventListener('click', function(e){
      var btn = e.target.closest('button'); if(!btn || btn.disabled) return;
      var val = btn.dataset.page;
      var totalPages = Math.max(1, Math.ceil(applyPropertyFilters().length / PROP_PAGE_SIZE));
      if(val === 'prev') PROP_PAGE = Math.max(1, PROP_PAGE-1);
      else if(val === 'next') PROP_PAGE = Math.min(totalPages, PROP_PAGE+1);
      else PROP_PAGE = +val;
      renderPropertiesPage();
      grid.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  }

  renderPropertiesPage();
}

/* ==========================================================================
   PAGE: property.html — details
   ========================================================================== */
function initPropertyDetailsPage(){
  var root = document.getElementById('propertyDetails');
  if(!root) return;
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('p') || 'brookside-haven';
  var p = byslug(slug) || PROPERTIES[0];
  document.body.dataset.propertySlug = p.slug;
  document.title = p.name + ' \u2014 FINDORA';

  document.getElementById('pdBreadcrumbName').textContent = p.name;
  document.getElementById('pdName').textContent = p.name;
  document.getElementById('pdLocation').innerHTML = Icon('mapPin',{size:14}) + '<span>'+p.location+'</span>';
  document.getElementById('pdPrice').innerHTML = '<b>'+formatINR(p.price)+'</b>' + (p.period ? '<span> /'+p.period+'</span>' : '');
  document.getElementById('pdRating').innerHTML = Icon('star',{size:14, fill:'currentColor'}) + p.rating.toFixed(1) + ' <span class="count">('+p.reviews+' reviews)</span>';
  document.getElementById('pdFavBtn').dataset.fav = p.slug;

  document.getElementById('pdBeds').textContent = p.beds;
  document.getElementById('pdBaths').textContent = p.baths;
  document.getElementById('pdArea').textContent = p.area + ' sqft';
  document.getElementById('pdGarage').textContent = p.garage;

  document.getElementById('pdDescription').innerHTML = p.description.map(function(t){ return '<p>'+t+'</p>'; }).join('');

  var amenEl = document.getElementById('pdAmenities');
  amenEl.innerHTML = p.amenities.map(function(a){
    var m = AMENITY_META[a];
    return '<div class="amenity">'+Icon(m.icon,{size:22})+'<span>'+m.label+'</span></div>';
  }).join('');

  var infoTable = document.getElementById('pdInfoTable');
  infoTable.innerHTML =
    '<tr><td>Property ID</td><td>'+p.details.id+'</td></tr>'+
    '<tr><td>Property Type</td><td>'+p.type+'</td></tr>'+
    '<tr><td>Furnishing</td><td>'+p.details.furnishing+'</td></tr>'+
    '<tr><td>Listed By</td><td>'+p.details.listedBy+'</td></tr>'+
    '<tr><td>Available From</td><td>'+p.details.available+'</td></tr>'+
    '<tr><td>Total Floors</td><td>'+p.details.floors+'</td></tr>'+
    '<tr><td>Year Built</td><td>'+p.details.year+'</td></tr>';

  document.getElementById('pdAgentAvatar').src = p.agent.avatar;
  document.getElementById('pdAgentName').textContent = p.agent.name;
  document.getElementById('pdAgentRole').textContent = p.agent.role;
  document.getElementById('pdAgentPhone').textContent = p.agent.phone;
  document.getElementById('pdAgentEmail').textContent = p.agent.email;
  var scheduleLinks = document.querySelectorAll('[data-schedule-link]');
  scheduleLinks.forEach(function(a){ a.href = 'schedule-visit.html?p='+p.slug; });

  var gh = document.getElementById('galleryHero');
  var imgs = p.gallery;
  gh.innerHTML =
    '<div class="gh-main" data-gallery-open data-gallery-index="0"><img src="'+imgs[0]+'" alt="'+p.name+' photo 1"><span class="gh-count">'+Icon('camera',{size:14})+' '+imgs.length+' Photos</span></div>'+
    '<div class="gh-side">'+
      '<div data-gallery-open data-gallery-index="1"><img src="'+(imgs[1]||imgs[0])+'" alt="'+p.name+' photo 2"></div>'+
      '<div data-gallery-open data-gallery-index="2"><img src="'+(imgs[2]||imgs[0])+'" alt="'+p.name+' photo 3"></div>'+
    '</div>';

  var mapFrame = document.getElementById('pdMapFrame');
  if(mapFrame){
    var d = 0.012;
    var bbox = (p.lng-d)+','+(p.lat-d)+','+(p.lng+d)+','+(p.lat+d);
    mapFrame.src = 'https://www.openstreetmap.org/export/embed.html?bbox='+bbox+'&layer=mapnik&marker='+p.lat+','+p.lng;
  }

  var similar = PROPERTIES.filter(function(x){ return x.slug !== p.slug && x.type === p.type; }).slice(0,3);
  if(similar.length < 3){
    PROPERTIES.filter(function(x){ return x.slug !== p.slug && similar.indexOf(x)===-1; }).some(function(x){
      if(similar.length>=3) return true;
      similar.push(x); return false;
    });
  }
  document.getElementById('similarProperties').innerHTML = similar.map(propertyCardHTML).join('');

  markFavorites(document);
  initLightbox();
}

/* ==========================================================================
   PAGE: saved.html
   ========================================================================== */
function initSavedPage(){
  var grid = document.getElementById('savedGrid');
  if(!grid) return;
  var list = PROPERTIES.filter(function(p){ return FAVORITES.has(p.slug); });
  grid.innerHTML = list.map(propertyCardHTML).join('');
  markFavorites(grid);
  document.getElementById('savedCount').textContent = list.length + (list.length===1 ? ' Property Saved' : ' Properties Saved');
  checkSavedEmpty();
}

/* ==========================================================================
   PAGE: map.html
   ========================================================================== */
function initMapPage(){
  var listEl = document.getElementById('mapList');
  if(!listEl) return;

  function renderList(items){
    listEl.innerHTML = items.length ? items.map(propertyCardHTML).join('') : '';
    markFavorites(listEl);
    var emptyEl = document.getElementById('mapListEmpty');
    if(emptyEl) emptyEl.style.display = items.length ? 'none' : 'block';
  }
  renderList(PROPERTIES);

  var searchInput = document.getElementById('mapSearchInput');
  if(searchInput){
    searchInput.addEventListener('input', function(){
      var q = searchInput.value.toLowerCase();
      renderList(PROPERTIES.filter(function(p){ return p.name.toLowerCase().indexOf(q)>-1 || p.location.toLowerCase().indexOf(q)>-1; }));
    });
  }

  var mapEl = document.getElementById('leafletMap');
  if(!mapEl) return;
  if(typeof L === 'undefined'){
    mapEl.innerHTML = '<div class="empty-state" style="padding-top:60px"><div class="es-icon">'+Icon('mapPin',{size:24})+'</div><h3 class="h3">Map unavailable</h3><p>Please check your internet connection and reload the page.</p></div>';
    return;
  }

  var map = L.map('leafletMap', { zoomControl:false }).setView([9.9994, 76.3020], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; OpenStreetMap contributors', maxZoom:19
  }).addTo(map);
  L.control.zoom({ position:'bottomright' }).addTo(map);

  var markers = {};

  function priceIcon(p, active){
    return L.divIcon({
      className:'',
      html:'<div class="map-price-pill'+(active?' is-active':'')+'">'+formatINR(p.price)+(p.period?'/'+p.period.charAt(0):'')+'</div>',
      iconSize:[10,10], iconAnchor:[10,10]
    });
  }

  function showCard(p){
    var card = document.getElementById('mapFloatingCard');
    card.classList.add('is-open');
    card.innerHTML =
      '<button class="mfc-close" id="mfcClose">'+Icon('x',{size:14})+'</button>'+
      '<img src="'+p.cover+'" alt="'+p.name+'">'+
      '<div style="min-width:0;flex:1">'+
        '<div class="flex justify-between gap-2"><h3 class="h3">'+p.name+'</h3><b>'+priceHTML(p)+'</b></div>'+
        '<div class="cp-loc mt-2">'+Icon('mapPin',{size:13})+'<span>'+p.location+'</span></div>'+
        '<div class="cp-stats mt-2">'+
          '<span class="cp-stat">'+Icon('bed',{size:14})+' '+p.beds+'</span>'+
          '<span class="cp-stat">'+Icon('bath',{size:14})+' '+p.baths+'</span>'+
          '<span class="cp-stat">'+Icon('maximize',{size:14})+' '+p.area+'</span>'+
        '</div>'+
        '<a href="property.html?p='+p.slug+'" class="btn btn-primary btn-sm mt-3">View Details</a>'+
      '</div>';
    document.getElementById('mfcClose').addEventListener('click', function(){ card.classList.remove('is-open'); });
  }

  PROPERTIES.forEach(function(p){
    var m = L.marker([p.lat, p.lng], { icon:priceIcon(p,false) }).addTo(map);
    m.on('click', function(){
      Object.keys(markers).forEach(function(s){ markers[s].setIcon(priceIcon(byslug(s), false)); });
      m.setIcon(priceIcon(p, true));
      showCard(p);
      map.panTo([p.lat, p.lng]);
    });
    markers[p.slug] = m;
  });
}

/* ==========================================================================
   PAGE: schedule-visit.html
   ========================================================================== */
function initScheduleVisitPage(){
  var dateRow = document.getElementById('dateRow');
  if(!dateRow) return;
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('p') || 'brookside-haven';
  var p = byslug(slug) || PROPERTIES[0];

  document.getElementById('svPropImg').src = p.cover;
  document.getElementById('svPropName').textContent = p.name;
  document.getElementById('svPropMeta').innerHTML = priceHTML(p) + ' &middot; ' + p.location;
  document.getElementById('svBreadcrumbName').textContent = p.name;
  document.getElementById('svBreadcrumbName').href = 'property.html?p=' + p.slug;
  var svAgentAvatar = document.getElementById('svAgentAvatar');
  if(svAgentAvatar){
    svAgentAvatar.src = p.agent.avatar;
    document.getElementById('svAgentName').textContent = p.agent.name;
    document.getElementById('svAgentRole').textContent = p.agent.role;
    document.getElementById('svAgentPhone').textContent = p.agent.phone;
    document.getElementById('svAgentEmail').textContent = p.agent.email;
  }

  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var today = new Date();
  var html = '';
  for(var i=0;i<7;i++){
    var d = new Date(today); d.setDate(today.getDate()+i);
    html += '<button class="date-chip'+(i===1?' is-active':'')+'" data-date="'+d.toDateString()+'">'+
      '<span class="dow">'+days[d.getDay()]+'</span><span class="dom">'+d.getDate()+'</span><span class="dow">'+months[d.getMonth()]+'</span></button>';
  }
  dateRow.innerHTML = html;
  dateRow.querySelectorAll('.date-chip').forEach(function(btn){
    btn.addEventListener('click', function(){
      dateRow.querySelectorAll('.date-chip').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
    });
  });

  var timeRow = document.getElementById('timeRow');
  timeRow.querySelectorAll('.time-chip').forEach(function(btn, i){
    if(i===1) btn.classList.add('is-active');
    btn.addEventListener('click', function(){
      timeRow.querySelectorAll('.time-chip').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
    });
  });

  var form = document.getElementById('scheduleForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var btn = document.getElementById('confirmVisitBtn');
    btn.innerHTML = Icon('checkCircle',{size:17}) + ' Visit Confirmed';
    btn.disabled = true;
    showToast('Your visit to '+p.name+' is confirmed');
  });
}

/* ==========================================================================
   PAGE: messages.html
   ========================================================================== */
var CONVERSATIONS = [
  { id:'brookside', name:'Brookside Estate', avatar:IMG.agentM, time:'10:30 AM', unread:2, propertySlug:'brookside-haven',
    messages:[
      {from:'them', text:'Hi John, is the property still available?'},
      {from:'me', text:'Yes, it\u2019s still available. Would you like to schedule a visit?'},
      {from:'them', text:'That would be great! What dates are available?'}
    ] },
  { id:'urban', name:'Urban Living Group', avatar:IMG.agentF, time:'Yesterday', unread:0, propertySlug:'urban-retreat',
    messages:[
      {from:'them', text:'Thanks for your interest in Urban Retreat.'},
      {from:'me', text:'Of course \u2014 could you send over the floor plan?'},
      {from:'them', text:'Sending it across right now.'}
    ] },
  { id:'lakeside', name:'Lakeside Property', avatar:IMG.agentM, time:'Sun', unread:1, propertySlug:'lakeside-house',
    messages:[
      {from:'them', text:'Please let me know your preferred visiting time.'}
    ] },
  { id:'maple', name:'Maple Homes', avatar:IMG.agentF, time:'Sat', unread:0, propertySlug:'maple-villa',
    messages:[
      {from:'me', text:'Is parking included with the unit?'},
      {from:'them', text:'Yes, one covered spot comes with it.'}
    ] },
  { id:'serene', name:'Serene Stays', avatar:IMG.agentM, time:'Fri', unread:0, propertySlug:'serene-stays',
    messages:[
      {from:'them', text:'We can schedule a visit whenever works for you.'}
    ] }
];

function initMessagesPage(){
  var list = document.getElementById('convList');
  if(!list) return;
  list.innerHTML = CONVERSATIONS.map(function(c, i){
    return '<div class="conv-item'+(i===0?' is-active':'')+'" data-conv="'+c.id+'">'+
      '<img src="'+c.avatar+'" alt="'+c.name+'">'+
      '<div class="ci-body">'+
        '<div class="ci-top"><span class="ci-name">'+c.name+'</span><span class="ci-time">'+c.time+'</span></div>'+
        '<div class="ci-msg">'+c.messages[c.messages.length-1].text+'</div>'+
      '</div>'+
      (c.unread ? '<span class="ci-unread">'+c.unread+'</span>' : '')+
    '</div>';
  }).join('');

  function loadConv(id){
    var c = CONVERSATIONS.find(function(x){ return x.id===id; });
    if(!c) return;
    c.unread = 0;
    document.getElementById('chatName').textContent = c.name;
    document.getElementById('chatAvatar').src = c.avatar;
    var body = document.getElementById('chatBody');
    body.innerHTML = c.messages.map(function(m){
      return '<div class="msg-bubble '+(m.from==='me'?'me':'them')+'">'+m.text+'</div>';
    }).join('');
    body.scrollTop = body.scrollHeight;
    list.querySelectorAll('.conv-item').forEach(function(el){ el.classList.toggle('is-active', el.dataset.conv===id); });
    var activeEl = list.querySelector('[data-conv="'+id+'"] .ci-unread');
    if(activeEl) activeEl.remove();
    document.getElementById('messagesShell').dataset.activeConv = id;

    var ctx = document.getElementById('chatContextPanel');
    if(ctx){
      var p = c.propertySlug && byslug(c.propertySlug);
      ctx.innerHTML = p ? (
        '<span class="eyebrow">Property Details</span>'+
        '<div class="card-property mt-3" data-slug="'+p.slug+'">'+
          '<div class="cp-media"><a href="property.html?p='+p.slug+'"><img src="'+p.cover+'" alt="'+p.name+'"></a>'+
            '<span class="cp-type">'+p.type+'</span>'+
            '<button class="cp-fav" data-fav="'+p.slug+'" aria-label="Save '+p.name+'">'+Icon('heart',{size:16})+'</button></div>'+
          '<div class="cp-body">'+
            '<div class="cp-top"><div><h3>'+p.name+'</h3><div class="cp-loc">'+Icon('mapPin',{size:13})+'<span>'+p.location+'</span></div></div>'+
            '<div class="cp-price">'+priceHTML(p)+'</div></div>'+
            '<div class="cp-stats"><span class="cp-stat">'+Icon('bed',{size:14})+' '+p.beds+'</span><span class="cp-stat">'+Icon('bath',{size:14})+' '+p.baths+'</span><span class="cp-stat">'+Icon('maximize',{size:14})+' '+p.area+' sqft</span></div>'+
          '</div>'+
        '</div>'+
        '<a href="property.html?p='+p.slug+'" class="btn btn-primary btn-block mt-4">View Property</a>'+
        '<a href="schedule-visit.html?p='+p.slug+'" class="btn btn-secondary btn-block mt-2">Schedule Visit</a>'
      ) : '';
      markFavorites(ctx);
    }
  }
  loadConv(CONVERSATIONS[0].id);

  list.addEventListener('click', function(e){
    var item = e.target.closest('[data-conv]');
    if(!item) return;
    loadConv(item.dataset.conv);
    document.getElementById('messagesShell').classList.add('chat-open');
  });

  var backBtn = document.getElementById('chatBack');
  if(backBtn) backBtn.addEventListener('click', function(){ document.getElementById('messagesShell').classList.remove('chat-open'); });

  var form = document.getElementById('chatForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var input = document.getElementById('chatInput');
    var text = input.value.trim();
    if(!text) return;
    var id = document.getElementById('messagesShell').dataset.activeConv;
    var c = CONVERSATIONS.find(function(x){ return x.id===id; });
    c.messages.push({ from:'me', text:text });
    input.value = '';
    loadConv(id);
    setTimeout(function(){
      c.messages.push({ from:'them', text:'Thanks for the message \u2014 I\u2019ll get back to you shortly.' });
      loadConv(id);
    }, 900);
  });
}

/* ==========================================================================
   PAGE: profile.html / edit-profile.html
   ========================================================================== */
function initComingSoonLinks(){
  document.querySelectorAll('[data-coming-soon]').forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      showToast('This section is coming soon');
    });
  });
}

function initEditProfilePage(){
  var form = document.getElementById('editProfileForm');
  if(!form) return;
  var fileInput = document.getElementById('avatarInput');
  var preview = document.getElementById('avatarPreview');
  if(fileInput){
    fileInput.addEventListener('change', function(){
      var file = fileInput.files[0];
      if(!file) return;
      var reader = new FileReader();
      reader.onload = function(e){ preview.src = e.target.result; };
      reader.readAsDataURL(file);
    });
  }
  form.addEventListener('submit', function(e){
    e.preventDefault();
    showToast('Profile updated successfully');
    setTimeout(function(){ window.location.href = 'profile.html'; }, 850);
  });
}

/* ==========================================================================
   Init
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function(){
  initHeaderScroll();
  initActiveNav();
  initFavoriteDelegation();
  initSimpleToggleGroups();
  initHeroSearch();
  initReadMoreToggles();
  initRangeSliders();
  initMobileFiltersDrawer();
  initLightbox();

  initHomePage();
  initHeroCarousel();
  initPropertiesPage();
  initPropertyDetailsPage();
  initSavedPage();
  initMapPage();
  initScheduleVisitPage();
  initMessagesPage();
  initComingSoonLinks();
  initEditProfilePage();

  markFavorites(document);
});
