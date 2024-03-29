export const loadCharacters = async (character1, character2) => {
    const characters = [character1, character2]
    characters.sort()

    const data = await import(`./resources/${characters.join("_")}.json`)
        .then(module => module.default)

    const interactions = []
    data.forEach(item => {
        interactions.push(item.interaction)
    })
    return interactions
}