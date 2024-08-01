/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */ (() => {
  "use strict";
  let e = localStorage.getItem("theme"),
    t = () =>
      e ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
    a = function (e) {
      "auto" === e && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.documentElement.setAttribute("data-bs-theme", "dark")
        : document.documentElement.setAttribute("data-bs-theme", e);
    };
  a(t());
  let r = (e, t = !1) => {
    let a = document.querySelector("#bd-theme");
    if (!a) return;
    let r = document.querySelector("#bd-theme-text"),
      s = document.querySelector(".theme-icon-active use"),
      l = document.querySelector(`[data-bs-theme-value="${e}"]`),
      c = l.querySelector("svg use").getAttribute("href");
    document.querySelectorAll("[data-bs-theme-value]").forEach((e) => {
      e.classList.remove("active"), e.setAttribute("aria-pressed", "false");
    }),
      l.classList.add("active"),
      l.setAttribute("aria-pressed", "true"),
      s.setAttribute("href", c);
    let d = `${r.textContent} (${l.dataset.bsThemeValue})`;
    a.setAttribute("aria-label", d), t && a.focus();
  };
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      ("light" !== e || "dark" !== e) && a(t());
    }),
    window.addEventListener("DOMContentLoaded", () => {
      r(t()),
        document.querySelectorAll("[data-bs-theme-value]").forEach((e) => {
          e.addEventListener("click", () => {
            let t = e.getAttribute("data-bs-theme-value");
            localStorage.setItem("theme", t), a(t), r(t, !0);
          });
        });
    });
})();
