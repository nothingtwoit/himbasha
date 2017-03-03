 document.getElementById("submitme").addEventListener("click", function(event) {
        event.preventDefault()
        let unCheckedPostalCode = document.getElementById('myform').zipcode.value;
        var postalCode = parseInt(unCheckedPostalCode);

        if (Number.isInteger(postalCode) && postalCode.toString().length == 5) {
            $.post('/data', {info: postalCode}, function (data) {
            })
        } else {
            alert(NaN);
        }
    });

