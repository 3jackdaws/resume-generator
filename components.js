
Vue.component("page-break", {
    template:"<div class='page-break'></div>"
});

Vue.component("flexbox", {
    props:{
        "space-around":Boolean
    },
    template:"<div :class='{grid:true, around:spaceAround}'><slot></slot></div>"
});

Vue.component("resume-footer", {

    template:"<div class='grid around bottom'><slot></slot></div>"
});


Vue.component("experience", {
    props:['data'],
    template:`
        <div class='section'>
            <h3 class="header">Experience</h3>
            <div v-for='job in data' class='job sub-section'>
                <h5 class="header">{{ job.title }} &middot; {{ job.company }} &middot; {{ job.from }} - {{ job.to }}</h5>
                
                <p>{{ job.description }}</p>
                <ul class="results">
                    <li v-for="r in job.results"><span>{{ r }}</span></li>
                </ul>
                <h6 class="inline-header" v-if="job.technologies">Tech Used:</h6><span v-for="tech in job.technologies" class="tech tag">{{tech}}</span>
            </div>
        </div>
    `
});

Vue.component("education", {
    props:['data'],
    template:`
        <div class='section'>
            <h3 class="header">Education</h3>
            <div v-for='degree in data' class='sub-section'>
                <h5 class="header">{{ degree.type }} in {{ degree.subject }} &middot; {{ degree.date }} &middot; {{ degree.school }}</h5>
                <p>{{ degree.summary }}</p>
            </div>
        </div>
    `
});

Vue.component("skills", {
    props:['data'],
    template:`
        <div class='section'>
            <h3 class="header">Skills</h3>
            <div v-for='skill in data' class='sub-section'>
                <h5 class="header">
                    {{ skill.name }} 
                    <div class="proficiency-level">{{ skill.level }}</div>
                </h5>
                 
                <span>{{ skill.desc }}</span>
            </div>
        </div>
    `
});

Vue.component("simple-section", {
    props:['name'],
    template:`
        <div class='section'>
            <h3 class="header">{{name}}</h3>
            <slot></slot>
        </div>
    `
});


Vue.component("column", {
    props:['width'],
    template:`<div class='column' :style='{flexBasis:width + "%"}'><slot></slot></div>`
});

Vue.component("circle-callout", {
    props:{size:Number, outline:Boolean},
    template:`
        <div :class="{circle:true, outline:outline}" :style="{height:size + 'px', width:size + 'px',fontSize: (size/25) + 'em'}"><slot></slot></div>
    `
});