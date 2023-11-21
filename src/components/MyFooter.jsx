import React, { Component } from 'react'

export default class MyFooter extends Component {
  render() {
    return (
        <footer className="py-3 my-4 bg-dark">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-light">
            Home</a></li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-light">
            Features</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-light">
            Pricing</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-light">
            FAQs</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-light">
            About</a></li>
        </ul>
        <p className="text-center text-warning">© 2023 Design By: Doaa Abd ElHafez</p>
      </footer>
    )
  }
}
