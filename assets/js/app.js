import generateGrid from './view';
import Model from './model';
import render from './controller';

generateGrid(50,50);
var date = Model.getDate();
render(date);

setInterval(function(){
    Model.setData(Model.headDir);
    let tempData=Model.getDate();
    render(tempData);
},500);

document.onkeydown=function(e){
    if(e.which===37){                   //向左
        Model.setData(-2);
        render(Model.getDate());
    }else if(e.which === 38){           //向上
        Model.setData(1);
        render(Model.getDate());
    }else if(e.which === 39){           //向右
        Model.setData(2);
        render(Model.getDate());
    }else if(e.which === 40){           //向下
        Model.setData(-1);
        render(Model.getDate());
    }else{

    }
}
