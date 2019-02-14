
Vue.component("page-break", {
    template:"<div class='page-break'></div>"
});

Vue.component("page", {
    template:"<div class='page'><slot></slot></div>"
});

Vue.component("resume-content", {
    props:{
        "space-around":Boolean
    },
    template:"<div :class='{grid:true, around:spaceAround}'><slot></slot></div>"
});

Vue.component("page-footer", {

    template:"<div class='page-footer grid'><slot></slot></div>"
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

Vue.component("projects", {
    props:['data'],
    template:`
        <div class='section'>
            <h3 class="header">Personal Projects</h3>
            <div v-for='project in data' class='project sub-section'>
                <h5 class="header"><a class="no-decorate" :href="project.url">{{ project.title }} &middot; {{ project.category }}</a></h5>
                <p>{{ project.description }}</p>
                <h6 class="header" style="margin-top: 5px;">Key Features</h6>
                <ul class="results">
                    <li v-for="r in project.features"><span>{{ r }}</span></li>
                </ul>
                <h6 class="inline-header" v-if="project.technologies">Tech Used:</h6><span v-for="tech in project.technologies" class="tech tag">{{tech}}</span>
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
    props:['data', 'header'],
    template:`
        <div class='skill section'>
            <h3 class="header">
                {{ header }}
                <span v-if="skillsHaveExperience" class="proficiency-header">Experience</span>
            </h3>
            <div v-for='skill in data' class='sub-section'>
                <h5 class="header">
                    {{ skill.name }} 
                    <span v-if="skill.level" class="proficiency-level">
                        <span class="proficiency-bar" :style="{width:(skill.level*20)+'%'}"></span>
                    </span>
                </h5>
                 
                <span>{{ skill.desc }}</span>
            </div>
        </div>
    `,
    computed:{
        skillsHaveExperience:function () {
            if(this.data){
                for(let i = 0;i<this.data.length;i++) {
                    if (this.data[i].level) return true;
                }
            }
            return false;
        }
    }
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
    props:{size:Number, info:Boolean, open:Boolean},
    template:`
        <div @click="toggleOpen()" :class="{circle:true, open:open, openable:!!info}" :style="{height:size + 'px', width:size + 'px',fontSize: (size/25) + 'em'}">
            <div><slot></slot></div>
            <div class="application-info">
                {{info.appVersion}}
            </div>
        </div>
    `,
    methods:{
        toggleOpen:function () {
            if(!this.info) return;
            this.open = !this.open;
        }
    }

});

Vue.component("circle-menu", {
    props:{size:Number, info:Object},
    template:`
        <div @click="toggleOpen()" :class="{circle:true, open:open, openable:true}" :style="{height:size + 'px', width:size + 'px',fontSize: (size/25) + 'em'}">
            <div class="initial" v-if="!open">
                <slot></slot>
            </div>
            <div v-if="open" title="Close"><span class="close icon">×</span></div>
            <div class="application-info" @click.stop="">
                <div>
                    <h5>Application Version</h5> 
                    <h2>V{{info.appVersion}}</h2>
                </div>
                <div>
                    <h5>Resume Version</h5> 
                    <h2>V{{info.resumeVersion}}</h2>
                </div>
            </div>
        </div>
    `,
    data:function(){
        return {open:false, clicks:0, decrementInterval:null}
    },
    methods:{
        toggleOpen:function () {
            if(!this.info) return;
            if(this.open){
                this.open = false;
            }else{
                this.clicks++;
                if(this.clicks >= 6){
                    this.open = true;
                }else{
                    if(this.decrementInterval) clearInterval(this.decrementInterval);
                    this.decrementInterval = setTimeout(function(){
                        this.clicks = 0;
                    }.bind(this), 1000);


                }
            }
        }
    }

});


Vue.component("drop-target", {
    props:["visible"],
    template:`<div v-if="visible" class="drop-target">Drop Job Description Text Here</div>`,
});
