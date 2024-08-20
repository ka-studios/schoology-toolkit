/**
 * Lists members in a course
 */

import { consola } from "consola";
import { getConfig } from "../lib/config"

const config = getConfig();

export default function MemberList(course: number, query?: string) {
    if (query) {
        fetch(`${config.schoologyURL}/enrollments/edit/members/course/${course}/ajax?t=a&s=${query}`, {
            headers: {
                "Cookie": `${config.tokenPrefix}=${config.token}`
            }
        })
        .then(response => response.text())
        .then(data => {
            const matches = [...data.matchAll(/alt="Profile picture for (.*?)" title=/g)];
            matches.forEach(match => {
                consola.success(`${match[1]} 👑`);
            });
        });
    
        fetch(`${config.schoologyURL}/enrollments/edit/members/course/${course}/ajax?t=m&s=${query}`, {
            headers: {
                "Cookie": `${config.tokenPrefix}=${config.token}`
            }
        })
        .then(response => response.text())
        .then(data => {
            const matches = [...data.matchAll(/alt="Profile picture for (.*?)" title=/g)];
            matches.forEach(match => {
                consola.success(match[1]);
            });
        });
    } else {
        fetch(`${config.schoologyURL}/enrollments/edit/members/course/${course}/ajax?t=a`, {
            headers: {
                "Cookie": `${config.tokenPrefix}=${config.token}`
            }
        })
        .then(response => response.text())
        .then(data => {
            const matches = [...data.matchAll(/alt="Profile picture for (.*?)" title=/g)];
            matches.forEach(match => {
                consola.success(`${match[1]} 👑`);
            });
        });

        fetch(`${config.schoologyURL}/enrollments/edit/members/course/${course}/ajax?t=m`, {
            headers: {
                "Cookie": `${config.tokenPrefix}=${config.token}`
            }
        })
        .then(response => response.text())
        .then(data => {
            const matches = [...data.matchAll(/alt="Profile picture for (.*?)" title=/g)];
            matches.forEach(match => {
                consola.success(match[1]);
            });
        });
    }
}
