import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
   return await response.json()
}

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    return await response.json()
}

export { getRepositories, getEvents }
