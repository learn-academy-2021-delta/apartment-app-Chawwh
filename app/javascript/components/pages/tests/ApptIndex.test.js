import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApptIndex from '../ApptIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays an image", () => {
    const index = shallow(<ApptIndex />)
    const textWrapper = index.find("h3")
    expect(textWrapper.length).toEqual(1)
  })
})