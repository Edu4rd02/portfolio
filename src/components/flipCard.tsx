import { useState } from "react";

export function FlipCard() {
    const [select, setSelect] = useState(false);
  const [position, setPosition] = useState("");

  const handleMouseClick = () => {
    setSelect(!select);
    if (!select) {
      setPosition("transform:rotateY(180deg)");
    } else {
      setPosition("");
    }
  }
  
    return (
        <div className="group h-96 w-96 [perspective:1000px] mb-5">
            <div className={`relative h-full w-full transition-all duration-500 hover:[translateY(10px)] [transform-style:preserve-3d] ${select ? '[transform:rotateY(180deg)]' : ''} hover:-translate-y-3`}>

                <div className="absolute flex items-center justify-center inset-0 animate-border-run border-6   border-black rounded-[4rem]  backdrop-blur-lg shadow-2xl">
                    <button className="button bg-white font-bold" onClick={handleMouseClick}>Project</button>
                </div>
                <div className="absolute inset-0 bg-green-500 rounded-xl h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p>Esto es un ejemplo de un componente con perspectiva 3D</p>
                    <button onClick={handleMouseClick}>Adios</button>
                </div>
            </div>
        </div>
    )
}