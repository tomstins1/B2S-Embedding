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

document.addEventListener("DOMContentLoaded", function () {
  const exportImagebutton = document.getElementById("exportImage");

  exportImagebutton.addEventListener("click", exportImageFunction);

  function exportImageFunction() {
    viz.showExportImageDialog();
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

document.addEventListener("DOMContentLoaded", function () {
  function getRangeValues() {
    const minValue = document.getElementById("minValue").value;
    const maxValue = document.getElementById("maxValue").value;
    console.log(minValue, maxValue);
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    const sheets = activeSheet.getWorksheets();
    //   apply filtering
    const sheetToFilter = sheets[0];
    sheetToFilter
      .applyRangeFilterAsync("SUM(Sales)", {
        min: minValue,
        max: maxValue,
      })
      .then(alert("Thanks Thano"));
  }

  const applyFilterButton = document.getElementById("applyFilter");
  applyFilterButton.addEventListener("click", getRangeValues);
});
