// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Paul Santiago" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// count variables
let Gingerbread = 0
//let ChocolateChip = 0
//let SugarSprinkle = 0


let total = document.getElementById('qty-total')

// table of Element Gingerbread
let gb = 0
let gingerbread = document.getElementById('qty-gb');
// Gingerbread.textContent = gb;

document.getElementById('add-gb').addEventListener('click', function() {
   gb = gb + 1
    console.log(gingerbread.innerHTML)
    //gingerbread.textContent = gb
    gingerbread.innerHTML = gb 
    total.innerHTML = gb + cc + sugar
})
document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1
       gingerbread.innerHTML = gb 
       total.innerHTML = gb + cc + sugar
 })

let cc = 0
let ChocolateChip = document.getElementById('qty-cc')

document.getElementById('add-cc').addEventListener('click', function() {
   cc = cc + 1
    
    ChocolateChip.innerHTML = cc 
    total.innerHTML = gb + cc + sugar
})
document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1
     
     ChocolateChip.innerHTML = cc 
     total.innerHTML = gb + cc + sugar
 })

 let sugar = 0
let SugarSprinkle = document.getElementById('qty-sugar')

document.getElementById('add-sugar').addEventListener('click', function() {
   sugar = sugar + 1
    //console.log(sugarsprinkle.innerHTML)
    SugarSprinkle.innerHTML = sugar 
    total.innerHTML = gb + cc + sugar
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar - 1
     //console.log(sugarsprinkle.innerHTML)
     SugarSprinkle.innerHTML = sugar 
     total.innerHTML = gb + cc + sugar
 })



// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
//document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
  //  console.log('Gingerbread + button was clicked!')
   // console.log('gb')
//console.log('ChocolateChip + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
//})

// TODO: Hook up event listeners for the rest of the buttons