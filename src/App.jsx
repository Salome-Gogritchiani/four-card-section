import './App.css';
import Starter from './components/starter/Starter';
import Supervisor from './components/starter/Supervisor';
import TeamBulder from './components/starter/TeamBulder';
import Karma from './components/starter/Karma';
import Calculator from './components/starter/Calculator';
export default function App() {
   return (
    <>
   <Starter/>
   <main>
   <Supervisor/> 
   <div className='box-conteiner'>
   <TeamBulder/>
   <Karma/>
   </div>
    <Calculator/>
  </main>
   
    </> 
  )
}

