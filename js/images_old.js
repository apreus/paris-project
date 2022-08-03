var images = {};
let requestURL = "imagedata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let imagelist = request.response;
    for (i in imagelist) {
        let img = imagelist[i];
        images[img['ImageID']] = img;
    }
}


let showimage = function(imageid) {
    let image = images[imageid];
    let imgbox = document.getElementById("imagebox");
    imgbox.innerHTML = "";
    let imghtml = `<img src="${image['Mounted_Image_Links']}"/>`;
    let imgdiv = document.createElement("div");
    imgbox.appendChild(imgdiv);
    imgdiv.innerHTML = imghtml;
}



let imagelinks = document.getElementsByClassName("imagelink");
for (i in imagelinks) {
    let el = imagelinks[i];
    el.onclick = function(e) {
        showimage(this.dataset.ref);
    }

}


