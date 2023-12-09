function getNode(xmlTree, nodeName) {
    let i = 0
    let currentNode = xmlTree[i]
    while (currentNode && currentNode.nodeName !== nodeName) {
        i++
        currentNode = xmlTree[i]
    }
    return currentNode
}