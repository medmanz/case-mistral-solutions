"use client";

import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import { cn } from "@/lib/utils";

const TabsRoot = BaseTabs.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof BaseTabs.List>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(({ className, children, ...props }, ref) => (
  <BaseTabs.List
    ref={ref}
    className={cn(
      "relative inline-flex items-center gap-1 rounded-full bg-[#F4F2EF] p-1",
      className,
    )}
    {...props}
  >
    <BaseTabs.Indicator
      className={cn(
        "absolute inset-y-1 left-0 -z-0 rounded-full bg-white shadow-[0_1px_2px_rgba(20,17,15,0.06),0_0_0_1px_rgba(20,17,15,0.04)]",
        "transition-[transform,width] duration-200 ease-out",
      )}
      style={{
        width: "var(--active-tab-width)",
        transform: "translateX(var(--active-tab-left))",
      }}
    />
    {children}
  </BaseTabs.List>
));
TabsList.displayName = "TabsList";

const TabsTab = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Tab>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, ...props }, ref) => (
  <BaseTabs.Tab
    ref={ref}
    className={cn(
      "relative z-10 inline-flex items-center justify-center rounded-full px-3.5 py-1.5",
      "text-[13px] leading-[20px] font-medium whitespace-nowrap",
      "text-[#79716B] transition-colors duration-150",
      "hover:text-[#14110F]",
      "focus-visible:outline-none",
      "data-[selected]:text-[#14110F]",
      className,
    )}
    {...props}
  />
));
TabsTab.displayName = "TabsTab";

const TabsPanel = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={cn("focus-visible:outline-none", className)}
    {...props}
  />
));
TabsPanel.displayName = "TabsPanel";

export {
  TabsRoot as Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
};
