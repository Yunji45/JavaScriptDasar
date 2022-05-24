{
    const names = ["ihya","natik","wibowo","ida","nurrohmah"]
    let [firstName , miidleName , lastName , ...others] = names
    console.info (firstName)
    console.info (miidleName)
    console.info (lastName)
    console.info (others)
}

{
    const person = {
        firstName: "ihya",
        miidleName: "natik",
        lastName : "wibowo",
        address : {
            street : "cipondoh",
            city : "ciamis",
            country : "indonesia"
        },
        hobby : "ngoding",
    }
    let {firstName,miidleName,lastName,address: {city,street,country}, ...others }= person
    console.info (firstName)
    console.info (miidleName)
    console.info (lastName)
    console.info (city)
    console.info (street)
    console.info (country)
}

{
    function displayPerson ({firstName,miidleName,lastName}){
        console.info (firstName)
        console.info (miidleName)
        console.info (lastName)

    }
    const person = {
        firstName: "ihya",
        miiddleName: "natik",
        lastName: "wibowo",
    };
    displayPerson(person)
}

{
    function sum ({first , second}){
        return first + second
    }
    console.info (sum ([1, 1]))
    console.info (sum ([10,19]))
}

{
    const names = ["ihya ","natik", "wibowo"]
    const [firstName, miidleName= "itu", lastName= "aja"] = names

    console.info (firstName)
    console.info (miidleName)
    console.info (lastName)
}

{
    const person = {
        firstName : "ihya",
        miidleName : "natik",
        lastName : "wibowo"
    }
    let {firstName: NamaDepan,
        miidleName: namaTengah = "natik",
        lastName: namaBelakang}= person

        console.info (NamaDepan)
        console.info (namaTengah)
        console.info (namaBelakang)
}