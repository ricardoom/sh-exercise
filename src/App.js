import './App.css';
import CallToAction from './components/CallToAction';
import Earn from './components/Earn';
const App = () => {
  return (
    <section className='flex items-center w-9/12'>
      <CallToAction headingTwo='StableEarn Account' headingThree='Get better returns on small deposits' />
      <Earn />
    </section>
  );
};

export default App;
