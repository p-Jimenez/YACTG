export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export const checkIfImageExists = (url, callback) => {
    const object = {};
    
    object.img = new Image();

    object.img.src = url;

    if (object.img.complete) {
      callback(true);
    } else {
      object.img.onload = () => {
        callback(true);
      };
      
      object.img.onerror = () => {
        callback(false);
      };
    }

    delete object.img;
  }
    