import model from "../../assets/3DModel.png"
import shadow from "../../assets/shadowModel.svg"

export default function RightSide() {
  return (
    <div className={`md:col-span-5 sm:col-span-4 relative  flex flex-col  items-center `}>

        <div className="absolute rounded-[20px] bg-linearBackground  w-[50%] h-[100%] blur-[90px] animate-levitation"></div>

        <img src={`${model}`} alt="3D Model" className="sm:w-[100%] w-[50%] relative  animate-levitation "/>

          
        <div className="sm:w-[40%] w-[20%] absolute -bottom-[0%] animate-shadowScale flex justify-center">
            <img src={shadow} alt="shadow" />
        </div>

    </div>
  )
}
