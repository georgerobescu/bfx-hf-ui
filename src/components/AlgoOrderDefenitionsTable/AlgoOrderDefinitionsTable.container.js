import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TableActions from '../../redux/actions/table'
import EditorActions from '../../redux/actions/editor'

import AlgoOrderDefinitionsTableView from './AlgoOrderDefinitionsTable'

const mapStateToProps = (state = {}, ownProps = {}) => {
  const { orders = [] } = ownProps
  const { algoOrders = [] } = state.table
  const { editorOpened = false } = state.editor
  return {
    algoOrders,
    orders,
    editorOpened,
  }
}

const mapDispatchToProps = dispatch => ({
  changeStatus: (index) => {
    dispatch(TableActions.changeStatus(index))
  },
  getTableData: () => {
    dispatch({ type: 'WS_SEND', payload: 'get.aos' })
  },
  toggleEditor: (flag) => {
    dispatch(EditorActions.toggleEditor(flag))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AlgoOrderDefinitionsTableView)
