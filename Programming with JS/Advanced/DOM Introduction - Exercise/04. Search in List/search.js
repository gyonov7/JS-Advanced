function search() {
  let searchField = document.getElementById("searchText").value;
  let matches = 0;
  let list = document.querySelectorAll("ul#towns li");

  for (let element of list){
     element.style.fontWeight = 'normal';
     element.style.textDecoration = '';
  }
  for (info of list) {
    if (info.textContent.match(searchField)) {
      matches++;
      info.style.fontWeight = 'bold';
      info.style.textDecoration = 'underline';
    }
   }


  document.getElementById("result").textContent = `${matches} matches found`;
  

}
