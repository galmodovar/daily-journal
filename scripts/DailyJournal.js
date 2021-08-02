import { Entries } from "./Entries.js"
import { journalForm } from "./JournalForm.js"

// Keep your existing imports and add the new import for the form function

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <article class="entryForm">
        ${ journalForm() }
        </article>

        <article class="entryList">
            ${ Entries() }
        </article>

    `
}

