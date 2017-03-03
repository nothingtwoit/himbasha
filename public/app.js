 document.getElementById("submitme").addEventListener("click", function(event) {

    event.preventDefault();

    var unCheckedPostalCode = document.getElementById('myform').zipcode.value;

    let postalCode = parseInt(unCheckedPostalCode);

          $.post('/data', {info: postalCode}, function (data) {
              console.log(data);
          });
      });

