const fs = require('fs')
const readFileAsync = fs.readFileSync
const writeFileAsync = fs.writeFileSync
const sourcePath = "new_interactions.json"

async function generate() {
    // 1. Read content of new_interactions.json
    console.log("INFO: Read content of new_interactions.json")
    let sourceContent
    try {
        sourceContent = await readFileAsync(sourcePath, "utf8")
    } catch (err) {
        console.log("ERROR: Cannot read " + sourcePath)
    }

    // 2. Add content to interaction files
    console.log("INFO: Add content to interaction files")
    const sourceJson = JSON.parse(sourceContent)
    if (Array.isArray(sourceJson)) {
        addInteractionsToFile(sourceJson)
    } else if (typeof sourceJson === "object") {
        addInteractionToFile(sourceJson)
    } else {
        console.error("ERROR: json is not object or array, cannot be used")
    }
}

const addInteractionsToFile = async (list) => {
    for (const item of list) {
        await addInteractionToFile(item)
    }
}

const addInteractionToFile = async (data) => {
    const character1 = data["character1"]
    const character2 = data["character2"]
    if (typeof character1 !== "string" || typeof character2 !== "string") {
        console.error("ERROR, characters are not strings")
        console.error(typeof character1)
        console.error(typeof character2)
        return
    }
    let characters = [character1, character2]
    characters.sort()
    characters = characters.map(character => character.replace(" ", ""))

    const jinx = data["jinx"]
    if (jinx && typeof jinx !== "boolean") {
        console.error("ERROR, jinx is not a boolean")
        return
    }

    const source = data["source"]
    if (source && typeof source !== "string") {
        console.error("ERROR, source is not a string")
        return
    }

    const interaction = data["interaction"]
    if (typeof interaction !== "string") {
        console.error("ERROR, interaction is not a string")
        return
    }

    console.log("INFO: Add interaction for " + characters.join(" & "))

    // Open the data of the file, or create a new file
    const filePath = "../storage/interactions/" + characters.join("_") + ".json"
    let interactionFileContent
    try {
        console.log("INFO: Try to open the file for " + characters.join(" & "))
        interactionFileContent = await readFileAsync(filePath, "utf8")
    } catch (err) {
        if (err.code === "ENOENT") {
            // File does not exist, create it
            console.log("INFO: File does not exist, create it")
            try {
                await writeFileAsync(filePath, "[]", "utf8")
                console.log("INFO: File created")
                interactionFileContent = await readFileAsync(filePath, "utf8")
            } catch (err) {
                console.log("ERROR when creating or reading the interaction file, " + err)
            }
        } else {
            console.log("ERROR: when reading the interaction file, " + err)
        }
    }

    // Add content to interaction file
    const interactionJson = JSON.parse(interactionFileContent)
    interactionJson.push({ interaction, jinx, source })
    await writeFileAsync(filePath, JSON.stringify(interactionJson, null, 4), "utf8")
    console.log("INFO: Interaction has been added to the file")
}

generate()