"use client";
import Image from "next/image";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Separator } from "../ui/separator";
import { Custom_Button } from "../Button";
import { MenuDialog } from "../Menu-Dialog";

const Custom_Separator = () => {
  return <Separator orientation="vertical" className="opacity-25" />;
};

const Header = () => {
  return (
    <nav className="w-full h-24 bg-ber-gray flex justify-center items-center fixed top-0 z-50">
      {/* Desktop Header */}
      <div className="responsive-desk w-site-view flex flex-row justify-between items-center my-6 px-3">
        <div className="w-1/3 flex flex-col justify-center items-start">
          <Image
            className="w-auto h-auto"
            src={"/logo-dropshadow.svg"}
            alt={"Logo Be Resolution"}
            width={0}
            height={0}
            priority
          />
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
          <Menubar className="bg-transparent border-none">
            <MenubarMenu>
              <Custom_Button.Header>INÍCIO</Custom_Button.Header>
              <Custom_Separator />
              <Custom_Button.Header>ATIVIDADES</Custom_Button.Header>
              <Custom_Separator />
              <Custom_Button.Header>SOLUÇÕES</Custom_Button.Header>
              <Custom_Separator />
              <Custom_Button.Header>SOBRE NÓS</Custom_Button.Header>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-end">
          <Custom_Button.Green>ENTRE EM CONTATO</Custom_Button.Green>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="responsive-mob w-site-view flex flex-row justify-between items-center my-6 px-3">
        <div className="w-1/2 flex flex-col justify-center items-start">
          <Image
            className="w-auto h-auto"
            src={"/logo-dropshadow.svg"}
            alt={"Logo Be Resolution"}
            width={0}
            height={0}
            priority
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-end">
          <MenuDialog/>
        </div>
      </div>
    </nav>
  );
};

export default Header;
