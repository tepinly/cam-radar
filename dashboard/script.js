let violations;

setInterval(async () => {
  document.getElementById("main").innerHTML = "";
  let headRow = document.createElement("tr");
  headRow.setAttribute("id", "head");
  let id = document.createElement("th");
  let speed = document.createElement("th");
  let date = document.createElement("th");
  id.innerText = "Id";
  speed.innerText = "Speed";
  date.innerText = "Date Issued";
  document.getElementById("main").appendChild(headRow);
  document.getElementById("head").appendChild(id);
  document.getElementById("head").appendChild(speed);
  document.getElementById("head").appendChild(date);

  violations = await fetch("http://localhost:3000/cars/violations");
  violations = await violations.json();
  console.log(violations);

  violations.map((car) => {
    let row = document.createElement("tr");
    row.setAttribute("id", `row${car.id}`);
    let d1 = document.createElement("td");
    let d2 = document.createElement("td");
    let d3 = document.createElement("td");
    d1.innerText = `${car.carId}`;
    d2.innerText = `${car.speed}`;
    d3.innerText = `${car.createdAt}`;
    document.getElementById("main").appendChild(row);
    document.getElementById(`row${car.id}`).appendChild(d1);
    document.getElementById(`row${car.id}`).appendChild(d2);
    document.getElementById(`row${car.id}`).appendChild(d3);
  });
}, 10000);
