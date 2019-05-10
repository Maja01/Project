var movieContainer = $("<div>").attr("id","api-movie").appendTo($("#movies"));

async function getMovies() {
    try {
        var response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=5d6e904916043e54ca4b1fbc27b279b9&query=motor");

        var data = await response.json();
        console.log(data);

        return data.results.map((results) => {
          return results.poster_path;
        });
        
    
    } catch (error) {
        console.log("error out" + error);
        return null;
    }
 }

 async function getMoviesDes() {
    try {
        var response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=5d6e904916043e54ca4b1fbc27b279b9&query=motor");

        var data = await response.json();
        console.log(data);

        return data.results.map((results) => {
          return results.overview;
        });
        
    
    } catch (error) {
        console.log("error out" + error);
        return null;
    }
 }

 async function getApiMovies() {
     var pictures = await getMovies();
     var text = await getMoviesDes();

    var movieInfo = {
        picture: pictures,
        txt: text,
    } 
    console.log(movieInfo);
    return movieInfo;
 }
 async function renderPictures() {
     var data = await getApiMovies();
     for (let index = 0; index < data.picture.length; index++) {
        if(data.picture[index] != null){
            var albumMovie = $("<div>").addClass("albumImg").appendTo(movieContainer);
            var img = $("<img>").addClass("img").attr("src","https://image.tmdb.org/t/p/original" + data.picture[index]).appendTo(albumMovie);
            var albumText = $("<div>").addClass("txtMovie").appendTo(movieContainer);
            var gameText = $("<span>").addClass("textMovie").text(data.txt[index]).appendTo(albumText);
        
        }  
     } 
 }
 renderPictures();