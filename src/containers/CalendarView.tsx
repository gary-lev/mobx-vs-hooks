import { Col, Row } from 'reactstrap'
import CalendarHooks from '../components/CalendarHooks'
import CalendarMobx from '../components/CalendarMobx'

function CalendarView() {
 return (
    <div>
      <h1>Calendar Example</h1>

      <Row>
        <Col>
          <h2>Hooks</h2>
          <CalendarHooks />
        </Col>
        <Col>
          <h2>MobX</h2>
          <CalendarMobx />
        </Col>
      </Row>
    </div>
  )
}

export default CalendarView
