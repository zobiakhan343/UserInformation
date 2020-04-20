import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstname:'Zobia',
            lastname:'Khan',
            email:'zobiakhan343@gmail.com'
        }
    }

    render() {
        return (
            <div>
                <h3>It is the Content component</h3>
                <h2>Firstname</h2><h5>{this.state.firstname}</h5>
                <h2>Lastname</h2><h5>{this.state.lastname}</h5>
                <h2>Email</h2><h5>{this.state.email}</h5>
            </div>
        );
    }
}
export default Content;
