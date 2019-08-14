import Component from './Component.js';

class FilterImages extends Component {
    
    
    
    
    
    
    
    renderHTML() {
        // const hornCreatures = this.props.hornCreatures;
        // const keyword = getUnique

        return /*html*/`
            <section class="drop-down">
                <select>
                    <option>Narwhal</option>
                    <option>Rhino</option>
                    <option>Unicorn</option>
                    <option>Unilego</option>
                    <option>Triceratops</option>
                    <option>Markhor</option>
                    <option>Mouflon</option>
                    <option>Addax</option>
                    <option>Chameleon</option>
                    <option>Lizard</option>
                    <option>Dragon</option>
                </select>
            </section>
        `;
    }
}



export default FilterImages;