function stars(num) {

  for (col = 0; col < num; col++) {
    let res = '';
    for (row = 0; row < num; row++) {
      res += '* ';
      
    }
console.log(res);
  
  }
}

stars(3);
