import {Component} from 'react'
import React from "react";
import Chart from "react-google-charts";

export class CategoryChart extends Component {

    chartEvents = [
        {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
                const selection = chartWrapper.getChart().getSelection()
                if (selection[0]) {
                    this.props.selectCategory(selection)
                } else {
                    this.props.unselectCategory()
                }
            }
        },
        {
            eventName: 'ready',
            callback: ({ chartWrapper }) => {
                chartWrapper.getChart().setSelection(this.props.selectedRow)
            }
        }
    ];

    render() {
        const chartOptions = {
            title: 'Summary',
            pieHole: 0.4,
            is3D: false
        }
        return (
            <Chart
                chartType='PieChart'
                width='100%'
                height='700px'
                data={this.props.data}
                options={chartOptions}
                chartEvents={this.chartEvents}
            />
        )
    }
}