window.onload = function() {
    const target = document.getElementById('movie_player');

    const observer = new MutationObserver(function() {
        let ads = document.querySelectorAll(".ytp-ad-overlay-slot");
        for(let i=0; i<ads.length; ++i) {
            ads[i].parentNode.removeChild(ads[i]);
        }
        //let elem1 = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
        //let elem2 = document.getElementsByClassName("ytp-ad-skip-button-container")[0];
        //if (elem1) {
        //    elem1.parentNode.removeChild(elem1);
        //    console.log("emem1");
        //}
        //if (elem2) {
        //    elem2.parentNode.removeChild(elem2);
        //    console.log("emem2");
        //}
        console.log(target.children.length);
    });

    const config = { childList: true, attributes: true, characterData: true };

    observer.observe(target);
};

