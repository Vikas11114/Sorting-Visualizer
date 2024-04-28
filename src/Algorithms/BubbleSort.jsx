const BubbleSort = (array) => {
    const animations = [];
    for(let i=array.length-1; i>0;i--){
        for(let j=0; j<i; j++){
            animations.push([j,j+1,0]);
            animations.push([j,j+1,1]);
            if(array[j]>array[j+1]){
                animations.push([j,array[j+1],j+1,array[j]]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return animations;
}
export default BubbleSort