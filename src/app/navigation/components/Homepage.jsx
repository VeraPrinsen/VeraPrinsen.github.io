import '../stylesheets/Homepage.css';
import { REACHABLE_PAGES } from "../../App";
import ApplicationCard from "./ApplicationCard";

const Homepage = () => {
    return (
        <div className="main-frame">
            <div className="homepage">
                {REACHABLE_PAGES.map(page => <ApplicationCard key={page.title} title={page.title} path={page.path} />)}
            </div>
        </div>
    )
}

export default Homepage;
