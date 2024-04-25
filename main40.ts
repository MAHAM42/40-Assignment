// ASSIGNMENT NO 40;

/*
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries representing
different albums. Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/

console.log("ASSIGNMENT NO 40");

// Define the make_album function:

function make_album(artist_name: string, album_tittle: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: Number} = {
        artist: artist_name,
        title: album_tittle,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three functions and creating 3 variables with different values:

let album1 = make_album("Maham", "Album title 1");

let album2 = make_album("Neha", "Album title 2");

// Calling a make_album function with third parameter:
let album3 = make_album("shanza", "Album title 3", 10);

// Prints values of our object created my function:

console.log(album1);
console.log(album2);
console.log(album3);

