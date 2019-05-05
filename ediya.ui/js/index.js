/** ------------------------------------------------
 * ECMAScript 2015+
 * - ES6+ 문법을 사용해 API를 작성합니다.
 * ------------------------------------------------ */

let app_header = null;
let menu_open_btn = null;
let app_navigation = null;
let menu_close_btn = null;
let app_main = null;
let ediya_menu = null;
let menu_items = null;

// 초기화
function init() {
  // 문서 객체 접근 참조
  accessingDOMElements();
  // 오프캔버스 메뉴 접근성
  a11yOffCanvasMenu(app_navigation);
  // 이벤트 바인딩
  bindEvents();
}

function accessingDOMElements() {
  app_header = el(".app-header");
  menu_open_btn = el(".button.is-open", app_header);
  app_navigation = el(".app-navigation", app_header);
  menu_close_btn = el(".button.is-close-menu", app_navigation);
  app_main = el(".app-main");
  ediya_menu = el(".ediya-menu");
  menu_items = els(".ediya-menu__item", ediya_menu);
}

function bindEvents() {
  menu_items.forEach((menu_item, i) => {
    let link = el("a", menu_item);
    let close_panel_btn = el(".button.is-close-panel", menu_item);
    link.addEventListener("click", openDetailPanel.bind(link, i));
    close_panel_btn.addEventListener("click", closeDetailPanel);
  })
  menu_open_btn.addEventListener("click", openNavMenu);
  menu_close_btn.addEventListener("click", closeNavMenu);
}

function openNavMenu() {
  app_navigation.hidden = false;
  window.setTimeout(() => app_navigation.classList.add("is-active"), 10);
}

function closeNavMenu() {
  app_navigation.classList.remove("is-active");
  window.setTimeout(() => app_navigation.hidden = true, 600);
}

function openDetailPanel(index, e) {
  e.preventDefault();
  var detail = el(".ediya-menu__item--detail", menu_items[index]);
  detail.hidden = false;
  window.setTimeout(() => detail.classList.add("is-active"), 10);
}

function closeDetailPanel() {
  var parent = this.parentNode;
  parent.classList.remove("is-active");
  window.setTimeout(() => parent.hidden = true, 600);
}

init();

// -----------------------------------------------------------------
// 오프캔버스 메뉴 접근성
// -----------------------------------------------------------------
function a11yOffCanvasMenu(app_navigation) {
  const nav_focusables = els("a, button", app_navigation);
  const nav_focusable_first = nav_focusables[0];
  const nav_focusable_last = nav_focusables[nav_focusables.length - 1];

  window.addEventListener("keyup", escCloseMenu);
  nav_focusable_first.addEventListener("keydown", navLastFocus);
  nav_focusable_last.addEventListener("keydown", navFirstFocus);

  function escCloseMenu(e) {
    if (e.keyCode === 27) { closeNavMenu(); }
  }

  function navFirstFocus(e) {
    if (!e.shiftKey && e.keyCode === 9) {
      window.setTimeout(() => nav_focusable_first.focus(), 10);
    }
  }

  function navLastFocus(e) {
    if (document.activeElement === e.target && e.shiftKey && e.keyCode === 9) {
      nav_focusable_last.removeEventListener("keydown", navFirstFocus);
      window.setTimeout(() => {
        nav_focusable_last.focus();
        nav_focusable_last.addEventListener("keydown", navFirstFocus);
      }, 10);
    }
  }
}
