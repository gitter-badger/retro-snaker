var Model={
    headDir : 2,
    data    : [
        [25,25],
        [25,24],
        [25,23],
        [25,22],
        [25,21]
    ],
    food:[25,27],
    getDate:function(){
        return this.data;
    },
    setData:function(dir){
        this.headDir = dir;
        var currrentHead=[this.data[0][0],this.data[0][1]];
        if ( dir === 1 && dir+this.headDir !==0) {
            currrentHead[0]-=1;
        } else if ( dir === 2 && dir+this.headDir !==0) {
            currrentHead[1]+=1;
        } else if ( dir === -1 && dir+this.headDir !==0) {
            currrentHead[0]+=1;
        } else if ( dir === -2 && dir+this.headDir !==0) {
            currrentHead[1]-=1;
        } else {
            return ;
        }
        if(currrentHead[0] === this.food[0] && currrentHead[1]===this.food[1]){
            console.log('吃到了');
            this.data.unshift(currrentHead);
            this.setFood();
            return;
        };
        this.data=forward(this.data);
        this.data[0]=currrentHead;
        if(isOver(this.data)){
            alert('Game over!!!!!');
            this.init();
        };
    },
    getFood:function(){
        return this.food;
    },
    init:function(){
        this.data=[
            [25,25],
            [25,24],
            [25,23],
            [25,22],
            [25,21]
        ];
    },
    isEat:function(){
        if(this.data[0][0]==this.food[0] && this.data[0][1]== this.food[1]){
            return true;
        }
        return false;
    },
    setFood:function(){
        this.food = randomFood();
    }
}

function forward(arr){
    var x=arr[0][0],y=arr[0][1];
    var temp=arr.slice(0,arr.length-1);  
    temp.unshift([x,y]);
    return temp;
}

function isOver(data){
    var head=data[0];
    var xFail = head[0] < 0 || head[0] >= 50,
        yFail = head[1] < -1 || head[1] >= 49,
        crashed;
    for(let i=1;i<data.length;i++){
        if(head[0] === data[i][0]){
            if(head[1] === data[i][1]){
                crashed = true;
                break;
            }
        }
    }
    var result = xFail || yFail || crashed;
    return result;
}

function randomFood(){
    let x = Math.floor(Math.random()*50);
    let y = Math.floor(Math.random()*50);
    return [x,y];
}


module.exports=Model;