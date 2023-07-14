document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
  
    // You can perform further processing with the form values here
    // For example, send them to a server for storage or analysis
  
    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.querySelector('input[name="rating"]:checked').checked = false;
  
    // Show confirmation popup
    document.getElementById("popup").style.display = "block";
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    // Close the popup
    document.getElementById("popup").style.display = "none";
  });
  