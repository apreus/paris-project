window.onload = function(){
    let linemap = {};
    function detectSafari() {
        if ((navigator.userAgent.indexOf("Safari") > -1)  && 
            !(navigator.userAgent.indexOf("Chrome") > -1)
           ) {
            document.getElementById("body_notes").classList.add("safari");
        }
    };
    detectSafari();

    for (i in paris_line_ids) {
        linemap[paris_line_ids[i]] = [];
    }
    
    for (pair in briggs_target_pairs) {   
        const briggsid = briggs_target_pairs[pair][0]; 
        const lineid = briggs_target_pairs[pair][1];
        if (!(lineid in linemap)) {
            console.log("Mismatched line id: " + lineid);
        } else {
            linemap[lineid] = linemap[lineid].concat(briggsid);
        }
    };
    
    function make_note_visible(noteid) {
        document.getElementById()
    }
    
    
    for (i in paris_line_ids) {
        let id = paris_line_ids[i];
        let el = document.getElementById(id);
        let targetids = linemap[id];
    
        const top=el.offsetTop;
        for (j in targetids) {
                    tid = targetids[j];
                    let notel = document.getElementById(tid);
                    notel.style["top"]=top+"px";
                    notel.onclick=function(e){
                        console.log(e);
                        e.target.classList.toggle("selected");
                    }
               }
                // console.log(top, el);


        // var makeclickfunction=function(){
        //     var clickfunction=function(e) {
        //         const top=this.offsetTop;
        //         let selected=document.getElementsByClassName("selected");
        //         for (j=selected.length-1; j >=0;j--) {
        //             console.log(j);
        //             selected[j].classList.remove("selected")
        //         }
        //         for (j in targetids) {
        //             tid = targetids[j];
        //             let notel = document.getElementById(tid);
        //             notel.classList.add("selected");
        //             notel.style["top"]=top+"px";
        //         } 
        //     } ;
        //     return clickfunction;
        // }
        // // Removing 11/9/2020: the following made notes open when clicking
        // // on a corresponding line of poetry, but that conflicts 
        // // with image links
        // el.onclick = makeclickfunction();
    }
};
