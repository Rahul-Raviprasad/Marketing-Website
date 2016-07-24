var contactForm = {
  init: function initContact() {
      var helpString = [];
      $.getJSON("../assets/help.json", function(data) {
        helpString = data;
        $( "#help" ).autocomplete({
          source: helpString
        });
      });
  },
  validate: function formValidation() {
    if( $("#name").val().trim() == "" ) {
      $("#nameError").show();
      return false;
    } else {
      $("#nameError").hide();
    }
    if( $("#email").val().trim() == "" || !isEmail(("#email").val().trim())) {
      $("#emailError").show();
      return false;
    } else {
      $("#emailError").hide();
    }
    if( $("#help").val().trim() == "" ) {
      $("#helpError").show();
      return false;
    } else {
      $("#helpError").hide();
    }
    return true;
  }
};

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
