function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("tab-active");
  });
  document.getElementById(`content-${tabId}`).classList.remove("hidden");
  document.getElementById(`tab-${tabId}`).classList.add("tab-active");
}
