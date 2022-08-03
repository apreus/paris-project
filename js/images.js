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
    var imagebox = document.getElementById("imagebox");
    imagebox.outerHTML = "<iframe id='imagebox' title='imagebox' width='400' height='200'></iframe>";
    var imagebox = document.getElementById("imagebox");
    imagebox.contentDocument.write("<head><script src='../js/openseadragon-bin-2.4.2/openseadragon.js'></script></head>");
    let imageurl = images[imageid]['Mounted_Image_Links'];
    var script = "<body>";
    script += "<div id='img'></div>";
    script += `<div id="caption">${images[imageid]['Caption']}</div>`;
    script += "<style>#caption {font-family: 'Caslon Book BE', serif;";
    script += "margin-top: 10px}";
    script += "#img {height: 80%}</style>";
    script += "<script>";
    script += "let viewer = OpenSeadragon({id: 'img',";
    script += "prefixUrl: '../images/',"
    script += "tileSources: {";
    script += "type: 'image',";
    script += `url: '${imageurl}',`;
    script += "}});";
    script += "</script></body>";
    imagebox.contentDocument.write(script);
};



let imagelinks = document.getElementsByClassName("imagelink");
for (i in imagelinks) {
    let el = imagelinks[i];
    el.onclick = function(e) {
        showimage(this.dataset.ref);
    }
}

// var viewer = OpenSeadragon({
    // id: "imagebox",
    // tileSources: {
        // type: "image",
        // url: "/images/Notre_Dame.jpg",
        // crossOriginPolicy: 'Anonymous',
        // ajaxWithCredentials: false
    // }
// })

