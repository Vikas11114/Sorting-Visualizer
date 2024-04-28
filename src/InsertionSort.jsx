const InsertionSort = (array) => {
    let animations = [];
    for(let i=1; i<array.length; i++){
        animations.push([i,i-1,0]);
        animations.push([i,i-1,1]);
        if(array[i-1]>array[i]){
            let j = i;
            let k=i-1;
            while(array[j]<array[k] && k >= 0 ){
                let temp = array [j];
                animations.push([k,j,0]);
                animations.push([k,j,1]);
                animations.push([k,temp,j,array[k]]);
                array[j]=array[k];
                array[k]=temp;
                k--;
                j--;
            }
            //animations.push([k,k+1,temp,-1]);
            //array[k+1] = temp;
        }
    }
    return animations;
}

export default InsertionSort;