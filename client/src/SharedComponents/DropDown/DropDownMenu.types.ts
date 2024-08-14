import { DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import * as React from "react";

export type MenuItemsList =
    | {
          kind: "MenuItemModelList";
          items: MenuItemModel[];
      }
    | {
          kind: "DropdownMenuItemList";
          items: React.Component<DropdownMenuItemProps>[];
      };

export type MenuItemModel = {
    text: string;
    key: string;
    icon: React.ReactNode;
    onClick?: (value: string) => void;
};
