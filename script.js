var movies = {};
var searchTimeout;

$(document).ready(function(e) {

    $("#target").keyup(function() {
        $(".movie-option-container").html("<h2>Searching...</h2>");
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
          var search = $("#target").val();
          var HTML = "";
          var url = 'http://www.omdbapi.com/?s=*' + search + '*&type=movie';
          $.ajax({
              type: 'GET',
              dataType: 'json',
              url: url,
              success: function (a) {
                  var len = 0;
                  if (a.Response != "False") {
                      if (a.Search.length > 10) { len = 10; }
                      else { len = a.Search.length; }
                      if (len === 0) { HTML += "<h2>No Results</h2>"; }
                      for (var i = 0; i < len; i++) {
                          if (a.Search[i].Poster != "N/A") {
                            movies[a.Search[i].Title.substring(0,64)] = a.Search[i];
                            HTML += "<div class=\"movie-option\">";
                            HTML += "<p>" + a.Search[i].Title + " <br><br> " + a.Search[i].Year + "</p>";
                            HTML += "<a href=\"movie/index.html\">";
                            HTML += "<img id=\"x\" src=\"" + a.Search[i].Poster + "\">";
                            HTML += "</a></div>";
                          }
                      }
                  } else { HTML += "<h2>No Results</h2>"; }
                  $(".movie-option-container").html(HTML);
              }
          })
        }, 200);
    });

});

$(document).on({
    click: function () {
        var titleArr = $(this).parent()["0"].innerText.split(" ");
        titleArr.pop();
        var title = titleArr.join(" ");
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
            }
        })
    }
}, "#x");
