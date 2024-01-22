document.getElementById('changeColorBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = pickColor();
});

function pickColor() {
  // Define an array of colors you want to pick from
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * colors.length);

  // Return the color at the randomly chosen index
  return colors[randomIndex];
}
