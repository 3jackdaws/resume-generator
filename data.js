COMPANY = "at Technology Corp ";
SKILLS = "my superior technology skills";
OUTCOME = "ensure a high level of efficiency and productivity";


DATA = {
    resumeName:"General Resume",
    resumeVersion:"2.3.0",
    applicant:"Ian Murphy",
    role:"Web Application Engineer",          //what you would consider yourself, this can be the position applied for
    website:"http://ianmurphy.dev",                       //your personal website
    linkedin:"linkedin.com/in/ian-m-murphy/",   
    email:"ian@isogen.net",
    phone:"(503) 830 - 2275",
    github:"github.com/3jackdaws",  
    // objective:`Seeking a position ${COMPANY} where I can apply ${SKILLS} to ${OUTCOME}.`,                                                              //for tailored resumes
    profile:`Results driven, semi-perfectionist, multi-language web application engineer who is highly motivated, flexible, and team oriented.`,    //for non-specific resumes
    displayObjective:false,         //only object OR profile can be displayed at once.  If false, profile is displayed.  If true, objective is displayed.     
    experience:[                    //professional experience
        {
            company:"Daimler Trucks NA",
            title:"Web App Engineer",
            from:"March 2019",
            to:"Present",
            description:"Served as Lead Application Engineer for highly critical, customer-facing, commercial vehicle information systems.  Acted as sole support developer for several internal applications using multiple different languages and web frameworks.",
            results:[

            ],
            technologies:[
                "Java",
                "Spring Boot",
                "Apache Struts",
                "WebSphere",
                "Urban Code",
                "Dojo Toolkit",
                "ASP Classic",
                "C#",
            ]
        },
        {
            company:"Intel with Cinder Solutions",
            title:"Automation Engineer",
            from:"January 2019",
            to:"March 2019",
            description:"Automated validation processes for Intel's Dynamic Tuning software solution.  Triaged and debugged failing tests.",
            results:[

            ],
            technologies:[
                "C#",
                "Jenkins",
                "TeamCity",
                "BDD",
                "Gherkin",
            ]
        },
        {
            company:"Daimler Trucks NA",
            title:"Cloud Automation Intern",
            from:"June 2018",
            to:"Dec 2018",
            description:"Lead efforts to consolidate steps involved in decommissioning enterprise infrastructure and developed self-service VM decommissioning tools. Was tasked with evaluating and supplying recommendations for the purchase of third party software that amounted to more than $200k. ",
            results:[
                "Solved the infrastructure decommissioning \"million dollar problem\".",
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
        // {
        //     company:"Vobile, Inc",
        //     title:"R&D Intern",
        //     from:"December 2016",
        //     to:"January 2017",
        //     description:"Oversaw office-wide Windows 10 workstation upgrades. Performed out of box setup and installation of new workstations. ",
        //     technologies:[
        //         "Python",
        //         "Docker",
        //     ]
        // },
        // {
        //     company:"Vobile, Inc",
        //     title:"R&D Intern",
        //     from:"June 2016",
        //     to:"January 2017",
        //     description:"Accelerated internal documentation software migration by designing format conversion scripts in Python. Dockerized inventory managment software. Performed intra-office tech support.",
        //     technologies:[
        //         "Python",
        //         "Docker",
        //     ]

        // },
    ],
    education:[
        {
            type:"BS",
            subject:"Software Engineering",
            school:"Oregon Institute of Technology",
            date:"2018",
            summary:"GPA 3.61 · Emplaced a solid foundation for analyzing problems and providing practical solutions.  Courses included Software Testing, Data Structures, Design Patterns, Operating Systems, Embedded Networking, and Advanced Unix."
        }
    ],
    primarySkills:6,    //display this many skills on first page
    secondarySkills:20, //display this many skills in overflow on second page
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
            name:"Java",
            level:4,
            desc:"Experience engineering enterprise web applications using multiple Java web frameworks (Struts, Spring Boot)"
        },
        {
            name:"Web Development",
            level:4,
            desc:"High level of experience with web development technologies, web design, application architectures (MVC, MVT), designing scalable and fault tolerant web applications, and deploying and hosting web sites to Linux servers and Docker hosts."
        },
        {
            name:"Software Testing",
            level:4,
            desc:"Adept knowledge of testing best practices, test driven development, and behavior driven development using Gherkin and frameworks similar to Cucumber."
        },
        {
            name:"JavaScript",
            level:3,
            desc:"Proficiency with front-end JavaScript, the DOM, and knowledge of the JavaScript runtime environment."
        },
        {
            name:"Vue.JS",
            level:3,
            desc:"Moderate experience designing and developing Web applications with Vue.  This resume extensively uses Vue.js."
        },
        {
            name:"Amazon Web Services",
            level:3,
            desc:"Experience with EC2, ECS, Lambda, and API Gateway services.  Experience converting existing software solutions into AMIs."
        },
        {
            name:"C/C++",
            level:3.5,
            desc:"Experience includes embedded networking and low level Linux development. Moderately experienced with C++ and many language constructs."
        },
        // {
        //     name:"Django",
        //     level:4,
        //     desc:"Proficient with Models, Forms, Middleware, Django templating, custom authentication backends.  Extensive experience with add on frameworks such as DRF and Channels."
        // },
        {
            name:"C#",
            level:3,
            desc:"Moderate experience writing Xamarin apps and Unity game logic.  Much formal schooling, including Testing and Design Patterns was in C#."
        },
        {
            name:"Jenkins",
            level:3,
            desc:"Experience using Jenkins to automate software distribution and site reliability tests."
        },
        {
            name:"Git",
            level:3,
            desc:"Experience with using CLI Git and GitLab to collaborate on a team and control software versions."
        },
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
            name:"RESTful API Design",
            level:4,
            desc:"Extensive experience designing and developing RESTful APIs for Web Applications and Services."
        },
        {
            name:"SQL - Postgres & MySQL",
            level:3,
            desc:"Intermediate knowledge of SQL syntax, dialogs, and features. Primary experience with PostgreSQL and MySQL."
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
    projects:[      // this just fills up space on the second page, idk what else to put here ¯\_(ツ)_/¯
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
            url:"https://github.com/3jackdaws/pycodeexec",
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