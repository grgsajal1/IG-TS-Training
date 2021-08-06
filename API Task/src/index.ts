import '../css/main.css';

import {FillCovidData} from "./FillCovidData";
import {FillCountries} from "./FillCountries";

onload = ()=>{

    FillCovidData();
    FillCountries();

}
/*
fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/thor", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "46184cc6cfmsh8158e5a64c009fap162410jsna2ba68136244",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
}).then(response => response.json())
    .then(data => console.log(data));
 */