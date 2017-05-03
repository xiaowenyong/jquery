/**
 * Created by Administrator on 2017/5/3.
 */
$(function () {
    $('.box').click(function (event) {
        console.log(event);
    })
    $('p').on('click',function (event) {
        console.log(event);
        event.stopPropagation();
    })
    // $("p").click(function(){
    //     alert("The paragraph was clicked.");
    // });
    //
    // $("p").on("click",function(){
    //     alert("The paragraph was clicked.");
    // });
})