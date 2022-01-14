class NotesApi {
  loadNotes(url, callback) {
      fetch(url)
      .then((response) => {
      return response.json();
      }).then((data) => {
        callback(data);
        })
  }

  createNote(url, note_body, callback) {
    fetch(url, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        content: note_body
      }) 
    })
    .then(response => {
      return response.json()
    }).then(data => {
      callback(data)
      })
  }
}

module.exports = NotesApi;