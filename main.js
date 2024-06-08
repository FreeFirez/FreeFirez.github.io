// Datos de las canciones (puedes agregar más)
const songs = [
    { title: "Rap Kings Anthem", artist: "Rap Kings", file: "rap_kings_anthem.mp3" },
    { title: "Hustle Hard", artist: "Rap Kings", file: "hustle_hard.mp3" },
    { title: "Street Dreams", artist: "Rap Kings", file: "street_dreams.mp3" }
];

// Función para mostrar la lista de canciones
function showPlaylist() {
    const playlist = document.getElementById("playlist");

    songs.forEach((song, index) => {
        const songElement = document.createElement("div");
        songElement.classList.add("song");
        songElement.textContent = `${index + 1}. ${song.title} - ${song.artist}`;
        songElement.addEventListener("click", () => playSong(index));
        playlist.appendChild(songElement);
    });
}

// Función para reproducir una canción
function playSong(index) {
    const audioPlayer = document.getElementById("audioPlayer");
    const song = songs[index];
    audioPlayer.src = song.file;
    audioPlayer.play();
}

// Llamar a la función para mostrar la lista de canciones al cargar la página
showPlaylist()
