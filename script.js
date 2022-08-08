const slider= function(opt){

    if(!opt.name || !opt.btns.left || !opt.btns.right || !opt.dots) return;

    const listElem = document.querySelector("#" + opt.name);

    if(!listElem || listElem.length <= 1) return;

    const btnLeft = document.querySelector("#" + opt.btns.left);
    const btnRight = document.querySelector("#" + opt.btns.right);

    if(!btnLeft || !btnRight) return;

    const btnsDots = document.querySelector("." + opt.dots);
    if(!btnsDots) return;

    let sliderList = document.querySelector("#slider1");


    const createDots= function(){

        let amountDots=(Math.ceil(listElem.children.length/5));
        
        for(let i = 1; i <= amountDots; i++){
            
            let btnDot = document.createElement("button");
            btnDot.setAttribute("class", `slider_dot`);
            btnsDots.append(btnDot);
        };

        btnsDots.firstElementChild.classList.add("active");

        let dots = btnsDots.querySelectorAll(".slider_dot");

        const dotAddEvent= function(event){

            dots.forEach(function(elem){
                if(elem.classList.contains("active")) elem.classList.remove("active");
            });

            this.classList.add("active");

            let x = listElem.style.transform;

            if(!x){
                x = 0;
            } else{
                x = x.replace("translateX(", "");
                x = x.replace("%)", "");
                x = Math.abs(x);
            };
            
            x += 100;


            const stopPoint = (listElem.children.length - 1) * 100;// 16 останавливаем при достижении последнего элемента, чтобы не листалась пустота
    
            if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        };
        

        dots.forEach(function(elem){

            elem.addEventListener("click", dotAddEvent);
        });

    };
    createDots();

    

    const prev = function(){
        let x = listElem.style.transform;

        if(!x){
            x = 0;
        } else{
            x = x.replace("translateX(", "");
            x = x.replace("%)", "");
            x = Math.abs(x);
        };

        x-= 20;

        const stopPoint = ( (listElem.children.length -1)) * 20;

        if(x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
    };

    const next = function(){
        let x = listElem.style.transform;

        if(!x){
            x = 0;
        } else{
            x = x.replace("translateX(", "");
            x = x.replace("%)", "");
            x = Math.abs(x);
        };

        x+= 20;
        
        const stopPoint = ( (listElem.children.length -1))* 20;

        if(x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        else if (x > stopPoint) listElem.style.transform = `translateX(0%)`;
    };

    btnLeft.addEventListener("click", prev);
    btnRight.addEventListener("click", next);
    
};

window.addEventListener("load", function(){

    const slider1_options={
        name: "slider1",
        btns: {
            left: "slider1_btn_left",
            right: "slider1_btn_right"
        },
        dots: "slider_dots"
    };

    slider(slider1_options);
});