document.addEventListener('DOMContentLoaded',function(){
    const url = "https://api.github.com/users/vitor-sld";
    const nome = document.querySelector(".profile-name");
    const fotoPerfil = document.querySelector(".profile-avatar");
    const username = document.querySelector(".profile-username");
    const numRepositorios = document.getElementById("numRepositorios");
    const numSeguidores = document.getElementById("numSeguidores");
    const numSeguindo = document.getElementById("numSeguindo");
    const linkRepositorio = document.querySelector(".profile-link")



    fetch(url)
    .then((respostaGit) => {
        return respostaGit.json()
    })
    .then((gitAPI) => {
        const nomeUserGit = gitAPI.login;
        const fotoUserGit = gitAPI.avatar_url;
        const userTwitterGit = gitAPI.twitter_username;
        const repositorioUserGit = gitAPI.public_repos;
        const SeguidoresUserGit = gitAPI.followers;
        const SeguindoUserGit = gitAPI.following;
        const linkUserGit = gitAPI.html_url;

        nome.innerHTML = nomeUserGit;
        fotoPerfil.src = fotoUserGit;
        username.innerHTML = userTwitterGit;
        numRepositorios.innerHTML = repositorioUserGit;
        numSeguidores.innerHTML = SeguidoresUserGit;
        numSeguindo.innerHTML = SeguindoUserGit;
        linkRepositorio.href = linkUserGit;


    })
})