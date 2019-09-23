$(document).ready(()=>{

    const canvas = new Canvas(510, 510);
    const c = canvas.context;

    // MAIN FUNCTION
    (function animate(){
        requestAnimationFrame(animate);
        canvas.update();
    })();
});