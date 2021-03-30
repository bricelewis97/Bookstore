function genreTitle() {
    // e.preventDefault();
    let genre = books.value;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    for (let i = 0; i < 12; i++) {
        console.log(i)
        fetch(`http://openlibrary.org/subjects/${genre}.json?`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(`title${i}`)
                console.log(result.works[i].title)
                document.getElementById(`title${i}`).innerHTML = result.works[i].title;
                var isbn = result.works[i].cover_id
                document.getElementById(`book${i}`).src = `http://covers.openlibrary.org/b/id/${isbn}-L.jpg`;
                var works = result.works[i].key;
                return fetch(`https://openlibrary.org${works}.json`, requestOptions)
            })


            // .then(response => response.json())
            // .then((result) => {
            //   console.log(result.description)
            //   document.getElementById(`desc${0}`).innerHTML = result.description.value;


            .catch(error => console.log('error', error));
    }
};