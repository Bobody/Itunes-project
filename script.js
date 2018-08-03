
// $(document).ready(... This is jQuery function that runs when the page is loaded.
// Do you want to load when the page is ready or when some button is clicked?
// Are you waiting for an input from the user???
$(document).ready(function () {

    $('#searchbtn').click(function (e) {
        // searching the value inside the input box;
        var searchValue = $('#input').val();
        // clearing the input box;
        $('#input').val('')
        $.ajax({
            // requesting information based on content in input box;
            url: `http://itunes.apple.com/search?term=${searchValue}`,
            dataType: 'JSONP'
        })
            .done(function (data) {
                console.log(data);
                // add code for when response from apple comes back.
                for (let i = 0; i < data.results.length; i++) {
                    $("#songs").append(`<li>${data.results[i].trackName}</li>`)
                    $("#url").append("<li><a href='"+data.results[i].trackViewUrl+"'>Click Here</a></li>")
                }

            })
            .fail(function (data) {
                console.log(data);
                $('#songs').append(data.status);
            })
            
    })

})





