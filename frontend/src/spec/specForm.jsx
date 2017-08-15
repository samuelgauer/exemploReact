import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class SpecForm extends Component {

    render() {

        const { handleSubmit } = this.props
        
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} 
                        label='Name' cols='12 4' placeholder='Name'/>
                    <Field name='description' component={labelAndInput} 
                        label='Description' cols='12 4' placeholder='description'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'specForm'})(SpecForm)