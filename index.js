// Database
const notes = ["Eat", "Sleep", "Codeq"];
const prompt = require('prompt-sync')({sigint: true});

const input = (info) =>{
    return prompt(info);  
};



const addToNotes = () => {
    notes.push(input("Masukkan Catatan: "));
    showNotes()
};


const removeFromNotes = () => {
    showNotes();
    delete notes[parseInt(input("Masukkan Nomor Yang sudah selesai: "))-1];
    // notes.slice(parseInt(input("Masukkan Nomor Yang sudah selesai: ")), 1);
    showNotes();
}

const showNotes = () => {
    for (let i = 0; i < notes.length; i++) {
        if(notes[i]!=null){
            console.log((i+1+". ") + notes[i]);
        }
    }
    main()
}

const main = () => {
    console.log("Welcome to Reminder App");
    console.log("1. Show Curent Notes")
    console.log("2. Add New Note")
    console.log("3. Remove Note")
    console.log("q. exit")
    let a = input("Please Select By Number: ")
    
    if(a == "1"){
        showNotes();
    }else if(a === "2"){
        addToNotes();
    }else if(a === "3"){
        removeFromNotes();
    }else if(a === "q"){
        return;
    }
}

main()
