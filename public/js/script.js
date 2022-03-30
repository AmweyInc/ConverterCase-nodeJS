document.getElementById("upper-case")
    .addEventListener("click", function (){
        let arr = document.querySelector("textarea").value.split(" ");
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].toUpperCase();
        }
        document.querySelector("textarea").value = arr.join(" ");
    });

document.getElementById("lower-case")
    .addEventListener("click", function (){
        let arr = document.querySelector("textarea").value.split(" ");
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].toLowerCase();
        }
        document.querySelector("textarea").value = arr.join(" ");
    });

document.getElementById("proper-case")
    .addEventListener("click", function (){
        let arr = document.querySelector("textarea").value.split(" ");
        for(let i = 0; i < arr.length; i++){
            let word = arr[i].split('');
            word[0] = word[0].toUpperCase();
            arr[i] = word.join("");
        }
        document.querySelector("textarea").value = arr.join(" ");
    });

document.getElementById("sentence-case")
    .addEventListener("click", function (){
        let arr = document.querySelector("textarea").value.split(". ");
        for(let i = 0; i < arr.length; i++){
            let word = arr[i].split('');
            word[0] = word[0].toUpperCase();
            for(let j=1; j<word.length;j++){
                word[j] = word[j].toLowerCase();
            }
            arr[i] = word.join("");
        }
        document.querySelector("textarea").value = arr.join(". ");
    });