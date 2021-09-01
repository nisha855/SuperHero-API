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
                             <img src="${data.results[key].image.url}"></img>
                            <h2>${data.results[key].name}</h2>
                            <p>Full Name:${data.results[key].biography["full-name"]}</p>
                            <p>Gender:${data.results[key].appearance.gender}</p>
                            <p>Occupation:
                                ${(() => {
                        if (data.results[key].work["occupation"] != '-') {
                            return `${data.results[key].work["occupation"]}`;
                        }
                        else {
                            return "Not Known";
                        }
                    })()
                    }</p>
                            <button>Know More</button>
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
            //document.getElementById("image").src = imgurl;

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