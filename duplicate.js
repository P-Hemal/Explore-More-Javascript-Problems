function removeDuplicates(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        console.log(name)
        if (unique.includes(name) === false) {
            unique.push(name);
        }

    }
    return unique;
}
const names = ['asif', 'romio', 'prince', 'joy', 'protick', 'ananto', 'emon', 'prince', 'protick', 'ananto'];
const uniqueName = removeDuplicates(names);
console.log(uniqueName);