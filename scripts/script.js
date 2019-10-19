

var pages = Math.floor(Math.random()*299);
console.log(pages);
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?with_genres=27&without_genres=99,18,10751,10402,10749&primary_release_date.lte=2000-01-01&primary_release_date.gte=1970-01-01&page="+pages+"&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=a751d6f146daca63096db49c63690e9f",
    "method": "GET"
  }

  var genres = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/genre/movie/list?api_key=a751d6f146daca63096db49c63690e9f&language=en-US",
    "method": "GET"
  }
  

$(document).ready(function () {
    $.ajax(genres).done(function (data){
        console.log(data);
    });

    $.ajax(settings).done(function (response) {
        console.log(response);
        var key = '&api_key=a751d6f146daca63096db49c63690e9f';
        var data = response.results[Math.floor(Math.random()*response.results.length)];
        console.log(data);
        $('#poster').attr('src', 'https://image.tmdb.org/t/p/w780'+ data.poster_path)
        $('#title').append(data.title)
        $('#desc > p').append(data.overview);
      });
});
  