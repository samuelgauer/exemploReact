import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/specs`)
    return {
        type: 'SPECS_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/specs`,values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch([
                    resetForm('specForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')

                ])
            })
            /*.catch(e => {
                //e.response.data.erros.forEach(error => toastr.error('Erro', error))

            })*/
       
    }
}