// === CALCULATOR.JS ===
// Calculator functionality
const calculateButton = document.getElementById("calculate-button");
const calculationResult = document.getElementById("calculation-result");

calculateButton.addEventListener("click", () => {
  const educationLevel = document.getElementById("education-level").value;
  const faculty = document.getElementById("faculty").value;
  const form = document.getElementById("form").value;

  // Sample calculation logic (in a real app, this would be more complex)
  let semesterCost = 0;

  if (educationLevel === "junior") {
    if (faculty === "economics" || faculty === "law") {
      semesterCost = form === "full-time" ? 10500 : 8500;
    } else if (faculty === "it") {
      semesterCost = form === "full-time" ? 11800 : 9800;
    } else {
      semesterCost = form === "full-time" ? 9500 : 7500;
    }
  } else {
    // bachelor
    if (faculty === "economics" || faculty === "law") {
      semesterCost = form === "full-time" ? 12500 : 10500;
    } else if (faculty === "it") {
      semesterCost = form === "full-time" ? 13800 : 11800;
    } else {
      semesterCost = form === "full-time" ? 11500 : 9500;
    }
  }

  const yearCost = semesterCost * 2;
  const totalCost = educationLevel === "junior" ? yearCost * 3 : yearCost * 4;

  document.getElementById(
    "semester-cost"
  ).textContent = `${semesterCost.toLocaleString()} грн`;
  document.getElementById(
    "year-cost"
  ).textContent = `${yearCost.toLocaleString()} грн`;
  document.getElementById("total-cost").textContent = `${Math.round(
    totalCost
  ).toLocaleString()} грн`;

  calculationResult.classList.remove("hidden");
});
