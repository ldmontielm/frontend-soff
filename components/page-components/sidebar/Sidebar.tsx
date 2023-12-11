"use client";

import React, { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Routes } from "@/models/routes.models";
import SoffLogo from "@/public/soff.svg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChartPieIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  ChevronDownIcon,
  BriefcaseIcon,
  UserGroupIcon,
  SwatchIcon,
  ShoppingBagIcon,
  CakeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Wallet,
  ShoppingBag,
  Pizza,
  Beef,
  Briefcase,
  Fingerprint,
  Users,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    id: 2,
    name: "Ventas",
    icon: <Wallet size={18} />,
    url: Routes.CREATESALE,
    permission: "ventas",
  },
  {
    id: 3,
    name: "Compras",
    icon: <ShoppingBag size={18} />,
    url: Routes.CREATEPURCHASE,
    permission: "compras",
  },
  {
    id: 4,
    name: "Productos",
    icon: <Pizza size={18} />,
    url: Routes.CREATEPRODUCT,
    permission: "productos",
  },
  {
    id: 5,
    name: "Insumos",
    icon: <Beef size={18} />,
    url: Routes.SUPPLIES,
    permission: "insumos",
  },
  {
    id: 6,
    name: "Proveedores",
    icon: <Briefcase size={18} />,
    url: Routes.CREATEPROVIDER,
    permission: "proveedores",
  },
];

export default function SheetNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Bars3BottomLeftIcon className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex flex-row items-end gap-4 text-white">
          <div>
            <Image src={SoffLogo} alt="logo soff" />
          </div>
          <div className="flex flex-col sm:items-start">
            <p className="text-1xl font-bold">SOFF</p>
            <p className="text-[12px]">Systematization Of Fast Food</p>
          </div>
        </SheetHeader>
        <div className="flex flex-col w-full text-white mt-5">
          <Link
            href={Routes.DASHBOARD}
            className="flex items-center gap-4 p-3 rounded hover:bg-blue-800"
          >
            <LayoutDashboard size={18} />
            <p>Dashboard</p>
          </Link>
          {menuItems.map((item) => {
            if (
              session &&
              session.user &&
              session?.user.permissions.includes(item.permission)
            ) {
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className="flex items-center gap-4 p-3 rounded hover:bg-blue-800"
                >
                  {item.icon}
                  <p>{item.name}</p>
                </Link>
              );
            }
            return null;
          })}
          {session &&
          session.user &&
          session?.user.permissions.includes("configuracion") ? (
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <CollapsibleTrigger asChild>
                <div className="w-full cursor-pointer flex items-center justify-between gap-4 p-3 rounded hover:bg-blue-800">
                  <div className="flex items-center gap-4">
                    <Settings size={18} />
                    <p>Configuración</p>
                  </div>
                  <ChevronDownIcon
                    className={`transition ease-in-out w-4 h-4 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <Link
                  href={Routes.ROLES}
                  className="flex items-center gap-4 p-3 rounded hover:bg-blue-800"
                >
                    <Fingerprint size={18} />
                    <p>Roles</p>
                </Link>
                <Link
                  href={Routes.USERS}
                  className="flex items-center gap-4 p-3 rounded hover:bg-blue-800"
                >
                  <Users size={18} />
                  <p>Usuarios</p>
                </Link>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            ""
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
