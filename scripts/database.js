/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const database = {
  entries: [],
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
  const copyOfData = database.entries.map((entry) => ({ ...entry }));
  return copyOfData;
};

export const getEntries = () => {
  return fetch("http://localhost:8088/entries") // Fetch from the API
    .then((res) => res.json()) // Parse as JSON
    .then((entry) => (database.entries = entry));
};

// What should happen when we finally have the array?


export const saveJournalEntry = (newJournalEntry) => {
  // Use `fetch` with the POST method to add your entry to your API
  fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJournalEntry),
  })
    .then(() => {
      //  Get all journal entries
      getEntries()
    })
    .then(() => {
      //  Broadcast the state change event
      document.dispatchEvent(new CustomEvent("stateChanged"))


    });
};
