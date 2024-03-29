export const loadCharacters = async () => {
    const data = await import("./../characters.json")
        .then(module => module.default)

    const returnData = data.map(item => {
        return {
            title: item.name
        }
    })

    return returnData
}