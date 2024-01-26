import Hero from '../hero';
import Navbar from '../navbar/navbar';
import './main.css'

export default function Main() {
  return (
    <div className="wrapper">

      <div className="container">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  );
}
