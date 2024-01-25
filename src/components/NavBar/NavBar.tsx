import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
        <div className="border-b border-gray-200">
          <div className="flex h-16 item-center">
            {/*TODO:Mobile nav */}

            <div className="ml-4 flex lg:ml-0">
              <Link href="/">{<Icons.logo className="h-10 w-10" />}</Link>
            </div>
            <div className="hidden z-50 lg:ml-8 lg:self-stretch lg:block">
              <NavItems />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
