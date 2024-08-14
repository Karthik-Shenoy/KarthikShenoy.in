import * as React from "react";
import { DropdownMenuContent, DropdownMenuItem } from "@shadcn-ui/components/ui/dropdown-menu";
import { cn } from "@shadcn-ui/lib/utils";
import { MenuItemsList } from "./DropDownMenu.types";
import { FlexDiv } from "../FlexIBox/FlexDiv";

export type MenuContentBuilderProps = {
    menuItems: MenuItemsList;
    className?: string;
};

export const MenuContentBuilder: React.FC<MenuContentBuilderProps> = ({ className, menuItems }) => {
    return (
        <DropdownMenuContent className={cn(`w-56`, className)}>
            {menuItems.kind === "MenuItemModelList" ? (
                menuItems.items.map((menuItem) => {
                    return (
                        <DropdownMenuItem key={menuItem.key} onClick={ () => menuItem.onClick?.(menuItem.key)}>
                            <FlexDiv horizontal className="gap-x-2 items-center">
                                {menuItem.icon}
                                <span>{menuItem.text}</span>
                            </FlexDiv>
                        </DropdownMenuItem>
                    );
                })
            ) : (
                <>{...menuItems.items}</>
            )}
        </DropdownMenuContent>
    );
};
