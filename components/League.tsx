import Link from '../src/Link'
import {Component} from "react";

class League extends Component {
    render() {
        let { id, name, fullName, logo } = this.props.leagueData ;
        return (
            <Link href={`/ladder/${encodeURIComponent(id)}`}>
                <img src={logo} alt={name} width="100"></img>
                <h2>{fullName}</h2>
            </Link>
        )
    }
}

export default League;
