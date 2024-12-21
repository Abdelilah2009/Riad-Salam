// Loader

window.addEventListener("load", () => {
  document.body.classList.add("loading");

  setTimeout(() => {
    document.getElementById("loader").style.display = "none"; 
    document.getElementById("content").style.display = "block"; 
    
    document.body.classList.remove("loading");
  }, 3000); // 3 seconds
});
