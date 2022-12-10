// import logo from "./logo.svg";
import { Table } from "react-bootstrap";
import "./App.scss";

function App() {
    const tableHeader = [
        { id: 1, title: "Number" },
        { id: 2, title: "Name" },
        { id: 3, title: "Email" },
    ];
    const data = [
        { id: 1, name: "John", email: "john@gmail.com" },
        { id: 2, name: "Montu", email: "michael@gmail.com" },
        { id: 3, name: "Rokib", email: "rokib@gmail.com" },
    ];
    return (
        <div className="App">
            {/* <header className="App-header">
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
                    Learn React
                </a>
            </header> */}
            <Table>
                <thead>
                    <tr>
                        {tableHeader.map((item) => (
                            <th>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>
                                <a
                                    href="https://mail.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.name}
                                </a>
                            </td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default App;
