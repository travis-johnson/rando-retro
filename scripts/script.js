var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?with_genres=27&primary_release_date.lte=2000-01-01&primary_release_date.gte=1970-01-01&page=1&page2&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=a751d6f146daca63096db49c63690e9f",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
$(document).ready(function () {
    $.ajax(settings).done(function (response) {
        console.log(response);
        var key = '&api_key=a751d6f146daca63096db49c63690e9f';
        var data = response.results[Math.floor(Math.random()*response.results.length)];
        console.log(data);
        $('#poster').attr('src', 'https://image.tmdb.org/t/p/original'+ data.poster_path)
      });
});
  