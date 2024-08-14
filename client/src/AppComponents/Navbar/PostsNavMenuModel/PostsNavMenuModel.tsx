import { cn } from "@shadcn-ui/lib/utils";
import { AppWindow, Braces, CodeXml, SquareStack } from "lucide-react";
import { MenuItemModel } from "../../../SharedComponents/DropDown/DropDownMenu.types";


const styles = {
    buttonIcon: cn("w-5 h-5 mr-2 stroke-primary"),
};

export const postsNavMenuModel: MenuItemModel[] = [
    {
        text: "System Design",
        key: "system-design",
        icon: <SquareStack className={styles.buttonIcon} />,
    },
    {
        text: "Low level design",
        key: "low-level-design",
        icon: <AppWindow className={styles.buttonIcon} />,
    },
    {
        text: "CS Fundamentals",
        key: "cs-fundamentals",
        icon: <Braces className={styles.buttonIcon} />,
    },
    {
        text: "Web dev",
        key: "web-dev",
        icon: <CodeXml className={styles.buttonIcon} />,
    },
];
