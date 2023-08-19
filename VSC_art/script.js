const miPrimerVariable = document.getElementById("txt")
const button = document.getElementById("btn")
const limpiar = document.getElementById("clean")
button.addEventListener("click",function(){
    alert(miPrimerVariable.value)
})
limpiar.addEventListener("click",function(){
    miPrimerVariable.value=""
})