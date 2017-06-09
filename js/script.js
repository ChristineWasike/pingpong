// BUSINESS LOGIC
var output = function(number) {
  var array = [];
  for (var index = 1; index <= number; index++) {
    if ((index % 15) === 0) {
      array.push("PingPong");
    } else if ((index % 5) === 0) {
      array.push("Pong");
    } else if (array[indices] % 3 === 0) {
      array.push("Ping");

    } else {
      return array.push(index);

    }
  }

};
alert(array);
};





// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numeral").val());
    var aftermath = output(number);
    $("#results").text(number);


  });
});
