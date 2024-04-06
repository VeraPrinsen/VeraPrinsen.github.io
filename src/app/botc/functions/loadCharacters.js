export const loadCharacters = async () => {
    return await import("../storage/characters.json")
        .then(module => module.default)
}