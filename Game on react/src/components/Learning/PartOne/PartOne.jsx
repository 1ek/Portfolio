import React from 'react';

export class Learning extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div className = "Hello World">
                <h1>Hello World!</h1>
                <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );

    }
}

/////////////////////////////

export class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Эта привязка обязательна для работы `this` в колбэке.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Включено' : 'Выключено'}
        </button>
      );
    }
  }


//////////////////////////////////

function UserGreet() {
  return(
    <h1>Hello Name</h1>
  )
}

function GuestGreet() {
  return(
    <h1>Logining please</h1>
  )
}

export function Greet(param) {
  const isLoginIn = param.isLoginIn;
  if (isLoginIn){
    return <UserGreet/>;
  }
  return <GuestGreet/>;
}

function LoginBtn(props) {
  return (
    <button onClick={props.onClick}>
      Войти
    </button>
  );
}

function LogoutBtn(props) {
  return (
    <button onClick={props.onClick}>
      Выйти
    </button>
  );
}

export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoginIn: false};
  }

  handleLoginClick() {
    this.setState({isLoginIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoginIn: false});
  }

  render() {
    const isLoginIn = this.state.isLoginIn;
    let btn;
    if (isLoginIn) {
      btn = <LogoutBtn onClick={this.handleLogoutClick} />;
    } else {
      btn = <LoginBtn onClick={this.handleLoginClick} />;
    }

    return (
      <div className = "LoginControl">
        User <b>{isLoginIn ? 'now' : 'not'}</b> on site.
        {btn}
      </div>
    );
  }
}

/////////////////////////////////////////

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Предупреждение!
    </div>
  );
}

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div className = "PageWarning">
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    );
  }
}
