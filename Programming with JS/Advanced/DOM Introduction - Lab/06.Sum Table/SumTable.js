function sumTable() {
  let table = document.querySelectorAll("table tr");
  let total =0;
  let result = document.getElementById('sum');

  for(let i =1;i<table.length;i++){
      let cols = table[i].children;
      let price = Number(cols[cols.length-1].textContent);
      total+=price;
  }
result.textContent = total;

}
