/**
 * 青葉ハンドボールスポーツ少年団 公式Webサイト メインスクリプト (サンプル)
 */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    // メニュートグルのクリックイベント
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("open");
    });

    // メニュー項目をクリックした際にメニューを閉じる（スマホ時）
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // 画面外クリックでメニューを閉じる
    document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  }
});
