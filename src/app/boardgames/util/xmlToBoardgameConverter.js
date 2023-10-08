/*
        Input is an XML object of the format (only interesting values are shown):
        <items>
            <item id=<id>>
                <thumbnail>link</thumbnail>
                <image>link</image>
                <name type="primary" value=<name> />
                <description>description</description>
                <yearPublished value=<yearPublished> />
            </item>
            <item>...</item>
        </items>

        Returns a list of boardgames, with each boardgame of the format:
        {
            id: <id of the boardgame from the API>
            name: <name of boardgame>
            description: <description of the game>
            yearPublished: <year boardgame was published>
            thumbnail: <link to thumbnail>
            image: <link to image>
        }

        possible other properties:
        * min max players
        * min max playtime
        * categories
        * mechanics
        * expansions
        * artists
        * publisher
        * designer
     */
export const xmlToBoardgamesList = xml => {
    const boardgames = [];
    [].slice.call(xml.children).forEach(xmlGame => {
        boardgames.push(xmlGameToObject(xmlGame))
    })
    return boardgames
}

const xmlGameToObject = xmlGame => {
    debugger
    const nameElements = xmlGame.getElementsByTagName("name")
    let name
    [].slice.call(nameElements).forEach(nameElement => {
        if (nameElement.getAttribute("type") && nameElement.getAttribute("type") === "primary") {
            name = nameElement.getAttribute("value")
            return
        }
    })

    return {
        id: xmlGame.getAttribute("id"),
        name: name,
        description: xmlGame.getElementsByTagName("description").length > 0 ? xmlGame.getElementsByTagName("description")[0].textContent : "",
        yearPublished: xmlGame.getElementsByTagName("yearpublished").length > 0 ? xmlGame.getElementsByTagName("yearpublished")[0].getAttribute("value") : "",
        thumbnail: xmlGame.getElementsByTagName("thumbnail").length > 0 ? xmlGame.getElementsByTagName("thumbnail")[0].textContent : "",
        image: xmlGame.getElementsByTagName("image").length > 0 ? xmlGame.getElementsByTagName("image")[0].textContent : ""
    }
}