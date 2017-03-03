 document.getElementById("submitme").addEventListener("click", function(event) {
        event.preventDefault()
        var unCheckedPostalCode = document.getElementById('myform').zipcode.value;
        var postalCode = parseInt(unCheckedPostalCode);

        if (Number.isInteger(postalCode) && postalCode.toString().length == 5) {
            $.post('/data', {info: postalCode}, function (data) {
                console.log(data);
            })
             window.location.href= '/com/stores.html';
            // window.location.replace('http://google.com');
        } else {
            alert("please enter a five digit zip code");
        }
    });

