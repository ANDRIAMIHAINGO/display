
import { useState } from 'react'
import CodeDisplay from './components/Display'



function App() {
   const nav_fixed = document.querySelector('.nav_fixed_left');

  const [nav, setNav] = useState(false);
   function showNav(){
      setNav(!nav)
      if(nav == true){
      nav_fixed.classList.add('active')   
      }else{
      nav_fixed.classList.remove('active')   

      }
   } 
 
  return (
     <div>
      <div className="nav_fixed_left" >
        <div className="btn_left_show_nav" onClick={showNav}>

        </div>
        <div className="nav_container">

        </div>
      </div>
      <header>
        <h1>DISPLAY CODE</h1>
        <div className="rigth_header">
          <div className="github_container">
            <a href="#">Github Account</a>
          </div>
        </div>
      </header>
      <section className='section_code_container_and_description'>
        <div className="container_for_codepart">
          <div className="description_code_container">
            <p>If you want to display code in react.</p>
          </div>
         <div className="specific_container_for_code">
         <CodeDisplay/>

         </div>
        </div>
      </section>
     </div>
  )
}

export default App
