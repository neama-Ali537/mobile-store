import React, { useEffect, useState } from "react";

export default function Taskes() {
  // task one
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(0);
  // task 2
  const [numberList, setNumberList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // task one
  const plusOne = () => {
    setCounter(counter + 1);
  };
  const minusOne = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  // task 2
  const addNumber = () => {
    if (inputValue !== "") {
      setNumberList([...numberList, Number(inputValue) + " "]);
      setInputValue("");
    }
  };

  const dubledNumder = () => {
    let duble = numberList.map((num) => num * num);
    setNumberList(duble);
  };
  const clearValue = () => {
    setNumberList([]);
  };
  // ///////////////////////////
  useEffect(() => {
    const interval = setInterval(
      () => setDate((prevCounter) => prevCounter + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container bg-slate-500 mx-auto p-4 rounded-lg shadow-md">
        <h2>Task one :</h2>
        <button
          onClick={plusOne}
          className="mx-2 bg-rose-950 text-gray-300 p-2 rounded-lg hover:bg-red-400 hover:text-gray-950 border-1"
        >
          plus
        </button>
        <button
          onClick={minusOne}
          className="mx-2 bg-orange-800 text-gray-300 p-2 rounded-lg hover:bg-amber-950 hover:text-gray-300 border-1"
        >
          mins
        </button>
        <button
          onClick={resetCounter}
          className="mx-2 bg-red-800 text-gray-300 p-2 rounded-lg hover:bg-amber-950 hover:text-gray-300 border-1"
        >
          Reset
        </button>
        <p>{counter}</p>
        <p>date :{date}</p>
      </div>
      <div className="task2 container bg-red-300 text-gray-950">
        <h2>Task Two</h2>
        <label className=" text-lime-50 border-l-gray-600 " htmlFor="number">
          Write a number
        </label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-slate-500  w-60 rounded-lg m-3 p-2 "
          type="number"
        />
        <div className="">
          <button
            onClick={addNumber}
            className=" bg-neutral-800 text-lime-50 p-2 rounded-lg m-3 hover:bg-gray-700"
          >
            Add
          </button>
          <button
            onClick={dubledNumder}
            className="bg-lime-950 text-lime-50 p-2 rounded-lg m-3 hover:bg-gray-700"
          >
            Duble
          </button>
          <button
            onClick={clearValue}
            className="bg-red-900 text-lime-50 p-2 rounded-lg m-3 hover:bg-gray-700"
          >
            Clear
          </button>
        </div>
        <ul>
          {numberList.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <div className="container ">
        <div className="p-4 flex flex-col items-center  card bg-violet-300 text-gray-950">
          <img className="w-52 rounded-lg m-auto " src="imgs/phone2.jpg" alt="card" />
          <h2 className="text-center border-l-4 font-mono text-2xl">Awesome Product</h2>
          <p className="text-center text-gray-600">This is a short description of the product</p>
          <button className="text-center m-auto p-2 bg-sky-800 text-gray-400 rounded-lg">Add to Cart</button>
        </div>

      </div>
      <div className="container">
      <div class="flex flex-row ">
  <div class="w-1/3 bg-blue-500 p-4">Box 1</div>
  <div class="w-1/3 bg-green-500 p-4">Box 2</div>
  <div class="w-1/3 bg-red-500 p-4">Box 3</div>
</div>

      </div>
    </>
  );
}
let reverseWord = "hello".split("").reverse().join("");

console.log(reverseWord);
