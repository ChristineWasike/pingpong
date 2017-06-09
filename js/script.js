/*var newArray = [];
var newNumber = number.parseInt();*/



$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var array = [];
    for (var i = 0; i <= number; i++) {
      array.push(i);
    };
    for (var indices = 1; indices <= number; i++) {
      if (array[indices] % 15 === 0) {
        array[indices] = "PingPong";
      } else if (array[indices] % 5 === 0) {
        array[indices] = "Pong";
      } else if (array[indices] % 3 === 0) {
        array[indices] = "Ping";
      }

    }

    $("#results").text(number);
    alert(array);

  });
});
