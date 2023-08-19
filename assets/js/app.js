const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name');//le añado el identificador ., se le quita el signo de $ a cada variable
const b = document.querySelector('#blog');
const l = document.querySelector('.location');

//se coloca el asyn antes de la funcion para que pueda traer la respuesta
 async function displayUser(username, n, b, l) { //se añaden variables n, b y l
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.Json();//se crea una funcion en la que se devuelven los datos en json que estan en response, se le asignan a data
  n.textContent = `${data.name}`;//cambie ' por `
  b.textContent = `${data.blog}`;//quite los signos $ de la variable
  l.textContent = `${data.location}`;
  
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;//se le coloca el punto y coma
}

displayUser('stolinski', n, b, l).catch(handleError);