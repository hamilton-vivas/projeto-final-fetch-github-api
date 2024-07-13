const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =   `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrado 😥'}</p>
                                                <p>👥 Seguidores: ${user.followers}</p>
                                                <p>👤 Seguindo: ${user.following}</p>
                                            </div>
                                        </div>`
        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} -> 💾 ${repo.forks_count} ⭐ ${repo.stargazers_count} 👀 ${repo.watchers_count} 🖥 ${repo.language}</a></li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Este usuário NÃO POSSUI Repositórios !!!</h2>
                                            </div>`
        }
        
        let listEvents = ""
      
        user.repositoriesEvents.forEach(event => {
            const repoName = event.repo.name;
            if (event.type === 'PushEvent') {
              event.payload.commits.forEach(commit => {
              listEvents += `<li>${repoName} -> ${commit.message}</li>`;
              });
            } else if (event.type === 'CreateEvent') {
              listEvents += `<li>${repoName} -> Sem mensagem de commit</li>`;
            }
          });
        
        if (user.repositoriesEvents.length > 0) {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Eventos</h2>
                                                <ul>${listEvents}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Eventos NÃO ENCONTRADOS para este usuário !!!</h2>
                                            </div>`
        }
    },
    
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado !!!</h3>"
    }
}

export { screen }