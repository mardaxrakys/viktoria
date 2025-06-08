const modal = document.getElementById("specialty-modal");
const closeModal = document.getElementById("close-modal");
const modalCloseButton = document.getElementById("modal-close-button");

function showSpecialtyDetails(specialtyId) {
  const specialty = specialties.find((s) => s.id === specialtyId);
  if (!specialty) return;

  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const levelText =
    specialty.level === "junior" ? "Фаховий молодший бакалавр" : "Бакалавр";
  const formsText = specialty.forms
    .map((form) => (form === "full-time" ? "Денна" : "Заочна"))
    .join(", ");

  modalTitle.textContent = `${specialty.code} ${specialty.name}`;
  modalContent.innerHTML = `
        <div>...</div> <!-- Тут вставити повний HTML з описом, як у тебе в коді -->
    `;

  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

closeModal.addEventListener("click", hideModal);
modalCloseButton.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});
