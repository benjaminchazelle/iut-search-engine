import persons from "./persons.js"

const input = document.querySelector("input")
const submit = document.querySelector("button")

const ul = document.querySelector("ul")

submit.onclick = () => {

  const search = input.value

  ul.innerHTML = ""
  
  // Votre code ici

  for(let i = 0; i < 3; i++) {
    let li = document.createElement("LI")
    li.textContent = search
    ul.appendChild(li)
  }

}