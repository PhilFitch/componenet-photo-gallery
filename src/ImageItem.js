import Component from './Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
        
            <li title="${image.description}">
                <h2>${image.title}</h2>
                <div class="image-container">
                    <img class="card-image" src="${image.url}" alt="${image.title}">
                </div>
                <p>Horns: ${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;