"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Logo from "./Logo.jsx";
import Logo2 from './Logo2.jsx'
import './page.css'

export default function DogsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      route: "Nosotros",
      ref: "#nosotros",
    },
    {
      route: "Paseos",
      ref: "#paseos",
    },
    {
      route: "Contacto",
      ref: "#contacto",
    },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} height={'120px'} className="bg-orange-50 bg-opacity-50" >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
            <Logo2 />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10 justify-end ">
        <NavbarBrand>
          <Link href="/">
            <Logo />
            <Logo2 />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-black" href="#nosotros">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-black" href="#paseos">
            Paseos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "foreground"
                  : index === menuItems.length - 1
                  ? "foreground"
                  : "foreground"
              }
              href={item.ref}
              size="lg"
            >
              {item.route}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
