import Nav from "./Nav";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 w-full shadow-md bg-primary py-4 z-50 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Logo/>

            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>

        </div>
    </header>
  )
}

export default Header