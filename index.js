function searchCharacter(result) {
    const url = `https://superheroapi.com/api.php/582139259833844/search/${result}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            /*console.log(data);
            console.log(typeof (data));
            var obj = JSON.parse(data);
            console.log(typeof (obj));*/

            //console.log(data.results[0].image);
            let getresult = '';

            Object.keys(data.results).map(function (key) {
                getresult += `<div class="character">
                             <div class="icon">
                              <i onClick="myFavourites(this)" id="${data.results[key].id}" class="far fa-heart fa-2x" ></i>
                             </div>
                             <img src="${data.results[key].image.url}"></img>
                            <h2>${data.results[key].name}</h2>
                            <p>Full Name:${data.results[key].biography["full-name"]}</p>
                            <p>Gender:${data.results[key].appearance.gender}</p>
                            <p>Race:
                                ${(() => {
                    if (data.results[key].appearance.race != 'null') {
                        return `${data.results[key].appearance.race}`;
                        }
                        else {
                            return "Not Known";
                        }
                    })()
                    }</p>
                            <button id="${data.results[key].id}" onClick="myFunction(this)">Know More</button>
                            </div>
                            `;
            });


            /* Object.keys(data).forEach((api) => {
                 console.log(api);
                 arr.push(api.results.name)*/
            /*getresult += `<div>
                <h3>ID:${api.results[0].id}</h3>
                <p>NAME:${api.name}</p>
                </div>`;
        });*/

            document.getElementById("error").innerHTML = "";
            document.getElementById('characterList').innerHTML = getresult;


        })

        .catch((error) => {
            document.getElementById('characterList').innerHTML = "";
            document.getElementById("error").innerHTML = error;
        });


}

//Using debounce
let searchTimeout = 0;
window.onload = () => {
    const searchValue = document.getElementById("search");
    searchValue.onkeyup = (event) => {
        clearTimeout(searchTimeout);
        if (searchValue.value.trim().length === 0) {
            return;
        }
        searchTimeout = setTimeout(() => {
            searchCharacter(searchValue.value);
        }, 550);
    };
}


function myFunction(event) {
    document.addEventListener('click', (event) => {
        const id = event.target.id;
        window.sessionStorage.setItem('id', id);
        location.href = "./herodetails.html";
    })
};

function myFavourites(event) {
    event.classList.toggle("fas");
        const id = event.target.id;
        let vals = localStorage.getItem('list');
        vals = vals ? JSON.parse(vals) : [];
        const a = vals.includes(id);
        if (!a)
            vals.push(id);
        localStorage.setItem('list', JSON.stringify(vals));
        console.log(list);

}


