import FilterPanel from './FilterPanel'
import { connect } from 'react-redux'

import { setOverlay } from 'redux/overlay'

export default connect(null, { setOverlay })(
	FilterPanel
)
