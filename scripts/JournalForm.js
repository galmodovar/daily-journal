import { saveJournalEntry } from "./database.js"


document.addEventListener(
    "click",
    (event) => {if (event.target.id === "saveEntry") {
        const newDate = document.querySelector(".entryForm__date")
        const newConcept = document.querySelector(".entryForm__subject")
        const saveEntry = document.querySelector(".entryForm__entry")
        const newMood = document.querySelector(".entryForm__mood")

        const newEntry = {
            date: newDate.value ,
            concept: newConcept.value ,
            entry: saveEntry.value  ,
            mood: newMood.value
        }
        saveJournalEntry(newEntry)
    }
    }
)

export const journalForm = () => {
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
            <option value="happy">happy</option>
            <option value="frustrated">frustrated</option>
            <option value="ok">ok</option>
            <option value="sad">sad</option>
          </select>
    </fieldset>
    </form>
    <button type="button" id="saveEntry">Record Journal Entry</button>
    `
}