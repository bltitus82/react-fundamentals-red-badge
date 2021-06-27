import {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleBackground = () => {
        backgroundColor === 'purple' ? setBackgroundColor('black') : setBackgroundColor('purple');
    }

    const toggleRadius = () => {
        borderRadius === '5px' ? setBorderRadius('25px') : setBorderRadius('5px');
    }

    const toggleStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }

    const toggleAlign = () => {
        textAlign === 'center' ? setTextAlign('left') : setTextAlign('center');
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                <FunctionalComponent string='Will this display?' function={toggleColor} selectedStyle={ color } />
                <FunctionalComponent string="G'day Bruce" function={toggleBackground} selectedStyle={ backgroundColor }/>
                <FunctionalComponent string="Hello Bruce" function={toggleRadius} selectedStyle={ borderRadius }/>
                <FunctionalComponent string="Pip cock, Bruce" function={toggleStyle} selectedStyle={ borderStyle }/>
                <FunctionalComponent string="Blimey it's hot in here." function={toggleAlign} selectedStyle={ textAlign }/>
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    const TinyComponent = (props) => {
        return(
            <div>
                <p>The current style is { props.selectedStyle }</p>
            </div>
        )
    };
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Do the clicky thing here!</button>
            <TinyComponent selectedStyle= { props.selectedStyle } />
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'What style?'
}

FunctionalComponent.propsTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}