$(document).ready(function() 
{
    $('#loading_gif').hide();
    $('#message').hide();

    
    $('form').on('submit', function(event){
        event.preventDefault();

        $('#loading_gif').show();
        $('#message').hide();

        $('#loading_gif').show(100);
        $('#submit_button').unbind(); // remove clicrkability to subimit button 

        // var user = $('#user').text();
        var url           = "/send_tweet";
        var tweet_content = $(this).serialize();

        // console.log(url + "\n" + tweet_content);

        $.post(url, tweet_content, function(response)
        {
            $('#loading_gif').hide();
            $('#message').show();
            $('#submit_button').bind('click', function(){}); // restore clickability to subimit button 
        });
    });
});
