function toggleDropdown(contentId, iconId) {
    var dropdownContent = document.getElementById(contentId);
    var dropdownIcon = document.getElementById(iconId);
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        dropdownIcon.style.marginTop = "0px";
        dropdownIcon.style.transform = "rotate(0deg)"; // Reset rotation to 0 degrees when hidden
    } else {
        dropdownContent.style.display = "block";
        dropdownIcon.style.marginTop = "20px";
        dropdownIcon.style.transform = "rotate(180deg)"; // Rotate 180 degrees when shown
    }
}
