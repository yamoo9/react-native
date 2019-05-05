/** ------------------------------------------------
 * ECMAScript 2015+
 * - ES6+ 문법을 사용해 API를 작성합니다.
 * ------------------------------------------------ */

var app_header = null;
var menu_open_btn = null;
var app_navigation = null;
var menu_close_btn = null;
var app_main = null;
var ediya_menu = null;
var menu_items = null;

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
  for (var i = 0, l = menu_items.length; i < l; ++i) {
    var menu_item = menu_items[i];
    var link = el("a", menu_item);
    var close_panel_btn = el(".button.is-close-panel", menu_item);
    link.addEventListener("click", openDetailPanel.bind(link, i));
    close_panel_btn.addEventListener("click", closeDetailPanel);
  }

  menu_open_btn.addEventListener("click", openNavMenu);
  menu_close_btn.addEventListener("click", closeNavMenu);
}

function openNavMenu() {
  app_navigation.hidden = false;
  window.setTimeout(function() {
    app_navigation.classList.add("is-active");
  }, 10);
}

function closeNavMenu() {
  app_navigation.classList.remove("is-active");
  window.setTimeout(function() {
    app_navigation.hidden = true;
  }, 600);
}

function openDetailPanel(index, e) {
  e.preventDefault();
  var detail = el(".ediya-menu__item--detail", menu_items[index]);
  detail.hidden = false;
  window.setTimeout(function() {
    detail.classList.add("is-active");
  }, 10);
}

function closeDetailPanel() {
  var parent = this.parentNode;
  parent.classList.remove("is-active");
  window.setTimeout(function() {
    parent.hidden = true;
  }, 600);
}

init();

// -----------------------------------------------------------------
// 오프캔버스 메뉴 접근성
// -----------------------------------------------------------------
function a11yOffCanvasMenu(app_navigation) {
  var nav_focusables = els("a, button", app_navigation);
  var nav_focusable_first = nav_focusables[0];
  var nav_focusable_last = nav_focusables[nav_focusables.length - 1];

  window.addEventListener("keyup", escCloseMenu);
  nav_focusable_first.addEventListener("keydown", navLastFocus);
  nav_focusable_last.addEventListener("keydown", navFirstFocus);

  function escCloseMenu(e) {
    if (e.keyCode === 27) {
      closeNavMenu();
    }
  }

  function navFirstFocus(e) {
    if (!e.shiftKey && e.keyCode === 9) {
      window.setTimeout(function() {
        nav_focusable_first.focus();
      }, 10);
    }
  }

  function navLastFocus(e) {
    if (document.activeElement === e.target && e.shiftKey && e.keyCode === 9) {
      nav_focusable_last.removeEventListener("keydown", navFirstFocus);
      window.setTimeout(function() {
        nav_focusable_last.focus();
        nav_focusable_last.addEventListener("keydown", navFirstFocus);
      }, 10);
    }
  }
}
