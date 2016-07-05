var $ = require('jquery');

function render(arr){
    var $grid=$('.grid');
    $grid.removeClass('active');
    for(var value of arr){
        let num=value[0]*50+value[1]+1;
        $grid.eq(num).addClass('active');
    }
}

export default render;