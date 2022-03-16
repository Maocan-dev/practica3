const fetchPokemon = () => {
  const pokeNombre = document.getElementById("pokeNombre");
  let pokeDato = pokeNombre.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeDato}`;
  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        pokeImg("./assets/error3.gif");
      } else {
        return res.json();
      }
    })
    .then((datos) => {
      console.log(datos);
      let pokeImagen = datos.sprites.front_default;
      console.log(pokeImagen);
      pokeImg(pokeImagen);
    });
};
//fetchPokemon();
/* DOM */
const pokeImg = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
/* pokeImg(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
); */

/* const mostrar = () => {
  const pokeNombre = document.getElementById("pokeNombre");
  let pokeDato = pokeNombre.value;
  console.log("hola " + pokeDato);
}; */
