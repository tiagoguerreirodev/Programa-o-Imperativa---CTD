function opinionFactory(age,opinion) {
    return {
    age,
    opinion
}
}

opinions = []

for(let i = 0; i < 15; i++) {
    let age = Math.floor(Math.random() * 30 + 18)
    let opinion = Math.floor(Math.random() * 3 + 1)
    opinions.push(opinionFactory(age,opinion))
}

const numOfPersonsByOpinion = opinion => {
    return opinions.filter(obj => obj.opinion === opinion).length
}

const meanAgeByOpinion = opinion => {
    const age = opinions.filter(obj => obj['opinion'] === opinion).reduce((previous,now) => {
        return {age: previous['age'] + now['age']}
    })
    return age['age'] / numOfPersonsByOpinion(opinion)
}

const percentageByOpinion = opinion => {
    const numOfPersonByOpinion = opinions.filter(obj => obj.opinion === opinion).length
    const totalPersons = opinions.length
    return numOfPersonByOpinion / totalPersons
}

console.log(percentageByOpinion(2))