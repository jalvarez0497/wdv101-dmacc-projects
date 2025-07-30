<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You - Savanna's Coffee House</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-md navbar-dark sticky-top">
    <div class="container">
      <i class="bi bi-cup-hot mx-3 display-6"></i>
      <a class="navbar-brand" href="#top">Savanna's Coffee House</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="menu.html">Menu</a></li>
          <li class="nav-item"><a class="nav-link" href="events.html">Events</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Thank You Message -->
  <section class="container my-5">
    <div class="text-center">
      <h1 class="display-4 mb-3">Thanks for your message!</h1>
      <p class="fs-5">We’ll get back to you in 1 to 2 business days.</p>
    </div>
  </section>

  <!-- Optional Debug Table -->
  <section class="container">
    <?php
    echo "<p class='text-danger'>This page was created by PHP on the server and sent back to your browser.</p>";

    if (!empty($_POST)) {
      echo "<table class='table table-bordered'>";
      echo "<thead class='table-dark'><tr><th>Field Name</th><th>Value of Field</th></tr></thead><tbody>";
      foreach ($_POST as $key => $value) {
        echo "<tr><td>" . htmlspecialchars($key) . "</td><td>" . htmlspecialchars($value) . "</td></tr>";
      }
      echo "</tbody></table>";
    }
    ?>
  </section>

  <!-- Footer -->
  <section id="footer" class="mt-5 py-4">
    <div class="container-fluid px-5">
      <div class="row">
        <div class="col-md-6">
          <h6>Savanna's Coffee House</h6>
          <p>604 24th Street<br>St. Paul, Minnesota<br><i class="bi bi-telephone"></i> 702-971-1154</p>
        </div>
        <div class="col-md-6">
          <h6>Hours:</h6>
          <ul class="list-unstyled">
            <li>Sunday: 7:00 AM – 9:00 PM</li>
            <li>Monday – Thursday: 6:00 AM – 10:00 PM</li>
            <li>Friday: 6:00 AM – 11:00 PM</li>
            <li>Saturday: 6:30 AM – 11:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Bootstrap JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
