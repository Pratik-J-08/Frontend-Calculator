var chgBtn = document.getElementById('generateColorButton');


const hexValues = ["0","1","2","3","4","5","6","7","8","a","b","c","d","e","f"];

chgBtn.onclick = ()=>{
    document.body.style.backgroundColor = randomColor();
}


let randomColor = ()=>{
    let str = "#";
    for(let i=0;i<=5;i++){
        let randomIndex = Math.floor(hexValues.length * Math.random());
        let randomValue = hexValues[randomIndex];
        str = str + randomValue;
    }
    // console.log(str);
    return str;
}
