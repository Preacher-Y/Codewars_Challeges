function meeting(s) {
    const guests = (s.toUpperCase().split(';'));
    var fGuests= [];
    for (let i = 0; i < guests.length; i++){
        let ha = (guests[i].split(':'));
        fGuests.push(ha);
    }
    
    return fGuests;
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
