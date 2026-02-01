<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact | Unit 5 PHP</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 24px; line-height:1.6;">
  <nav>
    <a href="../index.php">Home</a>
    <a href="about.php">About</a>
    <a href="contact.php">Contact</a>
  </nav>
  <h1>Contact</h1>
  <form method="post" action="contact.php">
    <label>Name: <input name="name"></label><br><br>
    <label>Message: <textarea name="msg" rows="4" cols="40"></textarea></label><br><br>
    <button type="submit">Send</button>
  </form>
  <?php if($_SERVER["REQUEST_METHOD"] === "POST"): ?>
    <p><strong>Received (demo):</strong> Thank you, <?php echo htmlspecialchars($_POST["name"] ?? ""); ?>.</p>
  <?php endif; ?>
</body>
</html>
