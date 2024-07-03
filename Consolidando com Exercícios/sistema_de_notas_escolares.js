
/*
    S.N.E. - SISTEMA DE NOTAS ESCOLARES

    OBJETIVO:
    
    Crie um algorítmo que transforme as notas do sistema numérico 
    para o sistema de notas em caracteres, tipo "A", "B", "C".

    *   A - De 90 para cima
    *   B - Entre 80 a 89
    *   C - Entre 70 a 79
    *   D - Entre 60 a 69
    *   F - Abaixo de 60
*/

const noteList = [100, 68, 95, 75, 80]

noteConversion(noteList)

function noteConversion(noteList) {
    let note = noteList;
    let newNoteList = Array()
    noteList = Array()

    if(note.length > 1 && typeof note != "string"){
        for(let number in note){
            noteList.push(note[number])
        }
    } else {
        noteList.push(note)
    }

    for(let note of noteList){
        if(note > 100 || typeof nota == "string"){
            console.log("A " + (noteList.indexOf(note) + 1) + "ª nota excede o máximo permitido (100) ou é um número inválido.")
            newNoteList.push("NaN")
    
        } else if(note > 89){
            console.log((noteList.indexOf(note) + 1) + "ª nota: A")
            newNoteList.push("A")
    
        } else if(note > 79){
            console.log((noteList.indexOf(note) + 1) + "ª nota: B")
            newNoteList.push("B")
    
        } else if(note > 69){
            console.log((noteList.indexOf(note) + 1) + "ª nota: C")
            newNoteList.push("C")
    
        } else if(note > 59){
            console.log((noteList.indexOf(note) + 1) + "ª nota: D")
            newNoteList.push("D")
            
        } else {
            console.log((noteList.indexOf(note) + 1) + "ª nota: F")
            newNoteList.push("F")
        }
    }

    return newNoteList;
}

