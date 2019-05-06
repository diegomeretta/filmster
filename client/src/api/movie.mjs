function getAll() {
	    return fetch('/api/v1/movies')
	        .then(result => result.json())
}

function saveMovie(movie){
	        return fetch('/api/v1/movies',{
			            method: 'POST',
			            body: movie
			        }); 
}

export default {
	    getAll,saveMovie
}
