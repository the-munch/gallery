import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import sampleData from '../data/sampleData.js';
import customStyles from './style/modalStyle.js';
import ImageGallery from '/Users/TinaLe/Documents/gallery/client/src/components/ImageGallery.jsx';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            current: sampleData, 
            modalIsOpen: false,
            modalURL: '',
            hover: false,
        } 
        
        // this.getGalleryData = this.getGalleryData.bind(this);
        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.hover = this.hover.bind(this);
        this.hoverOut = this.hoverOut.bind(this);
    }

    // componentDidMount() {
    //     this.getGalleryData(); 
    // }

    // getGalleryData() {
    //     axios.get('/gallery')
    //     .then(({data})=> this.setState({
    //         images: data,
    //         current: data.slice(0, 3)
    //     }))
    //     .catch((err)=>console.log(err))
    // }

    openModal(e, image) {
        if(e){
            e.preventDefault(); 
        }
        this.setState({
            modalIsOpen: true,
            modalURL: image});
    }
    
    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = 'pink';
    // }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    hover() {
        this.setState({hover: true});
    }

    hoverOut() {
        this.setState({hover: false});
    }

    render(){
        return (
        <div>
            <ImageGallery 
            onHover={this.hover}
            onHoverOut={this.hoverOut}
            hover={this.state.hover}
            images={this.state.current}
            onOpenClick={this.openModal}
            onRequestClose={this.closeModal}
            style={customStyles} 
            />

            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            >
            <img src={this.state.modalURL} height="625px" width="900px" style={{objectFit: 'contain'}}/>
            <div style={{gridColumn: "2/span 1", backgroundColor: "white"}}>Munch Modal Mockup</div>
            </Modal>
        </div>
        )
    }
}


export default App;

