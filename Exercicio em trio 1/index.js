const data = [
    {
        sexo: 'masculino',
        altura: 1.73
    },
    {
        sexo: 'feminino',
        altura: 1.85
    },
    {
        sexo: 'feminino',
        altura: 1.79
    },
    {
        sexo: 'masculino',
        altura: 1.78
    },
    {
        sexo: 'masculino',
        altura: 1.80
    },
    {
        sexo: 'masculino',
        altura: 1.73
    },
    {
        sexo: 'feminino',
        altura: 1.85
    },
    {
        sexo: 'feminino',
        altura: 1.79
    },
    {
        sexo: 'masculino',
        altura: 1.78
    },
    {
        sexo: 'masculino',
        altura: 1.80
    },
    {
        sexo: 'masculino',
        altura: 1.73
    },
    {
        sexo: 'feminino',
        altura: 1.85
    },
    {
        sexo: 'feminino',
        altura: 1.79
    },
    {
        sexo: 'masculino',
        altura: 1.78
    },
    {
        sexo: 'masculino',
        altura: 1.80
    }
]

const numOfPersonsByGender = gender => {
    return data.filter(obj => obj.sexo === gender).length
}

const biggestHeight = arr => {
    let maxHeight = 0
    let minHeight = 0
    arr.forEach(obj => {
        if(obj['altura'] > height) {
            maxHeight = obj['altura']
        }
        if(obj['altura'] < height) {
            minHeight = obj['altura']
        }
    })
    return [maxHeight,minHeight]
}

const meanHeightByGender = gender => {
    const totalHeightByGender = data.filter(obj => obj.sexo === gender).reduce((previous, now) => {
        return {altura: previous['altura'] + now['altura']}
    })
    return totalHeightByGender.altura / numOfPersonsByGender(gender)
}

