  const i18n = {
    en: {
      "nav.features": "Features",
      "nav.storefront": "Online Store",
      "nav.pricing": "Pricing",
      "hero.tag": "New",
      "hero.badge": "All-in-one shop software",
      "hero.title": "Everything your shop needs, in one place.",
      "hero.desc": "Sell at the counter, manage stock, print receipts, and run your online store from a single dashboard.",
      "hero.cta1": "Live demo",
      "hero.cta2": "See features",
      "features.title": "Everything your shop needs",
      "features.sub": "Built for small shops and growing businesses.",
      "pos.label": "AT THE COUNTER",
      "pos.title": "Fast at the counter",
      "sf.label": "ONLINE STORE",
      "sf.title": "Sell online too",
      "themes.title": "Pick a look for your shop",
      "strip.receipts.title": "Receipts & invoices",
      "strip.receipts.desc": "Print receipts or send invoices to customers.",
      "strip.pay.title": "Multiple payment options",
      "strip.pay.desc": "Accept bKash, cards, and online payments — your choice.",
      "strip.cashier.title": "Made for cashiers",
      "strip.cashier.desc": "Designed for speed — quick search, hold sales, and full-screen mode.",
      "pricing.title": "Pricing",
      "pricing.sub": "Buy once. Use forever. Support only when you need it.",
      "pricing.note": "Support is optional — only pay if you need help. Rate depends on the work, agreed upfront.",
      "contact.title": "Get in touch",
      "contact.portfolio": "More work at",
      "footer.copy": "© 2026 LitePOS",
      "footer.by": "Built by",
    },
    bn: {
      "nav.features": "ফিচার",
      "nav.storefront": "অনলাইন স্টোর",
      "nav.pricing": "মূল্য",
      "hero.tag": "নতুন",
      "hero.badge": "দোকানের সব এক জায়গায়",
      "hero.title": "আপনার দোকানের সব প্রয়োজন এক জায়গায়।",
      "hero.desc": "কাউন্টারে বিক্রি, স্টক ম্যানেজমেন্ট, রসিদ প্রিন্ট এবং অনলাইন স্টোর — সব এক ড্যাশবোর্ড থেকে।",
      "hero.cta1": "লাইভ ডেমো",
      "hero.cta2": "ফিচার দেখুন",
      "features.title": "আপনার দোকানের সব প্রয়োজন",
      "features.sub": "ছোট ও বাড়ন্ত দোকানের জন্য তৈরি।",
      "pos.label": "কাউন্টারে",
      "pos.title": "কাউন্টারে দ্রুত বিক্রি",
      "sf.label": "অনলাইন স্টোর",
      "sf.title": "অনলাইনেও বিক্রি করুন",
      "themes.title": "আপনার দোকানের জন্য ডিজাইন বেছে নিন",
      "strip.receipts.title": "রসিদ ও ইনভয়েস",
      "strip.receipts.desc": "রসিদ প্রিন্ট করুন বা কাস্টমারকে ইনভয়েস পাঠান।",
      "strip.pay.title": "একাধিক পেমেন্ট অপশন",
      "strip.pay.desc": "bKash, কার্ড এবং অনলাইন পেমেন্ট — আপনার পছন্দ।",
      "strip.cashier.title": "ক্যাশিয়ারের জন্য তৈরি",
      "strip.cashier.desc": "দ্রুততার জন্য ডিজাইন — কুইক সার্চ, হোল্ড সেল এবং ফুলস্ক্রিন মোড।",
      "pricing.title": "মূল্য",
      "pricing.sub": "একবার কিনুন। চিরকাল ব্যবহার করুন। দরকার হলেই সাপোর্ট।",
      "pricing.note": "সাপোর্ট ঐচ্ছিক — দরকার হলেই দিন। রেট কাজ অনুযায়ী আগে থেকে আলোচনা করে ঠিক হবে।",
      "contact.title": "যোগাযোগ করুন",
      "contact.portfolio": "আরও কাজ দেখুন",
      "footer.copy": "© ২০২৬ LitePOS",
      "footer.by": "তৈরি করেছেন",
    },
  };

  const data = {
    en: {
      features: [
        { title: "Point of Sale", desc: "Ring up sales fast with barcode scanner, search, and shortcuts.", icon: "zap" },
        { title: "Products", desc: "Add products with photos, variants, categories, and prices.", icon: "boxes" },
        { title: "Stock", desc: "See what's in stock. Get alerts before you run out.", icon: "warehouse" },
        { title: "Suppliers", desc: "Track who you buy from and what you owe.", icon: "truck" },
        { title: "Returns", desc: "Handle returns and refunds — stock updates automatically.", icon: "rotate-ccw" },
        { title: "Customers", desc: "Keep customer records and track their order history.", icon: "users" },
        { title: "Online Store", desc: "Beautiful online storefront with the same products.", icon: "shopping-cart" },
        { title: "Reports", desc: "Daily sales, profit, and customer reports at a glance.", icon: "bar-chart-3" },
        { title: "Payments", desc: "Accept cash, cards, bKash, and online payments.", icon: "credit-card" },
      ],
      posBullets: [
        "Barcode scanner for fast checkout",
        "Print receipts on thermal printers",
        "Hold a sale and finish later",
        "Multiple cashiers, one shop",
        "Works in your local currency",
      ],
      storefrontBullets: [
        "Five professional designs to choose from",
        "Customers can browse and order online",
        "Same prices and stock as your shop",
        "Customers can track their orders",
        "Looks great on phones and tablets",
      ],
      themes: [
        { name: "Fresh", note: "Wide, bold banner" },
        { name: "Nova", note: "Modern marketplace" },
        { name: "Style", note: "Editorial fashion" },
        { name: "Archive", note: "Minimal catalog" },
        { name: "Minimal", note: "Clean and simple" },
      ],
      plans: [
        { name: "Starter", tagline: "Get started.", feats: ["All shop features", "2 storefront designs", "Lifetime use", "Free updates"], ctaLabel: "Buy Starter" },
        { name: "Full", tagline: "Everything included.", feats: ["All shop features", "All 5 storefront designs", "Lifetime use", "Free updates"], ctaLabel: "Buy Full" },
        { name: "Support", tagline: "Get help when you need it.", feats: ["Bug fixes & small changes", "Custom design tweaks", "Setup help", "Personal support"], ctaLabel: "Get support" },
      ],
      popularBadge: "MOST POPULAR",
    },
    bn: {
      features: [
        { title: "পয়েন্ট অফ সেল", desc: "বারকোড স্ক্যানার, সার্চ ও শর্টকাট দিয়ে দ্রুত বিক্রি।", icon: "zap" },
        { title: "পণ্য", desc: "ছবি, ভ্যারিয়েন্ট, ক্যাটাগরি ও দামসহ পণ্য যোগ করুন।", icon: "boxes" },
        { title: "স্টক", desc: "কী আছে দেখুন। শেষ হওয়ার আগেই অ্যালার্ট পান।", icon: "warehouse" },
        { title: "সাপ্লায়ার", desc: "কার কাছ থেকে কিনছেন আর কত বাকি — সব ট্র্যাক করুন।", icon: "truck" },
        { title: "রিটার্ন", desc: "রিটার্ন ও রিফান্ড হ্যান্ডল করুন — স্টক স্বয়ংক্রিয়ভাবে আপডেট হবে।", icon: "rotate-ccw" },
        { title: "কাস্টমার", desc: "কাস্টমারের তথ্য রাখুন এবং অর্ডার হিস্ট্রি দেখুন।", icon: "users" },
        { title: "অনলাইন স্টোর", desc: "একই পণ্য দিয়ে সুন্দর অনলাইন স্টোরফ্রন্ট।", icon: "shopping-cart" },
        { title: "রিপোর্ট", desc: "দৈনিক বিক্রি, লাভ ও কাস্টমার রিপোর্ট এক নজরে।", icon: "bar-chart-3" },
        { title: "পেমেন্ট", desc: "নগদ, কার্ড, bKash এবং অনলাইন পেমেন্ট গ্রহণ করুন।", icon: "credit-card" },
      ],
      posBullets: [
        "বারকোড স্ক্যানারে দ্রুত চেকআউট",
        "থার্মাল প্রিন্টারে রসিদ ছাপুন",
        "বিক্রি হোল্ড করে পরে শেষ করুন",
        "একই দোকানে একাধিক ক্যাশিয়ার",
        "আপনার স্থানীয় মুদ্রায় কাজ করে",
      ],
      storefrontBullets: [
        "বেছে নিতে পাঁচটি প্রফেশনাল ডিজাইন",
        "কাস্টমার অনলাইনে ব্রাউজ ও অর্ডার করতে পারবে",
        "দোকানের মতোই দাম ও স্টক",
        "কাস্টমার নিজের অর্ডার ট্র্যাক করতে পারবে",
        "ফোন ও ট্যাবলেটে দারুণ দেখায়",
      ],
      themes: [
        { name: "Fresh", note: "ওয়াইড, বোল্ড ব্যানার" },
        { name: "Nova", note: "মডার্ন মার্কেটপ্লেস" },
        { name: "Style", note: "এডিটোরিয়াল ফ্যাশন" },
        { name: "Archive", note: "মিনিমাল ক্যাটালগ" },
        { name: "Minimal", note: "ক্লিন ও সিম্পল" },
      ],
      plans: [
        { name: "স্টার্টার", tagline: "শুরু করুন।", feats: ["সব দোকান ফিচার", "২টি স্টোরফ্রন্ট ডিজাইন", "আজীবন ব্যবহার", "ফ্রি আপডেট"], ctaLabel: "স্টার্টার কিনুন" },
        { name: "ফুল", tagline: "সবকিছু অন্তর্ভুক্ত।", feats: ["সব দোকান ফিচার", "৫টি স্টোরফ্রন্ট ডিজাইন", "আজীবন ব্যবহার", "ফ্রি আপডেট"], ctaLabel: "ফুল কিনুন" },
        { name: "সাপোর্ট", tagline: "যখন দরকার, তখন সাহায্য নিন।", feats: ["বাগ ফিক্স ও ছোট পরিবর্তন", "কাস্টম ডিজাইন টুইক", "সেটআপে সাহায্য", "ব্যক্তিগত সাপোর্ট"], ctaLabel: "সাপোর্ট নিন" },
      ],
      popularBadge: "সবচেয়ে জনপ্রিয়",
    },
  };

  const prices = [
    { USD: { price: "$49", per: " once" }, BDT: { price: "৳5,500", per: " once" } },
    { USD: { price: "$99", per: " once" }, BDT: { price: "৳10,900", per: " once" } },
    { USD: { price: "From $25", per: "/mo" }, BDT: { price: "From ৳2,500", per: "/mo" } },
  ];
  const pricesBn = [
    { USD: { price: "$49", per: " একবার" }, BDT: { price: "৳৫,৫০০", per: " একবার" } },
    { USD: { price: "$99", per: " একবার" }, BDT: { price: "৳১০,৯০০", per: " একবার" } },
    { USD: { price: "From $25", per: "/মাস" }, BDT: { price: "৳২,৫০০ থেকে", per: "/মাস" } },
  ];
  const planMeta = [
    { cta: "outline" },
    { cta: "primary", hot: true },
    { cta: "outline" },
  ];

  let lang = "en", currency = "BDT";

  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function applyStaticI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (i18n[lang][k] != null) el.textContent = i18n[lang][k];
    });
    document.querySelectorAll("[data-lang]").forEach(b => {
      const active = b.dataset.lang === lang;
      b.style.background = active ? "var(--color-accent)" : "transparent";
      b.style.color = active ? "#fff" : "var(--color-muted)";
    });
  }

  function renderAll() {
    const d = data[lang];

    document.getElementById("features-grid").innerHTML = d.features.map(f => `
      <div class="card p-5">
        <div class="flex items-center gap-2.5 mb-2">
          <div class="p-1.5 rounded-md bg-accent-soft text-accent"><i data-lucide="${f.icon}" class="w-4 h-4"></i></div>
          <h3 class="text-sm font-semibold">${esc(f.title)}</h3>
        </div>
        <p class="text-sm text-muted leading-relaxed">${esc(f.desc)}</p>
      </div>
    `).join("");

    const bulletItem = (i) => `
      <li class="flex items-center gap-2 text-foreground/80">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-accent shrink-0"></i>${esc(i)}
      </li>`;
    document.getElementById("pos-bullets").innerHTML = d.posBullets.map(bulletItem).join("");
    document.getElementById("storefront-bullets").innerHTML = d.storefrontBullets.map(bulletItem).join("");

    const themeImgs = ["themes/fresh.png", "themes/nova.png", "themes/style.png", "themes/archive.png", "themes/minimal.png"];
    document.getElementById("themes-grid").innerHTML = d.themes.map((t, i) => `
      <div class="card p-2">
        <div class="relative aspect-[4/3] rounded-md border border-border overflow-hidden bg-zinc-50 mb-2">
          <img src="${themeImgs[i]}" alt="${esc(t.name)} theme preview" loading="lazy" class="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
        <p class="text-sm font-semibold">${esc(t.name)}</p>
        <p class="text-xs text-muted">${esc(t.note)}</p>
      </div>
    `).join("");

    renderPlans();
    lucide.createIcons();
  }

  function renderPlans() {
    const d = data[lang];
    const priceTable = lang === "bn" ? pricesBn : prices;
    document.getElementById("plans-grid").innerHTML = d.plans.map((p, i) => {
      const m = planMeta[i];
      const { price, per } = priceTable[i][currency];
      return `
      <div class="card p-5" ${m.hot ? 'style="border-color: var(--color-accent);"' : ""}>
        ${m.hot ? `<div class="text-[10px] font-semibold text-accent mb-1 tracking-wider">${esc(d.popularBadge)}</div>` : ""}
        <h3 class="text-base font-semibold">${esc(p.name)}</h3>
        <p class="text-xs text-muted mt-0.5">${esc(p.tagline)}</p>
        <div class="text-2xl font-semibold mt-2 mb-3">
          ${esc(price)}<span class="text-sm text-muted font-normal">${esc(per)}</span>
        </div>
        <ul class="space-y-1.5 mb-4 text-sm text-foreground/80">
          ${p.feats.map(f => `<li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-accent shrink-0"></i>${esc(f)}</li>`).join("")}
        </ul>
        <a href="mailto:fazley111@gmail.com" class="btn btn-${m.cta}" style="width:100%;">${esc(p.ctaLabel)}</a>
      </div>`;
    }).join("");
    document.querySelectorAll("[data-curr]").forEach(b => {
      const active = b.dataset.curr === currency;
      b.style.background = active ? "var(--color-accent)" : "transparent";
      b.style.color = active ? "#fff" : "var(--color-muted)";
    });
  }

  function setLang(l) { lang = l; applyStaticI18n(); renderAll(); }
  function setCurrency(c) { currency = c; renderPlans(); lucide.createIcons(); }

  document.querySelectorAll("[data-lang]").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );
  document.querySelectorAll("[data-curr]").forEach(b =>
    b.addEventListener("click", () => setCurrency(b.dataset.curr))
  );

  applyStaticI18n();
  renderAll();

  // Hero slider
  (function () {
    const root = document.getElementById("slider");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll(".slide"));
    const dotsWrap = root.querySelector(".dots");
    let idx = 0, timer;

    slides.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.setAttribute("aria-label", `Slide ${i + 1}`);
      d.className = "w-1.5 h-1.5 rounded-full bg-white/60 border border-zinc-300 transition-all";
      d.addEventListener("click", () => go(i));
      dotsWrap.appendChild(d);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      slides.forEach((s, i) => s.style.opacity = i === idx ? "1" : "0");
      dots.forEach((d, i) => {
        d.style.width = i === idx ? "16px" : "6px";
        d.style.background = i === idx ? "var(--color-accent)" : "rgba(255,255,255,.7)";
      });
    }
    function go(i) { idx = (i + slides.length) % slides.length; render(); restart(); }
    function next() { go(idx + 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, 4000); }

    root.querySelectorAll(".slider-btn").forEach(btn =>
      btn.addEventListener("click", () => go(idx + Number(btn.dataset.dir)))
    );
    root.addEventListener("mouseenter", () => clearInterval(timer));
    root.addEventListener("mouseleave", restart);

    render();
    restart();
  })();
