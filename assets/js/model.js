var Model={
    headDir : 2,
    data    : [
        [25,25],
        [25,24],
        [25,23],
        [25,22],
        [25,21]
    ],
    getDate:function(){
        return this.data;
    },
    setData:function(dir){
        if ( dir === 1 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][0] -= 1;
            return ;
        } else if ( dir === 2 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][1] += 1;
            console.table(this.data);
            return ;
        } else if ( dir === -1 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][0] += 1;
            return ;
        } else if ( dir === -2 && dir+this.headDir !==0) {
            this.headDir = dir;
            this.data=forward(this.data);
            this.data[0][1] -= 1;
            return ;
        } else {
            return ;
        }
    }
}

function forward(arr){
    var x=arr[0][0],y=arr[0][1];
    var temp=arr.slice(0,arr.length-1);  
    temp.unshift([x,y]);
    return temp;
}

module.exports=Model;