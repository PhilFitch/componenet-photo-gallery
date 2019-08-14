import Component from './Component.js';

class FilterImages extends Component {
    
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    
    renderHTML() {
        const images = this.props.images;
        const types = getUniqueTypes(images);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
                <select>
                    <option>all</option>
                    ${optionsHTML}
                </select>
        `;
    }
}

function getUniqueTypes(images) {
    const types = [];
    images.forEach(image => {
        if(!types.includes(image.keyword)) {
            types.push(image.keyword);
        }
    });
    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(keyword => {
        return /*html*/`
            <option value="${keyword}">${keyword}</option>
        `;
    });
    return optionsArray.join('');
}

export default FilterImages;