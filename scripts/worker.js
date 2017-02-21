importScripts('imageManips.js');

this.onmessage = function(e) {
  var a, b, g, i, j, length, pixel, r, ref;
  var imageData = e.data.imageData;
  var type = e.data.type;

  try {
    length = imageData.length / 4;
    for (i = j = 0, ref = length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      r = imageData[i * 4 + 0];
      g = imageData[i * 4 + 1];
      b = imageData[i * 4 + 2];
      a = imageData[i * 4 + 3];
      pixel = manipulate(type, r, g, b, a);
      imageData[i * 4 + 0] = pixel[0];
      imageData[i * 4 + 1] = pixel[1];
      imageData[i * 4 + 2] = pixel[2];
      imageData[i * 4 + 3] = pixel[3];
    }
    postMessage(imageData);
  } catch (e) {
    function ManipulationException(message) {
      this.name = "ManipulationException";
      this.message = message;
    };
    throw new ManipulationException('Image manipulation error');
    postMessage(undefined);
  }
}
