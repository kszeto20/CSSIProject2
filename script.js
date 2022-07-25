console.log("script running");
const cart = document.querySelector("#cart");
cartItems = [];


let button1 = document.querySelector("#three-body-problem");
let buttons = document.querySelectorAll(".add-button");

//console.log(buttons);
//button1.addEventListener('click', (e) => {
buttons.forEach(button => button.addEventListener('click', (e) => {
  console.log(button.dataset.name);
  if (cartItems.indexOf(button.dataset.name) == -1) {
    //let bookName = "Three Body Problem";
    cartItems.push(button.dataset.name);
    cartItems.sort();
    // This next line is gross. Make it nicer.
    cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
    console.log("Added " + button.id);
  }
  else {
    if (confirm('Song is already in playlist.  Would you like to add it again?')) {
      // Save it!
      cartItems.push(button.id);
      cartItems.sort();
      cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
      console.log("Added " + button.id);
    } else {
      // Do nothing!
      console.log('Song was not added.');
    }
  }

}));
