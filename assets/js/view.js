var $ = require('jquery');

var generateGrid = function(widthNum = 100 , heightNum = 100 , SnakerLength = 5){
    var html='';
    for(let i = 0 ; i < heightNum * widthNum ; i++ ){
        html += '<div class="grid"></div>';
    }
    $('#app-container').html(html);
}

export default generateGrid;