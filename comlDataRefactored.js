function dataReverse(data) {
    return data.reduceRight((res, _, i) => i % 8 === 0 ? 
        res.concat(data.slice(i, i + 8)) : res, []);
};

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));