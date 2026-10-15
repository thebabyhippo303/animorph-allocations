// ===== Swap these and you're done =====
const STUDIO_NAME = "Animorph Allocations";
const CONTACT_EMAIL = "hello@example.com";
// ======================================
document.querySelectorAll("[data-studio]").forEach(e => e.textContent = STUDIO_NAME);
document.title = STUDIO_NAME + " — Indie games";
const em = document.getElementById("email");
em.href = "mailto:" + CONTACT_EMAIL; em.textContent = CONTACT_EMAIL;
document.getElementById("yr").textContent = new Date().getFullYear();
const btn = document.querySelector(".menu-btn"), nav = document.getElementById("menu");
btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); }));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
