let violations

const getViolations = async () => { 
  const response = await fetch("http://localhost:3000/cars/violations")

  violations = await response.json()

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
}

getViolations()
