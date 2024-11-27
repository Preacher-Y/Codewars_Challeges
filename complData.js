function dataReverse(data) {
    var res = [];
    for (var i = 0; i < data.length; i+=8){
        var bytes = data.slice(i,i+8); 
         res.push(bytes);
    }
     res.reverse()
 return res.flat();
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));