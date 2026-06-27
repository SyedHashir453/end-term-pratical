function generateTable() {
    let n = parseInt(document.getElementById("number").value);
    let output = document.getElementById("output");

    if (isNaN(n)) {
        output.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    let table = "";

    for (let i = 1; i <= 10; i++) {
        table += `${n} × ${i} = ${n * i}<br>`;
    }

    output.innerHTML = table;
}