import { TabsTrigger } from "@shadcn-ui/components/ui/tabs";
import { Button } from "@shadcn-ui/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import * as React from "react";
import { FlexDiv } from "../FlexIBox/FlexDiv";
import { FlexItem } from "../FlexIBox/FlexItem";
import { DropdownMenu, DropdownMenuTrigger } from "@shadcn-ui/components/ui/dropdown-menu";
import { MenuContentBuilder } from "../DropDown/MenuContentBuilder";
import { MenuItemsList } from "../DropDown/DropDownMenu.types";

export type DropDownTabsTriggerProps = {
    text: string;
    value: string;
    menuItems: MenuItemsList;
    className?: string;
    menuContentStyles?: string;
};

export const DropDownTabsTrigger: React.FC<DropDownTabsTriggerProps> = ({
    value,
    text,
    menuItems,
    className,
    menuContentStyles,
}) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    const chevronClickHandler = React.useCallback(() => {
        setIsActive(!isActive);
    }, [isActive]);

    return (
        <TabsTrigger value={value} className={className}>
            <FlexDiv className="gap-x-2 justify-center items-center" horizontal={true}>
                <FlexItem>{text} </FlexItem>
                <FlexItem>
                    <DropdownMenu onOpenChange={chevronClickHandler}>
                        <DropdownMenuTrigger asChild={true}>
                            <Button variant="ghost" className="h-4 w-4 px-0 py-0 mt-1">
                                {isActive ? (
                                    <ChevronDown className="h-3 w-3" />
                                ) : (
                                    <ChevronRight className="h-3 w-3" />
                                )}
                            </Button>
                        </DropdownMenuTrigger>

                        <MenuContentBuilder className={menuContentStyles} menuItems={menuItems} />
                    </DropdownMenu>
                </FlexItem>
            </FlexDiv>
        </TabsTrigger>
    );
};


