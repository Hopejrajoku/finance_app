import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { LayoutDashboard, PenBox } from "lucide-react"
import { checkUser } from "@/lib/checkUser"



const Header = async () => {

  await checkUser();


  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
        <Image
            src={"/logo.png"}
            alt="Swyft logo"
            width={130}
            height={50}
            className="h-8 w-auto object-contain"
         />
        </Link>    
      <div className="flex items-center space-x-3">
        
        <SignedIn>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Button 
            variant="outline" 
            className="cursor-pointer"
            >
                <LayoutDashboard size={18}/>
                <span
                className="hidden md:inline"
                >Dashboard</span>
            </Button>
            </Link>

            <Link href="/transaction/create" >
            <Button 
            variant="def"
            className="cursor-pointer flex items-center gap-2"
            >
                <PenBox size={18}/>
                <span
                className="hidden md:inline"
                >Add Transaction</span>
            </Button>
            </Link>
        </SignedIn>

      <SignedOut>        
          <SignInButton forceRedirectUrl="/dashboard">
          <Button variant="outline" className="cursor-pointer">Login</Button></SignInButton>         
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements:{
              avatarBox: "w-13 h-13",
            },
          }}/>
      </SignedIn>
      </div>
      </nav>
    </div>
  )
}

export default Header
