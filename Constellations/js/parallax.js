function initialize(){
    window.addEventListener("scroll", moveImagesWhenUserScrolls)
    }
    function moveImagesWhenUserScrolls(){
    const scrollPosition= window.scrollY;
    
    const C = document.getElementById("c");
    const O1 = document.getElementById("o1");
    const N1 = document.getElementById("n1");
    const S1 = document.getElementById("s1");
    const T1 = document.getElementById("t1");
    const E = document.getElementById("e");
    const L1 = document.getElementById("l1");
    const L2 = document.getElementById("l2");
    const A = document.getElementById("a");
    const T2 = document.getElementById("t2");
    const I = document.getElementById("i");
    const O2 = document.getElementById("o2");
    const N2 = document.getElementById("n2");
    const S2 = document.getElementById("s2");
    
    C.style.left = scrollPosition + "px";
    O1.style.top = scrollPosition * 0.5 + "px";
    N1.style.top = scrollPosition * 0.4 + "px";
    S1.style.top = scrollPosition * 0.7 + "px";
    T1.style.top = scrollPosition * 0.3 + "px";
    E.style.top = scrollPosition * 0.3 + "px";
    }
    initialize();