import { useState } from "react";
import './about.css';

export default function About() {
    
  return (
      <div id="about" className="w-full bg-cover bg-no-repeat bg-center text-justify" style={{backgroundImage: 'url("/asset/gradient backgrounds/blue-turquoise gradient_2.png")'}}>
        <img src="/animated/dripping/Dripping-Border_yellow.gif" alt="logo" className="absolute z-40 w-full" />

        <div className="relative">
          <img src="/asset/star.png" alt="logo" className="absolute left-5 top-44 lg:right-36 top-30rem z-30 w-16 origin-center transform rotate-180" />
          <img src="/asset/flower(1).png" alt="logo" className="absolute top-40 right-10 lg:left-10 top-78rem z-30 w-16" />
          <img src="/asset/star.png" alt="logo" className="absolute bottom-16 lg:left-10 top-96rem z-30 w-16" />
          <img src="/asset/flower(1).png" alt="logo" className="absolute lg:right-10 top-116rem z-30 w-16" />
        </div>

        <img src="/animated/Drippy-Smiles-Title.gif" alt="drippy title" className="w-full pt-16 lg:pt-40 " />
        <p className="text-xl text-yellow-200 font-macaria px-10 pt-32 lg:text-2xl lg:pt-44 lg:pb-32 lg:px-36 " >
          Integer scelerisque bibendum dapibus. Curabitur accumsan nunc non viverra semper. In scelerisque enim congue est ultrices eleifend. Sed ex felis, rhoncus at nulla eget, aliquam porta turpis. Duis suscipit, metus quis pellentesque condimentum, quam est hendrerit lacus, faucibus commodo lectus ex ut magna. Vestibulum sagittis congue eleifend. Suspendisse potenti. Nullam quis dui lacinia, auctor elit vehicula, convallis tortor. Fusce porta est vel lorem vestibulum, in tempor neque convallis.<br /><br />
          Fusce vel laoreet elit. In egestas commodo diam ac imperdiet. Fusce scelerisque nec ipsum tristique ullamcorper. Maecenas ultrices aliquam lacus, id ornare leo rhoncus id. In dignissim efficitur finibus. Praesent est nunc, facilisis vitae gravida vitae, convallis quis massa. Nunc metus orci, tempus sit amet elit quis, rhoncus auctor nisi. Aenean condimentum blandit dolor, quis gravida tellus mattis id. Nunc ultrices feugiat erat, non egestas mauris tincidunt vel.<br /><br />
          Maecenas quis ullamcorper turpis. Morbi laoreet, nunc ac porta venenatis, justo nisl volutpat ipsum, nec egestas justo leo eget risus. Quisque eleifend lacus sapien, eget dictum felis congue quis. Cras posuere euismod commodo. Proin fermentum pharetra mollis. Pellentesque vel massa fringilla, pulvinar turpis nec, euismod sem. Sed lobortis dolor non purus tempus ultricies.<br /><br />
        </p>
        <img src="/asset/smileys.png" alt="smiles" className="w-full" />
      </div>
  );
}
