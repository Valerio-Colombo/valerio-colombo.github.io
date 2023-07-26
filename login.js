function checkCredentials() {
    // Get the values entered by the user
    var enteredAgentNumber = document.getElementById("agentNumber").value;
    var enteredPin = document.getElementById("pin").value;

    // Predefined valid credentials
    var validAgentNumber = "777";
    var validPin = "2707";

    // Check if the entered credentials match the valid credentials
    if (enteredAgentNumber === validAgentNumber && enteredPin === validPin) {
        window.location.href = "board.html";
    } else {
        var login_card = document.getElementById("login-card");
        login_card.classList.add("border-transition-fail");
    }
}