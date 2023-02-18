let serial = 0;

// first card interactive
document.getElementById("first-card").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("first-card-title").innerText;
    const firstInput = document.getElementById("first-card-first-input").value;
    const lastInput = document.getElementById("first-card-second-input").value;
    if (
        firstInput == "" ||
        lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number!!!");
    }
  // calculation for result
  const result = 0.5 * parseFloat(firstInput) * parseFloat(lastInput);
  // using function
  displayData(title, firstInput, lastInput, result);
  disabledButton("first-card");
});


// second card interactive
document.getElementById("second-card").addEventListener("click", function () {
  serial += 1;
    const title = document.getElementById("second-card-title").innerText;
    const firstInput = document.getElementById("second-card-first-input").value;
    const lastInput = document.getElementById("second-card-second-input").value;
    if (
        firstInput == "" ||
        lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number!!!");
    }
  // calculation for result
  const result = parseFloat(firstInput) * parseFloat(lastInput);
  // using function
  displayData(title, firstInput, lastInput, result);
  disabledButton("second-card");
});

// third card interactive
document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
    const title = document.getElementById("third-title").innerText;
    const firstInput = document.getElementById("third-card-first-input").value;
    const lastInput = document.getElementById("third-card-second-input").value;
    if (
      firstInput == "" ||
      lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number!!!");
    }
  // calculation for result
  const result = parseFloat(firstInput) * parseFloat(lastInput);
  // using function
  displayData(title, firstInput, lastInput, result);
  disabledButton("third-card");
});


// fourth card interactive
document.getElementById("fourth-card").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("fourth-card-title").innerText;
    const firstInput = document.getElementById("fourth-card-first-input").value;
    const lastInput = document.getElementById("fourth-card-second-input").value;
    if (
      firstInput == "" ||
      lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number!!!");
    }
    // calculation for result
    const total =0.5 * parseFloat(firstInput) * parseFloat(lastInput);
    // using function
    displayData(title, firstInput, lastInput, total);
    disabledButton("last-card");
  });


// second last card interactive
document.getElementById("second-last").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("second-last-title").innerText;
    const firstInput = document.getElementById("second-last-first-input").value;
    const lastInput = document.getElementById("second-last-second-input").value;
    if (
      firstInput == "" ||
      lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number!!!");
    }
    // calculation for result
    const total =0.5 * parseFloat(firstInput) * parseFloat(lastInput);
    // using function
    displayData(title, firstInput, lastInput, total);
    disabledButton("last-card");
  });


// last card interactive
document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;
  const title = document.getElementById("last-title").innerText;
  const firstInput = document.getElementById("last-card-first-input").value;
  const lastInput = document.getElementById("last-card-second-input").value;
  if (
    firstInput == "" ||
    lastInput == "" ||
    firstInput <= 0 ||
    lastInput <= 0
  ) {
    return alert("please enter any valid number!!!");
  }
  // calculation for result
  const total2 = 3.14 * parseInt(firstInput) * parseInt(lastInput);
  // using function
  displayData(title, firstInput, lastInput, total2);
  disabledButton("last-card");
});

// common function for use anywhere
function displayData(nameOfP, priceOfP, quantityOfp, resultP, cm) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${resultP}</td>
    <td>cm<sup>2</sup></td>
    <td>
    <button class="btn btn-primary">Convert to m<sup>2</sup></button>
    </td>
    
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

// disable button function
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}





