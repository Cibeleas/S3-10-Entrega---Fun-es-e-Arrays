function positions (firstPlace, secondPlace, lastPlace){
    let nomeDoCompetidor = [firstPlace, secondPlace, lastPlace]
 
    if (nomeDoCompetidor[1] == "Daniel"){
        nomeDoCompetidor [1] = firstPlace
        nomeDoCompetidor [0] = secondPlace
    }
    if (nomeDoCompetidor[2] == "Daniel"){
        nomeDoCompetidor [2] = secondPlace
        nomeDoCompetidor [1] = lastPlace
    }
    return `1º - Colocado "${nomeDoCompetidor[0]}",\n2º - Colocado "${nomeDoCompetidor[1]}",\n3º - Colocado "${nomeDoCompetidor[2]}"`
}

console.log (positions ("Daniel", "Manoel", "Rafael"))