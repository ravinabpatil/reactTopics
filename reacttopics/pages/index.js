import Image from "next/image";
import { Inter } from "next/font/google";
import UseStateEx from "@/components/hooks/useStateEx";
import UseEffectsEx from "@/components/hooks/useEffectsEx";
import UseCallBackEx from "@/components/hooks/useCallBackEx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <UseStateEx />
     <br/> <hr/><br/>
      <UseEffectsEx />
      <br/> <hr/><br/>
      <UseCallBackEx/>
    </>
  );
}
