import '../stylesheets/Homepage.css'
import { REACHABLE_PAGES } from '../../App'
import ApplicationCard from './ApplicationCard'

const Homepage = () => {
    return (
        <div className="main-frame">
            <div className="homepage">
                {REACHABLE_PAGES.map(page => <ApplicationCard title={page.title} path={page.path} key={page.title} />)}
            </div>
        </div>
    )
}

export default Homepage
