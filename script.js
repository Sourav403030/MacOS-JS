let files = document.querySelector(".files");

files.addEventListener("click", function(evt) {
    // Find the closest .file element (even if clicking on img or h3)
    let fileElement = evt.target.closest(".file");
    
    if (fileElement) {
        // Remove selection from all other files
        document.querySelectorAll(".file").forEach(file => {
            file.classList.remove("file-select");
        });
        
        // Add selection to the clicked file
        fileElement.classList.add("file-select");
        
    }
});

let dock = document.querySelector(".dock");
let tab = document.querySelector(".tab");
let red = document.querySelector(".red");

dock.addEventListener("click", function(evt){
    if (tab.style.display === "block") {
        tab.style.display = "none";
    } else {
        tab.style.display = "block";
    }
})

red.addEventListener("click",()=>{
    tab.style.display = "none";
})

let rightClickMenu = document.querySelector(".right-click-menu");
let desktop = document.querySelector(".desktop");

desktop.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Prevent the default browser context menu
    
    // Position the menu where the user right-clicked
    rightClickMenu.style.left = e.clientX + "px";
    rightClickMenu.style.top = e.clientY + "px";
    
    // Show the menu
    rightClickMenu.style.display = "flex";
    
});

// Hide the right-click menu when clicking elsewhere
desktop.addEventListener("click", (e) => {
    // Don't hide if clicking on the menu itself
    if (!rightClickMenu.contains(e.target)) {
        rightClickMenu.style.display = "none";
    }
});

