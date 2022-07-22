console.log("script running");
const cart = document.querySelector("#cart");
cartItems = [];

playlist = [];

let button1 = document.querySelector("#three-body-problem");
let buttons = document.querySelectorAll(".add-button");

//console.log(buttons);
//button1.addEventListener('click', (e) => {
buttons.forEach(button => button.addEventListener('click', (e) => {
   console.log(button.id);

  //let bookName = "Three Body Problem";
  cartItems.push(button.id);
  cartItems.sort();
  // This next line is gross. Make it nicer.
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  console.log("Added " + button.id);
}));
