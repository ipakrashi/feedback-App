import React from 'react'
import Card from './components/shared/Card'
import { Link } from 'react-router'

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About this Project</h1>
                <p>This is a React App to leave feedback</p>
                <p>Version: 1.0.0.0</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    culpa blanditiis assumenda obcaecati fuga itaque, adipisci
                    dolorum ratione vel molestiae voluptas. Voluptatem,
                    molestiae, quibusdam cumque consectetur ad sed est
                    repudiandae vel excepturi totam, officiis sint amet maxime?
                    Eum soluta molestias suscipit fugiat nemo, minima vel. Aut
                    rem nulla cum tempore nostrum, eius quisquam quo molestiae
                    voluptate non illum distinctio ipsum quidem corporis, enim
                    vel velit iure placeat odit debitis unde libero totam.
                    Voluptatem, temporibus! Neque provident at molestias qui
                    aspernatur? Non maxime deleniti quo. Possimus reiciendis
                    accusantium neque natus? Ad animi quia explicabo tempora
                    optio, alias dignissimos natus fugiat accusamus?
                </p>
                <p>
                    <Link to='/'>Back To Home Page</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
