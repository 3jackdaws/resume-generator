COMPANY = "";
PROBLEM_TYPE = "";


DATA = {
    resumeName:"General Resume",
    resumeVersion:"2.0.1",
    applicant:"Ian Murphy",
    role:"Software/Solution Engineer",
    website:"isogen.net",
    linkedin:"linkedin.com/in/ian-m-murphy/",
    email:"ian@isogen.net",
    phone:"(503) 830 - 2275",
    github:"github.com/3jackdaws",
    objective:`Seeking a position${COMPANY} where I can work with others to implement elegant solutions for complex${PROBLEM_TYPE} problems while also learning new technologies.`,
    experience:[
        {
            company:"Daimler Trucks NA",
            title:"Cloud Automation Intern",
            from:"June 2018",
            to:"Dec 2018",
            description:"Lead efforts to consolidate steps involved in decommissioning enterprise infrastructure and developed self-service VM decommissioning tools. Was tasked with evaluating and supplying recommendations for the purchase of third party software that amounted to more than $200k. ",
            results:[
                "Solved the infrastructure decommissioning \"million dollar problem\".",
                // "Greater than 150 VM decommissioning processes completed.",
                "Greater than 90% reduction in time to decommission VMs",
            ],
            technologies:[
                "Django",
                "jQuery",
                "Vue.js",
                "Azure",
                "Docker",
                "Kubernetes",
                "vmWare",
            ]
        },
        {
            company:"Tektronix",
            title:"Software Engineer Intern",
            from:"June 2017",
            to:"Dec 2017",
            description:"Designed and developed self-service developer tools for product licensing, visual API testing, and building evaluation software. Dockerized high-performance video network monitoring appliance software. Created Cloud provider images (AMIs) from marketplace base OS images for network video monitoring products.",
            results:[
                "98% reduction in developer time spent obtaining Product licenses",
                "99% reduction in Product software package build time",
            ],
            technologies:[
                "Python",
                "JavaScript",
                "PHP",
                "PostgreSQL",
                "Docker",
                "AWS",
            ]
        },
        {
            company:"Vobile, Inc",
            title:"R&D Intern",
            from:"December 2016",
            to:"January 2017",
            description:"Oversaw office-wide Windows 10 workstation upgrades. Performed out of box setup and installation of new workstations. ",
            technologies:[
                "Python",
                "Docker",
            ]
        },
        {
            company:"Vobile, Inc",
            title:"R&D Intern",
            from:"June 2016",
            to:"September 2016",
            description:"Accelerated internal documentation software migration by designing format conversion scripts in Python. Dockerized inventory managment software. Performed intra-office tech support.",


        },
    ],
    education:[
        {
            type:"BS",
            subject:"Software Engineering Tech",
            school:"Oregon Institute of Technology",
            date:"2018",
            summary:"GPA 3.61 · Emplaced a solid foundation for analyzing problems and providing practical solutions.  Courses included Software Testing, Data Structures, Design Patterns, Operating Systems, Embedded Networking, and Advanced Unix."
        }
    ],
    primarySkills:6,
    secondarySkills:20,
    skills:[
        {
            name:"Docker",
            level:5,
            desc:"Extreme proficiency with Docker, Docker Compose, with experience containerizing existing applications and knowledge of advantages and shortfalls of application containers and microservice architectures."
        },
        {
            name:"Python",
            level:5,
            desc:"Extreme proficiency with Python, its constructs, best practices, advantages and shortfalls.  Extensive knowledge of available libraries and PIP"
        },
        {
            name:"Web Development",
            level:4,
            desc:"High level of experience with web development technologies, web design, application architectures (MVC, MVT), designing scalable and fault tolerant web applications, and deploying and hosting web sites to Linux servers and Docker hosts."
        },
        {
            name:"Django",
            level:4,
            desc:"Proficient with Models, Forms, Middleware, Django templating, custom authentication backends.  Extensive experience with add on frameworks such as DRF and Channels."
        },
        {
            name:"JavaScript",
            level:3,
            desc:"Proficiency with front-end JavaScript, the DOM, and knowledge of the JavaScript runtime environment."
        },
        {
            name:"Amazon Web Services",
            level:3,
            desc:"Experience with EC2, ECS, Lambda, and API Gateway services.  Experience converting existing software solutions into AMIs."
        },
        {
            name:"Software Testing",
            level:4,
            desc:"Adept knowledge of testing best practices, test driven development and behavior driven development using frameworks similar to Cucumber."
        },
        {
            name:"RESTful API Design",
            level:4,
            desc:"Extensive experience designing and developing RESTful APIs for Web Applications and Services."
        },
        {
            name:"Jenkins",
            level:3,
            desc:"Experience using Jenkins to automate software distribution and site reliability tests."
        },
        {
            name:"Java",
            level:3,
            desc:"Experience using Java to solve highly parallel computing problems and to create mobile apps."
        },
        {
            name:"Vue.JS",
            level:3,
            desc:"Moderate experience designing and developing Web applications with Vue.  This resume extensively uses Vue.js."
        },
        // {
        //     name:"C/C++",
        //     level:3.5,
        //     desc:"Experience includes embedded networking and low level Linux development. Moderately experienced with C++ and many language constructs."
        // },
        // {
        //     name:"REST Framework",
        //     level:3,
        //     desc:"Experience with Generic Views, custom APIViews, Serializers, Authentication, Viewsets and Routers."
        // },
        // {
        //     name:"Channels",
        //     level:4,
        //     desc:"Proficient with version 1 and 2, asynchronous programming, channel layers, background and WebSocket workers."
        // },
        {
            name:"SQL - Postgres & MySQL",
            level:3,
            desc:"Intermediate knowledge of SQL syntax, dialogs, and features. Primary experience with PostgreSQL and MySQL."
        },
        {
            name:"C#",
            level:3,
            desc:"Moderate experience writing Xamarin apps and Unity game logic.  Much formal schooling, including Testing and Design Patterns was in C#."
        },
        {
            name:"Git",
            level:3,
            desc:"Experience with using CLI Git and GitLab to collaborate on a team and control software versions."
        },
        {
            name:"Node.js",
            level:2,
            desc:"Intermediate level experience with writing Node applications as both standalone web sites and Electron Apps."
        },
        // {
        //     name:"Azure",
        //     level:2,
        //     desc:"Experience with ARM Templates."
        // },
        {
            name:"Kubernetes",
            level:3,
            desc:"Moderate experience with multiple Kubernetes providers including Rancher and OpenShift."
        },
        {
            name:"UX Design",
            level:3,
            desc:"Extreme drive and intuition to provide the best user experience for customers."
        },
        {
            name:"PHP",
            level:4,
            desc:"Self-taught for personal web projects, used professionally while working on Tektronix's Sentry Web UI."
        },
        // {
        //     name:"Golang",
        //     level:2,
        //     desc:"Self-taught for personal web projects."
        // },
    ],
    projects:[
        {
            title:"Soundcloud-Lib",
            category:"API Circumvention Library",
            url:"https://github.com/3jackdaws/soundcloud-lib",
            description:"Created after Soundcloud deleted my approved API app so that my Discord bot project could continue to play music in voice channels. Scrapes a public API key from the Soundcloud site and uses it to access the private API.",
            features:[
                "No API key required",
                "Supports Asyncio",
                "Creates an MP3 with embedded metadata (title, artist, album art)"
            ],
            technologies:[
                "python",
                "asyncio",
            ]
        },
        {
            title:"Sling",
            category:"Collaboration Website",
            url:"https://github.com/NeonAesthetic/slingapp-net",
            description:"A room based sharing and collaboration site that features, Text, Audio, and Video Chat, File Sharing, and Desktop sharing via a Chrome extension.  Most realtime communication went over WebSockets, but video and audio data was transmitted peer to peer.  Anyone could make or join a room without an account and room access was granted via share codes.",
            features:[
                "Securely share Text, File, Audio, Webcam, and Desktop data within a Room",
                "Accountless creation and permanent deletion of Rooms",
            ],
            technologies:[
                "PHP",
                "JavaScript",
                "WebRTC",
                "WebSockets",
            ]
        },
        {
            title:"PyCodeExec",
            category:"Arbitrary Code Execution Library",
            url:"https://github.com/NeonAesthetic/pycodeexec",
            description:"Poorly named library that allows for the safe execution of code from several supported languages via Docker.  This python library spins up a heavily restricted Docker container and executes the provided code.",
            features:[
                "Safely execute and return output from arbitrary code",
                "Supports Asyncio",
            ],
            technologies:[
                "Python",
                "Docker",
                "Asyncio"
            ]
        },
        {
            title:"resume-generator",
            category:"Simple Resume Management Tool",
            url:"https://github.com/3jackdaws/resume-generator",
            description:"A tool I created to allow me to generate custom tailored resumes for different positions.  This resume you are looking at right now was generated with this tool.",
            features:[
                "Uses a data file to populate a template",
                "Everything I could possibly want to change is a parameter in that data file",
            ],
            technologies:[
                "Vue.js",
                "HTML",
                "Lots of CSS",
            ]
        },

    ]
};