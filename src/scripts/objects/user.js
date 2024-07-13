import { eventsQuantity } from "/src/scripts/variables.js"

const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: '',
    repositoriesEvents: '',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setRepositoriesEvents(repositories) {
        const filteredEvents = repositories.filter(event => event.type === 'CreateEvent' || event.type === 'PushEvent');
        const last10Events = filteredEvents.slice(-eventsQuantity);
        this.repositoriesEvents = last10Events
    }
}

export { user }
