document.getElementById("calcBtn").addEventListener("click", function () {
  const pages = document.getElementById("pageCount").value;
  const errorWarning = document.getElementById("errorWarning");

  // Guard Gate: Check if input is valid
  if (pages === "" || pages <= 0) {
    errorWarning.style.display = "block"; // Show red warning
    document.getElementById("totalPriceDisplay").innerText = "Total: $0";
    document.getElementById("totalPriceDisplay").style.color = "#777777"; // Dull Gray
    return; // Stop the code right here!
  } else {
    errorWarning.style.display = "none"; // Hide warning if fixed
  }

  const packageSelected = document.getElementById("packageType").value;
  let ratePerPage = 100;
  if (packageSelected === "premium") {
    ratePerPage = 200;
  }

  // Calculate base price
  let finalTotal = pages * ratePerPage;

  // Logic Gate: Add SEO if checked
  if (document.getElementById("seoCheck").checked) {
    finalTotal += 50;
  }

  // Logic Gate: Add E-commerce if checked
  if (document.getElementById("ecomCheck").checked) {
    finalTotal += 150;
  }

  // Success State output and color change
  document.getElementById("totalPriceDisplay").innerText =
    "Total: $" + finalTotal;
  document.getElementById("totalPriceDisplay").style.color = "#4af626"; // Neon Green
});
document.getElementById("resetBtn").addEventListener("click", function () {
  // Clear input fields and dropdowns
  document.getElementById("pageCount").value = "";
  document.getElementById("packageType").value = "basic";

  // Uncheck add-on boxes
  document.getElementById("seoCheck").checked = false;
  document.getElementById("ecomCheck").checked = false;

  // Reset text display and hide errors
  document.getElementById("totalPriceDisplay").innerText = "Total: $0";
  document.getElementById("totalPriceDisplay").style.color = "#777777";
  document.getElementById("errorWarning").style.display = "none";
});
document.getElementById("pageCount").addEventListener("input", function () {
  const pages = document.getElementById("pageCount").value;
  const errorWarning = document.getElementById("errorWarning");

  // Real-Time Feedback: Hide error instantly if they type a valid number
  if (pages > 0) {
    errorWarning.style.display = "none";
  }
});
