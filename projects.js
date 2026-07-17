const projects = [
    {
        name: 'Homes And Land',
        writtenIn: 'Vue front end, Laravel + InertiaJS and Elastic back end',
        description: 'National website for Newpoint Media Group.  I built the initial prototype, then continued as a main contributer up through May 2026',
        futurePlans: null,
        url: "https://www.homesandland.com",
        gitUrl: ["https://github.com/harko12/MagicEightBall"]
    },
    {
        name: 'Magic Eight Ball',
        writtenIn: 'Vue front end, ASP.NET core backend, Docker image running on ECS',
        description: 'Quick version online version of the Magic Eight Ball.  Currently it uses the standard responses.',
        futurePlans: "I'm considering setting up an LLM to make some more variety of answers, but constrain them to the limited space of the eight ball.",
        url: "http://18.218.23.64:8081",
        gitUrl: ["https://github.com/harko12/MagicEightBall"]
    },
    {
        name: 'KidPoints',
        writtenIn: 'React front end, Node API back end',
        description: 'This is an app idea I had back when my kids were younger, as a way to motivate them to do chores, and such.  It lets you set goals, and give points to your kids as they do what they are told.  Once they meet a goal, they can cash it in, and then earn more ponts.',
        futurePlans: "This one I did as a React refresher, so the Node side is super simple.  I plan to make it a full db driven app and try to launch it as an app using React Native.",
        url: null,
        gitUrl: ["https://github.com/harko12/kidpoints-api","https://github.com/harko12/kidpoints-react"]
    },
    {
        name: 'Web Gallery',
        writtenIn: 'ASP.NET core, Razor front end, MySql',
        description: "When my kids where younger, I used to take tons of pictures of them.  My parents and in-laws wanted to see them, but I was hesitant to throw all of them up into some storage I didn't have direct control over.  My solution to this was to build a Web Gallery I could host on one of my local machines, just for them.",
        futurePlans: "I'm to implement some more user features.  Favorites, tags, comments, etc.",
        url: null,
        gitUrl: ["https://github.com/harko12/WebGallery"]
    },
]

let elem = document.getElementById('projects');
projects.forEach((p,i) => {
    let n = document.createElement('div');
    n.className = ``;
    n.innerHTML = `
    <div class="project-item">
        <div class="project-item-title" >${p.name}</div>
        <div class="project-item-stacks">${p.writtenIn}</div>
        <p>${p.description}</p>
        ${
        p.futurePlans ? `<p>${p.futurePlans}</p>` : ''
        }
        <div  class="centered-text">
        ${
        p.url ? `
            <div class="link-line">
                <div class="link-line-icon">
                    <img src="images/Link-Icon-PNG-Photo-32-32.png" />
                </div>
                <div>
                    <a href="${p.url}" target="_blank">${p.url}</a>
                </div>
            </div>
                ` : 'Live link coming soon!'
        }
        </div>
        ${
        p.gitUrl.length > 0 ? 
            `${
                p.gitUrl.map( u => `
                    <div class="centered-text"></div>
            <div class="link-line">
                <div class="link-line-icon">
                    <img src="images/GitHub_Invertocat_Black-32.png" />
                </div>
                <div>
                    <a href="${u}" target="_blank">${u}</a>
                </div>
            </div>
                    
                `).join('')
            }
            ` : ''
        }
    </div>
    `;

    elem.appendChild(n);

});