//replicate a dom for testing.
var jsdom = require('jsdom');
var $, contactForm, isEmail;

describe('contactForm', function() {

  beforeEach(function(done){
    jsdom.env({
      html: '<html><body></body></html>',
      scripts: ['vendor/jquery/jquery.min.js', 'js/contact_me.js'],
      done: function(err, window) {
        if (err) console.log(err);
        $ = window.jQuery;
        contactForm = window.contactForm;
        isEmail = window.isEmail;
        done();
      }
    });
  });

  it("validates whether email is valid or not", function () {
    var email = "abc@gmail.com";
    expect(isEmail(email)).toBe(true);
    email = "wrongemail.com";
    expect(isEmail(email)).toBe(false);
  });
});
