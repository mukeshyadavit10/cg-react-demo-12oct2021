import { useEffect, useState } from "react";
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Login from "./components/Login";
import Register from "./components/Register";
import SpringBootData from "./components/SpringBootData";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Routes />
    </ div>
  );
}
export default App;
































// import Department from "./components/Department";
// // import { useState } from "react";
// import { useEffect, useState } from "react";
// import EmpData from "./components/EmpData";
// import Header from "./components/Header";
// import Hello from "./components/Hello";
// import Register from "./components/Register";
// import SpringBootData from "./components/SpringBootData";

// const App = () => {
//   console.log('Parent component');
//   const num = 10;
//   const myData = { abc: 15, def: 25 }
//   const myArray = [10, 20, 30];

//   const [dataFromChild, setDataFromChild] = useState(4);

//   useEffect(() => {
//     console.log('parent useEffect');
//     setDataFromChild(5);
//   }, []);

//   const parentFun = (arg) => {
//     console.log('parentFun');
//     setDataFromChild(arg()); // callback
//     console.log(dataFromChild);
//   }
//   const [dataFromDept, setDataFromDept] = useState(6);

//        useEffect(() => {
//          console.log('dept parent useEffect');
//          setDataFromDept(8);
//        }
//        ,[]);

//        const departFun = (arg) => {
//          console.log('Dept parent fun');
//          setDataFromDept(arg);
//          console.log(dataFromDept);
//        }


//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <p className="display-4 text-primary" >CG React App</p>
//         {/* <Hello /> */}
//         {/* <Register /> */}
//         <SpringBootData />
//         {/* <p>Child data in parent component: {dataFromChild} </p>
//         <p>Department child data in parent component : {dataFromDept}</p> */}
//         {/* This will not work */}
//         {/* <p>{myData} </p> */}
//         {/* This will work  */}
//         {/* <p>{myData.abc} </p>
//         <p>{myData.def} </p>
//         <p>{myArray}</p>
//         <p>{myArray[0]}</p>
//         <p>{num}</p>
//         <EmpData
//           // normalFun={aNormalFunction}
//           callParentFun={parentFun}
//           someData={myData} 
//           numToPassToChild={num}
//           anotherData={myData}
//         />
//         <Department 
//         callDepartFun={departFun}/> */}
//       </div>
//     </div>
//   );
// }
// export default App;








































// // // import { useState } from "react";
// // import { useEffect, useState } from "react";
// // // import { useEffect } from "react";
// // import EmpData from "./components/EmpData";
// // import Header from "./components/Header";

// // const App = () => {
// //   console.log('App');
// //   const num = 10;
// //   const myData = { abc: 15, def: 25 }
// //   const myArray = [10, 20, 30];

// //   let dataFromChild = 0;

// //   // useEffect(() => {
// //   //   dataFromChild = 45;
// //   // }, []);

// //   const parentFun = (arg) => {
// //     console.log('parentFun');
// //     dataFromChild = arg(); // callback
// //     console.log(dataFromChild);
// //   }

// //   // const aNormalFunction = () => {
// //   //   console.log('normal funciton');
// //   // }

// //   return (
// //     <div>
// //       <Header />
// //       <h1>CG React App</h1>
// //       <p> {dataFromChild} </p>

// //       {/* This will not work */}
// //       {/* <p>{myData} </p> */}
// //       {/* This will work  */}
// //       <p>{myData.abc} </p>
// //       <p>{myData.def} </p>
// //       <p>{myArray}</p>
// //       <p>{myArray[0]}</p>
// //       <p>{num}</p>
// //       <EmpData
// //         // normalFun={aNormalFunction}
// //         callParentFun={parentFun}
// //         someData={myData}
// //         numToPassToChild={num}
// //         anotherData={myData}
// //       />
// //     </div>
// //   );
// // }
// // export default App;


















// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //     <p>Hello World</p>
// //     </div>
// //   );
// // }

// // export default App;



















// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>Mukesh
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
