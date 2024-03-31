const getCategoryIcon = (category) => {
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

export default getCategoryIcon;