import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Block extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
        />
        <nav className="navbar navbar-light bg-light p-3">
          <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
            <a className="navbar-brand" href="/dashboard.html">
              Hostel Dashboard
            </a>
            <button
              className="navbar-toggler d-md-none collapsed mb-3"
              type="button"
              data-toggle="collapse"
              data-target="#sidebar"
              aria-controls="sidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Hello, Admin
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/login.html">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebar"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/dashboard.html"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span className="ml-2">Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/addstudents.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        width={24}
                        height={24}
                      >
                        <path d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z" />
                      </svg>
                      <span className="ml-2">Room Allotment</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/block.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        width={24}
                        height={24}
                      >
                        <path d="M93.13 257.7C71.25 275.1 53 313.5 38.63 355.1L99 333.1c5.75-2.125 10.62 4.749 6.625 9.499L11 454.7C3.75 486.1 0 510.2 0 510.2s206.6 13.62 266.6-34.12c60-47.87 76.63-150.1 76.63-150.1L256.5 216.7C256.5 216.7 153.1 209.1 93.13 257.7zM633.2 12.34c-10.84-13.91-30.91-16.45-44.91-5.624l-225.7 175.6l-34.99-44.06C322.5 131.9 312.5 133.1 309 140.5L283.8 194.1l86.75 109.2l58.75-12.5c8-1.625 11.38-11.12 6.375-17.5l-33.19-41.79l225.2-175.2C641.6 46.38 644.1 26.27 633.2 12.34z" />
                      </svg>
                      <span className="ml-2">Cleaning Requests</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/block.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bar-chart-2"
                      >
                        <line x1={18} y1={20} x2={18} y2={10} />
                        <line x1={12} y1={20} x2={12} y2={4} />
                        <line x1={6} y1={20} x2={6} y2={14} />
                      </svg>
                      <span className="ml-2">Complaints</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/addstaff.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-users"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span className="ml-2">Staff Members</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
              <h1 className="h2">Dashboard</h1>
              <div className="row my-4">
                <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                  <div className="card" style={{ paddingTop: "150px" }}>
                    <div className="card-body">
                      <h5 className="font-size card-title">Block A</h5>
                      <p className="card-text text-danger">
                        <a href="/Cleaning.html">Cleaning Requests</a>
                      </p>
                      <p className="card-text text-danger">
                        <a href="/Complaints.html">Complaints</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-6">
                  <div className="card">
                    <div className="card-body" style={{ paddingTop: "150px" }}>
                      <h5 className="font-size card-title">Block B</h5>
                      <p className="card-text text-danger">
                        <a href="/Cleaning.html">Cleaning Requests</a>
                      </p>
                      <p className="card-text text-danger">
                        <a href="/Complaints.html">Complaints</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-6"
                  style={{ marginTop: "50px" }}
                >
                  <div className="card">
                    <div className="card-body" style={{ paddingTop: "150px" }}>
                      <h5 className="font-size card-title ">Block C</h5>
                      <p className="card-text text-danger">
                        <a href="/Cleaning.html">Cleaning Requests</a>
                      </p>
                      <p className="card-text text-danger">
                        <a href="/Complaints.html">Complaints</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-6"
                  style={{ marginTop: "50px" }}
                >
                  <div className="card">
                    <div className="card-body" style={{ paddingTop: "150px" }}>
                      <h5 className="font-size card-title ">Block D</h5>
                      <p className="card-text text-danger">
                        <a href="/Cleaning.html">Cleaning Requests</a>
                      </p>
                      <p className="card-text text-danger">
                        <a href="/Complaints.html">Complaints</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}