import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApptShow from '../ApptShow'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays an image", () => {
    const show = shallow(<ApptShow />)
    const textWrapper = show.find("h3")
    expect(textWrapper.length).toEqual(1)
  })
})