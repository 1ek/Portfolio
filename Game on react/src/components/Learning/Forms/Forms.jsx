import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      this.setState({value: event.target.value})
    }
  
    handleSubmit() {
      alert('Отправленное имя: ' + this.state.value);
  
    }
  
    render() {
      return (
        <div className = "NameForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              Имя:
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Отправить" />
          </form>
        </div>
      );
    }
  }
  
  ////////////////////////////////////////
  
  export class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Нужно будет удалять - не ок, также как и в предыдущем случае. Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Сочинение отправлено: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className = "EssayForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              Сочинение:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить" />
          </form>
        </div>
      );
    }
  }
  
  ////////////////////////////////////////
  
  export class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'lime'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Ваш любимый вкус: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className ="FlavorForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              Выберите ваш любимый вкус:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Манго</option>
              </select>
            </label>
            <input type="submit" value="Отправить" />
          </form>
        </div>
      );
    }
  }
  
  /////////////////////////////////////////
  
  export class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div className = "Reservation">
          <form>
            <label>
              Пойдут:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Количество гостей:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </form>
        </div>
      );
    }
  }