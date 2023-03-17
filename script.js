function calculateEMI() {
    // Get form input values
    var principal = parseFloat(document.getElementById("principal").value);
    var tenure = parseFloat(document.getElementById("tenure").value);
    var interest = parseFloat(document.getElementById("interest").value);
    var username = document.getElementById("username").value;
    var emailId = document.getElementById("emailId").value;
  
  
    // Calculate EMI
    var interest1 = interest/100;
    var emi = (principal + (principal*interest1*tenure/12))/12;
    var total = (emi * tenure);
    var interestamt = total - principal;
  
    // Display results
    var resultsTable = document.getElementById("data-body");
    var row = resultsTable.insertRow();
    row.insertCell().innerHTML = username;
    row.insertCell().innerHTML = emailId;
    row.insertCell().innerHTML = principal.toFixed(2);
    row.insertCell().innerHTML = tenure.toFixed(0);
    row.insertCell().innerHTML = interest.toFixed(2);
    row.insertCell().innerHTML = emi.toFixed(2);
    row.insertCell().innerHTML = total.toFixed(2);
    row.insertCell().innerHTML = interestamt.toFixed(2);
  
    // Reset form
    document.getElementById("principal").value = "";
    document.getElementById("tenure").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("username").value = "";
    document.getElementById("emailId").value = "";
      
    return false;
}