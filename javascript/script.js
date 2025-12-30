let ds = parseInt(prompt("Enter Marks for Data Structure :"));
let dbms = parseInt(prompt("Enter Marks for DBMS :"));
let os = parseInt(prompt("Enter Marks for Operating System :"));
let jp = parseInt(prompt("Enter Marks for Java Programming :"));

// validation
if (
    isNaN(ds) || isNaN(dbms) || isNaN(os) || isNaN(jp) ||
    ds < 0 || ds > 100 ||
    dbms < 0 || dbms > 100 ||
    os < 0 || os > 100 ||
    jp < 0 || jp > 100
) {
    alert("Invalid marks! Please enter values between 0 and 100.");
}
else {

    document.getElementById('ds').innerText = ds;
    document.getElementById('dbms').innerText = dbms;
    document.getElementById('os').innerText = os;
    document.getElementById('jp').innerText = jp;

    let total = ds + dbms + os + jp;
    document.getElementById('total').innerText = total;

    let percentage = (total / 400) * 100;
    document.getElementById('percentage').innerText = percentage.toFixed(2);

    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else {
        grade = "C";
    }
    document.getElementById('grade').innerText = grade;
    let result;
    if (percentage >= 60) 
        { result = "PASS"; }
    
    else
         { result = "FAIL"; }
    document.getElementById('result').innerText = result;
}
