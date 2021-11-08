import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'
import mockPic from '../../mockFile'

Enzyme.configure({adapter: new Adapter()})

describe('When the Header loads...', ()=>{
    it('displays 3 NavLinks', () =>{

        const headerWrapper = shallow(<Header />)
        const navLinkWrapper = headerWrapper.find("NavLink")

        expect(navLinkWrapper.length).toEqual(2)
    })
    it("displays an image", () => {
        const logo = shallow(<Header />)
        expect(logo.find("img").prop("src")).toEqual(mockPic);
      })
})