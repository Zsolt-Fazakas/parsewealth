import React from "react";
import { SignInButton } from "@clerk/nextjs";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, PenBoxIcon } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-[#006d75] flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboardIcon size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link
              href="/transaction/create"
              className="text-gray-600 hover:text-[#006d75] flex items-center gap-2"
            >
              <Button>
                <PenBoxIcon size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}
