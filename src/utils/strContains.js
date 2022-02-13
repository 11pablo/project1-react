
const strContains = (cardTitle, searchString) => {
    if(cardTitle.toLowerCase().includes(searchString.toLowerCase())) return true
    else return false
}

export default strContains; 