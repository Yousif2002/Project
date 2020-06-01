const api_url = "https://covidtracking.com/api/states/daily";
async function getcases() {
  const response = await fetch(api_url);
  const data = await response.json();
  const MN = JSON.stringify(data[25]);
  document.getElementById("demo").innerHTML = MN;
}
setInterval(function(){getcases()}, 3600);
