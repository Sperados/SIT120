const Home = {
    template: `
    <div id="text">

        <h1>Hello, I'm Michael Sperandeo</h1>
        <p>I am a Bachelor of Computer Science student at Deakin University and working full time as a Desktop Support Engineer at Blue Connections IT. I was also a member of the Microsoft IT
            Traineeship program where I attained a Certifricate IV Information Technology (Networking) and various other
            Microsoft acreddited certificates. </p>
    </div id="text">
    
    <img src="Assets/Headshot.jpeg" alt="Michael Sperandeo Headshot" height="400" width="400">
    `
};

const Work = {
    template: `
    <div class="work">
        <h1>Work</h1>

        <h2>Education</h2>
        <ul>
            <li>Bachelor of Computer Science, Full Stack Development</li>
            <li>Certificate IV Information Technology (Networking)</li>
            <li>Caulfield Grammar School</li>
        </ul>

        <h2>Work Experience</h2>
        <ul>
            <li>Blue Connections IT, Desktop Support Engineer</li>
            <li>Microsoft IT Traineeship Program</li>
        </ul>

        <h2>Certifications</h2>
        <ul>
            <li>Certificate IV IT (Networking)</li>
            <li>IT Technical Support Specialist</li>
            <li>IT Specialist - Device Configuration & Management</li>
            <li>IT Specialist - Network Security</li>
            <li>IT Specialist - Networking</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>Microsoft Office Specialist: Excel</li>
            <li>Microsoft Office Specialist: PowerPoint</li>
            <li>Microsoft Office Specialist: Word</li>
        </ul>

        <h2>Skills</h2>
        <ul>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>

    </div>`
};

const Contact = {
    template: `
    <div class="contact-container">
        <h1>Contact</h1>
        <p>Michael Sperandeo
        <br>
        Email: sperandeomichael@gmail.com
        <br>
        Mobile: 0431 244 936
        <br>
        LinkedIn: <a href="https://www.linkedin.com/in/michael-sperandeo-58786320a/" target="_blank">Michael Sperandeo</a></p>
        <form>
            <label for="name">Name:</label><br>
            <input type="text" id="name" v-model="name"><br>
            <label for="message">Message:</label><br>
            <textarea id="message" v-model="message"></textarea><br><br>
            <input type="submit" value="Submit">
        </form>
        <p v-if="name">Hello, {{ name }}!</p>
    </div>`,
    data() {
        return {
            name: '',
            message: ''
        }
    }
};


const About = {
    template: `
    <div class="about-page">
        <h1>About</h1>
        <table>
            <tr v-for="item in items">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>

        <p>
        <br>
        <h3>My IT Journey</h3>

        <br>

        At Blue Connections IT as a Desktop Support Engineer, I gained deep insights into the enterprise service desk, honed my troubleshooting abilities, and enhanced the customer journey. This role was also a chapter in the Microsoft IT Traineeship program, reflecting my dedication to the IT field.

        My education at Deakin University anchored my Computer Science fundamentals, and a Certificate IV in IT (Networking) from the Australian College of Commerce and Management further validated my technical acumen.

        With skills in C++, C#, Python, and networking certifications like "IT Specialist – Network Security", I've blended theory with hands-on proficiency. My tenure at Blue Connections IT also saw me mentoring newcomers, underscoring my leadership in tech.

        Inherently curious and driven by innovation, I consistently challenge the status quo, whether in programming or network security, striving for digital excellence.
        
        </p>
    </div>`,
    data() {
        return {
            items: [
                { name: 'Age:', value: 21 },
                { name: 'Location:', value: 'Melbourne, Australia' },
                { name: 'Occupation:', value: 'Desktop Support Engineer' },
                { name: 'Graduation:', value: '2024 T2' },
                { name: 'Interests:', value: 'Sports, Coding, Music, Socializing' }

            ]
        }
    }
};

const routes = [
    { path: '/', component: Home },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact },
    { path: '/about', component: About }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
