const id = sessionStorage.getItem('id');

const url = `https://superheroapi.com/api.php/582139259833844/${id}`;
console.log(url);
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let getresult = '';

        getresult += `<div class="character">
                             <img src="${data.image.url}"></img>
                            <h2>${data.name}</h2>
                            
                            <h3>BIOGRAPHY</h3>
                            <p>Full Name:${data.biography["full-name"]}</p>
                            <p>Gender:${data.appearance.gender}</p>
                            <p>Intelligence: ${data.powerstats.intelligence}</p>
                            <p>Place-of-birth:${data.biography["place - of - birth"]}</p>
                            <p>Alignment : ${data.biography.alignment}</p>
                            <p>Weight : ${data.appearance.weight[1]}</p>
                            <p>Height : ${data.appearance.height[1]}</p>
                            <p>Publisher : ${data.biography.publisher}</p>
                        
                            <h3>POWERSTATS</h3>
                             <p>Intelligences : ${data.powerstats.intelligence}</p>
            <p>Strength : ${data.powerstats.strength}</p>
            <p>Speed : ${data.powerstats.speed}</p>
            <P>Durability : ${data.powerstats.durability}</p>
            <p>Power : ${data.powerstats.power}</p>
            <p>Combat : ${data.powerstats.combat}</p>
                            </div>
                            `;


        document.getElementById("error").innerHTML = "";
        document.getElementById('heroDetail').innerHTML = getresult;

    })

    .catch((error) => {
        document.getElementById('heroDetail').innerHTML = "";
        document.getElementById("error").innerHTML = error;
    });




