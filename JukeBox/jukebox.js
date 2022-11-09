var Playlist = /** @class */ (function () {
    function Playlist() {
    }
    Playlist.getSongIndex = function () {
        return Math.floor(Math.random() * Playlist.songs.length);
    };
    Object.defineProperty(Playlist, "song", {
        get: function () {
            return Playlist.songs[this.getSongIndex()];
        },
        enumerable: false,
        configurable: true
    });
    Playlist.prototype.addSong = function (song) {
        Playlist.songs.push(song);
        return song + " Was added to the playlsit";
    };
    Playlist.songs = ["Dream On", "Livin On A Prayer", "Let The River Run"];
    return Playlist;
}());
var playlist = new Playlist();
console.log(playlist.addSong("Renegade"));
console.log(Playlist.song);
