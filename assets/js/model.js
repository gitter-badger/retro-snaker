var Model={
    headDir : 2,
    data    : [
        [25,25],
        [25,24],
        [25,23],
        [25,22],
        [25,21]
    ],
    food:[2,10],
    getDate:function(){
        return this.data;
    },
    setData:function(dir){
        if ( dir === 1 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][0] -= 1;
        } else if ( dir === 2 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][1] += 1;
        } else if ( dir === -1 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][0] += 1;
        } else if ( dir === -2 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][1] -= 1;
        } else {}
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

module.exports=Model;