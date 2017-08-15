import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCount } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getCount()
    }

    render() {
        const count = this.props.count.count
        return (
            <div>
                <ContentHeader title='Dasboard' small='versão 0.1' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={count} text='Total de Ciclos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value='10' text='Total de Ciclos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value='10' text='Total de Ciclos' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({count: state.dashboard.count})
const mapDispatchToProps = dispatch => bindActionCreators({getCount}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)