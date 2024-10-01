"use client"
import Image from "next/image"

const Section06 = () => {
    return (
        <div className="w-full h-[761px] bg-[url('/bg_section_06.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center">
            <div className="w-[1300px]">
                <div className="w-[550px] bg-white rounded-3xl p-8 flex flex-col space-y-4">
                    <h2 className="font-extrabold text-[42px]">Entre em <strong className="text-ber-green">contato</strong></h2>
                    <div className="">
                        <Image src={"/img_form_section_06.png"} alt={"image form"} width={467} height={408}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section06