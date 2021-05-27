function countGroups(matrix) {
    const groups = [ [], [] ]
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const element = matrix[i][j];
            const possibleGroups = groups[element]
                    .filter(g => belongsToGroup(g, [i, j]))
            const group = (possibleGroups?.flat() ?? [])
            groups[element] = groups[element]
                .filter(g => !possibleGroups.includes(g))
                .concat([group.concat([[i, j]])])
        }
    }
    return groups.map(g => g.length)
}
function belongsToGroup(group, pos) {
    return group
        .some(p => (p[0] === pos[0] - 1 && p[1] === pos[1]) 
                || (p[0] === pos[0] && p[1] === pos[1] - 1))
}


console.log(countGroups([
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 1]
]))

console.log(countGroups([
    [0, 0, 1, 1],         
    [0, 0, 1, 0],         
    [1, 0, 0, 1],         
    [1, 1, 1, 0]
]))