import * as React from '../../../node_modules/react';
import { Button, Form, FormGroup, Label, Input, FormText } from '../../../node_modules/reactstrap';
import {postAddNewAccount} from "../../services/apiService"

function AddNewTwitterAccount(props) {
    let [username, setUsername] =  React.useState("")
    let [password, setPassword] =  React.useState("")

    function onSubmit(event) {
        event.preventDefault()
        console.log(username, password);
        postAddNewAccount({
            "username": username,
            "password": password, 
            "phone" : "9165178775",
            "email" : "testing"
        });
        //update state ....of the page...
    }

        return (
            <Form onSubmit={onSubmit} name="oh">
                <FormGroup style={{width: "50%"}}>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button>Submit</Button>
          </Form>
        );
}



export default AddNewTwitterAccount;