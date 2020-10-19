import React, {Component} from 'react'
import './App.css';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(6).fill(null),
      countBlue: this.randomInteger(1, 3),
    }
  }

    addBlue(colors){
        let i = 0;
        while (i < this.state.countBlue)
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

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
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
      const {squares} = this.state;

      let colors = ["Green", "Red", "Purple","Black","Pink","Brown"];

      this.addBlue(colors);

      this.renderColors = this.shuffle(colors);
      console.log(this.renderColors);


    return (
      <div  className="divStyle">

        {squares.map((square, index)=> {
                return (
                    <div key={index}
                         onClick={this.handleClick}
                         data-index={index}
                         className={'itemStyle '+ this.renderColors[index] }
                    >
                        {square}
                    </div>
                )
            }
        )}
        <button onClick={this.checkColor}>Submit</button>
      </div>
    );
  }
}

export default App;


checkColor = e => {
    let count = 0;
    let error = 0;
    for(let i = 0; i< this.state.squares.length;i++){
        if(this.state.squares[i] === 1 && this.ColorArry[i] === "Blue" ){
            count = count + 1;
        }else if(this.state.squares[i] === 1 && this.ColorArry[i] !== "Blue" ){
            error = error + 1;
        }

    }
    if(this.NumBlue === count && error === 0){
        alert('Все верно');
        this.shuffle(this.ColorArry);
        this.setState({
            squares: Array(6).fill(0),
        });
    }else{

        alert('Ошибка');
    }
    console.log(count);
    console.log(error);
}