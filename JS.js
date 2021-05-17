function newContact(){
    var p = prompt('add new contact');
    console.log(p);
    var person = {
        "name": p,
        "age": 10 
    }
    console.log(person)

    persons.push(person);

    console.log(persons);
    return persons
}
