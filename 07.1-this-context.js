// About *this & *context 
const video = {
  title: 'Terminator',
  play() {
    console.log(this);  // { title: 'Terminator', play: [Function: play] }
  }
}
// video.stop = function () {
//   console.log(this);  //   stop: [Function (anonymous)]
// }

// - irregular function
// function playVideo() {
//   console.log(this)
// }
// // video.play()
// // video.stop()
// playVideo()  // Object [global] {

// === constructor function
function Video(title){
  this.title = title
  console.log(this);
}
const movie = new Video('Bow')
console.log(movie.title);