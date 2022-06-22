export const getApis = async(user) =>{
    let response = await fetch(`https://api.github.com/users/${user}`);
    let usuarios = await response.json();
    return usuarios;
}