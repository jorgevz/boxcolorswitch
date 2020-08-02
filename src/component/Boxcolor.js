import React from 'react';
import ReactDOM from 'react-dom';

//Here i have the two colors that i will be using to switch.
// I used to google color picker for my color selection.

const blue = '#10B5B5';
const beige = '#E6D9BC';

//Here i have both of my states set for both colors.

export default class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: blue };
    this.switchColor = this.switchColor.bind(this);
  }
  //color change functionality.
  switchColor(){
    const otherColor = this.state.color === blue ? beige : blue;
    this.setState({ color: otherColor })
  }
//My display that will be displaying text along the colors, this here
//allows me to fully have displayment of all the functionalities 
//previously declared. I also used google fonts which can be viewed in
// my CSS. 
  render(){
    return(
      <div id= 'div' style={{background: this.state.color}}>
      <h1 id='s1'>Change my color</h1>
      <button id='d1' onClick={this.switchColor}>Click Me !</button>
      </div>
    )
  }
}
ReactDOM.render(<Toggle />, document.getElementById('root'))
// I give credit to stackbitz.com and in class exercise for the idea