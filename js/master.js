const $grid= $('#Grid');
const $nav = $('#Nav');


// 方法一---------------------------------
// let isMobile;
// if($(window).width()<=480){
//     isMobile=true
// }else{isMobile=false}
// console.log(isMobile)

// --------------------------------------------

// 方法二：表達式-----------------------------------
// 判斷是否是手機版(F12看console會出現true/ flase)
const isMobile = $(window).width()<=480;

// 抓出可是範圍寬度(高度)
// window 不是標籤，不用引號
// console.log($(window).width()<=480)
console.log(isMobile)
// console.log($(window).height())


function setGrid(){
    // 這裡要用2個or3個=
    // if (isMobile==true){
    // 但其實不用寫==true(優化)
    // if (isMobile){
    //     $grid.addClass('grid-2')
    // }else{
    //     $grid.addClass('grid-3')
    // }

    // 優化寫法(純粹減少大括號)
    if (isMobile){
        $grid.addClass('grid-2')
        return;
        // 停下的意思，不加做grid-3
    }
    $grid.addClass('grid-3')
}

// 使用具名函數
setGrid();


// 捲動，nav就加背景-------------------------------------------------------
// $(window).scroll(function(){
//     if(isMobile){
//         // 內容超出可視範圍的數值
//         // console.log($(window).scrollTop());
//         if($(this).scrollTop() == 0){
//             // console.log(0)
//             $nav.removeClass('nav-active')
//         }else{
//             // console.log('要套用class')
//             $nav.addClass('nav-active')
//         }
//     }
// });

function setScroll(){
    $(window).scroll(function(){
        // isMobile: true
        // !isMobile:flase
        if(!isMobile) return;
        
        
        if($(this).scrollTop() == 0){
            // console.log(0)
            $nav.removeClass('nav-active')
        }else{
            // console.log('要套用class')
            $nav.addClass('nav-active')
        }
    })
}

function setFancybox(){
    $grid.find("a").fancybox({
        // 防按右鍵被下載
        protect: true,
        // 讓圖片循環(最後跳回第一張)
        loop: true,
    });
    
}

function setInit(){
    setGrid();
}

function setEvent(){
    setScroll();
    setFancybox();
}




setInit();
setEvent();