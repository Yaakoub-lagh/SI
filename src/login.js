import React from 'react';

const styles = {
    navbar: {
        backgroundColor: 'grey',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      navbarList: {
        listStyleType: 'none',
        display: 'flex',
        gap: '10px',
      },
      navbarLink: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        padding: '8px',
        borderRadius: '5px',
        backgroundColor: 'white',
      },    
  footer: {
    backgroundColor: 'grey',
    padding: '2px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    paddingTop: '50px',
    paddingBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
  },
  button: {
    padding: '5px 10px',
  },
};

const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        <ul style={styles.navbarList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    );
  };
  

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  );
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <div style={styles.container}>
        <form style={styles.form} onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default App;
