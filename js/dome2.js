/**
 * Created by Administrator on 2017/5/3.
 */
$(function () {
    var k = 0;
    $('.box').click(function () {
     if (k % 4 == 0){
         $(this).css('background','blue');
     }else if(k % 4 == 1){
         $(this).css('background','red');
     } else if(k % 4 == 2){
         $(this).css('background','pink');
     }else {
         $(this).css('background','blank');
     }
     k++
    })
})