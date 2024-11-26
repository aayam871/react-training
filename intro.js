
import React from 'react';
import ReactDOM from 'react-dom/client';
// const child = React.createElement('div',
//     { id: 'child' },
//     [React.createElement('h1', { id: 'heading' }, 'hello world1'),
//     React.createElement('h2', { id: 'heading' }, 'hello world2')
//     ],
// );
// const heading = React.createElement('h1', {}, 'hello world');


function Button() {
    return <h1> Haha hasais </h1>;
};

const Cake = () => {
    return (

        <div>
            <h1> Chocolate flavour </h1>
            <h2> May be strawberry</h2>
            <Button />;
            <Footer />;
        </div>
    );
};
function Button() {
    return <h1> K xa yar </h1>;
};
const Footer = () => {
    return (<footer>
        <p> kjhidhgdshdshgdhsbdhsbdhdsihbdsbdhd</p>
    </footer>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cake />);



