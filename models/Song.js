const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema(
    {

       // songname,singername,musicdirector,albumname,actorname,actressname,releaseddate,genrename

    songname: String,
    singername:String,
    musicdirector: String,
    albumname: String,
    actorname: String,
    actressname: String,
    releaseddate: String,
    genrename: String,
    language: String,
    imageurl : String

    }
)

const SongModel = mongoose.model("SongRegister",SongSchema);
module.exports = SongModel;