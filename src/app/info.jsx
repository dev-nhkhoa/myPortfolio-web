import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

export const INFO = {
  quotes: [
    {
      quote: '“Learning never exhaust the mind”',
      author: 'Leonardo Da Vinci.'
    },
    {
      quote: '“Learning how to learn is the most important skill.”',
      author: 'Tony Buzan.'
    },
    {
      quote: '“Always keep things simple.”',
      author: 'me.'
    }
  ],
  // quote: '“Learning never exhaust the mind”',
  fullName: 'TRUONG NGUYEN ANH KHOA',
  role: 'DEVELOPER / VIDEO EDITOR',
  introduction:
    'I am currently a 2nd years student at Van Lang University with information Systems major. I want to be a UI / UX Designer to make a better look for web or things in real life for every one.',
  dateUpdate: '07/01/2024',
  works: [
    {
      time: '2022 - now',
      work: [
        {
          role: 'Learning front-end',
          workPlace: 'Home',
          description: 'Updating my skills by now.'
        }
      ]
    },
    {
      time: '2018 - 2022',
      work: [
        {
          role: 'Minecraft Server Development',
          workPlace: 'Remote',
          description: 'Code plugins using Java, PHP for Startup Minecraft Server. ( LOCM NETWORK, SOSCRAFT.NET, GACHCRAFT.NET )'
        }
      ]
    }
  ],
  education: [
    {
      time: '2022 - now',
      school: 'Learning Information Systems at Van Lang University.'
    }
  ],
  skills: [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'PHP' },
    { name: 'Dart' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Figma' },
    { name: 'PaperMC' },
    { name: 'GeyserMC' },
    { name: 'PocketmineMP' },
    { name: 'Canva' },
    { name: 'Adobe Photoshop' },
    { name: 'Adobe Premeire' },
    { name: 'CapCut' }
  ],
  projects: [
    {
      name: 'Minimal Web CV',
      desc: 'My CV in the web',
      tool: ['Javascript', 'Figma', 'React', 'Material UI'],
      link: 'https://github.com/dev-nhkhoa/me'
    },
    {
      name: 'SOSCRAFT.NET',
      desc: 'Cross platform Minecraft Server',
      tool: ['Java', 'PaperMC', 'GeyserMC'],
      link: ''
    }
  ],
  socials: [
    { element: <FacebookIcon />, link: 'https://www.facebook.com/nhkhoa.a/' },
    { element: <GitHubIcon />, link: 'https://github.com/dev-nhkhoa' },
    { element: <InstagramIcon />, link: 'https://www.instagram.com/nhkhoa.a/' }
  ],
  love: ['Tech', 'Music', 'Art', 'Games', 'Furniture']
}
