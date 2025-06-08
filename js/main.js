// === MAIN.JS ===
// Initialize specialty table
displaySpecialties();

// Faculty-specialty relationship for calculator
document.getElementById("faculty").addEventListener("change", function () {
  const faculty = this.value;
  const specialtySelect = document.getElementById("specialty");
  specialtySelect.innerHTML =
    '<option value="default">Оберіть спеціальність</option>';

  const facultySpecialties = {
    economics: [
      "Облік і оподаткування",
      "Фінанси, банківська справа та страхування",
      "Економіка",
      "Підприємництво, торгівля та біржова діяльність",
    ],
    law: ["Право"],
    it: [
      "Інженерія програмного забезпечення",
      "Комп'ютерні науки",
      "Кібербезпека",
    ],
    tourism: ["Туризм", "Готельно-ресторанна справа"],
  };

  if (faculty in facultySpecialties) {
    facultySpecialties[faculty].forEach((specialty) => {
      const option = document.createElement("option");
      option.value = specialty.toLowerCase().replace(/\s+/g, "-");
      option.textContent = specialty;
      specialtySelect.appendChild(option);
    });
  }
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});
