export const loadCharacters = async () => {
    return await import("./../characters.json")
        .then(module => module.default)
}