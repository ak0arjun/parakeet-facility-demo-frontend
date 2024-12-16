"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export enum SIDEBAR_ACTION_TYPE {
    FACILITY = "facility",
    PLANS = "plans",
    WEBHOOKS = "webhook",
    API_KEYS = "api-keys",
    ESIMS = "esim",
    SUBSCRIPTIONS = "subscriptions",
    SUBSCRIPTIONS_V2 = "subscriptions-v2",
}


export function SidebarComponent() {
    const router = useRouter();
    let currentPathName = usePathname();
    
    useEffect(() => {
        router.prefetch("/facility");
      }, []);
      
    return (
        <>
            <div className="px-6 py-4 bg-foreground h-full relative w-[20rem] cursor-pointer">
                <div className="h-9"></div>
                <div
                    onClick={() => sidebarClickHandler(SIDEBAR_ACTION_TYPE.FACILITY)}
                    className={
                        isTabHighlighted(SIDEBAR_ACTION_TYPE.FACILITY) +
                        " flex flex-row rounded-lg px-4 py-3 min-w-[180px] cursor-pointer"
                    }
                >
                    <div id="facilityLabel" className="px-2 text-base font-semibold text-black">
                        Facility Management
                    </div>
                </div>
            </div>
        </>
    );

    function sidebarClickHandler(type: SIDEBAR_ACTION_TYPE): void {
        switch (type) {
            default: {
                currentPathName = "/facility";
                router.push("/facility");
                break;
            }
        }
    }

    /**
     * Check if given item type is to be highlighted
     * @param type Type of the item
     * @returns
     */
    function isTabHighlighted(type: SIDEBAR_ACTION_TYPE): string {
        switch (type) {
            case SIDEBAR_ACTION_TYPE.FACILITY: {
                if (currentPathName == "/facility") {
                    return "bg-selection-color ";
                }
                break;
            }
        }
        return "";
    }
}