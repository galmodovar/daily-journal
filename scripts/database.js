/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const database = {
  entries: [],
  moods:[]
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
    .then(res => res.json()) // Parse as JSON
    // What should happen when we finally have the array?
    .then(entry => {database.entries = entry});
};
export const getMoods = () => {
  return fetch("http://localhost:8088/moods") // Fetch from the API
    .then(res => res.json()) // Parse as JSON
    .then(moods => {database.moods = moods});
};



export const getJournalEntries = () => {
  const copyOfData = database.entries.map((entry) => ({ ...entry }));
  return copyOfData;
};

export const getMoodEntry = () => {
  const copyOfData = database.moods.map(mood => ({ ...mood }));
  return copyOfData;
};




export const saveJournalEntry = (newEntry) => {
  // Use `fetch` with the POST method to add your entry to your API
  fetch("http://localhost:8088/entries?_expand=mood", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
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

export const deleteJournalEntry = (deleteEntry) => {
  fetch(`http://localhost:8088/entries/${deleteEntry}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: null
  })
  .then(() => {
    getEntries()
  })
  .then(() => {
    document.dispatchEvent(new CustomEvent("stateChanged"))
  });
}
