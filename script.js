let input = document.getElementById("inputBox");

let buttons = document.querySelectorAll("button");

console.log(buttons);// give me all buton in nodelist prototype 

let string = "";

let arr = Array.from(buttons);

console.log(arr); //give me all button in array prototype

arr.forEach(btn => {
    btn.addEventListener("click", (e) => {


        if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);// giving back element form exact position 
            input.value = string;
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;

        }

        else if (e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }

        else {

            string = string + e.target.innerHTML;
            input.value = string;

        }


    })
})