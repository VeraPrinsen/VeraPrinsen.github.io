export const loadInteractions = async (character1, character2) => {
    const characters = [character1, character2]
    characters.sort()

    try {
        const data = await import(`./../storage/interactions/${characters.join("_")}.json`)
            .then(module => module.default)
        const interactions = []
        data.forEach(item => {
            interactions.push(item.interaction)
        })
        return interactions
    } catch (err) {
        console.log(err)
        return []
    }



}