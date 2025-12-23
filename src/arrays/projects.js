const projects = [
    {
        id: 1,
        type: 'impactful',
        img: '/projects/bookmark.png',
        title: 'Bookmark Vault',
        isActive: true,
        description: 'Store and manage your bookmarks in a secure vault, with features to add delete bookmarks and extract to pdf along with a user-friendly interface',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        website: 'https://bookmark-vault.vercel.app/',
        source: 'https://github.com/DarkkkSoul/Bookmark-Vault',
    },
    {
        id: 2,
        type: 'impactful',
        img: '/projects/foobia.png',
        title: 'Foobia',
        isActive: true,
        description: "Tired of waiting in queue to order the food, so built a food ordering app, where students can place order and collect the food when it's ready.",
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        website: 'https://foobia.vercel.app/',
        source: '',
    },
    {
        id: 3,
        type: 'impactful',
        img: '/projects/todo.png',
        title: 'Todo CLI',
        isActive: true,
        description: "Built a simple CLI tool to manage your tasks for terminal lovers, with an auto-deletion mechanism after 24 hours to reduce long-term task backlog.",
        stack: ['Typescript', 'Commander.js', 'npm'],
        website: 'https://www.npmjs.com/package/todo-in-cli',
        source: 'https://github.com/DarkkkSoul/todo-cli',
    }
]
export default projects;