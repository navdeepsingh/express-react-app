import React from "react";
import { testApiSlice, useGetTestQuery } from  "./api/testApiSlice.js";
import { useDispatch } from "react-redux";


function App() {
  const [data, setData] = React.useState(null);
  const [count, setCount] = React.useState(0);
  //const dispatch = useDispatch();
  const query = useGetTestQuery()
  console.log('query', query)
  
  

  const handleClick = async (e) => {
    e.preventDefault();
    //setCount(count => count+1);
    //dispatch(query)
    // console.log(testData)
    fetch("http://localhost:8080/api/")
      .then((response) => response.json())
      .then((data) => setData(data) );
  }
  return (
  <>
   
      Testing Navdeep & Sarab =&gt; 👨‍👨‍👦‍👦
      <button onClick={handleClick}>Trigger API</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
   
  </>
  );
}
export default App;
