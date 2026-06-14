<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rimsha Designs Logo</title>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #1a1a1a;
    font-family: 'Arial', sans-serif;
  }

  #logo {
    font-size: 50px;
    font-weight: bold;
    color: #ff69b4;
    position: relative;
    cursor: pointer;
  }

  #logo::after {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -10px;
    left: 0;
    background: #ff69b4;
    transition: width 0.5s;
  }

  #logo:hover::after {
    width: 100%;
  }
</style>
</head>
<body>

<div id="logo">Rimsha Designs</div>

<script>
  const logo = document.getElementById('logo');

  // Color animation loop
  const colors = ['#ff69b4', '#00ffff', '#ff4500', '#7fff00', '#ffd700'];
  let index = 0;

  setInterval(() => {
    logo.style.color = colors[index];
    index = (index + 1) % colors.length;
  }, 1000);

  // Click effect
  logo.addEventListener('click', () => {
    alert('Welcome to Rimsha Designs!');
  });
</script>

</body>
</html>