const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
}

// 'blank', 'link', 'anchor', 'Click me'

const {target, className, children: {span: {content, className: renamedClassName}}} = link;
console.log(target, className, renamedClassName,  content)