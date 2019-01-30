import React, {Component} from 'react'
import Table from './components/Table/Table.js'
import './Home.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as bankEntriesActions from '../../actions/bankEntriesActions'
import Chart from "react-google-charts";


class Home extends Component {

    componentDidMount() {
        this.props.bankEntriesActions.fetchBankEntries()
    }

    render() {
        const chartOptions = {
            title: 'Summary',
            pieHole: 0.4,
            is3D: false
        }
        console.log(this.props.bankEntriesChartData)
        return (
            <div className='container'>
                <div className='table-container'>
                    <h2>{this.props.bankEntriesTitle}</h2>
                    <Table rows={this.props.bankEntries}/>
                    <Chart
                        chartType='PieChart'
                        width='100%'
                        height='400px'
                        data={this.props.bankEntriesChartData}
                        options={chartOptions}
                    />
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    console.log(state);
    return {
        bankEntries: state.bankEntriesReducer.bankEntries,
        bankEntriesTitle: state.bankEntriesReducer.bankEntriesTitle,
        bankEntriesChartData: state.bankEntriesReducer.bankEntriesChartData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bankEntriesActions: bindActionCreators(bankEntriesActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Home)
