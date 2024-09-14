"use client"

import Nav from '@/components/custom/nav'
import { TooltipProvider } from '@/components/ui/tooltip'
import { BarChartBig, BoxesIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const SideMenu:React.FC<Props> = ({}) => {

    const pathname = usePathname();

    return (
        <TooltipProvider>
            <Nav
                isCollapsed={false}
                links={[
                    {
                        title: "Dashboard",
                        label: "",
                        icon: BarChartBig,
                        variant:  pathname === "/dashboard" ? "default" : "ghost" ,
                        url: "/dashboard"
                    },
                    {
                        title: "Resources",
                        label: "",
                        icon: BoxesIcon,
                        variant:  pathname.startsWith("/dashboard/resources") ? "default" : "ghost" ,
                        url: "/dashboard/resources"
                    },
                ]}
            />
        </TooltipProvider>
    )
}

export default SideMenu