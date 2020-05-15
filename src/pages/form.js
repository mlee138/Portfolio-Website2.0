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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.changeButton = this.changeButton.bind(this);
    }

    handleChange = (type, event) => {
        if(type === 'name'){
            this.setState({ name: event.target.value});
        } else if(type === 'email') {
            this.setState({ email: event.target.value});
        } else if(type === 'subject') {
            this.setState({ subject: event.target.value});
        } else if(type === 'message') {
            this.setState({ message: event.target.value});
        }
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
                        <input 
                            name="name-input"
                            type='text'  
                            onChange={(e) => this.handleChange('name', e)} 
                            value={this.state.name}
                            placeholder="Name"
                            required/>
                        <input 
                            name="email-input"
                            type='text'  
                            onChange={(e) => this.handleChange('email', e)} 
                            value={this.state.email}
                            placeholder="Email"
                            required/>
                    </div>
                    <input
                        name="subject-input"
                        type='text'  
                        onChange={(e) => this.handleChange('subject', e)} 
                        value={this.state.subject}
                        placeholder="Subject"
                        required/>
                    <textarea
                        id="email-text"
                        name="text-input"
                        onChange={(e) => this.handleChange('message', e)}
                        placeholder="Message"
                        required
                        value={this.state.message}/>
                
        <button className="btn-submit" onClick={(e) => this.handleSubmit(e)}><span className={this.state.btnClass}>{this.state.btnText}</span></button>
            </form>
            </div>
        );
    }
}

export default Form;