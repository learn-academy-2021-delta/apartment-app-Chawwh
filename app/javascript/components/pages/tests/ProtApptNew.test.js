import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtApptNew from '../ProtApptNew'

Enzyme.configure({adapter: new Adapter()})

describe("When the create page renders", () => {
  it("displays a heading", () => {
    const newPage = shallow(<ProtApptNew />)
    const textWrapper = newPage.find("h3")
    expect(textWrapper.length).toEqual(1)
  })
})