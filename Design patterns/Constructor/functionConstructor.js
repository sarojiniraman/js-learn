
function Video(title, uploader, seconds) {
    
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.videos.push(this);
}

Video.prototype = {
    watch : function() {
    return "You watched all " + this.seconds + " seconds of " + this.title;
    },
    videos :[]
}

var video1 = new Video('Hello','will',400);
var vide02 = new Video('Abc','john',500);
var video3 = new Video('Xyz','leo',380);


for(var i=0;i < (Video.prototype.videos).length; i++){
    Video.prototype.videos[i].watch();
    console.log(Video.prototype.videos[i].watch());
}