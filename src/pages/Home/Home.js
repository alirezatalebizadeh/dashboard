import React from 'react'
import Feature from './../../components/Feature/Feature'
import Chart from './../../components/Chart/Chart'
import { xAxisData } from './../../datas'
import WidgetSm from './../../components/WidgetSm/WidgetSm'
import WidgetLg from './../../components/widgetLg/WidgetLg'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <Feature />
            <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale' />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
