// === DIRECTORY.JS ===
// (Підставити сюди твій масив specialties + displaySpecialties() + filterSpecialties() + EventListeners)
// Щоб не перевищити ліміт тут вставив заголовок — в ZIP файл піде повний код

// Specialty directory functionality
const specialties = [
  {
    id: 1,
    code: "071",
    name: "Облік і оподаткування",
    level: "junior",
    forms: ["full-time", "part-time"],
    duration: "2.10",
    description:
      "Підготовка фахівців з обліку і оподаткування, здатних розв'язувати типові спеціалізовані задачі та практичні проблеми у сфері обліку та оподаткування.",
    career: "Бухгалтер, помічник аудитора, фахівець з оподаткування, касир.",
    continuation: true,
  },
  {
    id: 2,
    code: "072",
    name: "Фінанси, банківська справа та страхування",
    level: "junior",
    forms: ["full-time", "part-time"],
    duration: "2.10",
    description:
      "Підготовка фахівців з фінансів, банківської справи та страхування, здатних розв'язувати типові спеціалізовані задачі та практичні проблеми у сфері фінансів, банківської справи та страхування.",
    career:
      "Фінансовий консультант, страховий агент, банківський працівник, касир.",
    continuation: true,
  },
  {
    id: 3,
    code: "081",
    name: "Право",
    level: "junior",
    forms: ["full-time", "part-time"],
    duration: "2.10",
    description:
      "Підготовка фахівців у галузі права, здатних розв'язувати типові спеціалізовані задачі та практичні проблеми у сфері права.",
    career: "Помічник юриста, помічник нотаріуса, секретар суду, діловод.",
    continuation: true,
  },
  {
    id: 4,
    code: "121",
    name: "Інженерія програмного забезпечення",
    level: "junior",
    forms: ["full-time"],
    duration: "3.10",
    description:
      "Підготовка фахівців з інженерії програмного забезпечення, здатних розв'язувати типові спеціалізовані задачі та практичні проблеми у сфері розробки програмного забезпечення.",
    career:
      "Молодший розробник програмного забезпечення, тестувальник, фахівець з технічної підтримки.",
    continuation: true,
  },
  {
    id: 5,
    code: "241",
    name: "Готельно-ресторанна справа",
    level: "junior",
    forms: ["full-time", "part-time"],
    duration: "2.10",
    description:
      "Підготовка фахівців з готельно-ресторанної справи, здатних розв'язувати типові спеціалізовані задачі та практичні проблеми у сфері готельного та ресторанного бізнесу.",
    career:
      "Адміністратор готелю, менеджер ресторану, фахівець з обслуговування.",
    continuation: true,
  },
  {
    id: 6,
    code: "242",
    name: "Туризм",
    level: "junior",
    forms: ["full-time", "part-time"],
    duration: "2.10",
    description:
      "Підготовка фахівців з туризму, здатних розв'язувати типові спеціалізовані задачі та практичні проблеми у сфері туризму.",
    career:
      "Туристичний агент, екскурсовод, фахівець з туристичного обслуговування.",
    continuation: true,
  },
  {
    id: 7,
    code: "071",
    name: "Облік і оподаткування",
    level: "bachelor",
    forms: ["full-time", "part-time"],
    duration: "1.10",
    description:
      "Підготовка бакалаврів з обліку і оподаткування, здатних розв'язувати складні спеціалізовані задачі та практичні проблеми у сфері обліку та оподаткування.",
    career: "Бухгалтер, аудитор, податковий консультант, фінансовий аналітик.",
    continuation: true,
  },
  {
    id: 8,
    code: "072",
    name: "Фінанси, банківська справа та страхування",
    level: "bachelor",
    forms: ["full-time", "part-time"],
    duration: "1.10",
    description:
      "Підготовка бакалаврів з фінансів, банківської справи та страхування, здатних розв'язувати складні спеціалізовані задачі та практичні проблеми у сфері фінансів, банківської справи та страхування.",
    career:
      "Фінансовий аналітик, кредитний експерт, страховий агент, фінансовий консультант.",
    continuation: true,
  },
  {
    id: 9,
    code: "081",
    name: "Право",
    level: "bachelor",
    forms: ["full-time", "part-time"],
    duration: "1.10",
    description:
      "Підготовка бакалаврів у галузі права, здатних розв'язувати складні спеціалізовані задачі та практичні проблеми у сфері права.",
    career: "Юрист, юрисконсульт, помічник адвоката, помічник нотаріуса.",
    continuation: true,
  },
  {
    id: 10,
    code: "121",
    name: "Інженерія програмного забезпечення",
    level: "bachelor",
    forms: ["full-time"],
    duration: "1.10",
    description:
      "Підготовка бакалаврів з інженерії програмного забезпечення, здатних розв'язувати складні спеціалізовані задачі та практичні проблеми у сфері розробки програмного забезпечення.",
    career:
      "Розробник програмного забезпечення, тестувальник, системний аналітик, проектний менеджер.",
    continuation: true,
  },
];

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
      .map((form) => {
        if (form === "full-time") return "Денна";
        return "Заочна";
      })
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

  // Add event listeners to view buttons
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

// Add event listeners for filters
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
