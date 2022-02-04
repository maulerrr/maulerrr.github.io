function Who(p){
    event.preventDefault();
    let ppl = p.persons.value;
    ppl = ppl.split(', ');
    document.getElementById('platit').innerHTML = whoPays(ppl);
}

function whoPays(person){
    let pays = Math.floor(Math.random() * person.length) ;
    return person[pays] + " is going to buy lunch today.";
}

// console.log(whoPays(["Askhat", "Ramazan", "Hikkimaru", "Kairat", "Genadij", "Dior", "Saint"])); // checking, it works properly
