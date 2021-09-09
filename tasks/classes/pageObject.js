/**
 * Organize a page object structure https://drive.google.com/file/d/1w3B4Z2ABy2AkacJFRlQosrYXwwv3jw_V/view
 */

class BasePage {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	open(url) {
		return `${this.baseUrl}/${url}`;
	}

	get footer() {
		return new Footer('footer');
	}
	
	get header() {
		return new Header('header');
	}	
}

class LoginPage extends BasePage {
	open() {
		return super.open('/login');
	}
	typeEmail(text) {
		return `I typed ${text} in ${this.email}`;
	  }
	
	typePassword(text) {
		return `I typed ${text} in ${this.password}`;
	}

	clickSubmit() {
		return `I've just clicked ${this.submitButton}`;
	}

	get email() {
		return 'email';
	}
	
	get password() {
		return 'password';
	}
	
	get submitButton() {
		return 'submitButton';
	}	
}

class Component {
	constructor(type) {
		this.type = type;
	}

	review() {
		return `This is ${this.type} component`;
	}
}

class Footer extends Component {
	constructor(name) {
	  super(name);
	}
  
	reviewFooter() {
	  return `I've just reviewed footer`;
	}
  }
  
  class Header extends Component {
  
	constructor(name) {
	  super(name);
	}
  }
  
module.exports = {
	BasePage,
	LoginPage
};