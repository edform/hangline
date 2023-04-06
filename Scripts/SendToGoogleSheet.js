// Variable to hold request
var request;
var hasClicked = false;

/*
// Not actually using this function because when you run on ios safari,
// it tries to just run the submit after running the validation anyway!
function validateForm() {
    var x = document.forms["SignUpForm1"]["email"].value;
    if (x == "") {
        alert("Email cannot be empty");
        return false;
    }
}
*/


function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
    //document.form1.text1.focus();
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    //document.form1.text1.focus();
    return false;
  }
}

//Bind to the submit event of our form
$("#SignUpForm").submit(function(event){

    var emailEntered = document.forms["SignUpForm1"]["email"];
    if (ValidateEmail(emailEntered) == false)
    {
        return false;
    }

    // Abort any pending request
    if (request) {
        request.abort();
    }

    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyadnQVO2791eK5O08ovyxOjSGg3QicKGRIMNpjEv4PvMMBfD4/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        alert("Thank you! Your email has been added to the list.");
        var frm = document.getElementsByName('SignUpForm1')[0];
        frm.reset();  // Reset
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        alert("Could not submit form. Error: " + errorThrown);
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
        //window.location = 'success.html';
    });

    // Prevent default posting of form
    event.preventDefault();

});
