import React, {Component} from 'react'
import './App.css';


export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(6).fill(0),
        }

        this.NumBlue = this.randomInteger(1, 3);
        this.ColorArry = ["Green", "Red", "Purple","Black","Pink","Brown"];
        this.addBlue(this.ColorArry);
        this.ColorArry = this.shuffle(this.ColorArry);
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    addBlue(colors){
        let i = 0;
        while (i < this.NumBlue)
        {
            let k = Math.floor(Math.random() * colors.length);
            if(colors[k] !== "Blue"){
                colors.splice(k, 1, "Blue");
                i++
            }
        }
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

    checkColor = e => {
        for(let i = 0; i< this.state.squares.length;i++){
            if(this.ColorArry[i] !== "Blue" && this.state.squares[i]){
                alert('Ошибка');
                return
            }
            if(!this.state.squares[i] && this.ColorArry[i] === "Blue" ){
                alert('Ошибка');
                return
            }
        }
        alert('Все верно');
        this.shuffle(this.ColorArry);
        this.setState({
            squares: Array(6).fill(0),
        });

    }

    render() {

        return (

            <div  className="divStyle">

                {this.state.squares.map((square, index)=> {
                        let addBorder = this.state.squares[index] ? ' target' : '';
                        return (
                            <div key={index}
                                 onClick={this.handleClick}
                                 data-index={index}
                                 className={'itemStyle '+ this.ColorArry[index] + addBorder}
                            >
                            </div>
                        )
                    }
                )}
                <button className='button-submit' onClick={this.checkColor}>Submit</button>
            </div>

        );

    }
}

export default App;
