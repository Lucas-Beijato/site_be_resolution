"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-ber-gray w-full flex flex-col py-16 justify-center items-center text-white">
      
      <div className="smartphone-p:flex-col xl:flex-row flex desktop:w-[1300px] justify-center items-center">
        
        <div className="w-1/3 flex flex-col justify-center items-center">
          <Link href={"/"}>
            <Image
              className="desktop:w-auto desktop:h-auto"
              src={"/logo-dropshadow.svg"}
              alt={"Be Resolution Logo"}
              width={0}
              height={0}
            />
          </Link>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center">
          <div className="w-fit h-fit">
            <h3 className="text-[25px] font-semibold">Somos</h3>
            <p className="text-[20px]">
              <strong className="font-black text-ber-green pr-1">{">"}</strong>
              Rápidos
            </p>
            <p className="text-[20px]">
              <strong className="font-black text-ber-green pr-1">{">"}</strong>
              Diferentes
            </p>
            <p className="text-[20px]">
              <strong className="font-black text-ber-green pr-1">{">"}</strong>
              Efetivos
            </p>
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center">
          <div className="w-fit h-fit space-y-1">
            <h3 className="text-[25px] font-semibold">Entre em contato</h3>
            <p className="text-[20px]">{"(44) 3028-0123"}</p>
            <p className="text-[20px]">{"contato@beresolution.com.br"}</p>
            <ul className="flex flex-row space-x-2">
              <li>
                <Link href={"tel:44 3028-0123"} target="_blank">
                  <Image
                    src={"/cell_phone_icon.png"}
                    alt={"cell_phone"}
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/beresolution/"} target="_blank">
                  <Image
                    src={"/instagram_icon.png"}
                    alt={"instagram"}
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://www.facebook.com/beresolution"} target="_blank">
                  <Image
                    src={"/facebook_icon.png"}
                    alt={"facebook"}
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
