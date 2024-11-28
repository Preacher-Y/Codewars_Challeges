function meeting(s) {
	const guests = (s.toUpperCase().split(';'));
	var fGuests= [];
	var we = [];
	var qu = [];
	var re = '';
	for (let i = 0; i < guests.length; i++){
		let ha = (guests[i].split(':'));
		fGuests.push(ha);
	}
	for (let j = 0; j < fGuests.length; j++){
	    let ja = fGuests[j].reverse();
	    we.push(ja);
	    we.sort();
	    we;
	}
	for(let y = 0; y < we.length; y++){
	    let te = we[y].join(', ');
	    qu.push(te);
	    
	}
	for (let h = 0; h < qu.length; h++){
	    re += `(${qu[h]})`; 
	}
return re;
};
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
