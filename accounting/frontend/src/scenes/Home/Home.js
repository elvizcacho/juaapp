import React, {Component} from 'react'
import Table from './components/Table/Table.js'
import './Home.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as bankEntriesActions from '../../actions/bankEntriesActions'


class Home extends Component {

    componentDidMount() {
        this.props.bankEntriesActions.fetchBankEntries()
    }

    render() {
        return (
            <div className='container'>
                <div className='table-container'>
                    <h2>{this.props.bankEntriesTitle}</h2>
                    <Table rows={this.props.bankEntries}/>
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    console.log(state);
    return {
        bankEntries: state.bankEntriesReducer.bankEntries,
        bankEntriesTitle: state.bankEntriesReducer.bankEntriesTitle
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
