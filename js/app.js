/* =====================================================================
   LÓGICA DE NAVEGAÇÃO, VÍNCULO DE DADOS E INTERATIVIDADE
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ano-atual").textContent = new Date().getFullYear();

  document.querySelectorAll("[data-bind]").forEach(el => {
    const key = el.getAttribute("data-bind");
    if (ACADEMY_CONFIG[key]) {
      el.textContent = ACADEMY_CONFIG[key];
    }
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach(link => {
    const customMessage = link.getAttribute("data-whatsapp-link") || "Olá! Gostaria de mais informações.";
    const encodedText = encodeURIComponent(customMessage);
    link.href = `https://wa.me/${ACADEMY_CONFIG.whatsappNumero}?text=${encodedText}`;
  });

  document.querySelectorAll("[data-instagram-link]").forEach(link => {
    link.href = ACADEMY_CONFIG.instagramUrl;
  });
  document.querySelectorAll("[data-maps-link]").forEach(link => {
    link.href = ACADEMY_CONFIG.googleMapsLink;
  });
  const mapIframe = document.getElementById("google-maps-iframe");
  if (mapIframe && ACADEMY_CONFIG.googleMapsEmbed) {
    mapIframe.src = ACADEMY_CONFIG.googleMapsEmbed;
  }

  const horariosLista = document.getElementById("horarios-lista");
  const footerHorarios = document.getElementById("footer-horarios");
  ACADEMY_CONFIG.horarios.forEach(item => {
    if (horariosLista) {
      const row = document.createElement("div");
      row.className = "flex justify-between py-1 border-b border-gray-200/70 last:border-0";
      row.innerHTML = `<dt class="text-gray-600">${item.dias}</dt><dd class="font-medium text-brand-dark">${item.horas}</dd>`;
      horariosLista.appendChild(row);
    }
    if (footerHorarios) {
      const li = document.createElement("li");
      li.textContent = `${item.dias}: ${item.horas}`;
      footerHorarios.appendChild(li);
    }
  });

  populateCategories();
  renderUpdates("todas");

  const mobileBtn = document.getElementById("mobile-menu-btn");
  mobileBtn.addEventListener("click", toggleMobileMenu);

  if (window.location.hash === "#novidades") {
    navigateTo("novidades");
  }
});

function toggleMobileMenu(forceClose = false) {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");
  const iconOpen = document.getElementById("icon-menu-open");
  const iconClose = document.getElementById("icon-menu-close");

  const isCurrentlyOpen = !menu.classList.contains("hidden");
  const shouldOpen = forceClose === true ? false : !isCurrentlyOpen;

  if (shouldOpen) {
    menu.classList.remove("hidden");
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  } else {
    menu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }
}

function navigateTo(page, sectionId = null, closeMenu = false) {
  if (closeMenu) {
    toggleMobileMenu(true);
  }

  const pageInstitucional = document.getElementById("page-institucional");
  const pageNovidades = document.getElementById("page-novidades");
  const navNovidadesBtn = document.getElementById("nav-novidades-desktop");

  if (page === "novidades") {
    pageInstitucional.classList.add("hidden");
    pageNovidades.classList.remove("hidden");
    if (navNovidadesBtn) navNovidadesBtn.classList.add("text-brand-accent", "font-semibold");
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "#novidades");
  } else {
    pageNovidades.classList.add("hidden");
    pageInstitucional.classList.remove("hidden");
    if (navNovidadesBtn) navNovidadesBtn.classList.remove("text-brand-accent", "font-semibold");

    if (sectionId) {
      history.replaceState(null, "", `#${sectionId}`);
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

function populateCategories() {
  const select = document.getElementById("filtro-categoria");
  if (!select) return;
  const categorias = [...new Set(ACADEMY_UPDATES.map(item => item.categoria))];
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

function renderUpdates(categoriaFiltro = "todas") {
  const container = document.getElementById("lista-novidades");
  if (!container) return;
  container.innerHTML = "";

  const filtrados = categoriaFiltro === "todas"
    ? ACADEMY_UPDATES
    : ACADEMY_UPDATES.filter(item => item.categoria === categoriaFiltro);

  if (filtrados.length === 0) {
    container.innerHTML = `<p class="text-sm text-gray-500 py-8">Nenhuma publicação encontrada nesta categoria.</p>`;
    return;
  }

  filtrados.forEach(item => {
    const article = document.createElement("article");
    article.className = "bg-white border border-gray-200 rounded-lg p-6 sm:p-7 transition-colors hover:border-gray-300";
    article.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 mb-2">
        <span class="font-semibold uppercase tracking-wider text-brand-accent">${item.categoria}</span>
        <time>${item.data}</time>
      </div>
      <h2 class="font-display text-lg sm:text-xl font-bold text-brand-dark mb-2">
        ${item.titulo}
      </h2>
      <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
        ${item.resumo}
      </p>
      <button type="button" onclick="openUpdateModal('${item.id}')"
              class="text-sm font-medium text-brand-dark hover:text-brand-accent underline underline-offset-4 transition-colors">
        Ler comunicado completo
      </button>
    `;
    container.appendChild(article);
  });
}

function openUpdateModal(id) {
  const item = ACADEMY_UPDATES.find(u => u.id === id);
  if (!item) return;

  document.getElementById("modal-categoria").textContent = item.categoria;
  document.getElementById("modal-data").textContent = item.data;
  document.getElementById("modal-titulo").textContent = item.titulo;
  document.getElementById("modal-texto").textContent = item.conteudoCompleto;

  const modal = document.getElementById("modal-comunicado");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeUpdateModal() {
  const modal = document.getElementById("modal-comunicado");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

document.getElementById("modal-comunicado").addEventListener("click", (e) => {
  if (e.target.id === "modal-comunicado") closeUpdateModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeUpdateModal();
});
