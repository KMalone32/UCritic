window.onload = function loadData() {
    var movie = localStorage.getItem('_movie');
    if (!movie) { return false; }
    localStorage.removeItem('_movie');
    movie = atob(movie);
    movie = JSON.parse(movie);
    fillFields(movie);
    movie = JSON.stringify(movie);
    movie = btoa(movie);
    localStorage.setItem('_movie', movie);
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