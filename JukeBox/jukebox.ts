class Playlist {
    private static songs: string[] = ["Dream On", "Livin On A Prayer", "Let The River Run"];

    private static getSongIndex(){
        return Math.floor(Math.random() * Playlist.songs.length);
    }
    public static get song(): string {
        return Playlist.songs[this.getSongIndex()];
    }
    addSong(song:string): string {
        Playlist.songs.push(song);
        return song +" Was added to the playlsit"
    }
}

const playlist = new Playlist();
console.log(playlist.addSong("Renegade"));
console.log(Playlist.song);