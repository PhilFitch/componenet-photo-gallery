import Component from './Component.js';
import CreatureItem from './ImageItem.js';

class ImageList extends Component {
    
    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image };
            const creatureItem = new CreatureItem(props);
            const creatureItemDOM = creatureItem.renderDOM();
            dom.appendChild(creatureItemDOM);
        });
    }
    
    renderHTML() {
        return /*html*/`
            <section class="card-section">
                <div class="card-div">
                    <ul class="list"></ul>
                </div>
            </section>
        `;
    }
}

export default ImageList;