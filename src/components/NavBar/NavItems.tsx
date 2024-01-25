"use client";
import { PRODUCT_CATEGORIES } from "@/app/config";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
type Category = (typeof PRODUCT_CATEGORIES)[number];
interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItems = () => {
  const [activeIndex, setactiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => {
    setactiveIndex(null);
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setactiveIndex(null);
      }
    };
    document.addEventListener("keydown", (e) => {
      handler(e);
    });
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setactiveIndex(null);
          } else {
            setactiveIndex(i);
          }
        };
        const isOpen = i == activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
