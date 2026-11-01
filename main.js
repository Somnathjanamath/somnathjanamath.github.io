/* One section at a time, light/dark switch and footer year. No need to edit. */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Light (ivory) / dark (navy) switch ---------- */
  var toggle = document.querySelector(".theme-toggle");
  function isLight() { return root.getAttribute("data-palette") === "ivory"; }
  function sync() {
    if (toggle) toggle.setAttribute("aria-label", isLight() ? "Switch to dark mode" : "Switch to light mode");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isLight() ? "navy" : "ivory";
      root.setAttribute("data-palette", next);
      try { localStorage.setItem("palette", next); } catch (e) {}
      sync();
    });
  }
  sync();

  /* ---------- Show one section at a time ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main > section[id]"));
  var links = Array.prototype.slice.call(document.querySelectorAll('.pill-nav a[href^="#"]'));
  var ids = sections.map(function (s) { return s.id; });

  function show(id) {
    if (ids.indexOf(id) === -1) id = "home";
    sections.forEach(function (s) { s.classList.toggle("is-active", s.id === id); });
    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) {
        a.setAttribute("aria-current", "page");
        var nav = a.parentNode;
        if (nav.scrollWidth > nav.clientWidth) {
          nav.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
        }
      } else {
        a.removeAttribute("aria-current");
      }
    });
    window.scrollTo(0, 0);
    var sec = document.getElementById(id);
    var h = sec && sec.querySelector("h1, h2");
    var label = "";
    if (h) {
      var c = h.cloneNode(true);
      Array.prototype.forEach.call(c.querySelectorAll(".h-icon"), function (i) { i.remove(); });
      label = c.textContent.trim();
    }
    document.title = (id === "home" || !label ? "" : label + " | ") +
      "Somnath Jana | Mathematics, ISI Bangalore";
  }

  root.classList.add("tabs");
  show(location.hash.slice(1));
  window.addEventListener("hashchange", function () { show(location.hash.slice(1)); });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
