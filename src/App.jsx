import {useState } from "react";
import './index.css'
import MergeSort from "./MergeSort";
import InsertionSort from "./InsertionSort";
import BubbleSort from "./Algorithms/BubbleSort";
import SelectionSort from "./Algorithms/SelectionSort";

const App = () => {
const [array,setArray] = useState([])

const generateArray = () => {
  const newArr = [];
  for(let i=0; i<100; i++ ){
      let x = Math.floor(Math.random()*100 + 1) *7;
      newArr[i] = x;
  }
  setArray(newArr);
}

const arrayAreEqual = (array1,array2) => {
  if(array1.length !== array2.length) return false;
  for(let i=0; i<array1.length; i++){
    if(array1[i] !== array2[i]) return false;
  }
  return true;
}

const mergeSortt = () => {
  console.log('array = ',array);
  let animations = MergeSort(array);
  console.log("sorted array = ",array);
  
  for(let i=0; i<animations.length;i++){
    let colorChange = i%3 !== 2;
    let arrayBars = document.getElementsByClassName('array-bar');
    if(colorChange){
      let color = i%3 === 0 ? 'red' : 'rgb(14, 116, 144)' ;
      const[barOne,barTow] = animations[i];
      setTimeout(()=>{
        arrayBars[barOne].style.backgroundColor = color
        arrayBars[barTow].style.backgroundColor = color
      },i*5);
    }else{
      setTimeout(()=>{
        const[pos,hgt] = animations[i]
        arrayBars[pos].style.height = `${hgt}px`;
      },i*5);
    }
  }
  console.log("animations = ",animations);
}

const insertionSort = () => {
  console.log("array = ",array);
  let animations = InsertionSort(array);
  console.log("Sorted array = ",array);
  console.log(animations);
  for(let i=0; i<animations.length; i++){
    const arrayBar = document.getElementsByClassName('array-bar');
    let colorChange = animations[i].length === 3;
    if(colorChange){
      const [barOne,barTow,x] = animations[i];
      const color = x===0 ? 'red' : 'rgb(14, 116, 144)';
        setTimeout(()=>{
          arrayBar[barOne].style.backgroundColor = color;
          arrayBar[barTow].style.backgroundColor = color;
        },i*5); 
    }else{
      setTimeout(()=>{
        const[barOne,hgt1,barTwo,hgt2,] = animations[i];
        arrayBar[barOne].style.height = `${hgt1}px`;
        arrayBar[barTwo].style.height = `${hgt2}px`;
      },i*5);
    }
  }
}

const bubbleSort = () => {
  console.log("array = ",array);
  let animations = BubbleSort(array);
  for(let i=0; i<animations.length;i++){
    const arrayBar = document.getElementsByClassName('array-bar');
    const colorChange = animations[i].length === 3;
    if(colorChange){
      const[barOne,barTwo,x] =animations[i];
      let color = x===0 ? 'red' : 'rgb(14, 116, 144)';
      setTimeout(()=>{
        arrayBar[barOne].style.backgroundColor = color;
        arrayBar[barTwo].style.backgroundColor = color;
      },i*5);
    }else{
      const[barOne,hgt1,barTwo,hgt2] = animations[i];
      setTimeout(()=>{
        arrayBar[barOne].style.height = `${hgt1}px`;
        arrayBar[barTwo].style.height = `${hgt2}px`;
      },i*5)
    }
  }
  console.log("sorted Array = ", array);
  console.log(animations);
}

const selectionSort = () => {
  console.log("array = ", array);
  const animations =  SelectionSort(array);
  for(let i=0; i<animations.length; i++){
    const arrayBar = document.getElementsByClassName("array-bar");
    const colorChange = animations[i].length === 4;
    if(colorChange){
      const [barOne,barTwo,barThree,x] = animations[i];
      const color = x===0? 'red' :'rgb(14, 116, 144)';
      setTimeout(()=>{
        if(x===0){
          arrayBar[barOne].style.backgroundColor = color;
          arrayBar[barTwo].style.backgroundColor = 'yellow';
          arrayBar[barThree].style.backgroundColor = color;
        }else{
          //arrayBar[barOne].style.backgroundColor = color;
          arrayBar[barTwo].style.backgroundColor = color;
          arrayBar[barThree].style.backgroundColor = color;
        }
          
      },i*10)
    }else{
      const [barOne,valOne,barTwo,valTwo,x] = animations[i];
      setTimeout(()=>{
        arrayBar[barOne].style.backgroundColor = 'rgb(14, 116, 144)';
        arrayBar[barOne].style.height = `${valTwo}px`;
        arrayBar[barTwo].style.height = `${valOne}px`;
      },i*10)
    }
  }
  console.log("sorted array  = ",array);
  console.log("animations = ", animations);
}

return(
  <div className="flex flex-col items-center">
    <div className=" flex ">
      <button onClick={generateArray} className=" bg-gray-200 rounded-md border-4 border-black p-1 m-2 px-3 items-center align-middle">Generate Array</button>
      <div className=" justify-end">
        <button onClick = {selectionSort} className=" bg-gray-200 rounded-md border-4 border-black p-1 m-2 px-3 items-center align-middle">Selection sort</button>
        <button onClick={bubbleSort} className=" bg-gray-200 rounded-md border-4 border-black p-1 m-2 px-3 items-center align-middle">Bubble sort</button>
        <button onClick={insertionSort} className=" bg-gray-200 rounded-md border-4 border-black p-1 m-2 px-3 items-center align-middle">Insertion sort</button>
        <button onClick={mergeSortt} className=" bg-gray-200 rounded-md border-4 border-black p-1 m-2 px-3 items-center align-middle">Merge sort</button>
        <button className=" bg-gray-200 rounded-md border-4 border-black p-1 m-2 px-3 items-center align-middle">Quick sort</button>
      </div>
    </div>
    <div>
      <ul className=" flex ">
        {
          array.map( (val,id) => {
            return(
              <li id={id} key={id} style={{height:`${val}px`}} className={`w-2 bg-cyan-700 mx-1 ${'array-bar'}`} ></li>
            )
          })
        }
      </ul>
    </div>
  </div>
)
}

export default App
