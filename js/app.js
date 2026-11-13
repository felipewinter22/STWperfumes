(() => {
  const CFG = window.STW_CONFIG, ALL = window.STW_PRODUCTS;
  const $ = (s, el = document) => el.querySelector(s);
  const STATUS = { "pronta-entrega": "Pronta entrega", "sob-encomenda": "Sob encomenda" };
  const brl = n => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const norm = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const state = { q: "", status: "todos", cat: "todas" };

  /* ---------- WhatsApp ---------- */
  function whatsLink(p) {
    const msg = p
      ? (p.status === "sob-encomenda"
          ? `Olá! Gostaria de encomendar o perfume ${p.nome} (${p.marca}). Poderia me passar mais informações?`
          : `Olá! Tenho interesse no perfume ${p.nome} (${p.marca}). Gostaria de saber mais informações.`)
      : "Olá! Vim pelo site da STW PARFUM e gostaria de mais informações.";
    return `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(msg)}`;
  }
  const ctaText = p => p.status === "sob-encomenda" ? "Encomendar" : "Quero este perfume";

  /* ---------- Cards ---------- */
  const badge = p => `<span class="badge ${p.status}">${STATUS[p.status]}</span>`;

  function cardHTML(p, i) {
    return `<article class="card" style="animation-delay:${Math.min(i, 8) * 60}ms">
      <button class="card-img" data-open="${esc(p.id)}" aria-label="Ver detalhes de ${esc(p.nome)}">
        <img src="${esc(p.imagem)}" alt="${esc(p.nome)} ${esc(p.marca)}" loading="lazy">${badge(p)}
      </button>
      <div class="card-body">
        <p class="brand">${esc(p.marca)}</p>
        <h3>${esc(p.nome)}</h3>
        <p class="meta">${esc(p.volume)}</p>
        <p class="price">${brl(p.preco)}</p>
        <a class="btn btn-line" href="${whatsLink(p)}" target="_blank" rel="noopener">${ctaText(p)}</a>
      </div>
    </article>`;
  }

  function render() {
    const q = norm(state.q.trim());
    const list = ALL.filter(p =>
      (state.status === "todos" || p.status === state.status) &&
      (state.cat === "todas" || p.categoria === state.cat) &&
      (!q || norm(p.nome + " " + p.marca).includes(q)));
    $("#grid").innerHTML = list.map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    $("#count").textContent = list.length === 1 ? "1 perfume" : `${list.length} perfumes`;
  }

  /* ---------- Filtros ---------- */
  function setupFilters() {
    const cats = [...new Set(ALL.map(p => p.categoria))];
    $("#catFilters").innerHTML = ["Todas", ...cats]
      .map((c, i) => `<button class="chip${i ? "" : " active"}" data-cat="${i ? esc(c) : "todas"}">${esc(c)}</button>`).join("");

    const bind = (sel, key, attr) => $(sel).addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      state[key] = b.dataset[attr];
      $(sel).querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
      render();
    });
    bind("#statusFilters", "status", "status");
    bind("#catFilters", "cat", "cat");
    $("#search").addEventListener("input", e => { state.q = e.target.value; render(); });
  }

  /* ---------- Destaques ---------- */
  function renderFeatured() {
    $("#featured").innerHTML = ALL.filter(p => p.destaque).slice(0, 4).map(p => `
      <button class="feat reveal" data-open="${esc(p.id)}">
        <img src="${esc(p.imagem)}" alt="${esc(p.nome)}" loading="lazy">
        <span class="cap"><small>${esc(p.marca)}</small><strong>${esc(p.nome)}</strong></span>
      </button>`).join("");
  }

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let lastFocus = null;
  function openModal(id) {
    const p = ALL.find(x => x.id === id); if (!p) return;
    lastFocus = document.activeElement;
    $("#mImg").src = p.imagem; $("#mImg").alt = `${p.nome} ${p.marca}`;
    $("#mBadge").className = `badge ${p.status}`; $("#mBadge").textContent = STATUS[p.status];
    $("#mMarca").textContent = p.marca; $("#mNome").textContent = p.nome;
    $("#mVolume").textContent = p.volume; $("#mPreco").textContent = brl(p.preco);
    $("#mDesc").textContent = p.descricao;
    const w = $("#mWhats"); w.href = whatsLink(p);
    w.textContent = p.status === "sob-encomenda" ? "Encomendar pelo WhatsApp" : "Comprar pelo WhatsApp";
    modal.hidden = false; document.body.style.overflow = "hidden";
    $(".modal-x").focus();
  }
  function closeModal() {
    modal.hidden = true; document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("click", e => {
    const o = e.target.closest("[data-open]");
    if (o) return openModal(o.dataset.open);
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- Efeitos ---------- */
  function setupEffects() {
    const bar = $("#topbar");
    const onScroll = () => bar.classList.toggle("scrolled", scrollY > 40);
    onScroll(); addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: .15 });
    document.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.transitionDelay = (el.closest(".featured, .steps") ? (i % 4) * 90 : 0) + "ms";
      io.observe(el);
    });
  }

  /* ---------- Início ---------- */
  setupFilters(); renderFeatured(); render();
  $("#contactBtn").href = whatsLink(null);
  document.querySelectorAll("[data-prazo]").forEach(el => el.textContent = CFG.prazoEncomenda);
  $("#contactInfo").textContent = [CFG.cidade, CFG.instagram && "@" + CFG.instagram].filter(Boolean).join("  ·  ");
  $("#year").textContent = new Date().getFullYear();
  setupEffects();
})();
