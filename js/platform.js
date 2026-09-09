/* =========================================================
   العروبة سكوير — منصة الوحدات
   (مُقتبس ومُعرّب من بنية مشروع FINDORA الأصلي)
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- أيقونات ---------------- */
  var ICONS = {
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    bed: '<path d="M2 17V8a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v3"/><path d="M2 17h20"/><path d="M22 17v-4a2 2 0 0 0-2-2h-8"/><path d="M2 21v-4"/><path d="M22 21v-4"/>',
    bath: '<path d="M4 12h16a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1Z"/><path d="M7 12V6a2 2 0 0 1 3.5-1.3"/>',
    maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    messageCircle: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="7" x2="9" y2="7.01"/><line x1="15" y1="7" x2="15" y2="7.01"/><line x1="9" y1="11" x2="9" y2="11.01"/><line x1="15" y1="11" x2="15" y2="11.01"/><line x1="9" y1="15" x2="9" y2="15.01"/><line x1="15" y1="15" x2="15" y2="15.01"/>',
    shield: '<path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5z"/>',
    droplet: '<path d="M12 2.69s6 6.5 6 10.15A6 6 0 1 1 6 12.84C6 9.19 12 2.69 12 2.69z"/>',
    dumbbell: '<rect x="1.5" y="9" width="3" height="6" rx="1"/><rect x="19.5" y="9" width="3" height="6" rx="1"/><line x1="6.5" y1="12" x2="17.5" y2="12"/><rect x="4.5" y="7" width="2" height="10" rx="1"/><rect x="17.5" y="7" width="2" height="10" rx="1"/>',
    car: '<path d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="2.5" y="11" width="19" height="6" rx="2"/><circle cx="7.5" cy="17.5" r="1.7"/><circle cx="16.5" cy="17.5" r="1.7"/>',
    trees: '<path d="M12 2 8 8h8z"/><path d="M12 8 7 15h10z"/><line x1="12" y1="15" x2="12" y2="22"/>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
    edit: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
  };
  function Icon(name, opts) {
    opts = opts || {};
    var size = opts.size || 20, stroke = opts.stroke || 1.8, fill = opts.fill || "none", cls = opts.cls || "";
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + fill + '" stroke="currentColor" stroke-width="' + stroke + '" stroke-linecap="round" stroke-linejoin="round" class="' + cls + '">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------------- أرقام عربية + تنسيق العملة ---------------- */
  function ar(n) {
    var d = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    return String(n).replace(/[0-9]/g, function (c) { return d[+c]; });
  }
  function formatEGP(n) {
    var s = Math.round(n).toString();
    var withSep = s.replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
    return ar(withSep) + " ج.م";
  }
  function priceHTML(u) {
    return "<b>" + formatEGP(u.price) + "</b>" + (u.listing === "rent" ? "<span> / شهريًا</span>" : "");
  }

  /* ---------------- الصور ---------------- */
  function uns(id, w) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (w || 1400) + "&q=80"; }
  var IMG = {
    k: uns("photo-1545324418-cc1a3fa10c00"),
    t: uns("photo-1613490493576-7fde63acd811"),
    z: uns("photo-1582407947304-fd86f028f716"),
    n: uns("photo-1486325212027-8081e485255e"),
    s: uns("photo-1600607687920-4e2a09cf159d"),
    h: uns("photo-1560185007-cde436f6a4d0"),
    living1: uns("photo-1583847268964-b28dc8f51f92"),
    living2: uns("photo-1724582586529-62622e50c0b3"),
    kitchen1: uns("photo-1556911220-bff31c812dba"),
    kitchen2: uns("photo-1617228069096-4638a7ffc906"),
    bedroom1: uns("photo-1616594039964-ae9021a400a0"),
    bedroom2: uns("photo-1750420556288-d0e32a6f517b"),
    bathroom1: uns("photo-1584622650111-993a426fbf0a"),
    consultantM: "https://i.pravatar.cc/160?img=53",
    consultantF: "https://i.pravatar.cc/160?img=32",
    userAvatar: "https://i.pravatar.cc/160?img=68"
  };

  /* ---------------- الأبراج ---------------- */
  var TOWERS = {
    K: { name: "برج K", location: "التجمع الخامس", status: "مكتمل", cover: IMG.k },
    T: { name: "برج T", location: "القاهرة الجديدة", status: "مكتمل", cover: IMG.t },
    Z: { name: "برج Z", location: "حي النخبة", status: "قريباً", cover: IMG.z },
    N: { name: "برج N", location: "التجمع الخامس", status: "قيد الإنشاء", cover: IMG.n },
    S: { name: "برج S", location: "القاهرة الجديدة", status: "قيد الإنشاء", cover: IMG.s },
    H: { name: "برج H", location: "حي النخبة", status: "قيد الإنشاء", cover: IMG.h },
    U: { name: "برج U", location: "التجمع الخامس", status: "قريباً", cover: IMG.k }
  };

  /* ---------------- المرافق ---------------- */
  var AMENITY_META = {
    security: { icon: "shield", label: "أمن وحراسة ٢٤ ساعة" },
    pool: { icon: "droplet", label: "حمام سباحة" },
    gym: { icon: "dumbbell", label: "نادي رياضي" },
    parking: { icon: "car", label: "جراج خاص" },
    garden: { icon: "trees", label: "حديقة خاصة" },
    smart: { icon: "wifi", label: "نظام منزل ذكي" }
  };

  /* ---------------- مستشارو المبيعات ---------------- */
  var CONSULTANTS = {
    ahmed: { name: "أحمد الجوهري", role: "كبير مستشاري المبيعات", phone: "+20 100 123 4567", email: "ahmed.gawhary@orouba-egypt.com", avatar: IMG.consultantM },
    mona: { name: "منى فتحي", role: "مستشارة مبيعات", phone: "+20 122 987 6543", email: "mona.fathy@orouba-egypt.com", avatar: IMG.consultantF }
  };

  /* ---------------- الوحدات ---------------- */
  var UNITS = [
    { slug: "k4-penthouse-floor8", tower: "K", name: "شقة فاخرة — برج K4", unitType: "شقة سكنية", listing: "sale", featured: true,
      price: 8900000, beds: 4, baths: 3, area: 230, floor: 8, rating: 4.8, reviews: 34, furnishing: "نصف تشطيب", daysAgo: 3, status: "متاح",
      cover: IMG.k, gallery: [IMG.k, IMG.living1, IMG.kitchen1, IMG.bedroom1, IMG.bathroom1],
      description: ["وحدة سكنية فاخرة في الطابق الثامن ببرج K4، تطل مباشرة على المساحات الخضراء الرئيسية والبحيرة الصناعية.", "تصميم عصري بمساحات مفتوحة، ٤ غرف نوم و٣ حمامات، مع تشطيب نصف تشطيب راقٍ يتيح لك حرية التصميم الداخلي."],
      amenities: ["security", "pool", "gym", "parking", "garden"],
      details: { id: "OS-K4-08", listedBy: "أحمد الجوهري", available: "فوري", floors: 12, deliveryYear: 2024 }, agent: CONSULTANTS.ahmed },

    { slug: "k2-apartment-floor2", tower: "K", name: "شقة سكنية — برج K2", unitType: "شقة سكنية", listing: "sale",
      price: 4850000, beds: 2, baths: 2, area: 142, floor: 2, rating: 4.6, reviews: 21, furnishing: "نصف تشطيب", daysAgo: 6, status: "متاح",
      cover: IMG.k, gallery: [IMG.k, IMG.living2, IMG.kitchen2, IMG.bedroom2],
      description: ["شقة عملية بمساحة ١٤٢ م² في الطابق الثاني ببرج K، مناسبة للأسر الصغيرة والمستثمرين على حد سواء.", "قريبة من البوابة الرئيسية والنادي الصحي، بإطلالة جانبية على اللاندسكيب."],
      amenities: ["security", "pool", "parking"],
      details: { id: "OS-K2-02", listedBy: "منى فتحي", available: "فوري", floors: 12, deliveryYear: 2024 }, agent: CONSULTANTS.mona },

    { slug: "k3-apartment-floor6", tower: "K", name: "شقة سكنية — برج K3", unitType: "شقة سكنية", listing: "sale",
      price: 7100000, beds: 3, baths: 3, area: 195, floor: 6, rating: 4.7, reviews: 18, furnishing: "تشطيب كامل", daysAgo: 12, status: "محجوز",
      cover: IMG.k, gallery: [IMG.k, IMG.living1, IMG.bedroom2, IMG.bathroom1],
      description: ["وحدة بتشطيب كامل فاخر في الطابق السادس، ٣ غرف نوم و٣ حمامات بمساحة ١٩٥ م².", "تصميم داخلي عصري جاهز للسكن الفوري بدون أي أعمال إضافية."],
      amenities: ["security", "pool", "gym", "parking"],
      details: { id: "OS-K3-06", listedBy: "أحمد الجوهري", available: "محجوزة", floors: 12, deliveryYear: 2023 }, agent: CONSULTANTS.ahmed },

    { slug: "t1-mixed-floor3", tower: "T", name: "وحدة تجارية سكنية — برج T1", unitType: "وحدة تجارية سكنية", listing: "sale",
      price: 5600000, beds: 2, baths: 2, area: 160, floor: 3, rating: 4.5, reviews: 15, furnishing: "نصف تشطيب", daysAgo: 8, status: "متاح",
      cover: IMG.t, gallery: [IMG.t, IMG.living2, IMG.kitchen1],
      description: ["وحدة متعددة الاستخدام في برج T المطل مباشرة على المول التجاري والشارع الرئيسي.", "موقع استراتيجي مثالي لمن يبحث عن الاستثمار أو السكن القريب من الخدمات."],
      amenities: ["security", "parking", "smart"],
      details: { id: "OS-T1-03", listedBy: "منى فتحي", available: "فوري", floors: 9, deliveryYear: 2023 }, agent: CONSULTANTS.mona },

    { slug: "t2-mixed-floor5", tower: "T", name: "وحدة تجارية سكنية — برج T2", unitType: "وحدة تجارية سكنية", listing: "sale", featured: true,
      price: 6750000, beds: 3, baths: 2, area: 185, floor: 5, rating: 4.7, reviews: 22, furnishing: "تشطيب كامل", daysAgo: 4, status: "متاح",
      cover: IMG.t, gallery: [IMG.t, IMG.living1, IMG.kitchen2, IMG.bedroom1],
      description: ["وحدة واسعة بتشطيب كامل في الطابق الخامس، بإطلالة بانورامية على المول التجاري والمساحات الخضراء.", "قريبة جدًا من الجراج الرئيسي وبوابة الدخول السريع."],
      amenities: ["security", "parking", "smart", "gym"],
      details: { id: "OS-T2-05", listedBy: "أحمد الجوهري", available: "فوري", floors: 9, deliveryYear: 2023 }, agent: CONSULTANTS.ahmed },

    { slug: "n-a1-floor3", tower: "N", name: "شقة فاخرة — برج N", unitType: "شقة سكنية", listing: "sale",
      price: 6200000, beds: 3, baths: 2, area: 165, floor: 3, rating: 4.4, reviews: 6, furnishing: "على الطوب الأحمر", daysAgo: 20, status: "قيد الإنشاء",
      cover: IMG.n, gallery: [IMG.n, IMG.living2, IMG.bedroom2],
      description: ["وحدة سكنية جديدة ضمن برج N الفاخر المطل على الحديقة المركزية، قيد الإنشاء حاليًا.", "فرصة حجز مبكر بأسعار تحت الإنشاء وخطط سداد ميسّرة."],
      amenities: ["security", "garden", "parking"],
      details: { id: "OS-N-A1", listedBy: "منى فتحي", available: "تسليم 2027", floors: 10, deliveryYear: 2027 }, agent: CONSULTANTS.mona },

    { slug: "n-a2-floor5", tower: "N", name: "شقة فاخرة كبيرة — برج N", unitType: "شقة سكنية", listing: "sale",
      price: 7800000, beds: 4, baths: 3, area: 210, floor: 5, rating: 4.5, reviews: 4, furnishing: "على الطوب الأحمر", daysAgo: 20, status: "قيد الإنشاء",
      cover: IMG.n, gallery: [IMG.n, IMG.living1, IMG.kitchen1, IMG.bathroom1],
      description: ["وحدة عائلية واسعة بمساحة ٢١٠ م² في برج N، مصممة لتناسب العائلات الكبيرة.", "تسليم متوقع عام ٢٠٢٧ مع نظام سداد يمتد حتى موعد الاستلام."],
      amenities: ["security", "garden", "parking", "gym"],
      details: { id: "OS-N-A2", listedBy: "أحمد الجوهري", available: "تسليم 2027", floors: 10, deliveryYear: 2027 }, agent: CONSULTANTS.ahmed },

    { slug: "s1-smart-floor4", tower: "S", name: "وحدة ذكية — برج S1", unitType: "وحدة ذكية", listing: "sale",
      price: 5900000, beds: 2, baths: 2, area: 150, floor: 4, rating: 4.6, reviews: 11, furnishing: "نصف تشطيب", daysAgo: 15, status: "قيد الإنشاء",
      cover: IMG.s, gallery: [IMG.s, IMG.living2, IMG.kitchen2],
      description: ["وحدة مزوّدة بتقنيات المنزل الذكي الكاملة في برج S متعدد الاستخدامات.", "تحكم بالإضاءة والتكييف والأمان عن بُعد من هاتفك المحمول."],
      amenities: ["smart", "security", "parking"],
      details: { id: "OS-S1-04", listedBy: "منى فتحي", available: "تسليم 2026", floors: 11, deliveryYear: 2026 }, agent: CONSULTANTS.mona },

    { slug: "s2-smart-floor6", tower: "S", name: "وحدة ذكية كبيرة — برج S2", unitType: "وحدة ذكية", listing: "sale",
      price: 7300000, beds: 3, baths: 2, area: 178, floor: 6, rating: 4.7, reviews: 9, furnishing: "نصف تشطيب", daysAgo: 15, status: "قيد الإنشاء",
      cover: IMG.s, gallery: [IMG.s, IMG.living1, IMG.bedroom1, IMG.bathroom1],
      description: ["وحدة ذكية بمساحة ١٧٨ م² بإطلالات بانورامية على المشروع بالكامل.", "تقنيات منزل ذكي متكاملة مع نظام أمان وتحكم مركزي."],
      amenities: ["smart", "security", "parking", "gym"],
      details: { id: "OS-S2-06", listedBy: "أحمد الجوهري", available: "تسليم 2026", floors: 11, deliveryYear: 2026 }, agent: CONSULTANTS.ahmed },

    { slug: "h1-duplex", tower: "H", name: "دوبلكس فاخر — برج H1", unitType: "دوبلكس فاخر", listing: "sale", featured: true,
      price: 12500000, beds: 4, baths: 4, area: 285, floor: 1, rating: 4.9, reviews: 27, furnishing: "تشطيب كامل", daysAgo: 5, status: "متاح",
      cover: IMG.h, gallery: [IMG.h, IMG.living2, IMG.kitchen1, IMG.bedroom2, IMG.bathroom1],
      description: ["دوبلكس فاخر بتصميم عصري فريد وتراس خاص، من أرقى وحدات حي النخبة.", "٤ غرف نوم و٤ حمامات موزعة على طابقين، مع خدمات كونسيرج حصرية لساكنيه."],
      amenities: ["security", "pool", "gym", "parking", "garden"],
      details: { id: "OS-H1", listedBy: "منى فتحي", available: "فوري", floors: 4, deliveryYear: 2023 }, agent: CONSULTANTS.mona },

    { slug: "z1-penthouse", tower: "Z", name: "بنتهاوس النخبة — برج Z1", unitType: "بنتهاوس", listing: "sale", featured: true,
      price: 18900000, beds: 5, baths: 4, area: 340, floor: 14, rating: 5.0, reviews: 12, furnishing: "تشطيب كامل فاخر", daysAgo: 1, status: "قريباً",
      cover: IMG.z, gallery: [IMG.z, IMG.living1, IMG.kitchen2, IMG.bedroom1, IMG.bathroom1],
      description: ["بنتهاوس حصري بمساحات شاسعة وحمام سباحة خاص وتراس يغطي سطح المبنى بالكامل.", "الوحدة الأرقى في مشروع العروبة سكوير — فتح الحجز قريبًا لعدد محدود من العملاء."],
      amenities: ["security", "pool", "gym", "parking", "garden", "smart"],
      details: { id: "OS-Z1", listedBy: "أحمد الجوهري", available: "قريباً", floors: 14, deliveryYear: 2027 }, agent: CONSULTANTS.ahmed },

    { slug: "k-rent-3br", tower: "K", name: "شقة للإيجار — برج K", unitType: "شقة سكنية", listing: "rent",
      price: 28000, beds: 3, baths: 2, area: 145, floor: 5, rating: 4.5, reviews: 8, furnishing: "مفروشة بالكامل", daysAgo: 2, status: "متاح",
      cover: IMG.k, gallery: [IMG.k, IMG.living2, IMG.bedroom2],
      description: ["وحدة مفروشة بالكامل معروضة للإيجار من أحد الملاك الحاليين ببرج K.", "مثالية للإقامة المتوسطة أو الطويلة، بالقرب من كافة الخدمات والمرافق."],
      amenities: ["security", "pool", "parking"],
      details: { id: "OS-K-RENT", listedBy: "مالك الوحدة", available: "فوري", floors: 12, deliveryYear: 2024 }, agent: CONSULTANTS.mona },

    { slug: "t-rent-2br", tower: "T", name: "وحدة للإيجار — برج T", unitType: "وحدة تجارية سكنية", listing: "rent",
      price: 22000, beds: 2, baths: 2, area: 130, floor: 4, rating: 4.4, reviews: 5, furnishing: "مفروشة بالكامل", daysAgo: 7, status: "متاح",
      cover: IMG.t, gallery: [IMG.t, IMG.living1, IMG.kitchen1],
      description: ["وحدة مفروشة للإيجار من المالك في برج T، قريبة من المول التجاري مباشرة.", "خيار ممتاز للعائلات الصغيرة أو المهنيين الباحثين عن موقع مركزي."],
      amenities: ["security", "parking", "smart"],
      details: { id: "OS-T-RENT", listedBy: "مالك الوحدة", available: "فوري", floors: 9, deliveryYear: 2023 }, agent: CONSULTANTS.ahmed }
  ];

  function byslug(slug) {
    return UNITS.find(function (u) { return u.slug === slug; });
  }

  /* ---------------- المفضلة (تخزين دائم عبر localStorage) ---------------- */
  var FAVORITES_KEY = "orouba_square_favorites";

  function loadFavorites() {
    try {
      var raw = window.localStorage.getItem(FAVORITES_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (e) {
      return new Set();
    }
  }

  function persistFavorites() {
    try {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(FAVORITES)));
    } catch (e) {
      /* التخزين المحلي غير متاح (خصوصية متصفح، إلخ) — المفضلة تبقى شغّالة لجلسة الصفحة الحالية فقط */
    }
  }

  var FAVORITES = loadFavorites();

  function markFavorites(scope) {
    var root = scope || document;
    root.querySelectorAll("[data-fav]").forEach(function (btn) {
      btn.classList.toggle("is-fav", FAVORITES.has(btn.getAttribute("data-fav")));
    });
  }

  function updateFavBadge() {
    document.querySelectorAll(".fav-count-badge").forEach(function (el) {
      var n = FAVORITES.size;
      el.textContent = ar(n);
      el.style.display = n > 0 ? "flex" : "none";
    });
  }

  function initFavoriteDelegation() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-fav]");
      if (!btn) return;
      var slug = btn.getAttribute("data-fav");
      var u = byslug(slug);
      var nowFav = btn.classList.toggle("is-fav");
      if (nowFav) {
        FAVORITES.add(slug);
        showToast((u ? u.name : "الوحدة") + " أُضيفت إلى المحفوظات");
      } else {
        FAVORITES.delete(slug);
        showToast("أُزيلت من المحفوظات");
        if (document.body.getAttribute("data-page") === "saved") {
          var card = btn.closest("[data-slug]");
          if (card) {
            card.style.transition = "opacity .2s ease, transform .2s ease";
            card.style.opacity = "0";
            card.style.transform = "scale(.96)";
            setTimeout(function () { card.remove(); checkSavedEmpty(); }, 200);
          }
        }
      }
      persistFavorites();
      document.querySelectorAll('[data-fav="' + slug + '"]').forEach(function (b) {
        b.classList.toggle("is-fav", FAVORITES.has(slug));
      });
      updateFavBadge();
    });
  }
  function checkSavedEmpty() {
    var grid = document.getElementById("savedGrid");
    var empty = document.getElementById("savedEmpty");
    if (!grid || !empty) return;
    if (grid.children.length === 0) empty.style.display = "block";
  }

  /* ---------------- توست ---------------- */
  function showToast(msg) {
    var toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = Icon("checkCircle", { size: 16 }) + "<span>" + msg + "</span>";
    toast.classList.add("is-visible");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.remove("is-visible"); }, 2400);
  }
  window.showToast = showToast;

  /* ---------------- بطاقات الوحدات ---------------- */
  function statusBadgeClass(status) {
    if (status === "متاح") return "is-done";
    if (status === "محجوز") return "is-soon";
    if (status === "قريباً") return "is-soon";
    return "is-progress";
  }

  function unitCardHTML(u) {
    return (
      '<article class="unit-card" data-slug="' + u.slug + '">' +
        '<div class="uc-media">' +
          '<a href="unit.html?u=' + u.slug + '"><img src="' + u.cover + '" alt="' + u.name + '" loading="lazy"></a>' +
          '<span class="uc-badge ' + statusBadgeClass(u.status) + '">' + u.status + "</span>" +
          '<button class="uc-fav" data-fav="' + u.slug + '" aria-label="حفظ ' + u.name + '">' + Icon("heart", { size: 15 }) + "</button>" +
        "</div>" +
        '<div class="uc-body">' +
          '<div class="uc-top">' +
            '<div><h3 class="uc-name"><a href="unit.html?u=' + u.slug + '">' + u.name + "</a></h3>" +
            '<div class="uc-loc">' + Icon("mapPin", { size: 13 }) + "<span>" + (TOWERS[u.tower] ? TOWERS[u.tower].location : "") + "</span></div></div>" +
          "</div>" +
          '<div class="uc-price">' + priceHTML(u) + "</div>" +
          '<div class="uc-stats">' +
            '<span class="uc-stat">' + Icon("bed", { size: 14 }) + " " + ar(u.beds) + " غرف</span>" +
            '<span class="uc-stat">' + Icon("bath", { size: 14 }) + " " + ar(u.baths) + " حمام</span>" +
            '<span class="uc-stat">' + Icon("maximize", { size: 14 }) + " " + ar(u.area) + " م²</span>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function unitRowHTML(u) {
    return (
      '<div class="unit-row" data-slug="' + u.slug + '">' +
        '<div class="ur-media">' +
          '<a href="unit.html?u=' + u.slug + '"><img src="' + u.cover + '" alt="' + u.name + '" loading="lazy"></a>' +
          '<button class="uc-fav" data-fav="' + u.slug + '" aria-label="حفظ ' + u.name + '">' + Icon("heart", { size: 14 }) + "</button>" +
        "</div>" +
        '<div class="ur-body">' +
          '<div class="ur-top">' +
            '<div><h3 class="uc-name"><a href="unit.html?u=' + u.slug + '">' + u.name + "</a></h3>" +
            '<div class="uc-loc">' + Icon("mapPin", { size: 13 }) + "<span>" + (TOWERS[u.tower] ? TOWERS[u.tower].location : "") + "</span></div></div>" +
            '<div class="uc-price">' + priceHTML(u) + "</div>" +
          "</div>" +
          '<div class="uc-stats">' +
            '<span class="uc-stat">' + Icon("bed", { size: 14 }) + " " + ar(u.beds) + " غرف</span>" +
            '<span class="uc-stat">' + Icon("bath", { size: 14 }) + " " + ar(u.baths) + " حمام</span>" +
            '<span class="uc-stat">' + Icon("maximize", { size: 14 }) + " " + ar(u.area) + " م²</span>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* =========================================================
     صفحة: units.html
     ========================================================= */
  var FILTER = { q: "", tower: "all", listing: "all", type: "all", beds: "any", baths: "any", furnishing: "any", sort: "newest", priceMin: 3000000, priceMax: 20000000 };
  var PAGE = 1, PAGE_SIZE = 6;
  var FURNISHING_GROUPS = {
    full: ["تشطيب كامل", "تشطيب كامل فاخر"],
    half: ["نصف تشطيب", "على الطوب الأحمر"],
    furnished: ["مفروشة بالكامل"]
  };

  function applyFilters() {
    var list = UNITS.filter(function (u) {
      if (FILTER.q) {
        var q = FILTER.q.toLowerCase();
        if (u.name.toLowerCase().indexOf(q) === -1) return false;
      }
      if (FILTER.tower !== "all" && u.tower !== FILTER.tower) return false;
      if (FILTER.listing !== "all" && u.listing !== FILTER.listing) return false;
      if (FILTER.type !== "all" && u.unitType !== FILTER.type) return false;
      if (FILTER.beds !== "any") {
        if (FILTER.beds === "4" ? u.beds < 4 : u.beds !== +FILTER.beds) return false;
      }
      if (FILTER.baths !== "any") {
        if (FILTER.baths === "4" ? u.baths < 4 : u.baths !== +FILTER.baths) return false;
      }
      if (FILTER.furnishing !== "any") {
        var group = FURNISHING_GROUPS[FILTER.furnishing] || [];
        if (group.indexOf(u.furnishing) === -1) return false;
      }
      if (u.listing === "sale" && (u.price < FILTER.priceMin || u.price > FILTER.priceMax)) return false;
      return true;
    });
    if (FILTER.sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
    else if (FILTER.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
    else if (FILTER.sort === "rating") list.sort(function (a, b) { return b.rating - a.rating; });
    else list.sort(function (a, b) { return a.daysAgo - b.daysAgo; });
    return list;
  }

  function renderUnitsPage() {
    var grid = document.getElementById("unitsGrid");
    if (!grid) return;
    var list = applyFilters();
    var totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (PAGE > totalPages) PAGE = totalPages;
    var pageItems = list.slice((PAGE - 1) * PAGE_SIZE, PAGE * PAGE_SIZE);

    var view = document.body.getAttribute("data-view") || "grid";
    grid.className = view === "list" ? "units-list" : "units-grid";
    grid.innerHTML = pageItems.length
      ? pageItems.map(view === "list" ? unitRowHTML : unitCardHTML).join("")
      : "";
    markFavorites(grid);

    var emptyEl = document.getElementById("unitsEmpty");
    if (emptyEl) emptyEl.style.display = list.length ? "none" : "block";

    var countEl = document.getElementById("resultsCount");
    if (countEl) countEl.textContent = ar(list.length) + (list.length === 1 ? " وحدة متاحة" : " وحدة متاحة");

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    var el = document.getElementById("pagination");
    if (!el) return;
    var html = "";
    html += '<button data-page="prev" ' + (PAGE === 1 ? "disabled" : "") + ' aria-label="السابق">' + Icon("chevronRight", { size: 16 }) + "</button>";
    for (var i = 1; i <= totalPages; i++) {
      html += '<button data-page="' + i + '" class="' + (i === PAGE ? "is-active" : "") + '">' + ar(i) + "</button>";
    }
    html += '<button data-page="next" ' + (PAGE === totalPages ? "disabled" : "") + ' aria-label="التالي">' + Icon("chevronLeft", { size: 16 }) + "</button>";
    el.innerHTML = html;
  }

  function initUnitsPage() {
    var grid = document.getElementById("unitsGrid");
    if (!grid) return;

    var params = new URLSearchParams(window.location.search);
    if (params.get("tower")) FILTER.tower = params.get("tower");
    if (params.get("listing")) FILTER.listing = params.get("listing");
    if (params.get("type")) FILTER.type = params.get("type");
    if (params.get("q")) FILTER.q = params.get("q");

    var searchInput = document.getElementById("unitsSearch");
    var topSearchInput = document.getElementById("unitsTopSearch");
    function setSearch(value) {
      FILTER.q = value.trim();
      if (searchInput && searchInput.value !== value) searchInput.value = value;
      if (topSearchInput && topSearchInput.value !== value) topSearchInput.value = value;
      PAGE = 1;
      renderUnitsPage();
    }
    if (searchInput) {
      searchInput.value = FILTER.q;
      searchInput.addEventListener("input", function () { setSearch(searchInput.value); });
    }
    if (topSearchInput) {
      topSearchInput.value = FILTER.q;
      topSearchInput.addEventListener("input", function () { setSearch(topSearchInput.value); });
    }
    bindSelect("filterTower", "tower");
    bindSelect("filterListing", "listing");
    bindSelect("filterType", "type");

    function bindSelect(id, key) {
      var el = document.getElementById(id);
      if (!el) return;
      el.value = FILTER[key];
      el.addEventListener("change", function () { FILTER[key] = el.value; PAGE = 1; syncFilterControls(); renderUnitsPage(); });
    }

    /* أزرار pill-toggle (الغرف / الحمامات / التشطيب) */
    function bindPillGroup(containerId, dataAttr, key) {
      var wrap = document.getElementById(containerId);
      if (!wrap) return;
      wrap.querySelectorAll(".pill-toggle").forEach(function (btn) {
        btn.addEventListener("click", function () {
          FILTER[key] = btn.getAttribute(dataAttr);
          PAGE = 1;
          syncFilterControls();
          renderUnitsPage();
        });
      });
    }
    bindPillGroup("bedsToggle", "data-beds", "beds");
    bindPillGroup("bathsToggle", "data-baths", "baths");
    bindPillGroup("furnishingToggle", "data-furnishing", "furnishing");

    /* التبديل السريع (الكل/بيع/إيجار) وشرائح النوع فوق النتائج — نفس FILTER بالضبط */
    var listingSeg = document.getElementById("listingSeg");
    if (listingSeg) {
      listingSeg.querySelectorAll("[data-listing-tab]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          FILTER.listing = btn.getAttribute("data-listing-tab");
          PAGE = 1;
          syncFilterControls();
          renderUnitsPage();
        });
      });
    }
    var typeChips = document.getElementById("typeChips");
    if (typeChips) {
      typeChips.querySelectorAll("[data-type-tab]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          FILTER.type = btn.getAttribute("data-type-tab");
          PAGE = 1;
          syncFilterControls();
          renderUnitsPage();
        });
      });
    }

    var sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.value = FILTER.sort;
      sortSelect.addEventListener("change", function () { FILTER.sort = sortSelect.value; renderUnitsPage(); });
    }

    /* تحدّث كل عناصر الفلترة (قوائم، شرائح، أزرار) لتعكس FILTER الحالي، أيًا كان مصدر التغيير */
    function syncFilterControls() {
      var towerEl = document.getElementById("filterTower"); if (towerEl) towerEl.value = FILTER.tower;
      var listingEl = document.getElementById("filterListing"); if (listingEl) listingEl.value = FILTER.listing;
      var typeEl = document.getElementById("filterType"); if (typeEl) typeEl.value = FILTER.type;
      if (listingSeg) {
        listingSeg.querySelectorAll("[data-listing-tab]").forEach(function (b) {
          b.classList.toggle("is-active", b.getAttribute("data-listing-tab") === FILTER.listing);
        });
      }
      if (typeChips) {
        typeChips.querySelectorAll("[data-type-tab]").forEach(function (b) {
          b.classList.toggle("is-active", b.getAttribute("data-type-tab") === FILTER.type);
        });
      }
      ["bedsToggle", "bathsToggle", "furnishingToggle"].forEach(function (id) {
        var wrap = document.getElementById(id);
        if (!wrap) return;
        var key = id === "bedsToggle" ? "beds" : id === "bathsToggle" ? "baths" : "furnishing";
        var attr = id === "bedsToggle" ? "data-beds" : id === "bathsToggle" ? "data-baths" : "data-furnishing";
        wrap.querySelectorAll(".pill-toggle").forEach(function (b) {
          b.classList.toggle("is-active", b.getAttribute(attr) === FILTER[key]);
        });
      });
    }
    syncFilterControls();

    /* مسح كل الفلاتر */
    function clearAllFilters() {
      FILTER.q = "";
      FILTER.tower = "all";
      FILTER.listing = "all";
      FILTER.type = "all";
      FILTER.beds = "any";
      FILTER.baths = "any";
      FILTER.furnishing = "any";
      FILTER.sort = "newest";
      FILTER.priceMin = 3000000;
      FILTER.priceMax = 20000000;
      PAGE = 1;
      if (searchInput) searchInput.value = "";
      if (topSearchInput) topSearchInput.value = "";
      if (sortSelect) sortSelect.value = "newest";
      if (priceMinInput && priceMaxInput) {
        priceMinInput.value = 3000000;
        priceMaxInput.value = 20000000;
        priceMinInput.dispatchEvent(new Event("input"));
      }
      syncFilterControls();
      renderUnitsPage();
    }
    var clearBtn = document.getElementById("clearFilters");
    if (clearBtn) clearBtn.addEventListener("click", clearAllFilters);
    var resetFromEmpty = document.getElementById("resetFromEmpty");
    if (resetFromEmpty) resetFromEmpty.addEventListener("click", clearAllFilters);

    var priceMinInput = document.getElementById("priceMin");
    var priceMaxInput = document.getElementById("priceMax");
    var priceFill = document.getElementById("priceFill");
    var priceLabelMin = document.getElementById("priceLabelMin");
    var priceLabelMax = document.getElementById("priceLabelMax");
    if (priceMinInput && priceMaxInput) {
      function updatePrice() {
        var lo = Math.min(+priceMinInput.value, +priceMaxInput.value - 500000);
        var hi = Math.max(+priceMaxInput.value, +priceMinInput.value + 500000);
        priceMinInput.value = lo; priceMaxInput.value = hi;
        FILTER.priceMin = lo; FILTER.priceMax = hi;
        var pctLo = (lo - priceMinInput.min) / (priceMinInput.max - priceMinInput.min) * 100;
        var pctHi = (hi - priceMaxInput.min) / (priceMaxInput.max - priceMaxInput.min) * 100;
        if (priceFill) { priceFill.style.insetInlineStart = pctLo + "%"; priceFill.style.width = (pctHi - pctLo) + "%"; }
        if (priceLabelMin) priceLabelMin.textContent = formatEGP(lo);
        if (priceLabelMax) priceLabelMax.textContent = formatEGP(hi);
        PAGE = 1;
        renderUnitsPage();
      }
      priceMinInput.addEventListener("input", updatePrice);
      priceMaxInput.addEventListener("input", updatePrice);
      updatePrice();
    }

    var viewGrid = document.getElementById("viewGrid");
    var viewList = document.getElementById("viewList");
    if (viewGrid && viewList) {
      viewGrid.addEventListener("click", function () {
        document.body.setAttribute("data-view", "grid");
        viewGrid.classList.add("is-active"); viewList.classList.remove("is-active");
        renderUnitsPage();
      });
      viewList.addEventListener("click", function () {
        document.body.setAttribute("data-view", "list");
        viewList.classList.add("is-active"); viewGrid.classList.remove("is-active");
        renderUnitsPage();
      });
    }

    var pag = document.getElementById("pagination");
    if (pag) {
      pag.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-page]");
        if (!btn || btn.disabled) return;
        var val = btn.getAttribute("data-page");
        if (val === "prev") PAGE--; else if (val === "next") PAGE++; else PAGE = +val;
        renderUnitsPage();
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    var fab = document.getElementById("filtersFab");
    var panel = document.getElementById("filtersCard");
    var backdrop = document.getElementById("filtersBackdrop");
    var closeBtn = document.getElementById("filtersClose");
    if (fab && panel) {
      fab.addEventListener("click", function () { panel.classList.add("is-open"); backdrop && backdrop.classList.add("is-open"); });
      closeBtn && closeBtn.addEventListener("click", function () { panel.classList.remove("is-open"); backdrop && backdrop.classList.remove("is-open"); });
      backdrop && backdrop.addEventListener("click", function () { panel.classList.remove("is-open"); backdrop.classList.remove("is-open"); });
    }

    renderUnitsPage();
  }

  /* =========================================================
     صفحة: unit.html
     ========================================================= */
  function initUnitDetailsPage() {
    var root = document.getElementById("unitDetails");
    if (!root) return;
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("u") || UNITS[0].slug;
    var u = byslug(slug) || UNITS[0];
    document.body.setAttribute("data-unit-slug", u.slug);
    document.title = u.name + " — العروبة سكوير";

    setText("udBreadcrumbName", u.name);
    setText("udName", u.name);
    setHTML("udLocation", Icon("mapPin", { size: 14 }) + "<span>" + (TOWERS[u.tower] ? TOWERS[u.tower].location : "") + " · " + TOWERS[u.tower].name + "</span>");
    setHTML("udPrice", "<b>" + formatEGP(u.price) + "</b>" + (u.listing === "rent" ? "<span> / شهريًا</span>" : ""));
    setHTML("udRating", Icon("star", { size: 14, fill: "currentColor" }) + u.rating.toFixed(1) + ' <span class="count">(' + ar(u.reviews) + " تقييم)</span>");
    var favBtn = document.getElementById("udFavBtn");
    if (favBtn) favBtn.setAttribute("data-fav", u.slug);

    setText("udBeds", ar(u.beds));
    setText("udBaths", ar(u.baths));
    setText("udArea", ar(u.area) + " م²");
    setText("udFloor", ar(u.floor));

    setHTML("udDescription", u.description.map(function (t) { return "<p>" + t + "</p>"; }).join(""));

    var amenEl = document.getElementById("udAmenities");
    if (amenEl) {
      amenEl.innerHTML = u.amenities.map(function (a) {
        var m = AMENITY_META[a];
        return '<div class="amenity">' + Icon(m.icon, { size: 22 }) + "<span>" + m.label + "</span></div>";
      }).join("");
    }

    var infoTable = document.getElementById("udInfoTable");
    if (infoTable) {
      infoTable.innerHTML =
        "<tr><td>رقم الوحدة</td><td>" + u.details.id + "</td></tr>" +
        "<tr><td>النوع</td><td>" + u.unitType + "</td></tr>" +
        "<tr><td>التشطيب</td><td>" + u.furnishing + "</td></tr>" +
        "<tr><td>البرج</td><td>" + TOWERS[u.tower].name + "</td></tr>" +
        "<tr><td>متاحة من</td><td>" + u.details.available + "</td></tr>" +
        "<tr><td>إجمالي الطوابق</td><td>" + ar(u.details.floors) + "</td></tr>" +
        "<tr><td>سنة التسليم</td><td>" + ar(u.details.deliveryYear) + "</td></tr>";
    }

    setImg("udAgentAvatar", u.agent.avatar);
    setText("udAgentName", u.agent.name);
    setText("udAgentRole", u.agent.role);
    setText("udAgentPhone", u.agent.phone);
    setText("udAgentEmail", u.agent.email);
    var callBtn = document.getElementById("udAgentCallBtn");
    if (callBtn) callBtn.setAttribute("href", "tel:" + u.agent.phone.replace(/\s+/g, ""));
    var phoneLink = document.getElementById("udAgentPhoneLink");
    if (phoneLink) phoneLink.setAttribute("href", "tel:" + u.agent.phone.replace(/\s+/g, ""));
    var emailLink = document.getElementById("udAgentEmailLink");
    if (emailLink) emailLink.setAttribute("href", "mailto:" + u.agent.email);
    document.querySelectorAll("[data-schedule-link]").forEach(function (a) { a.setAttribute("href", "schedule-visit.html?u=" + u.slug); });
    document.querySelectorAll("[data-map-link]").forEach(function (a) { a.setAttribute("href", "map.html?tower=" + u.tower); });

    var gh = document.getElementById("galleryHero");
    if (gh) {
      var imgs = u.gallery;
      gh.innerHTML =
        '<div class="gh-main" data-gallery-open data-gallery-index="0"><img src="' + imgs[0] + '" alt="' + u.name + ' صورة 1"><span class="gh-count">' + Icon("camera", { size: 14 }) + " " + ar(imgs.length) + " صور</span></div>" +
        '<div class="gh-side">' +
          '<div data-gallery-open data-gallery-index="1"><img src="' + (imgs[1] || imgs[0]) + '" alt="' + u.name + ' صورة 2"></div>' +
          '<div data-gallery-open data-gallery-index="2"><img src="' + (imgs[2] || imgs[0]) + '" alt="' + u.name + ' صورة 3"></div>' +
        "</div>";
    }

    var similar = UNITS.filter(function (x) { return x.slug !== u.slug && x.tower === u.tower; }).slice(0, 3);
    if (similar.length < 3) {
      UNITS.filter(function (x) { return x.slug !== u.slug && similar.indexOf(x) === -1; }).some(function (x) {
        if (similar.length >= 3) return true;
        similar.push(x); return false;
      });
    }
    var simEl = document.getElementById("similarUnits");
    if (simEl) simEl.innerHTML = similar.map(unitCardHTML).join("");

    markFavorites(document);
    initLightbox();
  }

  function setText(id, text) { var el = document.getElementById(id); if (el) el.textContent = text; }
  function setHTML(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }
  function setImg(id, src) { var el = document.getElementById(id); if (el) el.src = src; }

  /* ---------------- المعرض الكامل (Lightbox) ---------------- */
  var LB = { images: [], index: 0, name: "" };
  function openLightbox(images, index, name) {
    LB.images = images; LB.index = index || 0; LB.name = name || "";
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    lb.classList.add("is-open");
    document.body.classList.add("lb-locked");
    renderLightbox();
  }
  function closeLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    lb.classList.remove("is-open");
    document.body.classList.remove("lb-locked");
  }
  function renderLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    var img = lb.querySelector(".lightbox-stage img");
    var count = lb.querySelector(".lb-count");
    var thumbs = lb.querySelector(".lightbox-thumbs");
    img.src = LB.images[LB.index];
    count.textContent = ar(LB.index + 1) + " / " + ar(LB.images.length) + (LB.name ? " · " + LB.name : "");
    thumbs.innerHTML = LB.images.map(function (src, i) {
      return '<img src="' + src + '" data-i="' + i + '" class="' + (i === LB.index ? "is-active" : "") + '" alt="صورة مصغرة ' + ar(i + 1) + '">';
    }).join("");
  }
  function initLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb || lb.dataset.bound) { bindGalleryTriggers(); return; }
    lb.dataset.bound = "true";
    lb.querySelector(".lightbox-nav.prev").addEventListener("click", function () { LB.index = (LB.index - 1 + LB.images.length) % LB.images.length; renderLightbox(); });
    lb.querySelector(".lightbox-nav.next").addEventListener("click", function () { LB.index = (LB.index + 1) % LB.images.length; renderLightbox(); });
    lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
    lb.querySelector(".lightbox-thumbs").addEventListener("click", function (e) {
      var t = e.target.closest("img"); if (!t) return;
      LB.index = +t.getAttribute("data-i"); renderLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lb.querySelector(".lightbox-nav.prev").click();
      if (e.key === "ArrowLeft") lb.querySelector(".lightbox-nav.next").click();
    });
    bindGalleryTriggers();
  }
  function bindGalleryTriggers() {
    document.querySelectorAll("[data-gallery-open]").forEach(function (el) {
      if (el.dataset.galleryBound) return;
      el.dataset.galleryBound = "true";
      el.addEventListener("click", function () {
        var slug = document.body.getAttribute("data-unit-slug");
        var u = byslug(slug);
        if (u) openLightbox(u.gallery, +(el.getAttribute("data-gallery-index") || 0), u.name);
      });
    });
  }

  /* =========================================================
     صفحة: saved.html
     ========================================================= */
  function initSavedPage() {
    var grid = document.getElementById("savedGrid");
    if (!grid) return;
    var list = UNITS.filter(function (u) { return FAVORITES.has(u.slug); });
    grid.innerHTML = list.map(unitCardHTML).join("");
    markFavorites(grid);
    setText("savedCount", ar(list.length) + (list.length === 1 ? " وحدة محفوظة" : " وحدة محفوظة"));
    checkSavedEmpty();
  }

  /* =========================================================
     صفحة: map.html — خريطة حقيقية (Leaflet / OpenStreetMap)
     ========================================================= */
  var PROJECT_LOCATION = { lat: 30.0287, lng: 31.4906 };

  /* مواقع الأبراج داخل المشروع — إزاحات صغيرة حقيقية حول نقطة المشروع */
  var TOWER_COORDS = {
    K: { lat: 30.0301, lng: 31.4917, status: "done" },
    T: { lat: 30.0308, lng: 31.4890, status: "done" },
    S: { lat: 30.0289, lng: 31.4907, status: "progress" },
    N: { lat: 30.0273, lng: 31.4920, status: "progress" },
    H: { lat: 30.0269, lng: 31.4888, status: "progress" },
    U: { lat: 30.0295, lng: 31.4930, status: "soon" },
    Z: { lat: 30.0315, lng: 31.4908, status: "soon" }
  };
  var TOWER_STATUS_COLOR = { done: "#3F7D58", progress: "#B8874C", soon: "#9A968B" };
  var TOWER_STATUS_LABEL = { done: "مكتمل", progress: "قيد الإنشاء", soon: "قريباً" };

  /* تُملأ من initUnitsMapPage لو كانت القائمة الجانبية موجودة، عشان نقاط الخريطة الحقيقية تقدر تفلترها */
  var mapPageSelectTower = null;

  function initRealMap() {
    var el = document.getElementById("realMap");
    if (!el) return;

    var dirLink = document.getElementById("directionsLink");
    if (dirLink) {
      dirLink.href =
        "https://www.google.com/maps/dir/?api=1&destination=" +
        PROJECT_LOCATION.lat + "," + PROJECT_LOCATION.lng;
    }

    if (typeof L === "undefined") {
      el.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:13.5px;text-align:center;padding:20px">' +
        "تعذّر تحميل مكوّن الخريطة. تأكد من اتصالك بالإنترنت وأعد تحميل الصفحة." +
        "</div>";
      return;
    }

    var map = L.map(el, {
      scrollWheelZoom: false,
      zoomControl: true
    }).setView([PROJECT_LOCATION.lat, PROJECT_LOCATION.lng], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }).addTo(map);

    function pinIcon(color, size) {
      var s = size || 30;
      return L.divIcon({
        className: "orouba-map-pin",
        html:
          '<div style="width:' + s + "px;height:" + s + "px;border-radius:50% 50% 50% 0;background:" + color + ";" +
          'transform:rotate(-45deg);box-shadow:0 4px 10px rgba(21,22,26,.35);' +
          'display:flex;align-items:center;justify-content:center;border:2px solid #fff">' +
          '<span style="transform:rotate(45deg);width:' + Math.round(s * 0.28) + "px;height:" + Math.round(s * 0.28) + 'px;background:#fff;border-radius:50%;display:block"></span>' +
          "</div>",
        iconSize: [s, s],
        iconAnchor: [s / 2, s],
        popupAnchor: [0, -s + 4]
      });
    }

    /* نقطة المدخل الرئيسي للمشروع */
    L.marker([PROJECT_LOCATION.lat, PROJECT_LOCATION.lng], { icon: pinIcon("#B8874C", 36) })
      .addTo(map)
      .bindPopup("<strong>العروبة سكوير</strong><span>التجمع الخامس، القاهرة الجديدة، القاهرة</span>")
      .openPopup();

    /* نقطة حقيقية لكل برج، بنفس ألوان الحالة ومربوطة بفلتر القائمة الجانبية */
    var bounds = [[PROJECT_LOCATION.lat, PROJECT_LOCATION.lng]];
    Object.keys(TOWER_COORDS).forEach(function (key) {
      var t = TOWER_COORDS[key];
      var towerName = TOWERS[key] ? TOWERS[key].name : "برج " + key;
      var marker = L.marker([t.lat, t.lng], { icon: pinIcon(TOWER_STATUS_COLOR[t.status], 28) })
        .addTo(map)
        .bindPopup(
          "<strong>" + towerName + "</strong><span>" + TOWER_STATUS_LABEL[t.status] + " — اضغط لعرض الوحدات</span>"
        );
      marker.on("click", function () {
        if (mapPageSelectTower) mapPageSelectTower(key);
      });
      bounds.push([t.lat, t.lng]);
    });

    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });

    map.on("focus", function () { map.scrollWheelZoom.enable(); });
    map.on("blur", function () { map.scrollWheelZoom.disable(); });

    setTimeout(function () { map.invalidateSize(); }, 200);
  }

  /* =========================================================
     صفحة: map.html — إعادة استخدام عارض المخطط + قائمة جانبية
     ========================================================= */
  function initUnitsMapPage() {
    var listEl = document.getElementById("mapUnitsList");
    if (!listEl) return;

    var params = new URLSearchParams(window.location.search);
    var requestedTower = params.get("tower") || "all";
    var activeTower = (requestedTower === "all" || TOWERS[requestedTower]) ? requestedTower : "all";

    function renderList() {
      var list = activeTower === "all" ? UNITS : UNITS.filter(function (u) { return u.tower === activeTower; });
      var q = (document.getElementById("mapSearchInput") || {}).value || "";
      if (q) list = list.filter(function (u) { return u.name.toLowerCase().indexOf(q.toLowerCase()) > -1; });
      listEl.innerHTML = list.length ? list.map(unitCardHTML).join("") : "";
      markFavorites(listEl);
      var emptyEl = document.getElementById("mapListEmpty");
      if (emptyEl) emptyEl.style.display = list.length ? "none" : "block";
      var titleEl = document.getElementById("mapListTitle");
      if (titleEl) titleEl.textContent = (activeTower === "all" || !TOWERS[activeTower]) ? "كل الوحدات" : TOWERS[activeTower].name + " — الوحدات المتاحة";
    }
    renderList();

    var searchInput = document.getElementById("mapSearchInput");
    if (searchInput) searchInput.addEventListener("input", renderList);

    function selectTower(key) {
      activeTower = key;
      document.querySelectorAll(".hotspot").forEach(function (h) { h.classList.remove("is-active"); });
      var btn = document.querySelector('.hotspot[data-tower-key="' + key + '"]');
      if (btn) btn.classList.add("is-active");
      renderList();
      listEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    mapPageSelectTower = selectTower;

    document.querySelectorAll(".hotspot[data-tower-key]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectTower(btn.getAttribute("data-tower-key"));
      });
    });

    var showAllBtn = document.getElementById("mapShowAll");
    if (showAllBtn) showAllBtn.addEventListener("click", function () {
      activeTower = "all";
      document.querySelectorAll(".hotspot").forEach(function (h) { h.classList.remove("is-active"); });
      renderList();
    });

    if (activeTower !== "all") {
      var initialBtn = document.querySelector('.hotspot[data-tower-key="' + activeTower + '"]');
      if (initialBtn) initialBtn.classList.add("is-active");
    }
  }

  /* =========================================================
     صفحة: schedule-visit.html
     ========================================================= */
  function initScheduleVisitPage() {
    var dateRow = document.getElementById("dateRow");
    if (!dateRow) return;
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("u") || UNITS[0].slug;
    var u = byslug(slug) || UNITS[0];

    setImg("svUnitImg", u.cover);
    setText("svUnitName", u.name);
    setHTML("svUnitMeta", "<b>" + formatEGP(u.price) + "</b> · " + TOWERS[u.tower].name);
    var bc = document.getElementById("svBreadcrumbName");
    if (bc) { bc.textContent = u.name; bc.setAttribute("href", "unit.html?u=" + u.slug); }
    setImg("svAgentAvatar", u.agent.avatar);
    setText("svAgentName", u.agent.name);
    setText("svAgentRole", u.agent.role);
    setText("svAgentPhone", u.agent.phone);
    setText("svAgentEmail", u.agent.email);
    var svPhoneLink = document.getElementById("svAgentPhoneLink");
    if (svPhoneLink) svPhoneLink.setAttribute("href", "tel:" + u.agent.phone.replace(/\s+/g, ""));
    var svEmailLink = document.getElementById("svAgentEmailLink");
    if (svEmailLink) svEmailLink.setAttribute("href", "mailto:" + u.agent.email);

    var days = ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];
    var months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    var today = new Date();
    var html = "";
    for (var i = 0; i < 7; i++) {
      var d = new Date(today); d.setDate(today.getDate() + i);
      html += '<button type="button" class="date-chip' + (i === 1 ? " is-active" : "") + '" data-date="' + d.toDateString() + '">' +
        '<span class="dow">' + days[d.getDay()] + "</span><span class=\"dom\">" + ar(d.getDate()) + "</span><span class=\"dow\">" + months[d.getMonth()] + "</span></button>";
    }
    dateRow.innerHTML = html;
    dateRow.querySelectorAll(".date-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        dateRow.querySelectorAll(".date-chip").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
      });
    });

    var timeRow = document.getElementById("timeRow");
    if (timeRow) {
      timeRow.querySelectorAll(".time-chip").forEach(function (btn, i) {
        if (i === 1) btn.classList.add("is-active");
        btn.addEventListener("click", function () {
          timeRow.querySelectorAll(".time-chip").forEach(function (b) { b.classList.remove("is-active"); });
          btn.classList.add("is-active");
        });
      });
    }

    var form = document.getElementById("scheduleForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var btn = document.getElementById("confirmVisitBtn");
        btn.innerHTML = Icon("checkCircle", { size: 17 }) + " تم تأكيد الموعد";
        btn.disabled = true;
        showToast("تم تأكيد معاينتك لوحدة " + u.name);
      });
    }
  }

  /* =========================================================
     صفحة: index.html — تصفح حسب النوع
     ========================================================= */
  function initCategoryCounts() {
    var els = document.querySelectorAll("[data-count-type]");
    if (!els.length) return;
    els.forEach(function (el) {
      var type = el.getAttribute("data-count-type");
      var count = UNITS.filter(function (u) { return u.unitType === type; }).length;
      el.textContent = ar(count) + (count === 1 ? " وحدة" : " وحدات");
    });
  }

  /* =========================================================
     صفحة: index.html — قسم Hero
     ========================================================= */
  function initHero() {
    var card = document.getElementById("heroFeaturedCard");
    if (!card) return;

    var featured = UNITS.filter(function (u) { return u.featured; });
    if (!featured.length) featured = UNITS.slice(0, 4);
    var idx = 0;

    function render() {
      var u = featured[idx];
      setImg("hfImg", u.cover);
      var bg = document.getElementById("heroBgImg");
      if (bg) bg.src = u.cover;
      setText("hfName", u.name);
      var locSpan = document.querySelector("#hfLoc span");
      if (locSpan) locSpan.textContent = TOWERS[u.tower].location + " · " + TOWERS[u.tower].name;
      setHTML("hfPrice", "<b>" + formatEGP(u.price) + "</b>" + (u.listing === "rent" ? "<span>شهريًا</span>" : ""));
      setText("hfBeds", ar(u.beds));
      setText("hfBaths", ar(u.baths));
      setText("hfArea", ar(u.area));
      setText("hfFloor", ar(u.floor));
      var contactBtn = document.getElementById("hfContact");
      if (contactBtn) contactBtn.setAttribute("href", "tel:" + u.agent.phone.replace(/\s+/g, ""));
      var scheduleBtn = document.getElementById("hfSchedule");
      if (scheduleBtn) scheduleBtn.setAttribute("href", "schedule-visit.html?u=" + u.slug);
    }
    render();

    var timer = setInterval(next, 6000);
    function stop() { clearInterval(timer); }
    function prev() { idx = (idx - 1 + featured.length) % featured.length; render(); }
    function next() { idx = (idx + 1) % featured.length; render(); }

    var prevBtn = document.getElementById("heroPrev");
    var nextBtn = document.getElementById("heroNext");
    if (prevBtn) prevBtn.addEventListener("click", function () { stop(); prev(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { stop(); next(); });
    card.addEventListener("mouseenter", stop);

    /* شرائح الفلترة السريعة */
    var chipsWrap = document.getElementById("heroChips");
    var activeChip = "all";
    if (chipsWrap) {
      chipsWrap.querySelectorAll(".chip").forEach(function (chip) {
        chip.addEventListener("click", function () {
          chipsWrap.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
          chip.classList.add("is-active");
          activeChip = chip.getAttribute("data-chip");
        });
      });
    }

    /* نموذج البحث */
    var form = document.getElementById("heroSearchForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = document.getElementById("heroSearchInput");
        var q = input ? input.value.trim() : "";
        var params = new URLSearchParams();
        if (q) params.set("q", q);
        if (activeChip === "sale" || activeChip === "rent") {
          params.set("listing", activeChip);
        } else if (activeChip !== "all") {
          params.set("type", activeChip);
        }
        var qs = params.toString();
        window.location.href = "units.html" + (qs ? "?" + qs : "");
      });
    }
  }

  /* =========================================================
     تشغيل عام على كل صفحات المنصة
     ========================================================= */
  /* تشغيل كل دالة صفحة بمعزل عن الباقي — خطأ غير متوقع في دالة واحدة
     (بسبب رابط مشوّه، أو خطأ برمجي مستقبلي) ميوقفش بقية دوال الصفحة */
  function safeRun(fn, label) {
    try {
      fn();
    } catch (e) {
      if (window.console && console.error) console.error("خطأ في " + label + ":", e);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    safeRun(initFavoriteDelegation, "initFavoriteDelegation");
    safeRun(initHero, "initHero");
    safeRun(initCategoryCounts, "initCategoryCounts");
    safeRun(initUnitsPage, "initUnitsPage");
    safeRun(initUnitDetailsPage, "initUnitDetailsPage");
    safeRun(initSavedPage, "initSavedPage");
    safeRun(initUnitsMapPage, "initUnitsMapPage");
    safeRun(initRealMap, "initRealMap");
    safeRun(initScheduleVisitPage, "initScheduleVisitPage");
    safeRun(initLightbox, "initLightbox");
    safeRun(function () { markFavorites(document); }, "markFavorites");
    safeRun(updateFavBadge, "updateFavBadge");
  });

  /* واجهة عامة صغيرة للاستخدام من main.js أو الصفحات */
  window.OroubaPlatform = { UNITS: UNITS, TOWERS: TOWERS, byslug: byslug, unitCardHTML: unitCardHTML, ar: ar, formatEGP: formatEGP };
})();
