function make_album(artist: string, title: string, tracks: number): {artist: string, title: string, tracks: number} {
    const album: {artist: string, title: string, tracks: number} = {artist, title, tracks};
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

const album1 = make_album("adele", "adlel songs", 21);
const album2 = make_album("Ed sheeran", "Ed sheeran songs", 42);
const album3 = make_album("Taylor Swift", "Taylor Swift songs", 53);

console.log(album1);
console.log(album2);
console.log(album3);

