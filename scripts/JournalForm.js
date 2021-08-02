import { saveJournalEntry, getMoodEntry } from "./database.js"


document.addEventListener(
    "click",
    (event) => {if (event.target.id === "saveEntry") {
        const newDate = document.querySelector(".entryForm__date").value
        const newConcept = document.querySelector(".entryForm__subject").value
        const saveEntry = document.querySelector(".entryForm__entry").value
        const newMood = parseInt(document.querySelector(".entryForm__mood").value)

        const newEntry = {
            date: newDate,
            concept: newConcept ,
            entry: saveEntry ,
            moodId: newMood
        }
        saveJournalEntry(newEntry)
    }
    }
)

export const journalForm = () => {
    let allMoods = getMoodEntry()
    return `
    <form class="entryForm">
    <fieldset>
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" class="entryForm__date">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <input type="text" name="conceptsCovered" class="entryForm__subject" placeholder="What was covered today?">
    </fieldset>
    <fieldset>
        <label for="newEntry">Journal Entry</label>
        <textarea name="newEntry" class="entryForm__entry" placeholder="Share your thoughts."></textarea>
    </fieldset>
    <fieldset>
        <label for="moodToday">Mood Today</label>
        <select name="mood" class="entryForm__mood">
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.mood }</option>`
                }
            ).join("")
        }
        
          </select>
    </fieldset>
    </form>
    <button type="button" id="saveEntry">Record Journal Entry</button>
    `
}