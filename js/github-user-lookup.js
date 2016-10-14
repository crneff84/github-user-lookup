var apiKey = require('./../.env').apiKey;

Lookup = function() {
};

Lookup.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + apiKey).then(function(response){
    $('#error').empty();
    $('#user-repos').empty();
    for (i = 0; i < response.length; i++){
      $('#user-repos').append("<ul>" + "<li> Repository Name: " + response[i].name + "</li>" + "<li> Repository Description: " + response[i].description + "</ul>");
    }
  }).fail(function(error){
    $('#error').empty();
    $('#user-repos').empty();
    $('#error').text("Error: User " + error.responseJSON.message);
  });
};

exports.lookupModule = Lookup;
