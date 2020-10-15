function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV = trabalho1 && trabalho2
   // const comprarTV32 = !!(trabalho1 ^ trabalho2)
   const comprarTV32 = trabalho1 != trabalho2
   const manterSaudavel = !comprarSorvete

   return {
       comprarSorvete,
       comprarTV,
       comprarTV32,
       manterSaudavel
   }
}

console.log(compras(true, true))