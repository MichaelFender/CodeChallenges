function findOutlier(arr) {
    var result = arr.reduce(function(o, e) {
      o[e % 2 === 0 ? 'even' : 'odd'].push(e);
      return o;
    }, { odd: [], even: [] });
    var eNum = result.even.length;
    var oNum = result.odd.length;
    if (oNum < eNum) {
      return oNum > 1 ? result.odd : result.odd[0];
    } else {
      return eNum > 1 ? result.even : result.even[0];
    };
  }

console.log(findOutlier([1, 3, 33, 139, 17, 10, 649, 31]))
console.log(findOutlier([6, 8, 22, 200, 60, 13, 2208, 4076]))
