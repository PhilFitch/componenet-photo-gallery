import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img class="logo" src="assets/castle.png" alt="castle">
                <h1>Horns Gallery</h1>
            </header>
        `;
    }
}

export default Header;