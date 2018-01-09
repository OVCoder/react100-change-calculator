import React, { Component } from 'react';//? why do we import only {Component}?

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0, //amount will be entered by user
      amountReceived:0,//amount will be entered by use
      change: 0, //amount is calculated by formula
      twentiesNotes: 0,//amount is calculated by formula
      tensNotes: 0,//amount is calculated by formula
      fivesNotes: 0, //amount is calculated by formula
      dollarNotes: 0,//amount is calculated by formula
      quartersCount: 0,//amount is calculated by formula
      dimesCount: 0,//amount is calculated by formula
      nickelsCount: 0,//amount is calculated by formula
      penniesCount: 0,//amount is calculated by formula
    };
    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.Calculate = this.Calculate.bind(this);
  
  }

  handleAmountDue(event){
    this.setState({amountDue: event.target.value});
    console.log("Total due $"+this.state.amountDue);
  }

  handleAmountReceived(event){
    this.setState({amountReceived:event.target.value});
    console.log("Total received $"+this.state.amountReceived);
  }

  Calculate(event) {
    let totalSale = (this.state.amountDue);
    let totalCash = (this.state.amountReceived);
    let twenties;
    let tens;
    let fives;
    let dollars;
    let quarters;
    let dimes;
    let nickels;
    let pennies;
    let changeDue = (totalCash - totalSale).toFixed(2);
    twenties = Math.floor((Math.floor(changeDue))/20);
    tens = Math.floor((changeDue - (20*twenties))/10);
    fives = Math.floor((changeDue - (20*twenties) - (10*tens))/5);
    dollars = Math.floor(changeDue - (20*twenties) - (10*tens) - (5*fives));
    quarters = Math.floor((changeDue - (20*twenties) - (10*tens) - (5*fives) - dollars)/0.25);
    dimes = Math.floor((changeDue - (20*twenties) - (10*tens) - (5*fives) - dollars - (0.25*quarters))/0.1)
    nickels = Math.floor((changeDue - (20*twenties) - (10*tens) - (5*fives) - dollars - (0.25*quarters)-(0.1*dimes))/0.05);
    pennies = ((changeDue - (20*twenties) - (10*tens) - (5*fives) - dollars - (0.25*quarters)-(0.1*dimes) - (0.05*nickels)).toFixed(2))*100;

    
    this.setState({
      change: changeDue,
    })

    this.setState({
      twentiesNotes: twenties,
    })

    this.setState({
      tensNotes: tens,
    })
    
    this.setState({
      fivesNotes: fives,
    })

    this.setState({
      dollarNotes: dollars,
    })
    
    this.setState({
      quartersCount: quarters,
    })

    this.setState({
      dimesCount: dimes,
    })

    this.setState({
      nickelsCount: nickels,
    })

    this.setState({
      penniesCount: pennies,
    })

  }
  render() {
    return(
      <div className='container p-0'>
        
        {/*<div className="jumbotron p-3 mb-2 bg-info">*/}
          <h1 className="p-3 mb-2 text-white">Change Calculator</h1>
          <hr className="table-light"/>

          <div className='container p-0'>
            
            <div className="col-md-4 d-inline-block table-light p-0">
              <div className="bg-secondary p-0 m-0 pt-1 pb-1">
                <h5>   Enter Information</h5>
              </div>
              <form className="p-1">
                <div className="form-group">
                  <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"><strong>How much is due?</strong></label>
                    <input type="number" id="amount-due" className="form-control" name="totalCost" aria-describedby="passwordHelpInline" onChange={this.handleAmountDue} value={this.state.amountDue}/>  {/*Value property binds this element to its respective property on the state object.*/}
                </div>
                <div className="form-group"> 
                  <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"><strong>How much was received?</strong></label>
                    <input type="number" id="amount-received" className="form-control" name="receivedFromCustomer" aria-describedby="passwordHelpInline" step=".01" onChange={this.handleAmountReceived} value={this.state.amountReceived}/>  
                </div>
              </form>
            
              <div className="bg-secondary p-2 w-100 d-block" name="button">              
                <button type="button" className="btn btn-primary btn-lg btn-block align-middle p-0" name="submit" onClick={this.Calculate}>Calculate</button>
              </div>
            
            </div>
                     
            <div className = "col-md-8 d-inline-block align-top table-light selector-for-some-widget">
              <div className="bg-light m-0 pt-1 pb-1 mt-3">
                <h5 className="bg-success p-2 align-middle">Total change due is ${this.state.change}
                </h5>
              </div>
              <div className="form-group">
                <div className="row">
                  <p className="col md-auto bg-secondary border border-secondary mr-1 ml-3 mb-1 text-justify">{
                    `Twenties `}
                      <br/>
                      <output>{this.state.twentiesNotes}</output>
                  </p>
                  <p className="col bg-secondary border border-secondary mr-1 mb-1">{
                    `Tens`}
                    <br/>
                    <output>{this.state.tensNotes}</output>
                  </p>
                  <p className="col bg-secondary border border-secondary mr-1 mb-1">{
                    `Fives`}
                    <br/>
                    <output>{this.state.fivesNotes}</output>
                  </p>
                  <p className="col bg-secondary border border-secondary mr-3 mb-1">{
                    `Ones`}
                    <br/>
                    <output>{this.state.dollarNotes}</output>
                  </p>
                </div>
                <div className="row">
                  <p className="col bg-secondary border border-secondary mr-1 ml-3">{
                    `Quarters`}
                    <br/>
                    <output>{this.state.quartersCount}</output>
                  </p>
                  <p className="col bg-secondary border border-secondary mr-1">{
                    `Dimes`}
                    <br/>
                    <output>{this.state.dimesCount}</output>
                  </p>
                  <p className="col bg-secondary border border-secondary mr-1">{
                    `Nickels`}
                    <br/>
                    <output>{this.state.nickelsCount}</output>
                  </p>
                  <p className="col bg-secondary border border-secondary mr-3">{
                    `Pennies`}
                    <br/>
                    <output>{this.state.penniesCount}</output>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
