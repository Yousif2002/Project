const api_url = "https://covidtracking.com/api/states/daily";
async function getcases() {
  const response = await fetch(api_url);
  const data = await response.json();
    $.ajax({
        url: "data.php",
        method: "POST",
        data: { cases: JSON.stringify(data[25]) }
    });
    document.getElementById("demo").innerHTML = "Positive: "+covid.positive+" <br/> Negative: "+covid.negative+"<br/> Recovered: "+covid.recovered+"<br> Date: "+covid.date;
}
setInterval(function () { getcases(); }, 60000);
