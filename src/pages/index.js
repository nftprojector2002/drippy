import Mint from "./component/Mint";
import Navbar from "./component/Navbar";
import About from './component/About'
import Roadmap from "./component/Roadmap";
import Team from "./component/Team";
import Faq from "./component/Faq";

export default function DrippySmile() {
    
  return (
    <div>
      
      <div className="grid bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url("/asset/gradient backgrounds/gradient1.png") ', height: "100%"}}>
        <Navbar />
        <Mint />
      </div>

      <About />
      <Roadmap />
      <Team />
      <Faq />
    </div>
  );
}
