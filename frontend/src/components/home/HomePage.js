import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
                    <div className="card" id= "content">
                        <div className="card-body" >
                            <h4 className="card-title">Welcome to Nogrammer to Programmer!</h4>
                            <p>We are a group of students in Stockholm fighting off the winter cold by learning how to program. We built this site with Spring, PostgreSQL, React, React router, Axios, and other goodies. Check the following links for documentation and guides:</p>
                            <ul>
                                <li><a href="https://spring.io/projects/spring-boot" target="_blank">Spring</a></li>
                                <li><a href="https://www.postgresql.org" target="_blank">PostgreSQL</a></li>
                                <li><a href="https://reactjs.org" target="_blank">React</a></li>
                                <li><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">React Router</a></li>
                                <li><a href="https://github.com/axios/axios" target="_blank">Axios</a></li>
                            </ul>
                        </div>
                    </div>
        );
    }
}

export default HomePage;
