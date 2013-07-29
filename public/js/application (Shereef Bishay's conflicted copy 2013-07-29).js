$(document).ready(function() {
    if !(('#loading_gif').empty?) {
      var url = 
      $.post(url, function(response){
          $('#loading_gif').parent().replace(response);
      });
    }
});
