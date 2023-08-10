console.log("what a life");

let viz;

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
  viz = new tableau.Viz(vizBox, url, options);
}

// 5. controlling when fuction is run - only runs after everything else is loaded from HTML

document.addEventListener("DOMContentLoaded", initViz);

// 6. Adding PDF export functionality

document.addEventListener("DOMContentLoaded", function () {
  const exportPdfbutton = document.getElementById("exportPdf");

  exportPdfbutton.addEventListener("click", exportPdfFunction);

  function exportPdfFunction() {
    viz.showExportPDFDialog();
  }
});

// 7. adding Ppt export button

document.addEventListener("DOMContentLoaded", function () {
  const exportPptbutton = document.getElementById("exportPpt");

  exportPptbutton.addEventListener("click", exportPptFunction);

  function exportPptFunction() {
    viz.showExportPowerPointDialog();
  }
});
