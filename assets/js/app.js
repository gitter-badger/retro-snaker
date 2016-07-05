import generateGrid from './view';
import Model from './model';
import render from './controller';

generateGrid(50,50);
var date = Model.getDate();
render(date);

setInterval(function(){
    
    Model.setData(-1);
    let tempData=Model.getDate();
    render(tempData);

},1000);
