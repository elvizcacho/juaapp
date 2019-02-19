import React, {Component} from 'react'
import moment from 'moment'
import './Table.scss'

class Table extends Component {


    render() {
        return (
            <table className='table'>
                <thead>
                <tr>
                    <th className='date'>Date</th>
                    <th className='description'>Description</th>
                    <th className='category'>Category</th>
                    <th className='value'>Value</th>
                </tr>
                </thead>
                <tbody>
                {this.props.rows.map(row => {
                    return (
                        <tr key={row.id}>
                            <td className={`date ${row.selected ? 'selected' : ''}`.trim()}>{moment(row.date).format('DD.MM.YYYY')}</td>
                            <td className={`description ${row.selected ? 'selected' : ''}`.trim()}>{row.description}</td>
                            <td className={`category ${row.selected ? 'selected' : ''}`.trim()}>{row.category}</td>
                            <td className={`value ${row.selected ? 'selected' : ''}`.trim()}>{row.value}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

export default Table