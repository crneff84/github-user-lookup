var apiKey = require('./../.env').apiKey;

Lookup = function() {
};

Lookup.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#error').empty();
    $('#name').text("User's Name: " + response.name);
  }).fail(function(error){
    $('#error').empty();
    $('#name').empty();
    $('#error').text("Error: User " + error.responseJSON.message);
  });
};

exports.lookupModule = Lookup;
