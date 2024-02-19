// Write your code here.

import {Component} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {donotshow} from '../../actions/faqAction'

class FaqItem extends Component {
  render() {
    const dispatch = useDispatch()

    const symbol = useSelector(state => state.Faqs.symbol)

    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const sign = symbol
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const a = () => {
      if (symbol === false) {
        return <p>{answerText}</p>
      }
    }

    const alternative = symbol ? 'plus' : 'minus'

    const changemark = () => {
      dispatch(donotshow()) // Dispatching the decrement action
    }

    return (
      <li>
        <h1>{questionText}</h1>
        <button type="button" onClick={this.changemark}>
          <img src={sign} alt={alternative} />
        </button>
        <p>{a()}</p>
      </li>
    )
  }
}

export default FaqItem
