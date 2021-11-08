import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays an image", () => {
    const home = shallow(<Home />)
    const textWrapper = home.find("h5")
    expect(textWrapper.length).toEqual(1)
  })
})