"use client";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Logo from './Logo';
import { links } from './common';
import { useState } from 'react';

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeSheet = () => setIsOpen(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTitle/>
            <SheetClose />
            <SheetTrigger
                onClick={() => setIsOpen(true)}
                className="flex justify-center items-center"
            >
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-20 text-center text-2xl'>
                    <Logo />
                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                                onClick={closeSheet}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav