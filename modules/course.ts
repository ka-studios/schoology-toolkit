/**
 * Lists courses on a user
 */

import { consola } from "consola"
import { getConfig } from "../lib/config"
const config = getConfig()
const sess = config.tokenPrefix
export default function getCourses() {
        let obj = [];
        fetch(`${config.schoologyURL}/iapi2/site-navigation/courses`, {
            headers: {
                'Cookie': `${config.tokenPrefix}=${config.token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            obj = data.data.courses;
            obj.forEach(course => {
                const courseId = course.nid;
                const courseTitle = course.courseTitle;
                const sectionTitle = course.sectionTitle;
                const buildingTitle = course.buildingTitle;
                const courseWeight = course.weight;
                consola.success(`${courseTitle} ${sectionTitle}`)
            })
        })
    }

    