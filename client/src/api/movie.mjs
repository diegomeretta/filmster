function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
}

function deleteMovie(id) {

    return fetch('/api/v1/movies/' + id,

        { method: 'DELETE' })

        .then(function(response) {

            return response;

        })

        .then(function(response) {

            location.reload();

            console.log(response)

        })

        .catch(function(error) {

            console.log(error)

        });

}


export default {
    getAll, deleteMovie
}





