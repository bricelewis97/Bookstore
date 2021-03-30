submit.addEventListener("click", Asearch);
function Asearch(e) {
    e.preventDefault();
    //   document.getElementById('mytable').innerHTML();
    //   if(document.getElementById('tabId'))
    //   {
    //       document.getElementById('tabId').remove();
    //   }
    let author = AuthorSearch.value;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(`http://openlibrary.org/search.json?author=${author}`, requestOptions)
        .then(response => response.json())
        .then((result) => {
            //console.log(result.docs[0].title);
            //start the loop here
            for (var i = 0; i < 10; i++) {
                //Using Javascript to create tr element dynamically during runtime
                var tr = document.createElement('tr');
                //Creating TD dynamically
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                //Creating text/strings from the response
                var text1 = document.createTextNode(result.docs[i].author_name[0]);
                var text2 = document.createTextNode(result.docs[i].title);
                var text3 = document.createTextNode(result.docs[i].first_publish_year);
                //Adding the textboxes to the td
                td1.appendChild(text1);
                td2.appendChild(text2);
                td3.appendChild(text3);
                //Adding the td to the tr
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                //Until now, tr is not attached to the document/mytable element
                //Adding the tr to the mytable in the html
                document.getElementById('mytable').appendChild(tr);
            }
            // document.getElementById('Author').innerHTML = result.docs[0].author_name;
            // document.getElementById('Title').innerHTML = result.docs[0].title;
            // document.getElementById('Year').innerHTML = result.docs[0].first_publish_year;
            return fetch(`https://openlibrary.org${works}.json`, requestOptions)
        })
        .then(response => response.json())
        .then((result) => {
            console.log(result.description)
            document.getElementById('desc').innerHTML = result.description;
        })
        .catch(error => console.log('error', error));
}
// document.getElementById('tabId').innerHTML="";