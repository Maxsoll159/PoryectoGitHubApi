export const getApis = async(user) =>{
    let response = await fetch(`https://rickandmortyapi.com/api/character`);
    let usuarios = await response.json();
    console.log(user)
    return usuarios;
}