// === TABS.JS ===
// Tab switching functionality
function switchTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });

  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("tab-active");
  });

  // Show selected tab content and mark tab as active
  document.getElementById(`content-${tabId}`).classList.remove("hidden");
  document.getElementById(`tab-${tabId}`).classList.add("tab-active");
}
