<?php $title = "Unit 5 PHP Site"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php echo $title; ?></title>
  <style>
    body{font-family: Arial, sans-serif; margin: 24px; line-height:1.6;}
    nav a{margin-right:12px;}
    .box{border:1px solid #ddd; padding:14px; border-radius:10px; max-width:900px;}
  </style>
</head>
<body>
  <nav>
    <a href="index.php">Home</a>
    <a href="pages/about.php">About</a>
    <a href="pages/contact.php">Contact</a>
  </nav>

  <div class="box">
    <h1><?php echo $title; ?></h1>
    <p>This is a minimal multi-page PHP site designed to be hosted on WAMP under localhost.</p>
    <p><strong>Server-side proof:</strong> The current server time is: <?php echo date("Y-m-d H:i:s"); ?></p>
  </div>
</body>
</html>
