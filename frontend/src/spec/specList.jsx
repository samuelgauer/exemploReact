import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './specActions'

class SpecList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(sp => (
            <tr key={sp._id}>
                <td>{sp.name}</td>
                <td>{sp.description}</td>
                <td>{sp.createdAt}</td>
            </tr>
        ))
    }


    render() {
        console.log(this.props.list)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.spec.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SpecList)