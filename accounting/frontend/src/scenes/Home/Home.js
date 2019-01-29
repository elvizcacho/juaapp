import React, {Component} from 'react'
import Table from './components/Table/Table.js'
import './Home.scss'
import axios from 'axios'

class Home extends Component {

    state = {
        entries: []
    }

    componentDidMount() {
        axios
            .get('/api/accounting/entries')
            .then(response => this.setState({entries: response.data}))
    }

    render() {
        return (
            <div className='container'>
                <div className='table-container'>
                    <h2>Januar</h2>
                    <Table rows={this.state.entries}/>
                </div>
            </div>

        )
    }

}

export default Home
