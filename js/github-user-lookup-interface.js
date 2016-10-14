var Lookup = require('./../js/github-user-lookup.js').lookupModule;

$(document).ready(function() {
  var newLookup = new Lookup();
  $('#user-lookup-form').submit(function(){
    var username = $('#username').val();
  });
});
