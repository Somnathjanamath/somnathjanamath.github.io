/* Menu highlighting, light/dark switch and footer year. No need to edit. */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Light / dark (dark by default) ---------- */
  var toggle = document.querySelector(".theme-toggle");
  function isLight() { return root.getAttribute("data-theme") === "light"; }
  function sync() {
    if (toggle) toggle.setAttribute("aria-label", isLight() ? "Switch to dark mode" : "Switch to light mode");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isLight() ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  }
  sync();

  /* ---------- Highlight the current section in the menu ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.pill-nav a[href^="#"]'));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var a = byId[e.target.id];
        if (a) {
          a.setAttribute("aria-current", "true");
          if (a.scrollIntoView && window.innerWidth < 700) {
            a.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
          }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obs.observe(s);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
