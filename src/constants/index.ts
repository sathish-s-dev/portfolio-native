export const colors = {
	primary: '#0E5D6F',
	primary_dark: 'rgb(15 23 42)',
	primaryText: '#333',
	primary_darkText: '#EAF0F1',
	textMuted: '#A4B0BD',
	white: '#fff',
};

export type Project = {
	name: string;
	codeUrl: string;
	liveUrl: string;
	image: string;
};

export const projects: Project[] = [
	{
		name: 'Watch Movie App',
		codeUrl: 'https://github.com/sathish-s-dev/watch',
		liveUrl: 'https://watch-rouge.vercel.app/',
		image: '/watch.png',
	},
	{
		name: 'Interno',
		codeUrl: 'https://github.com/sathish-s-dev/interno',
		liveUrl: 'https://interno-rouge.vercel.app/',
		image: '/interno.png',
	},
	{
		name: 'Car Show',
		codeUrl: 'https://github.com/sathish-s-dev/car-show',
		liveUrl: 'https://github.com/sathish-s-dev/interno',
		image: '/interno.png',
	},
	{
		name: 'Astra View',
		codeUrl: 'https://github.com/sathish-s-dev/astra-view',
		liveUrl: 'https://astra-view.vercel.app/',
		image: '/astra-view.png',
	},
	{
		name: 'Interno',
		codeUrl: 'https://github.com/sathish-s-dev/interno',
		liveUrl: 'https://github.com/sathish-s-dev/interno',
		image: '/interno.png',
	},
];

export type Skill = {
	name: string;
	image: string;
};

export const skillData: Skill[] = [
	{
		name: 'HTML 5',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
	},
	{
		name: 'CSS 3',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
	},
	{
		name: 'Javascript',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	},
	{
		name: 'React.js',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	},
	{
		name: 'React Native',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	},
	// {
	// 	name: 'Mongo DB',
	// 	image:
	// 		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
	// },
	{
		name: 'Next.js',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
	},
	{
		name: 'Typescript',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
	},
	{
		name: 'Tailwind css',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
	},
	{
		name: 'Node.js',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
	},
	{
		name: 'Cypress',
		image: 'https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/cypress.svg',
	},
	{
		name: 'git',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
	},
	{
		name: 'Firebase',
		image:
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
	},
];
