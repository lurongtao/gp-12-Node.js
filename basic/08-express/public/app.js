fetch('/api/users')
  .then(response => response.json())
  .then(result => console.log(result))