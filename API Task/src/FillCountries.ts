import {getCountries} from "./GetData";
import {FillCovidData} from "./FillCovidData";

export function FillCountries ():void {
    const filter = document.getElementById("country-filter") as HTMLSelectElement;
    filter.innerHTML = "<option selected value=''>Countries</option>";
    const result = getCountries();
    console.log(result);
    result.then(data => {
        data.response.forEach(country => {
            console.log(data);
            const option = document.createElement("option") as HTMLOptionElement;
            console.log(option);
            option.value = option.text = country;
            filter.append(option);
        });
    });

    filter.onchange = (e)=>{
        FillCovidData((e.target as HTMLSelectElement).value);
    }
}