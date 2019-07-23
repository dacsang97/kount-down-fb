import { h, Component } from 'preact'

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.interval = null
  }
  componentDidMount() {
    this.targetDate = this.props.date
    this.interval = setInterval(() => {
      this.getTimeTill(this.targetDate, timeRemaining => {
        this.setState({
          timeRemaining,
        })
      })
    }, 1000)
  }
  componentWillUnMount() {
    clearInterval(this.interval)
  }
  getTimeTill(targetTime, cb) {
    const current = new Date()
    const currentTime = current.getTime()
    const millis = targetTime - currentTime
    const f = Math.floor
    const seconds = f(millis / 1000)
    const minutes = f(seconds / 60)
    const hours = f(minutes / 60)
    const daysRemaining = f(hours / 24)
    const hoursRemaning = hours % 24
    const minutesRemaning = minutes % 60
    const secondsRemaning = seconds % 60

    const timeRemaining = {
      days: daysRemaining,
      hours: hoursRemaning,
      minutes: minutesRemaning,
      seconds: secondsRemaning,
    }
    cb(timeRemaining)
  }
  render() {
    const { title, date } = this.props
    const { timeRemaining } = this.state
    if (!timeRemaining) return null
    return (
      <div className="_1-ia">
        <div className="_1-ib _2tyk _20os _4-u8">
          {!date ? (
            <p>Bạn cần cài đặt ngày trước khi sử dụng</p>
          ) : (
            <div id="countDown">
              {title && <h1>{title}</h1>}
              <section>
                <div className="days section">
                  <h1>{this.state.timeRemaining.days}</h1>
                  <p>Days</p>
                </div>
                <div className="hours section">
                  <h1>{this.state.timeRemaining.hours}</h1>
                  <p>Hours</p>
                </div>
                <div className="minutes section">
                  <h1>{this.state.timeRemaining.minutes}</h1>
                  <p>Minutes</p>
                </div>
                <div className="seconds section">
                  <h1>{this.state.timeRemaining.seconds}</h1>
                  <p>Seconds</p>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Countdown
