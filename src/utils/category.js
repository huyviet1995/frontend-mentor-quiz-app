export const getIconBackground = (category) => {
    switch (category) {
        case "html":
            return "var(--html-background)";
        case "css":
            return "var(--css-background)";
        case "javascript":
            return "var(--js-background)";
        case "accessibility":
            return "var(--accessibility-background)";
        default:
            return "var(--card-background)";
    }
}

export const getCategoryIcon = (category) => {
    switch (category) {
        case 'html':
            return '/images/icon-html.svg';
        case 'css':
            return '/images/icon-css.svg';
        case 'accessibility':
            return '/images/icon-accessibility.svg';
        case 'javascript':
            return '/images/icon-js.svg';
        default:
            return '/images/icon-js.svg';
    }
}

export const categories = [
    {
        icon: "/images/icon-html.svg",
        title: "HTML",
        slug: 'html',
    },
    {
        icon: "/images/icon-css.svg",
        title: "CSS",
        slug: 'css',
    },
    {
        icon: "/images/icon-js.svg",
        title: "Javascript",
        slug: 'javascript'
    },
    {
        icon: "/images/icon-accessibility.svg",
        title: "Accessibility",
        slug: 'accessibility'
    },
]