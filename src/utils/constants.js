export const MOBILE_DEVICES = [ 'base', 'sm' ];

export const ROUTES = [
	{ to: '/', label: 'HOME' },
	{ to: '/skills', label: 'SKILLS' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/contact', label: 'CONTACT' },
];

export const PAGE_TITLES = {
	about: 'About | Grisham Garg',
	skills: 'Skills | Grisham Garg',
	projects: 'Projects | Grisham Garg',
	contact: 'Contact | Grisham Garg',
};

export const SKILLS = [
	{ label: 'HTML 5', icon: 'html.svg' },
	{ label: 'CSS', icon: 'css.svg' },
	{ label: 'JavaScript', icon: 'javascript.svg' },
	{ label: 'Bootstrap', icon: 'bootstrap.svg' },
	{ label: 'React.js', icon: 'reactjs.svg' },
	{ label: 'Chakra-UI', icon: 'chakraui.svg' },
	{ label: 'Node.js', icon: 'nodejs.svg' },
	{ label: 'Express', icon: 'express.svg' },
	{ label: 'MongoDb', icon: 'mongodb.svg' },
];

export const PROJECTS = [
	{
		title: 'Ecommerce Store',
		stack: [ 'HTML5', 'CSS3', 'Javascript', 'React.JS' ],
		thumbnail: 'ecommerce.png',
		github: 'https://github.com/grishamg/Ecommerce-Store',
		live: 'https://clone-c263c.web.app/',
	},
	{
		title: 'Chatting App',
		stack: [ 'React.js', 'Socket.io', 'MongoDB' ],
		thumbnail: 'chatapp.png',
		github: 'https://github.com/grishamg/Messenger',
		live: 'https://mern-mychats.herokuapp.com/',
	}
];

export const SOCIAL_LINKS = [
	{
		username: '/grishamg',
		link: 'https://github.com/grishamg',
		icon: 'github.svg'
	},
	{
		username: '/grisham-garg',
		link: 'https://www.linkedin.com/in/grisham-garg/',
		icon: 'linkedin.svg'
	},
	{
		username: '/grishamgarg1234',
		link: 'https://mail.google.com/mail/u/?authuser=grishamgarg1234@gmail.com',
		icon: 'gmail.svg'
	},
];

export const PAGE_LINKS = [ '/about', '/skills', '/projects', '/contact' ];
