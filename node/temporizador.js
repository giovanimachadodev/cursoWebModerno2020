const ns = require("node-schedule")

const tarefa1 = ns.scheduleJob("*/5 * 12 * * 3", () => {
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando')
}, 20000)

const regra = new ns.RecurrenceRule()
regra.dayOfWeek = [new ns.Range(1, 5)]
regra.hour = 12
regra.second = 30   

const tarefa2 = ns.scheduleJob(regra, function(){
    console.log('Executando regra 2', new Date().getSeconds() )
})
