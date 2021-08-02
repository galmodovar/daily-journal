/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

//getJournalEntries()


export const Entries = () => {
    
    // .then(() => {
    
        const entries = getJournalEntries()
    
        let allEntriesAsHTML = ""
        for (const entry of entries) {
        allEntriesAsHTML += `
                <h1>${entry.date} ${entry.concept}</h1>  
                <div>Entry - ${entry.entry}</div>
                <div>Mood - ${entry.mood.mood}</div>
                
                `
    }
    allEntriesAsHTML += ""
    return allEntriesAsHTML
}
