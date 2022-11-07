function reverseString(str: string){
    let newString: string = "";
    for(let i: number = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let answer:string = reverseString("Word");
console.log("The reversed string is: " + answer);