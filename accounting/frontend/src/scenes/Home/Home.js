import React, {Component} from 'react'
import {Table} from './components/Table/Table.js'
import './Home.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as bankEntriesActions from '../../actions/bankEntriesActions'
import {CategoryChart} from "./components/CategoryChart/CategoryChart";


class Home extends Component {

    componentDidMount() {
        this.props.bankEntriesActions.fetchBankEntries()
    }

    onSelectCategory = (selection) => {
        const {row} = selection[0]
        const category = this.props.bankEntriesChartData[row + 1][0]
        this.props.bankEntriesActions.selectBankEntryCategory(category, selection)
    }

    onUnselectCategory = () => {
        this.props.bankEntriesActions.unselectBankEntryCategory()
    }

    render() {
        return (
            <div className='container'>
                <div className='table-container'>
                    <h2>{this.props.bankEntriesTitle}</h2>
                    <Table rows={this.props.bankEntries}/>
                    <CategoryChart
                        data={this.props.bankEntriesChartData}
                        selectedRow={this.props.bankEntriesSelectedRow}
                        selectCategory={this.onSelectCategory}
                        unselectCategory={this.onUnselectCategory}
                    />
                </div>
            </div>
        )
    }



}


function mapStateToProps(state) {
    return {
        bankEntries: state.bankEntriesReducer.bankEntries,
        bankEntriesTitle: state.bankEntriesReducer.bankEntriesTitle,
        bankEntriesChartData: state.bankEntriesReducer.bankEntriesChartData,
        bankEntriesSelectedRow: state.bankEntriesReducer.bankEntriesSelectedRow
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
