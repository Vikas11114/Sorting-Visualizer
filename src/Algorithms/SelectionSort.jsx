const SelectionSort = (array) => {
const animations = [];

let n=array.length;
for(let i=0; i<n; i++){
    let minInd = i;
    for(let j=i+1; j<n;j++){
        if(array[j]<array[minInd]){
            minInd=j; 
        }
        animations.push([i,minInd,j,0]);
        animations.push([i,minInd,j,1]);
    }
    animations.push([i,array[i],minInd,array[minInd],2]);
    let temp = array[i];
    array[i]=array[minInd];
    array[minInd]=temp;
}

return animations;

}
export default SelectionSort;