import React, {Component} from 'react'
import Table from './components/Table/Table.js'
import './Home.scss'

class Home extends Component {

    render() {
        const rows = [
            {
                id: '8ceca97e-226a-11e9-ab14-d663bd873d93',
                date: new Date(2019, 1, 1),
                description: 'Amazon EU',
                category: 'Study',
                value: -11.99,
            }
        ]
        return (
            <div className='container'>
                <div className='table-container'>
                    <h2>Januar</h2>
                    <Table rows={rows}/>
                </div>
            </div>

        )
    }

}

export default Home
