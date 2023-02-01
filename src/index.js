import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from '../src/myfolder/header';
import Banner from '../src/banner/banner';
import Content from './content/content';
import Footer from './footer/footer';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Main(){
  const [feature,setFeature]=useState('hooks')
  const data={
    name:"sathish", 
    age:24
  }
  const getData=(param)=>{
     console.log("called",param)
  }
  return ( 
  <div>
    {feature}
    <button onClick={()=>setFeature("updated hooks")}>updated</button>
    <Header name={data.name}sports="cricket" get={getData} feature={feature}/>
    <Banner/>
    <Content/>
    <Footer/>

    sathish</div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
