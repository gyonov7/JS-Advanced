function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let searchField = document.getElementById("searchField");
  let rows = document.querySelectorAll("tbody tr");
  function onClick() {
    for (let row of rows) {
       row.classList.remove('select')
      if (row.innerHTML.includes(searchField.value)) {
        row.className = "select";
      }
      
    }
    document.getElementById("searchField").value = "";
  }
}
