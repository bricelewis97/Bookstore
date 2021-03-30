submit.addEventListener("click", movieTitle);


function movieTitle(e) {
    e.preventDefault();
    for (let o = 0; o < 6; o++) {
        document.getElementById(`title${o}`).innerHTML = ""
        document.getElementById(`book${o}`).src = ""
        document.getElementById(`desc${o}`).innerHTML = ""
    };

    let title = search.value;

    var placeHolder = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, similique facilis? Qui voluptate rem rerum nostrum perspiciatis tempore consequatur provident obcaecati necessitatibus?"

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    for (let i = 0; i < 6; i++) {
        fetch(`https://openlibrary.org/search.json?title=${title}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result.docs[i].title)
                document.getElementById(`title${i}`).innerHTML = result.docs[i].title;
                var isbn = result.docs[i].isbn[6]
                console.log(isbn)
                document.getElementById(`book${i}`).src = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
                var works = result.docs[i].key;
                return fetch(`https://openlibrary.org${works}.json`, requestOptions)

                    .then(response => response.json())
                    .then((result) => {
                        console.log(result.description)
                        console.log(typeof result.description)

                        if (result.description == undefined) {
                            document.getElementById(`desc${i}`).innerHTML = placeHolder
                        }
                        else {
                            document.getElementById(`desc${i}`).innerHTML = result.description
                        }
                    });
            })
            .catch(error => console.log('error', error));
    }
    document.getElementById('search').value = '';
    [].forEach.call(document.querySelectorAll('.row'), function (el) {
        el.style.visibility = 'visible';
    });
}