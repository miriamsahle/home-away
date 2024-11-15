import Link from "next/link";
import { RiBearSmileFill } from "react-icons/ri";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <RiBearSmileFill className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
