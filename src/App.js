import Component from './Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
// import FilterImages from './FilterImages.js';
import images from './images.js';


class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const cardSection = dom.querySelector('.card-section');
        cardSection.appendChild(imageListDOM);
    }
    
    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="drop-down"></section>
                    <section class="card-section"></section>
                </main>
            </div>
        `;
    }
}

export default App;