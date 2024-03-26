document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.getElementById("searchToggle");
  const searchModal = new bootstrap.Modal(
    document.getElementById("searchModal")
  );

  searchToggle.addEventListener("click", function () {
    searchModal.toggle();
  });

  const searchSubmit = document.getElementById("searchSubmit");

  searchSubmit.addEventListener("click", function () {
    const searchInputValue = document.getElementById("searchInput").value;

    console.log("Searching for:", searchInputValue);
    // Close modal after search action
    searchModal.hide();
  });
});
