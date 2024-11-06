import Link from "next/link";

const Logo = () => {
    return (
      <Link href="/" className="flex items-end justify-center gap-2">
          <img src="/logo.svg" alt="logo" width={80} height={80} />
          <h1 className="text-xl font-semibold">
              Amha K<span className="text-accent">.</span>
          </h1>
      </Link>
    )
  }
  
  export default Logo