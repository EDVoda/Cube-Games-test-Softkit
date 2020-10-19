import React, {Component} from 'react'
import './App.css';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(6).fill(0),
            renderColor: this.addBlue()
        }


    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    handleClick = e => {
        let data = e.target.getAttribute('data-index');
        let targetItem = this.state.squares;


        if(targetItem[data] === 1){
            targetItem.splice(data, 1, 0);
        }else{
            targetItem.splice(data, 1, 1);
        }



        this.setState({
            squares: targetItem,
        });

    };

    addBlue(){
        let colors = ["Green", "Red", "Purple","Black","Pink","Brown"];
        let countBlue = this.randomInteger(1, 3);
        let i = 0;
        while (i < countBlue)
        {
            let k = Math.floor(Math.random() * colors.length);
            if(colors[k] !== "Blue"){
                colors.splice(k, 1, "Blue");
                i++
            }
        }
        this.shuffle(colors)
    }




    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    checkColor(){

    }

    render() {
        let squares = this.state.squares;

        return (
            <div  className="divStyle">

                {squares.map((square, index)=> {

                        if(square){
                            return (
                                <div key={index}
                                     onClick={this.handleClick}
                                     data-index={index}
                                     className={'itemStyle target' }
                                >

                                </div>
                            )
                        }else{
                            return (
                                <div key={index}
                                     onClick={this.handleClick}
                                     data-index={index}
                                     className={'itemStyle ' }
                                >

                                </div>
                            )
                        }
                    }
                )}
                <button onClick={this.checkColor}>Submit</button>
            </div>
        );
    }
}

export default App;

