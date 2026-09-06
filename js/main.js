/* =========================================================
   العروبة سكوير — التفاعلات
   ========================================================= */
(function () {
  "use strict";

  var REDUCE_MOTION = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initImageFallbacks();
    initHeaderNav();
    initHeroHeaderState();
    initReveal();
    initCounters();
    initSlider("#facsl", "#sl-r, #sl-rm", "#sl-l, #sl-lm");
    initTestimonials();
    initMasterplan();
    initServiceDialogs();
    initFooterYear();
  });

  /* ---------- fallback الصور المحلية المفقودة ---------- */
  function initImageFallbacks() {
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      function useFallback() {
        var fallback = img.getAttribute("data-fallback");
        if (fallback && img.getAttribute("src") !== fallback) {
          img.src = fallback;
        }
      }
      if (img.complete && img.naturalWidth === 0) {
        useFallback();
      } else {
        img.addEventListener("error", useFallback, { once: true });
      }
    });
  }

  function initFooterYear() {
    var el = document.getElementById("year");
    if (!el) return;
    el.textContent = toArabicDigits(new Date().getFullYear());
  }

  /* ---------- تحويل الأرقام للعربية ---------- */
  function toArabicDigits(value) {
    var digits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return String(value).replace(/[0-9]/g, function (d) {
      return digits[+d];
    });
  }

  /* ---------- قائمة الهيدر (موبايل) ---------- */
  function initHeaderNav() {
    var toggle = document.querySelector(".site-header__toggle");
    var nav = document.querySelector(".site-header__nav");
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- هيدر شفاف فوق قسم Hero، يتحول عند التمرير ---------- */
  function initHeroHeaderState() {
    var header = document.querySelector(".site-header--on-hero");
    var hero = document.querySelector(".hero");
    if (!header || !hero) return;

    function update() {
      var threshold = Math.min(hero.offsetHeight - 90, 260);
      header.classList.toggle("is-scrolled", window.scrollY > threshold);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;

    if (REDUCE_MOTION || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
          setTimeout(function () { el.classList.add("is-visible"); }, delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- عدادات الإحصائيات ---------- */
  function initCounters() {
    var els = document.querySelectorAll("[data-counter]");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(runCounter);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";

    if (REDUCE_MOTION) {
      el.textContent = toArabicDigits(target) + suffix;
      return;
    }

    var duration = 1500;
    var start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = toArabicDigits(current) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- سلايدر أفقي عام (المرافق) ---------- */
  function initSlider(trackSelector, prevSelector, nextSelector) {
    var track = document.querySelector(trackSelector);
    if (!track) return;

    function stepWidth() {
      var card = track.firstElementChild;
      if (!card) return 300;
      var style = getComputedStyle(track);
      var gap = parseFloat(style.columnGap || style.gap || "20") || 20;
      return card.getBoundingClientRect().width + gap;
    }

    function go(direction) {
      track.scrollBy({ left: direction * stepWidth(), behavior: "smooth" });
    }

    document.querySelectorAll(prevSelector).forEach(function (btn) {
      btn.addEventListener("click", function () { go(1); });
    });
    document.querySelectorAll(nextSelector).forEach(function (btn) {
      btn.addEventListener("click", function () { go(-1); });
    });
  }

  /* ---------- سلايدر آراء العملاء ---------- */
  function initTestimonials() {
    var track = document.getElementById("testi-track");
    var wrap = document.querySelector(".testimonials__track-wrap");
    if (!track || !wrap) return;

    var cards = Array.prototype.slice.call(track.children);
    var dotsWrap = document.getElementById("testi-dots");
    var index = 0;
    var perView = 3;

    function computePerView() {
      var w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 1000) return 2;
      return 3;
    }

    function stepWidth() {
      var style = getComputedStyle(track);
      var gap = parseFloat(style.columnGap || style.gap || "24") || 24;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function maxIndex() {
      return Math.max(0, cards.length - perView);
    }

    function renderDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      var pages = maxIndex() + 1;
      for (var i = 0; i < pages; i++) {
        (function (i) {
          var dot = document.createElement("button");
          dot.className = "testimonials__dot" + (i === index ? " is-active" : "");
          dot.setAttribute("aria-label", "صفحة " + toArabicDigits(i + 1));
          dot.addEventListener("click", function () {
            index = i;
            update();
          });
          dotsWrap.appendChild(dot);
        })(i);
      }
    }

    function update() {
      perView = computePerView();
      index = Math.min(index, maxIndex());
      track.style.transform = "translateX(" + -1 * index * stepWidth() + "px)";
      renderDots();
    }

    var prevBtn = document.getElementById("testi-prev");
    var nextBtn = document.getElementById("testi-next");
    if (prevBtn) prevBtn.addEventListener("click", function () {
      index = Math.max(0, index - 1);
      update();
    });
    if (nextBtn) nextBtn.addEventListener("click", function () {
      index = Math.min(maxIndex(), index + 1);
      update();
    });

    window.addEventListener("resize", debounce(update, 150));
    update();
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      var args = arguments;
      t = setTimeout(function () { fn.apply(null, args); }, wait);
    };
  }

  /* ---------- المخطط الرئيسي التفاعلي ---------- */
  function initMasterplan() {
    var frame = document.getElementById("mp-frame");
    var stage = document.getElementById("mp-stage");
    if (!frame || !stage) return;

    var scale = 1, x = 0, y = 0;
    var isDown = false, startX = 0, startY = 0;
    var MIN_SCALE = 1, MAX_SCALE = 2.5;

    function apply() {
      stage.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
    }

    var zoomIn = document.getElementById("mp-zoom-in");
    var zoomOut = document.getElementById("mp-zoom-out");
    var reset = document.getElementById("mp-reset");

    if (zoomIn) zoomIn.addEventListener("click", function () {
      scale = Math.min(MAX_SCALE, scale + 0.25);
      apply();
    });
    if (zoomOut) zoomOut.addEventListener("click", function () {
      scale = Math.max(MIN_SCALE, scale - 0.25);
      if (scale === MIN_SCALE) { x = 0; y = 0; }
      apply();
    });
    if (reset) reset.addEventListener("click", function () {
      scale = 1; x = 0; y = 0;
      apply();
    });

    frame.addEventListener("wheel", function (e) {
      e.preventDefault();
      var delta = e.deltaY > 0 ? -0.15 : 0.15;
      scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale + delta));
      apply();
    }, { passive: false });

    frame.addEventListener("pointerdown", function (e) {
      isDown = true;
      startX = e.clientX - x;
      startY = e.clientY - y;
      frame.classList.add("is-dragging");
    });
    window.addEventListener("pointermove", function (e) {
      if (!isDown) return;
      x = e.clientX - startX;
      y = e.clientY - startY;
      apply();
    });
    window.addEventListener("pointerup", function () {
      isDown = false;
      frame.classList.remove("is-dragging");
    });

    /* نقاط الأبراج */
    var towerNames = {
      "building-k": "برج K",
      "building-t": "برج T",
      "building-s": "برج S",
      "building-n": "برج N",
      "building-h": "برج H",
      "building-u": "برج U",
      "building-z": "برج Z — بنتهاوس"
    };
    var statusText = { done: "مكتمل", progress: "قيد الإنشاء", soon: "قريباً" };

    document.querySelectorAll(".hotspot").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var tower = btn.getAttribute("data-tower");
        var status = statusText.soon;
        if (btn.classList.contains("hotspot--done")) status = statusText.done;
        else if (btn.classList.contains("hotspot--progress")) status = statusText.progress;
        showTowerDialog(towerNames[tower] || tower, status);
      });
    });
  }

  function showTowerDialog(name, status) {
    var dialog = document.getElementById("mp-dialog");
    if (!dialog) {
      dialog = document.createElement("div");
      dialog.id = "mp-dialog";
      dialog.className = "mp-dialog";
      dialog.innerHTML =
        '<div class="mp-dialog__card" role="dialog" aria-modal="true">' +
        '  <button type="button" class="mp-dialog__close" aria-label="إغلاق">&times;</button>' +
        '  <h4 class="mp-dialog__title"></h4>' +
        '  <p class="mp-dialog__status"></p>' +
        "</div>";
      document.body.appendChild(dialog);
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog || e.target.classList.contains("mp-dialog__close")) {
          dialog.classList.remove("is-open");
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") dialog.classList.remove("is-open");
      });
    }
    dialog.querySelector(".mp-dialog__title").textContent = name;
    dialog.querySelector(".mp-dialog__status").textContent = "الحالة: " + status;
    dialog.classList.add("is-open");
  }

  /* ---------- تفاصيل الخدمات (نافذة "قراءة المزيد") ---------- */
  var CHECK_SVG = '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>';

  var SERVICE_DETAILS = {
    security: {
      title: "الأمن والحراسة",
      image: "assets/images/services_security_1782532380373.jpg",
      fallback: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "منظومة أمنية متكاملة مصممة خصيصًا لتوفر لساكني العروبة سكوير راحة بال كاملة على مدار الساعة، بدءًا من نقاط الدخول وحتى أصغر تفاصيل المشروع.",
        "يعمل فريق الأمن بنظام ورديات مدروس بالتعاون مع غرفة تحكم مركزية تراقب كافة الكاميرات لحظيًا، لضمان استجابة فورية لأي طارئ."
      ],
      features: [
        "مراقبة بالكاميرات على مدار الساعة تغطي كافة أنحاء المشروع",
        "بوابات دخول إلكترونية بنظام التعرف على السيارات",
        "فريق أمن مدرب على أعلى مستوى في كل بوابة",
        "غرفة تحكم مركزية لمتابعة كافة الكاميرات لحظيًا"
      ]
    },
    commercial: {
      title: "المنطقة التجارية",
      image: "assets/images/services_commercial_1782532395035.jpg",
      fallback: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "منطقة تجارية راقية تمتد على مساحة شاسعة داخل المشروع، صُممت لتجمع أفضل العلامات التجارية العالمية والمحلية في مكان واحد قريب من سكنك.",
        "مساحات مفتوحة وواجهات معمارية مميزة تجعل من التسوق والتنزه تجربة ممتعة للعائلة بأكملها."
      ],
      features: [
        "علامات تجارية عالمية ومحلية مختارة بعناية",
        "مقاهي ومطاعم متنوعة تناسب كل الأذواق",
        "مساحات مفتوحة للتسوق والتنزه العائلي",
        "مواقف سيارات مخصصة لزوار المنطقة التجارية"
      ]
    },
    mall: {
      title: "المول التجاري",
      image: "assets/images/services_mall_1782532413315.jpg",
      fallback: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "مول تجاري ضخم متعدد الطوابق في قلب العروبة سكوير، يضم كل ما تحتاجه أسرتك من تسوق وترفيه دون الحاجة لمغادرة المشروع.",
        "تصميم داخلي عصري ومساحات واسعة توفر تجربة تسوق مريحة على مدار العام."
      ],
      features: [
        "هايبر ماركت كارفور على مساحة واسعة",
        "دور سينما بأحدث تقنيات العرض والصوت",
        "منطقة ألعاب ترفيهية للأطفال والعائلات",
        "مطاعم ومقاهي على طوابق متعددة"
      ]
    },
    pool: {
      title: "حمام السباحة والنادي المائي",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "حمام سباحة أولمبي مجهز بأعلى المعايير الدولية، محاط بمساحات جلوس واسترخاء تمنحك أجواء المنتجعات الفاخرة داخل مجتمعك السكني.",
        "النادي المائي مصمم ليناسب كل أفراد الأسرة، مع منطقة مخصصة وآمنة للأطفال."
      ],
      features: [
        "حمام سباحة أولمبي بمعايير دولية",
        "منطقة سباحة مخصصة للأطفال بعمق آمن",
        "منقذون مؤهلون متواجدون طوال ساعات العمل",
        "مناطق استرخاء وجلوس محيطة بحمام السباحة"
      ]
    },
    gym: {
      title: "النادي الرياضي واللياقة البدنية",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "نادٍ رياضي عالمي المستوى مجهز بأحدث أجهزة اللياقة البدنية، ليمنحك كل ما تحتاجه لتحقيق أهدافك الصحية دون مغادرة المشروع.",
        "قاعات متخصصة للتمارين الجماعية والتدريب الشخصي بإشراف مدربين محترفين."
      ],
      features: [
        "أجهزة كارديو ومقاومة من أحدث الماركات العالمية",
        "قاعات مخصصة لليوجا والتمارين الجماعية",
        "مدربون شخصيون متاحون بالحجز المسبق",
        "غرف تغيير وستائر خاصة مجهزة بالكامل"
      ]
    },
    maintenance: {
      title: "خدمات الصيانة والإدارة",
      image: "assets/images/Services-Company.png",
      fallback: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "فريق صيانة وإدارة احترافي متكامل يعمل خلف الكواليس على مدار الساعة، لضمان أعلى مستويات الراحة والجودة في حياتك اليومية.",
        "نظام إدارة ممتلكات حديث يتابع كل ما يخص المرافق المشتركة والوحدات، بشفافية كاملة مع الملاك."
      ],
      features: [
        "فريق صيانة متكامل متاح ٢٤ ساعة للطوارئ",
        "إدارة احترافية لكافة المرافق المشتركة",
        "نظام تذاكر إلكتروني لمتابعة طلبات الصيانة",
        "تقارير دورية بحالة الوحدات والمرافق العامة"
      ]
    }
  };

  function initServiceDialogs() {
    var cards = document.querySelectorAll(".svc-card[data-service]");
    if (!cards.length) return;
    cards.forEach(function (card) {
      var trigger = card.querySelector(".svc-card__more");
      if (!trigger) return;
      trigger.addEventListener("click", function () {
        openServiceDialog(card.getAttribute("data-service"));
      });
    });
  }

  function openServiceDialog(key) {
    var data = SERVICE_DETAILS[key];
    if (!data) return;

    var dialog = document.getElementById("serviceDialog");
    if (!dialog) {
      dialog = document.createElement("div");
      dialog.id = "serviceDialog";
      dialog.className = "service-dialog";
      dialog.innerHTML =
        '<div class="service-dialog__card" role="dialog" aria-modal="true" aria-labelledby="serviceDialogTitle">' +
        '  <button type="button" class="service-dialog__close" aria-label="إغلاق">&times;</button>' +
        '  <div class="service-dialog__image"><img alt=""></div>' +
        '  <div class="service-dialog__body">' +
        '    <h3 class="service-dialog__title" id="serviceDialogTitle"></h3>' +
        '    <div class="service-dialog__text"></div>' +
        '    <ul class="service-dialog__features"></ul>' +
        "  </div>" +
        "</div>";
      document.body.appendChild(dialog);
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog || e.target.classList.contains("service-dialog__close")) {
          dialog.classList.remove("is-open");
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") dialog.classList.remove("is-open");
      });
    }

    var img = dialog.querySelector(".service-dialog__image img");
    img.setAttribute("data-fallback", data.fallback);
    img.alt = data.title;
    img.src = data.image;
    img.addEventListener(
      "error",
      function () { if (img.getAttribute("src") !== data.fallback) img.src = data.fallback; },
      { once: true }
    );

    dialog.querySelector(".service-dialog__title").textContent = data.title;
    dialog.querySelector(".service-dialog__text").innerHTML = data.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    dialog.querySelector(".service-dialog__features").innerHTML = data.features
      .map(function (f) { return "<li>" + CHECK_SVG + "<span>" + f + "</span></li>"; })
      .join("");

    dialog.classList.add("is-open");
  }
})();
