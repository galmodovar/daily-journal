import { DailyJournal } from "./DailyJournal.js"
import { getEntries, getMoods } from "./database.js"

const container = document.querySelector("#container")


const render = () => {
    getMoods()
    getEntries().then(() => {
        
        container.innerHTML = `
        ${DailyJournal()}`
    }) 
    
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})