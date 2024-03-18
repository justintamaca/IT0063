document.addEventListener("DOMContentLoaded", function() {
    const exampleCard = document.getElementById("exampleCard");
    const smallDescription = exampleCard.querySelector(".small-description");
    const fullDescription = exampleCard.querySelector(".full-description");

    // Show full description on click
    exampleCard.addEventListener("click", function() {
        smallDescription.style.display = "none";
        fullDescription.style.display = "block";
    });

    // Show small description on hover
    exampleCard.addEventListener("mouseenter", function() {
        smallDescription.style.display = "block";
    });

    // Hide small description on mouseout
    exampleCard.addEventListener("mouseleave", function() {
        smallDescription.style.display = "none";
    });
});
