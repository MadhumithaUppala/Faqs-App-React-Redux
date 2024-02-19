// Write your code he
import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div>
        <h1>FAQs</h1>

        <ul>
          {faqsList.map(eachItem => (
            <FaqItem faqDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
