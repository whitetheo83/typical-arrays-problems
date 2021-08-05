exports.max = function max (array) {

//  function max (array) {
    if (arguments.length == 0 || array.length == 0 || array == undefined) {
      return 0;
    } else {
      let i;
      let x = array[0];
      for (i=0; i<array.length; i++) {
        if (x<array[i]) {
          x = array[i];
        } else {
          continue;
        }
      }
      return(x);
    }
  }

exports.min = function min (array) {
//  function min (array) {
    if (arguments.length == 0 || array.length == 0 || array == undefined) {
      return 0;
    } else {
      let i;
      let x = array[0];
      for (i=0; i<array.length; i++) {
        if (x>array[i]) {
          x = array[i];
        } else {
          continue;
        }
      }
      return(x);
    }
}

exports.avg = function avg (array) {
//function avg () {
    if (arguments.length == 0 || array.length == 0 || array == undefined) {
      return 0;
    } else {
      let i;
      let x = array.length;
      let y = 0;
      for (i=0; i<array.length; i++) {
        y += array[i];
      }
      return(y/x);
    }
}
/* console.log(max([1 ,  3 ,  5 ,  7]));
console.log(min([1 ,  3 ,  5 ,  7])); */
//console.log(avg());
