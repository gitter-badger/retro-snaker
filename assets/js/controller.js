var $ = require('jquery');
import Model from './model';

Model.setAfterScore(function(score){
    $('#score').html(score);
})

function render(arr){
    console.log(arr[0][0],arr[0][1]);
    var $grid=$('.grid');
    $grid.removeClass('active');
    for(var value of arr){
        let num=value[0]*50+value[1];
        $grid.eq(num).addClass('active');
    }
    var food = Model.getFood();
    $grid.eq(food[0]*50+food[1]).addClass('active');
}

export default render;