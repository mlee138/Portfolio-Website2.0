import React from 'react';
import './stylesheets/form.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
            error: 'no-error',
            submitMessage: '',
            btnText: 'Send',
            btnClass: ''
        };
        this.focusCheck = this.focusCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.changeButton = this.changeButton.bind(this);
    }

    focusCheck = (event) => {
        let target = event.target;
        (target.value ? target.style.borderBottom = "3px solid rgb(0, 162, 255)" : target.style.borderBottom = "3px solid red");
    }

    handleChange = (type, event) => {
        let target = event.target;
        if(type === 'name'){
            this.setState({ name: target.value});
        } else if(type === 'email') {
            this.setState({ email: target.value});
        } else if(type === 'subject') {
            this.setState({ subject: target.value});
        } else if(type === 'message') {
            this.setState({ message: target.value});
        }
        
        (target.value ? target.style.borderBottom = "3px solid rgb(0, 162, 255)" : target.style.borderBottom = "3px solid red");
    }

    changeButton = () => {
        if(this.state.btnText) {
            console.log("change to loader");
            this.setState({btnText: ''});
            this.setState({btnClass: 'loader'});
        } else {
            console.log("change to send");
            this.setState({btnText: 'Send'});
            this.setState({btnClass: ''});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name && this.state.message && this.state.email && this.state.subject){
            const templateId = 'contact_email';
            this.sendMessage(templateId, {message_html: this.state.message, user_name:this.state.name, user_email:this.state.email, subject_html:this.state.subject});
        } else {
            let inputs = document.getElementsByTagName("input");
            let textarea = document.getElementById("email-text");

            for(var i=0; i<inputs.length; i++){
                if(!inputs[i].value){ inputs[i].style.borderBottom = "3px solid red"; }
            }

            if(!textarea.value){ textarea.style.borderBottom = "3px solid red"; }

            console.log ("Not every input filled");
            this.setState({ error: 'error-found' });
            this.setState({ submitMessage: "Please fill out all fields." })
        }
    }

    sendMessage = (templateId, variables) => {
        this.changeButton();
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfuly sent!');
            this.setState({ name: ''});
            this.setState({ message: ''});
            this.setState({ subject: ''});
            this.setState({ email: ''});
            this.setState({ error: 'email-sent' });
            this.setState({ submitMessage: 'Email sent successfully!' });
            this.changeButton();
        }).catch(err => {
            console.error('Error sending email:', err)
            this.changeButton();
        });
    }

    render() {
        return(
            <div id="contact-form">
                <h3>Let's get in touch!</h3>
            <form>
                <p className={this.state.error}>{this.state.submitMessage}</p>
                <input type="hidden" name="contact_number"/>
                    <div className="row">
                        <label>
                            <span>Name</span>
                            <br/>
                            <input
                                id="name" 
                                name="name-input"
                                type='text'  
                                onChange={(e) => this.handleChange('name', e)} 
                                onFocus={(e) => this.focusCheck(e)}
                                value={this.state.name}
                                placeholder="John Smith"
                                required/>
                                    </label>
                         <label>
                            <span>Email</span>
                            <br/>
                            <input 
                                id="email"
                                name="email-input"
                                type='email'  
                                onChange={(e) => this.handleChange('email', e)} 
                                onFocus={(e) => this.focusCheck(e)}
                                value={this.state.email}
                                placeholder="JohnSmith@email.com"
                                required/>
                                </label>
                    </div>
                    <label>
                        <span>Subject</span>
                        <br/>
                        <input
                            id="subject"
                            name="subject-input"
                            type='text'  
                            onChange={(e) => this.handleChange('subject', e)} 
                            onFocus={(e) => this.focusCheck(e)}
                            value={this.state.subject}
                            required/>
                            </label>
                    <label>
                        <span>Message</span>
                        <br/>
                        <textarea
                            id="email-text"
                            name="text-input"
                            onChange={(e) => this.handleChange('message', e)}
                            onFocus={(e) => this.focusCheck(e)}
                            required
                            value={this.state.message}/>
                            </label>
                
        <button className="btn-submit" onClick={(e) => this.handleSubmit(e)}><span className={this.state.btnClass}>{this.state.btnText}</span></button>
            </form>
            </div>
        );
    }
}

export default Form;