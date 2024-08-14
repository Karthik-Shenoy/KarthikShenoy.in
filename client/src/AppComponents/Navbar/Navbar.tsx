import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@shadcn-ui/components/ui/tabs";
import { DropDownTabsTrigger } from "../../SharedComponents/DropDownTabsTrigger/DropDownTabsTrigger";
import { ThemeControllerButton } from "../../SharedComponents/Buttons/ThemeControllerButton";
import { useLocation, useNavigate } from "react-router-dom";
import { postsNavMenuModel } from "./PostsNavMenuModel/PostsNavMenuModel";
import { useAppContext } from "../../Contexts/AppContext";
import { PostPageKey } from "../../Pages/SharedConstants";
import { MenuItemModel } from "../../SharedComponents/DropDown/DropDownMenu.types";

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const appContext = useAppContext();

    const onTabValueChange = (value: string) => {
        navigate(`/${value}`);
    };

    // remove the leading slash
    const currentTab = location.pathname.substring(1);

    const postsNavMenuItemLists = postsNavMenuModel.map(
        (menuItem): MenuItemModel => ({
            ...menuItem,
            onClick: () => {
                appContext.setSelectedPostsPage(menuItem.key as PostPageKey);
            },
        })
    );

    return (
        <>
            <nav className="sticky top-4 z-50 flex items-center justify-center desktop:px-2 px-8 py-2 height-[56px] backdrop-blur-sm desktop:w-[80vw] w-[90vw] border-[1px] rounded-3xl mt-4 shadow-lg border-accent">
                <Tabs onValueChange={onTabValueChange} value={currentTab}>
                    <TabsList className="desktop:gap-x-4 px-4 py-6">
                        <TabsTrigger value="">Home</TabsTrigger>
                        <DropDownTabsTrigger
                            text={"Posts"}
                            value="posts"
                            menuContentStyles="desktop:translate-x-[105px]"
                            menuItems={{
                                kind: "MenuItemModelList",
                                items: postsNavMenuItemLists,
                            }}
                        />
                        <TabsTrigger value="project">Projects</TabsTrigger>
                    </TabsList>
                </Tabs>
                <ThemeControllerButton />
            </nav>
        </>
    );
};
