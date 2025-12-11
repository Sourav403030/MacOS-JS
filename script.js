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
        
        console.log("Selected file:", fileElement.querySelector("h3").textContent);
    }
});

