import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/custom/dialog";
import { Custom_Button } from "../Button";
import Link from "next/link";
import { DialogClose } from "../ui/dialog";

const MenuDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <HamburgerMenuIcon className="text-white w-6 h-6" />
      </DialogTrigger>
      <DialogContent className="bg-ber-gray border-none text-white">
        <DialogHeader>
          <DialogTitle>Be Resolution</DialogTitle>
          <DialogDescription>Software</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-start">
          <DialogClose asChild>
            <Link href={"/#home"}>
              <Custom_Button.Header>INÍCIO</Custom_Button.Header>
            </Link>
          </DialogClose>

          <DialogClose asChild>
            <Link href={"/#activities"}>
              <Custom_Button.Header>ATIVIDADES</Custom_Button.Header>
            </Link>
          </DialogClose>

          <DialogClose asChild>
            <Link href={"/"}>
              <Custom_Button.Header>SOLUÇÕES</Custom_Button.Header>
            </Link>
          </DialogClose>

          <DialogClose asChild>
            <Link href={"/#about_us"}>
              <Custom_Button.Header>SOBRE NÓS</Custom_Button.Header>
            </Link>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { MenuDialog };
