var movies = {};

$(document).ready(function(e) {
    
    $("#target").keyup(function() {
        var search = $("#target").val();
        var HTML = "<div id=\"noResult\" class=\"vis\"><h1>no results for:<br>" + search + "</h1></div>";
        if (search == "") {
            HTML = "<div id=\"noResult\" class=\"vis\"><h1>no search results</h1></div>";
            $("#response").html(HTML);
        } else {
            var url = 'http://www.omdbapi.com/?s=*' + search + '*&type=movie';
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function (a) {
                    var len = 0;
                    if (a.Response != "False") {
                        if (a.Search.length > 7) { len = 7; }
                        else { len = a.Search.length; }
                        for (var i = 0; i < len; i++) {
                            if (i == 0) { HTML = "<table>"; }
                            if (a.Search[i].Poster != "N/A") {
                                movies[a.Search[i].Title.substring(0,64)] = a.Search[i];
                                HTML += "<tr id=\"x\"><td>";
                                HTML += "<img src=\"";
                                HTML += a.Search[i].Poster;
                                HTML += "\"></td><td><b>";
                                HTML += a.Search[i].Title.substring(0,64) + "</b></td><td><b> (" + a.Search[i].Year + ")</b></td>";
                            }
                            if (i == a.Search.length - 1) { HTML += "</table>"; }
                        }
                    }
                    $("#response").html(HTML);
                }
            })
        }
    });
    
});

$(document).on({
    click: function () {
        var title = $(this)[0].childNodes[1].innerText;
        var search = movies[title].Title;
        var url = 'http://www.omdbapi.com/?t=' + search + '&type=movie&tomatoes=true';
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: url,
            success: function (a) {
                var movie = JSON.stringify(a);
                movie = btoa(movie);
                localStorage.setItem('_movie', movie);
                window.location = 'movie/index.html'
            }
        })
    }
}, "#x");

$(document).on({
    click: function () {
        $("#content").addClass('act');
        $("#noResult").addClass('act');
        setTimeout(function() { 
            $("#noResult h1")[0].innerText = "no search results";
        }, 100);
    }
}, "#target");