import React from 'react';
import Heading from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';


function createCard(card){
    return (<Note 
    key = {card.key}
        title= {card.title}
        content = {card.content}

    />);
}

function App(){
    return <div>
    <Heading />
    {notes.map(createCard)}
    <Footer />
    </div>
}

export default App;