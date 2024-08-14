export enum PostsPageName {
    systemDesign = "System Design",
    lowLevelDesign = "Low level design",
    csFundamentals = "CS Fundamentals",
    webDev = "Web dev",
}

export enum PostPageKey {
    systemDesign = "system-design",
    lowLevelDesign = "low-level-design",
    csFundamentals = "cs-fundamentals",
    webDev = "web-dev",
}

export const postPageHeadings = {
    [PostPageKey.systemDesign]: PostsPageName.systemDesign,
    [PostPageKey.lowLevelDesign]: PostsPageName.lowLevelDesign,
    [PostPageKey.csFundamentals]: PostsPageName.csFundamentals,
    [PostPageKey.webDev]: PostsPageName.webDev,
}