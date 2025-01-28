// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
   // Select all filter buttons
   const filterButtons = document.querySelectorAll(".filter");
   // Select all gallery items
   const galleryItems = document.querySelectorAll(".item");

   // Add click event listener to each filter button
   filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
         // Get the filter value from the clicked button
         const filter = button.getAttribute("data-filter");

         // Remove the 'active' class from all buttons and add it to the clicked button
         filterButtons.forEach((btn) => btn.classList.remove("active"));
         button.classList.add("active");

         // Show or hide gallery items based on the filter value
         galleryItems.forEach((item) => {
            if (filter === "all" || item.getAttribute("data-category") === filter) {
               item.style.display = "block"; // Show item
            } else {
               item.style.display = "none"; // Hide item
            }
         });
      });
   });
});
