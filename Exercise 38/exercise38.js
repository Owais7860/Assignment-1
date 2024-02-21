function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("adele", "adlel songs", 21);
var album2 = make_album("Ed sheeran", "Ed sheeran songs", 42);
var album3 = make_album("Taylor Swift", "Taylor Swift songs", 53);
console.log(album1);
console.log(album2);
console.log(album3);
