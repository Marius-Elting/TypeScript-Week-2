// ÜBUNG 1

type MyString = string

const myLitleString: MyString = "This is my litle String"

// ÜBUNG 2

type StringOrNumber = string | number

const myNumber:StringOrNumber = 1
const myString:MyString = "Hallo string"
const ananas:MyString = false

// ÜBUNG 3



function introduction(param:StringOrNumber):string{
    return ("Hallo, mein Inhalt ist: "+ param)
}


introduction("Lars")
introduction(false)
introduction(5)

// ÜBUNG 4

const showContent = (param:string | undefined):string=>{
    if(typeof param ==="undefined"){
        return "Ich habe kein Inhalt"
    }else{
        return ("Hallo, mein Inhalt ist: "+ param)
    }
}

showContent(undefined)
showContent("Hallo")

// ÜBUNG 5

const keepPlaying = (param: number | boolean)=>{
    if(typeof param ==="number" && param < 10){
        return true
    }else if(param === true){
        return true
    }else{
        return false
    }
}

keepPlaying(1)
keepPlaying(true)
keepPlaying(10)

// ÜBUNG 6

const move = (move:string):number | undefined=>{
    const moveLower = move.toLowerCase()
    switch (moveLower){
        case "links": return 0;
        break
        case "rechts": return 1;
        break
        case "vor": return 2;
        break
        case "zurück": return 3;
        break
        default: undefined
    }
}

move("rechts")
move("lInKS")
move("mein kolleg kann einfach batflip")


// ÜBUNG 7

const input = document.getElementById("input") as HTMLInputElement
const output = document.getElementById("output") as HTMLParagraphElement
// const abc = document.getElementById("output")

input?.addEventListener("input", (event: Event)=>{
    const {target} = event
    const getMove = move((target as HTMLInputElement).value)
    if(typeof getMove ==="undefined"){
        output!.innerText = "Error"
        return
    }else{
        output.innerText = getMove.toString() 
    }
})