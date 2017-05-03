/**
 * Created by Administrator on 2017/5/3.
 */
$(function () {
    var arrcolor = ['black','white','black','white','black','white','black','white'];
    $('span').each(function (i) {    //each遍历的意思
        $(this).css({'background':arrcolor[i]});
    });
    $('li').mouseover(function () {
        $(this).children('span').stop().animate({'top':30});    //children表示li下面的span子元素,animate是自定义动画,stop()停止当前正在运行的动画。
    }).mouseout(function () {
        $(this).children('span').stop().animate({'top':0})
    })
})