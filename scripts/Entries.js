/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { deleteJournalEntry, getJournalEntries } from "./database.js"

//getJournalEntries()
document.addEventListener("click", (clickedSection) => 
                {
                const section = clickedSection.target;
                if (section.id.startsWith("delete")){
                    const [,sectionId] = section.id.split("--")
                    const entries = getJournalEntries();
                    for (const entry of entries) {
                        if (entry.id === parseInt(sectionId)) {
                            deleteJournalEntry(entry.id)
                        }
                    }
                }
                })

export const Entries = () => {
    
    // .then(() => {
    
        const entries = getJournalEntries()
    
        let allEntriesAsHTML = ""
        for (const entry of entries) {
        allEntriesAsHTML += `
                <div class=entry>   
                <h1>${entry.date} ${entry.concept}</h1>  
                <p>Entry - ${entry.entry}</p>
                <p>Mood - ${entry.mood.mood}</p>
                <input type="button" value="Delete" id="delete--${entry.id}">
                </div>
                `
    }
    allEntriesAsHTML += ""
    return allEntriesAsHTML
}
