// api url to get information automatically from network.
const api_url = "https://covidtracking.com/api/states/daily";
async function getcases() {
    // Change the received data into JSON format
  const response = await fetch(api_url);
    const data = await response.json();
    // Transfer the received data to another file
    $.ajax({
        // FILE NAME: data.php
        url: "data.php",
        // It is necessary to use "POST" insted of "GLOBAL" OR "GET" because they will apppear on the inspect mode on browsers.
        method: "POST",
        // Decode JSON format.
        data: { cases: JSON.stringify(data[25]) }
    });
    // Display the some information in cases.json
    document.getElementById("demo").innerHTML = "Positive: "+covid.positive+" <br/> Negative: "+covid.negative+"<br/> Recovered: "+covid.recovered+"<br> Date: "+covid.date;
}
    // UPDATE informations every 60 seconds
setInterval(function () { getcases(); }, 60000);