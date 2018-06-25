$(document).ready(() => {

  // Use jQuery to get a reference to `load-songs`
  const $loadSongs = $("#load-songs");

  // Use jQuery to get a reference to `song-list`
  const $songList = $("#song-list");


  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system
  */
  $loadSongs.click(() => {
    $.ajax("./scripts/songs.json").then(response => {
      console.log(response);
      response.songs.forEach(element => {
        const $songCard = $("<section>").addClass("song");
        const $songTitle = $("<h2>").text(`${element.title}`)
        $songTitle.addClass("song__title").appendTo($songCard);
        const $songDescription = $("<section>").text(`Performed by ${element.artist} on the album "${element.album}"`);
        $songDescription.addClass("song__description").appendTo($songCard);
        $songCard.appendTo($songList);
      });

    });
  });




  /*
      Chain a `.then()` method to the ajax call, and when
      it is complete build a DOM component for each song with
      the following structure. Use the jQuery append() method
      to put an HTML representation of each song the DOM as a
      child component of the .

          <section class="song">
              <h1 class="song__title">{Title of song}</h1>
              <section class="song__description">
                  Performed by {artist} on the album {album}
              </section>
          </section>
  */
});