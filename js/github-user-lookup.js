var apiKey = require('./../.env').apiKey;

Lookup = function() {
};

Lookup.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?' + '?access_token=' + apiKey).then(function(response){
    $('#error').empty();
    $('#user-repos').empty();
    for (i = 0; i < response.length; i++){
      $('#user-repos').append("<p><li>Repository Name: " + response[i].name + "</li>" + "<ul><li>Repository Description: " + response[i].description + "</li></ul><p>");
    }
  }).fail(function(error){
    $('#error').empty();
    $('#user-repos').empty();
    $('#error').text("Error: User " + error.responseJSON.message);
  });
};

exports.lookupModule = Lookup;
