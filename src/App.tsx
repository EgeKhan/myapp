import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButonComponent from './deneme';
import DenemeComponent from './deneme2';
import ModalComponent from './modal';
import useDeneme from './useDeneme';




function App() {

  // const [deneme, setDeneme] = useState<any>("qwe");
  
  const [deneme, setDeneme] = useState<any>("black");
  const [height,setHeight] = useState<any>(25)
  
  // useEffect( () => {
  //   alert('Değişti!!')
  // },[])

    // const myFunction = () => {
      
    //   let element: any = Array.from(document.getElementsByClassName('deneme'))
    //   element.forEach((item:any) => {
    //     if(item.style.backgroundColor === 'black'){
    //       item.style.display = 'none'
    //     }
    //   })
    // }

    // let deneme1: String;
    // deneme1 = '1'

    // const myFunction2 = (e:any) => {
    //   if(e.target.value !== 'deneme'){
    //     e.target.style.border = '1px solid red'
    //   }else{
    //     e.target.style.border = '1px solid green'
    //   }
    // }


    const data: any = [
      {
          id: 1,
          text: "Veri 1"
      },
      {
          id: 2,
          text: "Veri 2"
      },
      {
          id: 3,
          text: "Veri 3"
      }
  ]

  const controller = useDeneme();
  



  return (
    <>
     {/* <input onBlur={myFunction2}/>      */}

      {/* <div>{deneme}</div> */}
      <div
      style={{ background: deneme, height: height, width: 25}}
      >

      </div>
      {/* <button onClick={() => {setDeneme('Kaan')}}>TIkla</button> */}

      {/* <button onClick={() => {
        setDeneme('red')
        setHeight(50)
        }}>Tıkla</button>
        
        <ButonComponent buttonText={'TIKLA'}/>
        <ButonComponent buttonText={'TIKLARSAN OLMAZ'}/> */}
        <DenemeComponent child={<ButonComponent buttonText={'TIKLA'}/>}/>
        
        {data.map((item:any) => (
          <>
          <ButonComponent buttonText={item.id}/>
          <ButonComponent buttonText={item.text}/>
          </>
        ))}

        <div>
          {controller.deneme}
          <button onClick={() =>{controller.setDeneme('Kaan')}}>Tıkla-123</button>
        </div>
          <ModalComponent/>
    </>
    
  );
} 

export default App;
