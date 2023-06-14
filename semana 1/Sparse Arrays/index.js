function matchingStrings(strings = [], queries = []) {
const counter = new Map();

strings.forEach(s => {
    if(!counter.has(s)) counter.set(s,1)
    else counter.set(s, counter.get(s)  + 1)
})
return queries.map(q => counter.get(q) || 0)

}