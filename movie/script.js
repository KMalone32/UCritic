window.onload = function loadData() {
    var movie = localStorage['_movie'];
    if (!movie) { return false; }
    movie = JSON.parse(movie);
    fillFields(movie);
}

function fillFields(movie) {
    console.log(movie);
    $("#movTitle").html("<b>" + movie.Title + "</b>");
    $("#poster img").attr('src', movie.Poster);
    $("#plot").html(movie.Plot);
    $("#td1").html(movie.imdbRating);
    $("#td2").html(movie.tomatoMeter + "%");
    $("#td3").html(movie.tomatoUserMeter + "%");
}