
// === MODAL.JS ===
// (Підставити повний код showSpecialtyDetails + hideModal + EventListeners)

// Modal functionality
const modal = document.getElementById("specialty-modal");
const closeModal = document.getElementById("close-modal");
const modalCloseButton = document.getElementById("modal-close-button");

function showSpecialtyDetails(specialtyId) {
  const specialty = specialties.find((s) => s.id === specialtyId);

  if (!specialty) return;

  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  modalTitle.textContent = `${specialty.code} ${specialty.name}`;

  const levelText =
    specialty.level === "junior"
      ? "Фаховий молодший бакалавр"
      : "Бакалавр";
  const formsText = specialty.forms
    .map((form) => {
      if (form === "full-time") return "Денна";
      return "Заочна";
    })
    .join(", ");

  modalContent.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div class="bg-green-50 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-800 mb-2">Освітній рівень</h4>
                  <p>${levelText}</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-800 mb-2">Форма навчання</h4>
                  <p>${formsText}</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-800 mb-2">Тривалість навчання</h4>
                  <p>${specialty.duration} років</p>
              </div>
          </div>
          
          <div class="mb-4">
              <h4 class="font-medium text-gray-800 mb-2">Опис спеціальності</h4>
              <p class="text-gray-600">${specialty.description}</p>
          </div>
          
          <div class="mb-4">
              <h4 class="font-medium text-gray-800 mb-2">Кар'єрні можливості</h4>
              <p class="text-gray-600">${specialty.career}</p>
          </div>
          
          <div class="mb-4">
              <h4 class="font-medium text-gray-800 mb-2">Можливість продовження навчання</h4>
              <p class="text-gray-600">${
                specialty.continuation
                  ? "Так, можливе продовження навчання на наступному освітньому рівні в ЕПФК ЗНУ або ЗНУ."
                  : "Ні, продовження навчання на наступному освітньому рівні в ЕПФК ЗНУ неможливе."
              }</p>
          </div>
          
          <div class="mt-6">
              <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Подати заявку на вступ
              </button>
          </div>
      `;

  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

closeModal.addEventListener("click", hideModal);
modalCloseButton.addEventListener("click", hideModal);

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});