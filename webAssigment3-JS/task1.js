function WhoAreU(){
        //definin name
    let Name;
    Name=prompt("What's your name?");
        //operations on characters
    Name=Name.toLowerCase();
    Capital=Name.slice(0,1).toUpperCase();
    Name=Capital.concat(Name.slice(1,Name.length));
        //message
    alert("Hello " + Name);
}

WhoAreU(); //code says that i am Ramazan, instead of rAmAZAn