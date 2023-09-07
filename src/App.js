import "./App.css";
import Logo from './assets/images/Bright TECH & VOC INSTITUTE .svg'
import instagram from './assets/images/instagram (1).svg'
import facebook from './assets/images/facebook.svg'
import linkedin from './assets/images/linkedin.svg'
function App() {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between pb-4 mt-8">
        <div className="flex gap-2">
        <img src={Logo} className="w-14 align-middle" alt="" />
        <div className="mt-4">
        <h1  className="font-medium">Bright Technical and Vocational Institute</h1>
        <h1>پەیمانگەی تەکنیکی و پیشەیی بڕایت</h1>
        </div>
        </div >
        <div className="flex gap-4">
        <a href="https://www.facebook.com/profile.php?id=100092749866095">
          <img src={facebook} className="w-8" alt="" />
        </a>
        <a href="https://www.instagram.com/btvi_institute?fbclid=IwAR3NFIBacft6JneiaufquZIx_7g9giKHRoPP4qbdQihI8Ru8coQJAFm2fVA">
          <img src={instagram} className="w-8" alt="" />
        </a>
        <a href="https://www.instagram.com/btvi_institute?fbclid=IwAR3NFIBacft6JneiaufquZIx_7g9giKHRoPP4qbdQihI8Ru8coQJAFm2fVA">
          <img src={linkedin} className="w-8" alt="" />
        </a>
        </div>
      </div>

      <div className="flex justify-around align-top mt-28">
        <div className="mt-20">
          <h1 className="text-left ">OUR EDUCATION WEBSITE IS</h1>
          <h1 className="text-7xl my-4 text-left font-extrabold text-[#173C57]">COMING SOON</h1>
          <div>
            <div className="flex gap-6">
            <p>Pharmacy</p>
            <p>Nursing</p>
            <p> Business Administration</p>
            <p>Motion Graphics</p>
            </div>
            <div className="flex gap-6">
            <p>Renewable Energies</p>
            <p>Information Technology</p>
            <p>Interior Design</p>
            </div>
            <div className="flex gap-6">
            <p>Automotive Mechanical Service</p>
            <p>Automotive Electrician Service</p>
            </div>
          </div>
          <button className="mt-4 px-8 py-6 bg-[#F5B70E] text-black font-medium "><a href="tel:+964 07703400202 ">CONTACT US</a></button>
          <div></div>
        </div>
       <div>
       <img src={Logo} className="w-64" alt="bright logo" />
       </div>
      </div>
    </div>
  );
}

export default App;
