import { consola } from "consola";
import { getConfig } from "../lib/config"
const config = getConfig();

function getUpcomingEvents() {
    fetch(`${config.schoologyURL}/home/upcoming_ajax`, {
        headers: {
            "Cookie":`${config.tokenPrefix}=${config.token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const obj = data.html
        const dateSection = [...obj.matchAll(/hidden"><h4>(.*?)<\/div><\/div>/g)]
        dateSection.forEach(sect => {
            const date = /(.*?)<\/h4>/g.exec(sect[1])
            const course = /aria-label='(.*?)'><span class/g.exec(sect[1])
            const assignment = /class="">(.*?)<\/a><span>/g.exec(sect[1])
            consola.success("On " + date[1])
            consola.start(course[1])    
            consola.box(assignment[1])
        })
    })
}

function getUpcomingSubmissions() {
    fetch(`${config.schoologyURL}/home/upcoming_submissions_ajax`, {
        headers: {
            "Cookie":`${config.tokenPrefix}=${config.token  }`
        }
    })
    .then(response => response.json())
    .then(data => {
        const obj = data.html
        const dateSection = [...obj.matchAll(/hidden"><h4>(.*?)<\/div><\/div>/g)]
        dateSection.forEach(sect => {
            const date = /(.*?)<\/h4>/g.exec(sect[1])
            const course = /aria-label='(.*?)'><span class/g.exec(sect[1])
            const assignment = /\/[0-9]{10}">(.*?)<\/a><span>/g.exec(sect[1])
            consola.success("Due " + date[1])
            consola.start(course[1])    
            consola.box(assignment[1])
        })
    })
}

function getRecentSubmissions() {
    fetch(`${config.schoologyURL}/home/recently_completed_ajax`, {
        headers: {
            "Cookie":`${config.tokenPrefix}=${config.token  }`
        }
    })
    .then(response => response.json())
    .then(data => { 
        const obj = data.html
        const section = [...obj.matchAll(/<div class='recently-completed-event'>(.*?)<\/span><\/span><\/div>/g)]
        section.forEach(sect => {
            var grade = /<span class='recently-completed-grade' aria-label='(.*?)'>—</g.exec(sect[1])
            const course = /aria-label='(.*?)'><span class/g.exec(sect[1])
            const assignment = /assignment\/[0-9]{10}">(.*?)<\/a>/g.exec(sect[1])
            if (grade[1] === "This material has been submitted but not yet graded") {
                grade[1] = "N/A"
            }
            consola.success(course[1])    
            consola.box(`${assignment[1]}\nGrade: ${grade[1]}`)
        })
    })
}
export { getUpcomingEvents, getUpcomingSubmissions, getRecentSubmissions }