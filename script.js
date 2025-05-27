function selectCard(brand) {
  localStorage.setItem("brand", brand);
  location.href = "amount.html";
}
<script>
  function makePayment() {
    // Show the loader
    document.getElementById("loader").style.display = "flex";

    // Simulate payment delay (e.g., 3 seconds)
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      alert("Payment Successful!");
      window.location.href = "success.html"; // or wherever you want to go next
    }, 3000);
  }

  // This line sets the brand name from localStorage
  document.getElementById("brand").innerText = localStorage.getItem("selectedBrand") || "Gift Card";
</script>
