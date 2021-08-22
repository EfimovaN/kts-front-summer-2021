import logo from './logo.svg';
import './App.css';

function App() {


  //Поиск по компании
    let org = 'Facebook'

    fetch(`https://api.github.com/orgs/${org}/repos`)  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('There was a problem. Status Code: ' +  
            response.status);  
          return;  
        }
        response.json().then(function(data) {  
          console.log(data);  
        });  
      }  
    )  
    .catch(function(err) {  
      console.log('Fetch Error: ', err);  
    });

    //Поиск по пользователю

  // let username = 'EfimovaN'

  //   fetch(`https://api.github.com/users/${username}/repos`)  
  //   .then(  
  //     function(response) {  
  //       if (response.status !== 200) {  
  //         console.log('There was a problem. Status Code: ' +  
  //           response.status);  
  //         return;  
  //       }
  //       response.json().then(function(data) {  
  //         console.log(data);  
  //       });  
  //     }  
  //   )  
  //   .catch(function(err) {  
  //     console.log('Fetch Error: ', err);  
  //   });


  const sayHello: string = 'Hello';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {sayHello}
        </a>
      </header>
    </div>
  );
}

export default App;
