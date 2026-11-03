/* Shows one page at a time (Home, Publications, Teaching, CV, Workshops, Contact). No need to edit. */
(function () {
  "use strict";
  var root = document.documentElement;
  var pages = Array.prototype.slice.call(document.querySelectorAll("main .page[id]"));
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var ids = pages.map(function (p) { return p.id; });

  function show(id) {
    if (ids.indexOf(id) === -1) id = "home";
    pages.forEach(function (p) { p.classList.toggle("is-active", p.id === id); });
    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var h = document.querySelector("#" + id + " h1");
    document.title = (id === "home" || !h ? "" : h.textContent.trim() + " | ") + "Somnath's Homepage";
    window.scrollTo(0, 0);
  }

  root.classList.add("tabs");
  show(location.hash.slice(1));
  window.addEventListener("hashchange", function () { show(location.hash.slice(1)); });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
