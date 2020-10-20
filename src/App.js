import React, {Component} from 'react'
import './App.css';


export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(6).fill(0),
            NumBlue : this.randomInteger(1, 3)
        }

        this.ColorArry = ["Green", "Red", "Purple","Black","Pink","Brown"];
        this.colorRender =  this.addBlue(this.ColorArry);
        this.colorRender = this.shuffle(this.colorRender);
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    addBlue(colors){
        let i = 0;
        let colorRender = colors.slice();
        while (i < this.state.NumBlue)
        {
            let k = Math.floor(Math.random() * colors.length);
            if(colorRender[k] !== "Blue"){
                colorRender.splice(k, 1, "Blue");
                i++
            }
        }
        return colorRender;
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
            if(this.colorRender[i] !== "Blue" && this.state.squares[i]){
                alert('Ошибка');
                return
            }
            if(!this.state.squares[i] && this.colorRender[i] === "Blue" ){
                alert('Ошибка');
                return
            }
        }
        alert('Все верно');

        this.setState({
            squares: Array(6).fill(0),
            NumBlue : this.randomInteger(1, 3)
        });
        this.colorRender =  this.addBlue(this.ColorArry);
        this.shuffle(this.colorRender);
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
                                 className={'itemStyle '+ this.colorRender[index] + addBorder}
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
