var index = 0;

 function changeColors(){
    var colors = ["red", "blue", "orange","yellow", "green", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];


    if(index > colors.length - 1)
        index = 0;

 }

 function decodeStr() {
    console.log(atob(str));
}

const str = "VGhpcyBpcyBHZWVrc0ZvckdlZWtz";
decodeStr();


const string = `GeeksforGeeks is a leading platform
that provides
computer science resources`;
const arrayOfString = string.match(/\b\w+\b/g);
console.log(arrayOfString);