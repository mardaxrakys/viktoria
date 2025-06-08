// Масив specialties — повністю скопіюй як у тебе (дуже великий, тому тут не вставляю повністю)

function displaySpecialties(filteredSpecialties = specialties) {
  const tableBody = document.getElementById("specialties-table");
  const noResults = document.getElementById("no-results");

  tableBody.innerHTML = "";

  if (filteredSpecialties.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  filteredSpecialties.forEach((specialty) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50";

    const levelText =
      specialty.level === "junior" ? "Фаховий молодший бакалавр" : "Бакалавр";
    const formsText = specialty.forms
      .map((form) => (form === "full-time" ? "Денна" : "Заочна"))
      .join(", ");

    row.innerHTML = `
            <td class="py-3 px-4 border-b">${specialty.code}</td>
            <td class="py-3 px-4 border-b">${specialty.name}</td>
            <td class="py-3 px-4 border-b">${levelText}</td>
            <td class="py-3 px-4 border-b">${formsText}</td>
            <td class="py-3 px-4 border-b">${specialty.duration} років</td>
            <td class="py-3 px-4 border-b">
                <button class="view-specialty bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition text-sm" data-id="${specialty.id}">
                    Детальніше
                </button>
            </td>
        `;

    tableBody.appendChild(row);
  });

  document.querySelectorAll(".view-specialty").forEach((button) => {
    button.addEventListener("click", () => {
      const specialtyId = parseInt(button.getAttribute("data-id"));
      showSpecialtyDetails(specialtyId);
    });
  });
}

function filterSpecialties() {
  const levelFilter = document.getElementById("filter-level").value;
  const formFilter = document.getElementById("filter-form").value;
  const durationFilter = document.getElementById("filter-duration").value;
  const searchQuery = document
    .getElementById("search-specialty")
    .value.toLowerCase();

  let filtered = specialties;

  if (levelFilter !== "all") {
    filtered = filtered.filter((specialty) => specialty.level === levelFilter);
  }
  if (formFilter !== "all") {
    filtered = filtered.filter((specialty) =>
      specialty.forms.includes(formFilter)
    );
  }
  if (durationFilter !== "all") {
    filtered = filtered.filter(
      (specialty) => specialty.duration === durationFilter
    );
  }
  if (searchQuery) {
    filtered = filtered.filter(
      (specialty) =>
        specialty.name.toLowerCase().includes(searchQuery) ||
        specialty.code.includes(searchQuery)
    );
  }

  displaySpecialties(filtered);
}

// Event listeners
document
  .getElementById("filter-level")
  .addEventListener("change", filterSpecialties);
document
  .getElementById("filter-form")
  .addEventListener("change", filterSpecialties);
document
  .getElementById("filter-duration")
  .addEventListener("change", filterSpecialties);
document
  .getElementById("search-specialty")
  .addEventListener("input", filterSpecialties);
