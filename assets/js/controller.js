var $ = require('jquery');
import Model from './model';

function render(arr){
    var $grid=$('.grid');
    $grid.removeClass('active');
    for(var value of arr){
        let num=value[0]*50+value[1]+1;
        $grid.eq(num).addClass('active');
    }
    var food = Model.getFood();
    $grid.eq(food[0]*50+food[1]+1).addClass('active');
}

export default render;