let word1 = 'jmor'
let word2 = 'asuhduahsiudahsudahdamoraduashdua'

function comparaStrings(word1, word2){
    let estaContido = true
    for (let i = 0; i < word1.length; i++) {
        let caractereString1 = word1.charAt(i).toLowerCase()
        for (let j = 0; j < word2.length; j++) {
            let caractereString2 = word2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2){
                estaContido = true
                break
            }
            else{
                estaContido = false
            }
         
        }
        if(!estaContido){
            return estaContido = false
        }
    }

    return estaContido
}

console.log(comparaStrings(word1, word2))