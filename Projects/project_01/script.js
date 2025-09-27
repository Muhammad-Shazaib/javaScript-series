// event.target  likhe se pata chal jata hai ka ya aa kaha se raha hai.
// event.target se hum ye bhi pata kar sakte hain ki kaunse element par click hua hai.

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function () {
    body.style.backgroundColor = button.id;

   // console.log(e);
   // console.log(e.target);
    

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
