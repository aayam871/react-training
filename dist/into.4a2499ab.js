const child = React.createElement('div', {
    id: 'child'
}, [
    React.createElement('h1', {
        id: 'heading'
    }, 'hello world'),
    React.createElement('h1', {
        id: 'heading'
    }, 'hello world2')
]);
const heading = React.createElement('h1', {}, 'hello world');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(child);

//# sourceMappingURL=into.4a2499ab.js.map
