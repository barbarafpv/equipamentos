/* Monta os cards a partir da lista em produtos.js — não é preciso editar este arquivo. */
(function () {
  const grid = document.getElementById("grid");
  const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const placeholder = `
    <div class="ph" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/>
      </svg>
      <span>Foto em breve</span>
    </div>`;

  grid.innerHTML = PRODUTOS.map((p, i) => {
    const preco = brl.format(p.preco).replace(/ /g, " ");
    const chips = (p.destaques || []).map((d) => `<li>${esc(d)}</li>`).join("");
    const desc = p.descricao ? `<p class="desc">${esc(p.descricao)}</p>` : "";
    const botao = p.vendido
      ? `<span class="btn btn-off" aria-disabled="true">Vendido</span>`
      : `<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer"
            aria-label="Ver anúncio de ${esc(p.nome)} no Mercado Livre (abre em nova aba)">
           Ver anúncio no Mercado Livre
           <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
         </a>`;

    return `
      <article class="card${p.vendido ? " is-sold" : ""}" style="--d:${i * 90}ms">
        <div class="media">
          ${placeholder}
          <img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="${i < 2 ? "eager" : "lazy"}" decoding="async"
               onload="this.parentNode.classList.add('has-img')" onerror="this.remove()">
          <span class="tag">${esc(p.categoria)}</span>
          ${p.vendido ? '<span class="sold">Vendido</span>' : ""}
        </div>
        <div class="body">
          <h2>${esc(p.nome)}</h2>
          ${chips ? `<ul class="chips">${chips}</ul>` : ""}
          ${desc}
          <div class="foot">
            <p class="price"><small>Preço</small>${preco}</p>
            ${botao}
          </div>
          ${p.vendido ? "" : `<a class="wa-link" href="${esc(wa(`Olá! Tenho interesse no ${p.nome} (${preco}). Ainda está disponível?`))}"
               target="_blank" rel="noopener noreferrer">Perguntar no WhatsApp</a>`}
        </div>
      </article>`;
  }).join("");

  // Links gerais de WhatsApp (topo, rodapé e botão flutuante)
  document.querySelectorAll(".js-wa").forEach((a) => { a.href = wa("Olá! Vi a vitrine de equipamentos e tenho interesse."); });
  document.querySelectorAll(".js-wa-num").forEach((s) => { s.textContent = WHATSAPP_EXIBICAO; });

  // SEO: dados estruturados dos produtos
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Equipamentos à venda",
    itemListElement: PRODUTOS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.nome,
        description: p.descricao || p.nome,
        offers: {
          "@type": "Offer",
          price: p.preco,
          priceCurrency: "BRL",
          itemCondition: "https://schema.org/UsedCondition",
          availability: p.vendido ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
          url: p.link,
        },
      },
    })),
  };
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(ld);
  document.head.appendChild(s);

  // Animação de entrada discreta
  const cards = document.querySelectorAll(".card");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    cards.forEach((c) => io.observe(c));
  } else {
    cards.forEach((c) => c.classList.add("in"));
  }

  document.getElementById("ano").textContent = "© " + new Date().getFullYear();
})();
