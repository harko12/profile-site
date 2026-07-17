const stacks = [
    'JavaScript','PHP', 'HTML','CSS','SASS',
    'Laravel','InertiaJS',
    'C#','ASP.NET core',
    'Vue','React','Angular','Docker','ECS',
    'MySql','SQL Server',
    // 'MVC','Agile',
    // 'Scrum','NUnit','Jenkins',
    
    // 'NodeJS','Python'
];

const colorClasses = [
    // 'baltic-blue',
    'light-green',
    // 'olive-wood',
    // 'evergreen',
];

let colorsLength = colorClasses.length;

let stacksElem = document.getElementById('stacks');
stacks.forEach((s,i) => {
    let colorClass = colorClasses[Math.floor(Math.random() * colorsLength)];
    let n = document.createElement('div');
    n.className = `${colorClass} stack-bubble`;
    n.innerText = s;

    stacksElem.appendChild(n);

});