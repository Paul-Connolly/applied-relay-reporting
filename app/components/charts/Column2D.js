import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

var salesChartConfigs = {
    width: "600",
    height: "400",
    type: "column2d",
	dataSource: {
		chart: {
	        caption: "Harry's SuperMart",
	        subCaption: "Top 5 stores in last month by revenue",
	        numberPrefix: "$",
	        theme: "carbon"
	    },
	    data: [{
	        label: "Bakersfield Central",
	        value: "880000"
	    }, {
	        label: "Garden Groove harbour",
	        value: "730000"
	    }, {
	        label: "Los Angeles Topanga",
	        value: "590000"
	    }, {
	        label: "Compton-Rancho Dom",
	        value: "520000"
	    }, {
	        label: "Daly City Serramonte",
	        value: "330000"
	    }]
	}
};

export default class Column2d extends React.Component{
    render() {
        return (
            <ReactFC {...salesChartConfigs} />
        );
    }
};