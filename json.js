
// const myload = () => {
//     let b = new XMLHttpRequest();

//     b.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText);

//             let data = JSON.parse(this.responseText)
//             console.log(data);

//         }

//     }
//     b.open("GET", "https://v2.jokeapi.dev/joke/Programming", true)
//     b.send()
// }

// myload()

const jokeContainer = document.getElementById("joke")
// const url = "https://v2.jokeapi.dev/joke/Programming"
const btn = document.getElementById("btn")

const getjoke = () => {

    let c = new XMLHttpRequest();
    c.onload = function () {
        let data = this.status === 200 ? JSON.parse(this.responseText) : "did not rescieve";
          
        // console.log(data.setup||data.joke); 
        document.getElementById("ans").innerHTML =`${data.setup||data.joke}`
        if(data.type =="single"){
            document.getElementById("ans").innerHTML = `${data.joke}`
        }else if(data.type =="twopart"){
            document.getElementById("ans").innerHTML = `${data.setup}  <br> ${data.delivery}`
        } 
       
   
    }
    c.open("GET", "https://v2.jokeapi.dev/joke/Programming", true)
    c.send()

}
btn.addEventListener("click", getjoke)


// getjoke()











