import { DailyJournal } from "./DailyJournal.js"
import { getEntries } from "./database.js"

const container = document.querySelector("#container")


const render = () => {
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