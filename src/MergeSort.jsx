const MergeSort = (array) => {
    let animations = [];
    let low=0;
    let high = array.length-1;
    console.log(high)
    mergeSortHelper(array,low,high,animations);
    return animations;
}

const mergeSortHelper = (array,low,high,animations) => {
    if(low>=high) return;
    let mid = low + parseInt((high-low)/2);
    mergeSortHelper(array,low,mid,animations);
    mergeSortHelper(array,mid+1,high,animations);
    merge(array,low,mid,high,animations);
}

const merge = (array,low,mid,high,animations) => {
    let x = low;
    let temp = [];
    let left = low;
    let right = mid+1;

    while(left<=mid && right<=high){
        animations.push([left,right]);
        animations.push([left,right]);
        if(array[left]<=array[right]){
            animations.push([x,array[left]]);
            temp.push(array[left]);
            x++;
            left++;
        }else{
            animations.push([x,array[right]]);
            temp.push(array[right]);
            x++;
            right++;
        }
    }

    while(left<=mid){
        animations.push([left,left]);
        animations.push([left,left]);
        animations.push([x,array[left]]);
        temp.push(array[left]);
        x++;
        left++;
    }

    while(right<=high){
        animations.push([right,right]);
        animations.push([right,right]);
        animations.push([x,[right]]);
        temp.push(array[right]);
        x++;
        right++;
    }
    for(let i= low; i<=high; i++){
        array[i]=temp[i-low];
    }
}

export default MergeSort;