const lists = JSON.parse(localStorage.getItem('list'));

console.log("heloo");
console.log(lists);

for (i in lists) {
    const id = lists[i];
    if(id){
    const url = `https://superheroapi.com/api.php/582139259833844/${id}`
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let getresult = '';
            getresult += `<div class="character">
                             <img src="${data.image.url}"></img>
                            <h2>${data.name}</h2>
                            <p>Full Name:${data.biography["full-name"]}</p>
                            <p>Gender:${data.appearance.gender}</p>
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
                            <button id="${data.id}" onClick="myFunction()">Know More</button>
                            </div>
                            `;

            document.getElementById("favCharacter").innerHTML = getresult;

        })
    }
    else
    continue;

}

function myFunction(event) {
    document.addEventListener('click', (event) => {
        const id = event.target.id;
        window.sessionStorage.setItem('id', id);
        location.href = "./herodetails.html";
    })
};


