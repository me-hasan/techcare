/* =========================================================
   Tech Care – shared front-end engine
   - injects header + footer on every page
   - Bengali / English switch (persisted in localStorage)
   - renders courses, blogs, testimonials, services from data.js
   - reveal animations, counters, carousel, form validation
   ========================================================= */

var LANG = 'bn';
var LANG_KEY = 'tc_lang';
var revealIO = null;

/* ---------- tiny helpers ---------- */
function t(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'object' && !Array.isArray(v)) return v[LANG] !== undefined ? v[LANG] : v.en;
  return v;
}
function money(n) {
  return Number(n).toLocaleString('en-US');
}
function currentPage() {
  var file = window.location.pathname.split('/').pop();
  return file === '' ? 'index.html' : file;
}
function safeStore(key, val) {
  try {
    if (val === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, val);
  } catch (e) {
    /* storage unavailable (file:// in some browsers) – ignore */
  }
  return null;
}
function query(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const TC_CATS = {
  software: { bn: 'সফটওয়্যার', en: 'Software' },
  hardware: { bn: 'হার্ডওয়্যার', en: 'Hardware' },
  computer: { bn: 'কম্পিউটার', en: 'Computer' },
  combo: { bn: 'কম্বো প্যাকেজ', en: 'Combo Package' },
  business: { bn: 'ব্যবসা', en: 'Business' }
};

const TC_NAV = [
  { href: 'index.html', label: { bn: 'হোম', en: 'Home' } },
  { href: 'courses.html', label: { bn: 'কোর্স', en: 'Courses' } },
  { href: 'services.html', label: { bn: 'সার্ভিস', en: 'Services' } },
  { href: 'blog.html', label: { bn: 'ব্লগ', en: 'Blog' } },
  { href: 'about.html', label: { bn: 'পরিচিতি', en: 'About' } },
  { href: 'contact.html', label: { bn: 'যোগাযোগ', en: 'Contact' } }
];

const TC_UI = {
  admission: { bn: 'ভর্তি হোন', en: 'Admission' },
  enroll: { bn: 'ভর্তি ফরম', en: 'Apply Now' },
  details: { bn: 'বিস্তারিত', en: 'Details' },
  readMore: { bn: 'পড়ুন', en: 'Read' },
  seats: { bn: 'সিট', en: 'seats' },
  duration: { bn: 'মেয়াদ', en: 'Duration' },
  batch: { bn: 'ব্যাচ', en: 'Batch' },
  level: { bn: 'লেভেল', en: 'Level' },
  fee: { bn: 'কোর্স ফি', en: 'Course Fee' },
  callNow: { bn: 'কল করুন', en: 'Call Now' },
  bookService: { bn: 'সার্ভিস বুক করুন', en: 'Book Service' }
};

/* =========================================================
   Header & Footer
   ========================================================= */
function logoMarkup(dark) {
  return (
    '<a href="index.html" class="flex items-center gap-3 shrink-0">' +
    '<span class="grid place-items-center w-11 h-11 rounded-xl bg-brand-600 shadow-glow">' +
    '<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="5" y="2" width="14" height="20" rx="3"></rect><path d="M10 18.5h4"></path>' +
    '<path d="M17.5 7.5l3 3-1.2 1.2-3-3z"></path></svg>' +
    '</span>' +
    '<span class="leading-tight">' +
    '<span class="block text-lg font-extrabold tracking-tight ' + (dark ? 'text-ink' : 'text-white') + '">' +
    '<span data-bn="টেক" data-en="TECH"></span> <span class="text-brand-600" data-bn="কেয়ার" data-en="CARE"></span></span>' +
    '<span class="block text-[10px] font-medium uppercase tracking-[0.18em] ' + (dark ? 'text-ink-400' : 'text-white/55') + '" data-bn="মোবাইল সার্ভিসিং ট্রেনিং" data-en="Mobile Servicing Training"></span>' +
    '</span></a>'
  );
}

function headerMarkup() {
  var page = currentPage();
  var navHtml = TC_NAV.map(function (item) {
    var active = page === item.href ||
      (item.href === 'courses.html' && page === 'course-details.html') ||
      (item.href === 'blog.html' && page === 'blog-details.html');
    return '<a href="' + item.href + '" class="nav-link text-sm font-medium ' +
      (active ? 'is-active text-white' : 'text-white/70 hover:text-white') + '" data-bn="' + item.label.bn + '" data-en="' + item.label.en + '"></a>';
  }).join('');

  return (
    /* ---- top bar ---- */
    '<div class="bg-black text-white/70 text-xs">' +
    '<div class="container mx-auto max-w-8xl px-4 lg:px-8 flex flex-wrap items-center justify-between gap-2 py-2">' +
    '<div class="flex items-center gap-4">' +
    '<a href="tel:' + TC_COMPANY.phone.replace(/[^0-9+]/g, '') + '" class="flex items-center gap-1.5 hover:text-brand-400">' +
    '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>' +
    TC_COMPANY.phone + '</a>' +
    '<a href="mailto:' + TC_COMPANY.email + '" class="hidden sm:flex items-center gap-1.5 hover:text-brand-400">' +
    '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>' +
    TC_COMPANY.email + '</a>' +
    '</div>' +
    '<div class="hidden md:flex items-center gap-2" data-bn="' + TC_COMPANY.hours.bn + '" data-en="' + TC_COMPANY.hours.en + '"></div>' +
    '</div></div>' +

    /* ---- main nav ---- */
    '<header id="tcHeader" class="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">' +
    '<div class="container mx-auto max-w-8xl px-4 lg:px-8">' +
    '<div class="flex items-center justify-between gap-4 h-[74px]">' +
    logoMarkup(false) +
    '<nav class="hidden lg:flex items-center gap-8">' + navHtml + '</nav>' +
    '<div class="flex items-center gap-4">' +
    '<div class="flex items-center rounded-full border border-white/20 p-0.5 text-xs font-semibold">' +
    '<button type="button" class="lang-btn px-3 py-1.5 rounded-full text-white/75 transition" data-lang="bn">বাংলা</button>' +
    '<button type="button" class="lang-btn px-3 py-1.5 rounded-full text-white/75 transition" data-lang="en">EN</button>' +
    '</div>' +
    '<a href="admission.html" class="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition shadow-glow" data-bn="' + TC_UI.admission.bn + '" data-en="' + TC_UI.admission.en + '"></a>' +
    '<button type="button" id="tcMenuBtn" aria-label="Menu" class="lg:hidden grid place-items-center w-11 h-11 rounded-xl border border-white/15 text-white">' +
    '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
    '</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div id="tcMobileMenu" class="lg:hidden hidden border-t border-white/10 bg-ink">' +
    '<div class="container mx-auto max-w-8xl px-4 py-4 flex flex-col gap-1">' +
    TC_NAV.map(function (i) {
      return '<a href="' + i.href + '" class="py-3 border-b border-white/5 text-white/80 font-medium" data-bn="' + i.label.bn + '" data-en="' + i.label.en + '"></a>';
    }).join('') +
    '<a href="admission.html" class="mt-4 text-center rounded-full bg-brand-600 py-3 font-semibold text-white" data-bn="' + TC_UI.admission.bn + '" data-en="' + TC_UI.admission.en + '"></a>' +
    '</div></div>' +
    '</header>'
  );
}

function footerMarkup() {
  var year = new Date().getFullYear();
  return (
    '<footer class="bg-ink text-white/70 pt-16">' +
    '<div class="container mx-auto max-w-8xl px-4 lg:px-8">' +
    '<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12">' +

    '<div class="lg:pr-6">' + logoMarkup(false) +
    '<p class="mt-5 text-sm leading-relaxed" data-bn="টেক কেয়ার একটি মোবাইল সার্ভিসিং ট্রেনিং সেন্টার ও রিপেয়ার সার্ভিস। আসল যন্ত্রাংশ, দক্ষ টেকনিশিয়ান আর সাশ্রয়ী মূল্যে নির্ভরযোগ্য সেবা।" data-en="Tech Care is a mobile servicing training center and repair service delivering reliable work with genuine parts, skilled technicians and honest pricing."></p>' +
    '<div class="mt-5 flex items-center gap-3">' +
    ['facebook', 'youtube', 'instagram', 'whatsapp'].map(function (s) {
      var paths = {
        facebook: '<path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/>',
        youtube: '<path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12zM10 15V9l5 3z"/>',
        instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
        whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/><path d="M8.5 8.5c0 4 3 7 7 7 1 0 1.5-.6 1.5-1.3l-1.7-.9-1 1c-1.3-.6-2.4-1.7-3-3l1-1-.9-1.7c-.7 0-1.4.5-1.4 1.5z"/>'
      };
      var fill = (s === 'facebook' || s === 'youtube') ? 'fill="currentColor" stroke="none"' : 'fill="none" stroke="currentColor" stroke-width="1.8"';
      return '<a href="#" aria-label="' + s + '" class="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-600 hover:text-white transition">' +
        '<svg class="w-4 h-4" viewBox="0 0 24 24" ' + fill + '>' + paths[s] + '</svg></a>';
    }).join('') +
    '</div></div>' +

    '<div>' +
    '<h4 class="text-white font-bold mb-4" data-bn="দ্রুত লিংক" data-en="Quick Links"></h4>' +
    '<ul class="space-y-2.5 text-sm">' +
    TC_NAV.map(function (i) {
      return '<li><a href="' + i.href + '" class="hover:text-brand-400 transition" data-bn="' + i.label.bn + '" data-en="' + i.label.en + '"></a></li>';
    }).join('') +
    '<li><a href="admission.html" class="hover:text-brand-400 transition" data-bn="অনলাইন ভর্তি" data-en="Online Admission"></a></li>' +
    '</ul></div>' +

    '<div>' +
    '<h4 class="text-white font-bold mb-4" data-bn="আমাদের কোর্স" data-en="Our Courses"></h4>' +
    '<ul class="space-y-2.5 text-sm">' +
    TC_COURSES.slice(0, 6).map(function (c) {
      return '<li><a href="course-details.html?id=' + c.id + '" class="hover:text-brand-400 transition" data-bn="' + c.title.bn + '" data-en="' + c.title.en + '"></a></li>';
    }).join('') +
    '</ul></div>' +

    '<div>' +
    '<h4 class="text-white font-bold mb-4" data-bn="যোগাযোগ" data-en="Contact"></h4>' +
    '<ul class="space-y-4 text-sm">' +
    '<li class="flex gap-3"><span class="text-brand-500 mt-0.5">◉</span><span data-bn="' + TC_COMPANY.address.bn + '" data-en="' + TC_COMPANY.address.en + '"></span></li>' +
    '<li class="flex gap-3"><span class="text-brand-500 mt-0.5">◉</span><a href="tel:' + TC_COMPANY.phone.replace(/[^0-9+]/g, '') + '" class="hover:text-brand-400">' + TC_COMPANY.phone + '</a></li>' +
    '<li class="flex gap-3"><span class="text-brand-500 mt-0.5">◉</span><a href="mailto:' + TC_COMPANY.email + '" class="hover:text-brand-400">' + TC_COMPANY.email + '</a></li>' +
    '<li class="flex gap-3"><span class="text-brand-500 mt-0.5">◉</span><span data-bn="' + TC_COMPANY.hours.bn + '" data-en="' + TC_COMPANY.hours.en + '"></span></li>' +
    '</ul></div>' +

    '</div>' +
    '<div class="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">' +
    '<p>© ' + year + ' <span data-bn="টেক কেয়ার" data-en="Tech Care"></span>. <span data-bn="সর্বস্বত্ব সংরক্ষিত।" data-en="All rights reserved."></span></p>' +
    '<p class="flex items-center gap-4"><a href="#" class="hover:text-brand-400" data-bn="প্রাইভেসি পলিসি" data-en="Privacy Policy"></a><a href="#" class="hover:text-brand-400" data-bn="শর্তাবলী" data-en="Terms"></a></p>' +
    '</div></div></footer>'
  );
}

/* =========================================================
   Language engine
   ========================================================= */
function applyLang(lang) {
  LANG = lang === 'en' ? 'en' : 'bn';
  document.documentElement.lang = LANG;
  document.documentElement.classList.toggle('lang-bn', LANG === 'bn');

  document.querySelectorAll('[data-bn][data-en]').forEach(function (el) {
    var val = el.getAttribute('data-' + LANG);
    if (val === null) return;
    if (el.tagName === 'INPUT' || el.tagName === 'OPTION' || el.tagName === 'TEXTAREA') el.textContent = val;
    else el.innerHTML = val;
  });

  document.querySelectorAll('[data-ph-bn][data-ph-en]').forEach(function (el) {
    el.placeholder = el.getAttribute('data-ph-' + LANG) || '';
  });

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.classList.toggle('is-active', b.getAttribute('data-lang') === LANG);
  });

  renderDynamic();
}

/* Re-render everything that is generated from data.js */
function renderDynamic() {
  renderCourses('[data-courses]');
  renderServices('[data-services]');
  renderTestimonials('[data-testimonials]');
  renderBlogs('[data-blogs]');
  renderCourseDetail();
  renderBlogDetail();
  fillCourseSelects();
  bindImages();
  watchReveals();
}

/* Any element with data-img="hero" gets the matching image from data.js */
function bindImages() {
  document.querySelectorAll('[data-img]').forEach(function (el) {
    var key = el.getAttribute('data-img');
    if (TC_IMG[key]) el.src = TC_IMG[key];
  });
}

/* =========================================================
   Renderers
   ========================================================= */
function courseCard(c) {
  return (
    '<article class="tc-card group bg-white rounded-2xl border border-black/10 overflow-hidden flex flex-col reveal">' +
    '<div class="relative h-48 overflow-hidden bg-ink">' +
    '<img src="' + c.img + '" alt="' + t(c.title) + '" loading="lazy" class="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500">' +
    '<span class="absolute top-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold text-white">' + t(TC_CATS[c.cat]) + '</span>' +
    '<span class="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[11px] text-white">' + t(c.level) + '</span>' +
    '</div>' +
    '<div class="p-6 flex flex-col flex-1">' +
    '<h3 class="text-lg font-bold text-ink leading-snug">' + t(c.title) + '</h3>' +
    '<p class="mt-2 text-sm text-ink-400 leading-relaxed flex-1">' + t(c.short) + '</p>' +
    '<div class="mt-4 flex flex-wrap gap-2 text-[11px] font-medium">' +
    '<span class="rounded-md bg-smoke px-2.5 py-1 text-ink-700">' + t(c.duration) + '</span>' +
    '<span class="rounded-md bg-smoke px-2.5 py-1 text-ink-700">' + t(c.batch) + ' ' + t(TC_UI.batch) + '</span>' +
    '<span class="rounded-md bg-brand-50 px-2.5 py-1 text-brand-700">' + c.seats + ' ' + t(TC_UI.seats) + '</span>' +
    '</div>' +
    '<div class="mt-5 flex items-end justify-between gap-3 border-t border-dashed border-black/10 pt-4">' +
    '<div><p class="text-[11px] uppercase tracking-wide text-ink-400">' + t(TC_UI.fee) + '</p>' +
    '<p class="text-xl font-extrabold text-ink">৳' + money(c.fee) +
    '<span class="ml-2 text-xs font-medium text-ink-400 line-through">৳' + money(c.oldFee) + '</span></p></div>' +
    '<a href="course-details.html?id=' + c.id + '" class="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-brand-600 transition">' + t(TC_UI.details) + '</a>' +
    '</div></div></article>'
  );
}

function renderCourses(target) {
  document.querySelectorAll(target).forEach(function (box) {
    var limit = parseInt(box.getAttribute('data-limit') || '0', 10);
    var cat = box.getAttribute('data-cat') || 'all';
    var list = TC_COURSES.filter(function (c) { return cat === 'all' || c.cat === cat; });
    if (limit > 0) list = list.slice(0, limit);
    box.innerHTML = list.map(courseCard).join('');
  });
}

function renderServices(target) {
  document.querySelectorAll(target).forEach(function (box) {
    var limit = parseInt(box.getAttribute('data-limit') || '0', 10);
    var list = limit > 0 ? TC_SERVICES.slice(0, limit) : TC_SERVICES;
    box.innerHTML = list.map(function (s) {
      return (
        '<article class="tc-card group bg-white rounded-2xl border border-black/10 overflow-hidden flex flex-col reveal">' +
        '<div class="h-44 overflow-hidden bg-ink"><img src="' + s.img + '" alt="' + t(s.title) + '" loading="lazy" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"></div>' +
        '<div class="p-6 flex flex-col flex-1">' +
        '<h3 class="text-base font-bold text-ink">' + t(s.title) + '</h3>' +
        '<p class="mt-2 text-sm text-ink-400 leading-relaxed flex-1">' + t(s.desc) + '</p>' +
        '<p class="mt-4 text-sm font-bold text-brand-600">' + t(s.price) + '</p>' +
        '</div></article>'
      );
    }).join('');
  });
}

function renderTestimonials(target) {
  document.querySelectorAll(target).forEach(function (box) {
    box.innerHTML = TC_TESTIMONIALS.map(function (r) {
      var stars = '';
      for (var i = 0; i < 5; i++) stars += '<span class="' + (i < r.rating ? 'text-brand-600' : 'text-black/15') + '">★</span>';
      return (
        '<article class="snap-item w-[300px] sm:w-[360px] shrink-0 bg-white rounded-2xl border border-black/10 p-6">' +
        '<div class="flex items-center gap-3">' +
        '<span class="grid place-items-center w-11 h-11 rounded-full bg-ink text-white font-bold">' + r.name.charAt(0) + '</span>' +
        '<div><p class="font-bold text-ink text-sm">' + r.name + '</p>' +
        '<p class="text-xs text-ink-400">' + t(r.role) + '</p></div>' +
        '</div>' +
        '<div class="mt-4 text-sm tracking-widest">' + stars + '</div>' +
        '<p class="mt-3 text-sm text-ink-600 leading-relaxed">“' + t(r.text) + '”</p>' +
        '</article>'
      );
    }).join('');
  });
}

function blogCard(b) {
  return (
    '<article class="tc-card group bg-white rounded-2xl border border-black/10 overflow-hidden flex flex-col reveal">' +
    '<div class="h-48 overflow-hidden bg-ink relative">' +
    '<img src="' + b.img + '" alt="' + t(b.title) + '" loading="lazy" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500">' +
    '<span class="absolute top-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold text-white">' + t(b.cat) + '</span>' +
    '</div>' +
    '<div class="p-6 flex flex-col flex-1">' +
    '<p class="text-xs text-ink-400">' + t(b.date) + ' · ' + t(b.author) + '</p>' +
    '<h3 class="mt-2 text-base font-bold text-ink leading-snug line-clamp-2">' + t(b.title) + '</h3>' +
    '<p class="mt-2 text-sm text-ink-400 leading-relaxed flex-1">' + t(b.excerpt) + '</p>' +
    '<a href="blog-details.html?id=' + b.id + '" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:gap-3 transition-all">' + t(TC_UI.readMore) +
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
    '</div></article>'
  );
}

function renderBlogs(target) {
  document.querySelectorAll(target).forEach(function (box) {
    var limit = parseInt(box.getAttribute('data-limit') || '0', 10);
    var list = limit > 0 ? TC_BLOGS.slice(0, limit) : TC_BLOGS;
    box.innerHTML = list.map(blogCard).join('');
  });
}

/* ---------- course details ---------- */
function renderCourseDetail() {
  var root = document.getElementById('courseDetailRoot');
  if (!root) return;
  var id = query('id');
  var c = TC_COURSES.filter(function (x) { return x.id === id; })[0] || TC_COURSES[0];

  var related = TC_COURSES.filter(function (x) { return x.id !== c.id }).slice(0, 3);

  root.innerHTML =
    '<section class="relative bg-ink text-white overflow-hidden">' +
    '<div class="absolute inset-0 bg-grid opacity-60"></div>' +
    '<div class="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl"></div>' +
    '<div class="relative container mx-auto max-w-8xl px-4 lg:px-8 py-14 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">' +
    '<div>' +
    '<nav class="text-xs text-white/50 mb-4 flex items-center gap-2"><a href="index.html" class="hover:text-brand-400">' + TC_COMPANY.name.en + '</a><span>/</span><a href="courses.html" class="hover:text-brand-400" data-bn="কোর্স" data-en="Courses"></a><span>/</span><span class="text-white/80">' + t(c.title) + '</span></nav>' +
    '<span class="inline-flex rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold">' + t(TC_CATS[c.cat]) + '</span>' +
    '<h1 class="mt-5 text-3xl lg:text-5xl font-extrabold leading-tight">' + t(c.title) + '</h1>' +
    '<p class="mt-4 text-white/70 leading-relaxed max-w-xl">' + t(c.short) + '</p>' +
    '<div class="mt-7 flex flex-wrap gap-3">' +
    '<a href="admission.html?course=' + c.id + '" class="rounded-full bg-brand-600 px-7 py-3.5 font-semibold hover:bg-brand-700 transition shadow-glow" data-bn="এখনই ভর্তি হোন" data-en="Enroll Now"></a>' +
    '<a href="tel:' + TC_COMPANY.phone.replace(/[^0-9+]/g, '') + '" class="rounded-full border border-white/25 px-7 py-3.5 font-semibold hover:border-brand-500 transition">' + t(TC_UI.callNow) + '</a>' +
    '</div></div>' +
    '<div class="relative">' +
    '<div class="rounded-3xl overflow-hidden border border-white/10 shadow-glow">' +
    '<img src="' + c.img + '" alt="' + t(c.title) + '" class="w-full h-72 lg:h-96 object-cover"></div>' +
    '<div class="absolute -bottom-6 left-6 rounded-2xl bg-brand-600 px-6 py-4 shadow-glow">' +
    '<p class="text-[11px] uppercase tracking-wide text-white/80">' + t(TC_UI.fee) + '</p>' +
    '<p class="text-2xl font-extrabold text-white">৳' + money(c.fee) + '</p>' +
    '</div></div>' +
    '</div></section>' +

    '<section class="bg-smoke py-12">' +
    '<div class="container mx-auto max-w-8xl px-4 lg:px-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">' +
    [TC_UI.duration, TC_UI.batch, TC_UI.level].map(function (k, i) {
      var v = [c.duration, c.batch, c.level][i];
      return '<div class="rounded-2xl bg-white border border-black/10 p-5"><p class="text-xs uppercase tracking-wide text-ink-400">' + t(k) + '</p><p class="mt-1 font-bold text-ink">' + t(v) + '</p></div>';
    }).join('') +
    '<div class="rounded-2xl bg-white border border-black/10 p-5"><p class="text-xs uppercase tracking-wide text-ink-400" data-bn="আসন সংখ্যা" data-en="Seats Available"></p><p class="mt-1 font-bold text-brand-600">' + c.seats + ' ' + t(TC_UI.seats) + '</p></div>' +
    '</div></section>' +

    '<section class="py-16 lg:py-20">' +
    '<div class="container mx-auto max-w-8xl px-4 lg:px-8 grid gap-12 lg:grid-cols-[1.6fr_1fr]">' +
    '<div>' +
    '<h2 class="text-2xl font-extrabold text-ink" data-bn="কোর্স সিলেবাস" data-en="Course Syllabus"></h2>' +
    '<p class="mt-2 text-sm text-ink-400" data-bn="প্রতিটি মডিউল হাতে-কলমে প্র্যাকটিসের সাথে সাজানো হয়েছে।" data-en="Every module is paired with hands-on practice."></p>' +
    '<div class="mt-6 space-y-3">' +
    c.syllabus.map(function (m, i) {
      return '<div class="flex gap-4 rounded-xl border border-black/10 bg-white p-4">' +
        '<span class="grid place-items-center w-9 h-9 shrink-0 rounded-lg bg-brand-50 text-brand-700 font-bold text-sm">' + (i + 1) + '</span>' +
        '<p class="text-sm font-medium text-ink-700 pt-1.5">' + t(m) + '</p></div>';
    }).join('') +
    '</div>' +
    '<h2 class="mt-12 text-2xl font-extrabold text-ink" data-bn="কোর্স শেষে আপনি পারবেন" data-en="What you will be able to do"></h2>' +
    '<div class="mt-5 grid gap-3 sm:grid-cols-2">' +
    c.outcomes.map(function (o) {
      return '<div class="flex items-start gap-3 rounded-xl bg-white border border-black/10 p-4">' +
        '<svg class="w-5 h-5 shrink-0 text-brand-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 13 4 4L19 7"/></svg>' +
        '<p class="text-sm text-ink-700">' + t(o) + '</p></div>';
    }).join('') +
    '</div></div>' +

    '<aside class="lg:sticky lg:top-28 h-max">' +
    '<div class="rounded-2xl border border-black/10 bg-white p-6 shadow-card">' +
    '<h3 class="font-bold text-ink" data-bn="যা যা পাবেন" data-en="What is included"></h3>' +
    '<ul class="mt-4 space-y-3">' +
    c.tools.map(function (x) {
      return '<li class="flex items-start gap-3 text-sm text-ink-600"><span class="text-brand-600 mt-0.5">◆</span>' + t(x) + '</li>';
    }).join('') +
    '</ul>' +
    '<div class="mt-6 rounded-xl bg-ink p-5 text-white">' +
    '<p class="text-xs text-white/60" data-bn="এই কোর্সে ভর্তি হতে" data-en="To join this course"></p>' +
    '<a href="admission.html?course=' + c.id + '" class="mt-3 block rounded-full bg-brand-600 py-3 text-center font-semibold hover:bg-brand-700 transition" data-bn="অনলাইন ফরম পূরণ করুন" data-en="Fill the online form"></a>' +
    '<a href="tel:' + TC_COMPANY.phone.replace(/[^0-9+]/g, '') + '" class="mt-3 block rounded-full border border-white/20 py-3 text-center font-semibold hover:border-brand-500 transition">' + TC_COMPANY.phone + '</a>' +
    '</div></div></aside>' +
    '</div></section>' +

    '<section class="bg-smoke py-16">' +
    '<div class="container mx-auto max-w-8xl px-4 lg:px-8">' +
    '<h2 class="text-2xl font-extrabold text-ink" data-bn="সম্পর্কিত কোর্স" data-en="Related Courses"></h2>' +
    '<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">' + related.map(courseCard).join('') + '</div>' +
    '</div></section>';
}

/* ---------- blog details ---------- */
function renderBlogDetail() {
  var root = document.getElementById('blogDetailRoot');
  if (!root) return;
  var id = query('id');
  var b = TC_BLOGS.filter(function (x) { return x.id === id; })[0] || TC_BLOGS[0];
  var others = TC_BLOGS.filter(function (x) { return x.id !== b.id });

  root.innerHTML =
    '<section class="bg-ink text-white relative overflow-hidden">' +
    '<div class="absolute inset-0 bg-grid opacity-60"></div>' +
    '<div class="relative container mx-auto max-w-4xl px-4 lg:px-8 py-14 lg:py-20 text-center">' +
    '<span class="inline-flex rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold">' + t(b.cat) + '</span>' +
    '<h1 class="mt-5 text-2xl lg:text-4xl font-extrabold leading-snug">' + t(b.title) + '</h1>' +
    '<p class="mt-4 text-sm text-white/60">' + t(b.date) + ' · ' + t(b.author) + '</p>' +
    '</div></section>' +
    '<article class="container mx-auto max-w-3xl px-4 lg:px-8 py-14">' +
    '<img src="' + b.img + '" alt="' + t(b.title) + '" class="w-full h-64 lg:h-96 object-cover rounded-2xl">' +
    '<p class="mt-8 text-lg text-ink-600 leading-relaxed font-medium">' + t(b.excerpt) + '</p>' +
    b.content.map(function (s) {
      return '<h2 class="mt-9 text-xl font-extrabold text-ink">' + t(s.h) + '</h2>' +
        '<p class="mt-3 text-ink-600 leading-relaxed">' + t(s.p) + '</p>';
    }).join('') +
    '<div class="mt-10 rounded-2xl bg-ink text-white p-7 flex flex-col sm:flex-row items-center justify-between gap-5">' +
    '<div><p class="font-bold text-lg" data-bn="এই বিষয়ে আরও জানতে চান?" data-en="Want to know more about this?"></p>' +
    '<p class="text-sm text-white/60 mt-1" data-bn="আমাদের কাউন্সিলরের সাথে সরাসরি কথা বলুন।" data-en="Talk directly to one of our counselors."></p></div>' +
    '<a href="admission.html" class="rounded-full bg-brand-600 px-6 py-3 font-semibold hover:bg-brand-700 transition shrink-0" data-bn="ভর্তি হোন" data-en="Get Admission"></a>' +
    '</div></article>' +
    '<section class="bg-smoke py-14"><div class="container mx-auto max-w-8xl px-4 lg:px-8">' +
    '<h2 class="text-2xl font-extrabold text-ink" data-bn="আরও পড়ুন" data-en="More Articles"></h2>' +
    '<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">' + others.slice(0, 3).map(blogCard).join('') + '</div>' +
    '</div></section>';
}

/* ---------- populate course selects (admission + contact forms) ---------- */
function fillCourseSelects() {
  document.querySelectorAll('select[data-course-select]').forEach(function (sel) {
    var keep = sel.value;
    var placeholder = LANG === 'bn' ? 'কোর্স নির্বাচন করুন' : 'Select a course';
    sel.innerHTML =
      '<option value="">' + placeholder + '</option>' +
      TC_COURSES.map(function (c) { return '<option value="' + c.id + '">' + t(c.title) + '</option>'; }).join('');
    if (keep) sel.value = keep;
  });
}

/* =========================================================
   Interactions
   ========================================================= */
function initMenu() {
  var btn = document.getElementById('tcMenuBtn');
  var menu = document.getElementById('tcMobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () { menu.classList.toggle('hidden'); });
}

function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  watchReveals();
}

/* Observe any .reveal element that is not visible yet (also called after re-render) */
function watchReveals() {
  var items = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!revealIO) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  items.forEach(function (el) { revealIO.observe(el); });
}

function initCounters() {
  var nodes = document.querySelectorAll('[data-count]');
  if (!nodes.length) return;
  var run = function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var start = performance.now();
    var dur = 1500;
    var tick = function (now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) { nodes.forEach(run); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  nodes.forEach(function (el) { io.observe(el); });
}

function initCarousel() {
  document.querySelectorAll('[data-carousel]').forEach(function (wrap) {
    var row = wrap.querySelector('[data-track]');
    if (!row) return;
    var step = function () { return Math.min(row.clientWidth * 0.9, 400); };
    var prev = wrap.querySelector('[data-prev]');
    var next = wrap.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { row.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { row.scrollBy({ left: step(), behavior: 'smooth' }); });
  });
}

/* Auto-playing image slider (home page facility gallery) */
function initSlider() {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-slider]').forEach(function (wrap) {
    var slides = wrap.querySelectorAll('[data-slides] .tc-slide');
    if (!slides.length) return;

    var dotsBox = wrap.querySelector('[data-dots]');
    var index = 0;
    var timer = null;
    var dots = [];

    if (dotsBox) {
      slides.forEach(function (_, i) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'tc-dot';
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        d.addEventListener('click', function () { go(i); restart(); });
        dotsBox.appendChild(d);
        dots.push(d);
      });
    }

    function go(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === index); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === index); });
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); if (!reduced) timer = setInterval(next, 5000); }

    var pb = wrap.querySelector('[data-slide-prev]');
    var nb = wrap.querySelector('[data-slide-next]');
    if (pb) pb.addEventListener('click', function () { prev(); restart(); });
    if (nb) nb.addEventListener('click', function () { next(); restart(); });
    wrap.addEventListener('mouseenter', stop);
    wrap.addEventListener('mouseleave', restart);

    go(0);
    restart();
  });
}

function initAccordion() {
  document.querySelectorAll('.acc-head').forEach(function (h) {
    h.addEventListener('click', function () {
      var item = h.closest('.acc-item');
      var open = item.classList.contains('open');
      item.parentElement.querySelectorAll('.acc-item').forEach(function (i) { i.classList.remove('open'); });
      if (!open) item.classList.add('open');
    });
  });
}

/* ---------- forms ---------- */
function initForms() {
  document.querySelectorAll('form.tc-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (f) {
        var bad = !f.value || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value)) ||
          (f.type === 'tel' && f.value.replace(/[^0-9]/g, '').length < 11);
        f.classList.toggle('border-brand-600', bad);
        f.classList.toggle('bg-brand-50', bad);
        if (bad) ok = false;
      });
      if (!ok) {
        if (window.Swal) {
          Swal.fire({
            icon: 'error',
            title: LANG === 'bn' ? 'তথ্য অসম্পূর্ণ' : 'Incomplete information',
            text: LANG === 'bn' ? 'অনুগ্রহ করে লাল চিহ্নিত ঘরগুলো সঠিকভাবে পূরণ করুন।' : 'Please fill the highlighted fields correctly.',
            confirmButtonColor: '#e11d2e'
          });
        }
        return;
      }
      var msg = form.getAttribute('data-success-' + LANG) || form.getAttribute('data-success-en') || '';
      if (window.Swal) {
        Swal.fire({
          icon: 'success',
          title: LANG === 'bn' ? 'ধন্যবাদ!' : 'Thank you!',
          text: msg,
          confirmButtonColor: '#e11d2e'
        }).then(function () { form.reset(); });
      } else {
        alert(msg);
        form.reset();
      }
    });
  });
}

/* =========================================================
   Boot
   ========================================================= */
document.addEventListener('DOMContentLoaded', function () {
  var h = document.getElementById('site-header');
  var f = document.getElementById('site-footer');
  if (h) h.innerHTML = headerMarkup();
  if (f) f.innerHTML = footerMarkup();

  var saved = safeStore(LANG_KEY);
  applyLang(saved === 'en' ? 'en' : 'bn');

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      safeStore(LANG_KEY, b.getAttribute('data-lang'));
      applyLang(b.getAttribute('data-lang'));
    });
  });

  initMenu();
  initReveal();
  initCounters();
  initCarousel();
  initSlider();
  initAccordion();
  initForms();

  /* course preselect from ?course= */
  var pre = query('course');
  if (pre) {
    document.querySelectorAll('select[data-course-select]').forEach(function (s) { s.value = pre; });
  }

  window.addEventListener('scroll', function () {
    var hd = document.getElementById('tcHeader');
    if (hd) hd.classList.toggle('shadow-2xl', window.scrollY > 12);
  }, { passive: true });
});
