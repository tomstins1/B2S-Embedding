console.log("what a life");
// 1. create a variable to store our vizcontainer

const vizBox = document.getElementById("vizContainer");

// 2. create a variable for dashboard actions

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// 3. create something which holds the url of the viz

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

//   4. define our function to build dashboard

function initViz() {
  const viz = new tableau.Viz(vizBox, url, options);
}

// 5. controlling when fuction is run - only runs after everything else is loaded from HTML

document.addEventListener("DOMContentLoaded", initViz);
