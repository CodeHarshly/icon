const list = document.querySelectorAll('.list');
const icons = document.querySelectorAll('.navigation ul li a .icon');

function activeLink() {
    // Remove the 'active' class from all list items
    list.forEach((item) => item.classList.remove('active'));
    
    // Add the 'active' class to the clicked list item
    this.classList.add('active');

    const iconText = this.querySelector(".text").textContent.toLowerCase();
    let newColor;

    // Set the --clr variable based on the clicked icon
    switch (iconText) {
        case "about":
            newColor = "#fc7100";
            break;
        case "skills":
            newColor = "yellow";
            break;
        case "project":
            newColor = "red";
            break;
        case "contact":
            newColor = "blue";
            break;
        default:
            newColor = "#222327"; // Default color
            break;
    }

    // Change the color of the --clr variable
    document.documentElement.style.setProperty("--clr", newColor);
}

// Add click event listeners to all list items
list.forEach((item) => item.addEventListener('click', activeLink));
