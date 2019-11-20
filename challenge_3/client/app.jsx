var globalInfo = '';

class Checkout extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Checkout</div>
        <button onClick={this.props.handleCheckoutClick} type="submit" value="submit">Checkout</button>
      </div>
    );
  };
}

class Next extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nextButtonClicked: false,
      showForm1: true,
      showForm2: false,
      showForm3: false,
      showSummary: false,
    };
  }

  handleNextClick(e) {
    e.preventDefault();
    if (this.state.showForm1) {
      console.log('1');
      this.setState({
        showForm1: false,
        showForm2: true,
      })
    } else if (this.state.showForm2) {
      console.log('2');
      this.setState({
        showForm2: false,
        showForm3: true,
      })
    } else if (this.state.showForm3) {
      console.log('3');
      this.setState({
        showForm3: false,
        showSummary: true,
      })
    } else if (this.state.showSummary) {
      console.log('4');
      window.location.reload();
    }
  }

  render() {
    if (this.state.showForm1) {
      return (
        <div>
          <div>Form1</div>
          <form>
            <label>
              Create your account:
              <input type="text" placeholder="name" />
              <input type="text" placeholder="email"/>
              <input type="text" placeholder="password"/>
            </label>
          </form>
          <button onClick={this.handleNextClick.bind(this)} type="submit" value="submit">Next</button>
        </div>
      );
    } else if (this.state.showForm2) {
      return (
        <div>
          <div>Form2</div>
          <form>
            <label>
              Your shipping address:
              <input type="text" placeholder="line 1" />
              <input type="text" placeholder="line 2"/>
              <input type="text" placeholder="city"/>
              <input type="text" placeholder="state"/>
              <input type="text" placeholder="zip code"/>
              <input type="text" placeholder="phone number"/>
            </label>
          </form>
          <button onClick={this.handleNextClick.bind(this)} type="submit" value="submit">Next</button>
        </div>
    );
    } else if (this.state.showForm3) {
      return (
        <div>
          <div>Form3</div>
          <form>
            <label>
              Payment:
              <input type="text" placeholder="credit card #" />
              <input type="text" placeholder="expiration date"/>
              <input type="text" placeholder="CVV"/>
              <input type="text" placeholder="billing zip code"/>
            </label>
          </form>
          <button onClick={this.handleNextClick.bind(this)} type="submit" value="submit">Next</button>
        </div>
    );
    } else if (this.state.showSummary) {
      return (
        <div>
          <div>Summary</div>
          <button onClick={this.handleNextClick.bind(this)} type="submit" value="submit">Purchase</button>
        </div>
    );
    }
  };
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      checkoutClicked: false
    };
  }

  handleCheckoutClick(e) {
    e.preventDefault();
    if (!this.state.checkoutClicked) {
      this.setState({
        checkoutClicked: true
      })
    }
  }

  render() {
    const checkoutClicked = this.state.checkoutClicked;

    return (
      <div>
        {checkoutClicked ? (
        <Next />
        ) : (
        <Checkout handleCheckoutClick={this.handleCheckoutClick.bind(this)} />
        )}
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));