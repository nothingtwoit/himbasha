  //
  // document.getElementById("submitme").addEventListener("click", function(event) {
  //   event.preventDefault();
  //   let unCheckedPostalCode = document.getElementById('myform').zipcode.value;
  //   let postalCode = parseInt(unCheckedPostalCode);
  //   console.log(postalCode);
  //     let content = {
  //         postalCode,
  //     }
  //     if (Number.isInteger(postalCode)) {
  //
  //         $.post('/data', {info: content}, function (data) {
  //             console.log("working");
  //         })
  //     } else {
  //       alert(NaN);
  //     }
  // });
  
  
  function onSubmit() {
    console.log("working");
    var uncheckedPostalCode = document.getElementById("zipcode").value;
    console.log(uncheckedPostalCode);
      
  }
