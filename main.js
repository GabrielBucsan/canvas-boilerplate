$(document).ready(()=>{

    const canvas = new Canvas(400, 400);
    const c = canvas.context;

    // MAIN FUNCTION
    (function animate(){
        requestAnimationFrame(animate);
        canvas.update();
    })();
});