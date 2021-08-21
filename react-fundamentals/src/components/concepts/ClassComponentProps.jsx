import React, {Component} from 'react';

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fruit: ["apple", "orange", "banana", "grape", "kiwi", "strawberry", "blueberry", "raspberry"], 
            newFruit: "" 
        }
        this.addFruit = this.addFruit.bind(this);
    }
    
    addNewFruit(event) {
        event.preventDefault();
        this.setState({
            fruitBowl: [...this.state.fruit, this.state.newFruit],
            newFruit: "",
        }
        )
    }

    combineFruit = () => {
        this.setState(
            {}
        )
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form>
                        <input type="text" value={this.state.newFruit} />
                        <button type="submit">Add Fruit</button>
                    </form>
                </div>
            </div>
        );
    }
}