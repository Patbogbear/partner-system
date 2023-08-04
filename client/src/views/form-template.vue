<template>
     <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">
          <div class="col-12">
            <form action="" method="post" class="card">
              <div class="card-header">
                <h4 class="card-title">Form elements</h4>
              </div>
              <div class="card-body">
                <div class="row g-5">
                  <div class="col-xl-4">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">Disabled</label>
                          <input
                            type="text"
                            class="form-control"
                            name="example-disabled-input"
                            placeholder="Disabled..."
                            value="Well, she turned me into a newt."
                            disabled
                          />
                        </div>
                        <div class="mb-3">
                          <div class="form-label">Select</div>
                          <select class="form-select">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="form-label">Select multiple</div>
                          <select class="form-select" multiple>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <div class="form-label">Select multiple states</div>
                          <select
                            type="text"
                            class="form-select"
                            id="select-states"
                            value=""
                            multiple
                          >
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ" selected>Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC" selected>South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY" selected>Wyoming</option>
                          </select>
                        </div>

                        <div class="mb-3">
                          <label class="form-label">Loader input</label>
                          <div class="input-icon mb-3">
                            <input
                              type="text"
                              value=""
                              class="form-control"
                              placeholder="Loading…"
                            />
                            <span class="input-icon-addon">
                              <div
                                class="spinner-border spinner-border-sm text-secondary"
                                role="status"
                              ></div>
                            </span>
                          </div>
                          <div class="input-icon mb-3">
                            <span class="input-icon-addon">
                              <div
                                class="spinner-border spinner-border-sm text-secondary"
                                role="status"
                              ></div>
                            </span>
                            <input
                              type="text"
                              value=""
                              class="form-control"
                              placeholder="Loading…"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Separated inputs</label>
                          <div class="row g-2">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Search for…"
                              />
                            </div>
                            <div class="col-auto">
                              <a
                                href="#"
                                class="btn btn-icon"
                                aria-label="Button"
                              >
                                
                              
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">Form control flush</label>
                          <input
                            type="text"
                            class="form-control form-control-flush"
                            name="Form control flush"
                            placeholder="Text.."
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Input group</label>
                          <div class="input-group mb-2">
                            <span class="input-group-text"> @ </span>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="username"
                              autocomplete="off"
                            />
                          </div>
                          <div class="input-group mb-2">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="subdomain"
                              autocomplete="off"
                            />
                            <span class="input-group-text"> .tabler.io </span>
                          </div>
                          <div class="input-group">
                            <span class="input-group-text"> https:// </span>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="subdomain"
                              autocomplete="off"
                            />
                            <span class="input-group-text"> .tabler.io </span>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >Input with checkbox or radios</label
                          >
                          <div class="input-group mb-2">
                            <span class="input-group-text">
                              <input
                                class="form-check-input m-0"
                                type="checkbox"
                                checked
                              />
                            </span>
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                            />
                          </div>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                            />
                            <span class="input-group-text">
                              <input
                                class="form-check-input m-0"
                                type="radio"
                                checked
                              />
                            </span>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Floating inputs</label>
                          <div class="form-floating mb-3">
                            <input
                              type="email"
                              class="form-control"
                              id="floating-input"
                              value="name@example.com"
                              autocomplete="off"
                            />
                            <label for="floating-input">Email address</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              type="password"
                              class="form-control"
                              id="floating-password"
                              value="Password"
                              autocomplete="off"
                            />
                            <label for="floating-password">Password</label>
                          </div>
                          <div class="form-floating">
                            <select
                              class="form-select"
                              id="floatingSelect"
                              aria-label="Floating label select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <label for="floatingSelect">Select</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">Validation States </label>
                          <input
                            type="text"
                            class="form-control is-valid mb-2"
                            placeholder="Valid State.."
                          />
                          <input
                            type="text"
                            class="form-control is-invalid"
                            placeholder="Invalid State.."
                          />
                          <div class="invalid-feedback">Invalid feedback</div>
                        </div>
                  

                      </div>
                      <div class="col-md-6 col-xl-12">
                      
                        <div class="mb-3">
                          <label class="form-label"
                            >Buttons group with dropdown</label
                          >
                          <div class="btn-group w-100" role="group">
                            <input
                              type="radio"
                              class="btn-check"
                              name="btn-radio-dropdown"
                              id="btn-radio-dropdown-1"
                              autocomplete="off"
                              checked
                            />
                            <label
                              for="btn-radio-dropdown-1"
                              type="button"
                              class="btn"
                              >Option 1</label
                            >
                            <input
                              type="radio"
                              class="btn-check"
                              name="btn-radio-dropdown"
                              id="btn-radio-dropdown-2"
                              autocomplete="off"
                            />
                            <label
                              for="btn-radio-dropdown-2"
                              type="button"
                              class="btn"
                              >Option 2</label
                            >
                            <div class="btn-group" role="group">
                              <input
                                type="radio"
                                class="btn-check"
                                name="btn-radio-dropdown"
                                id="btn-radio-dropdown-dropdown"
                                autocomplete="off"
                              />
                              <label
                                for="btn-radio-dropdown-dropdown"
                                class="btn dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Other
                              </label>
                              <div class="dropdown-menu">
                                <label class="dropdown-item"
                                  ><input
                                    class="form-check-input m-0 me-2"
                                    type="radio"
                                  />
                                  Option 1</label
                                >
                                <label class="dropdown-item"
                                  ><input
                                    class="form-check-input m-0 me-2"
                                    type="radio"
                                  />
                                  Option 2</label
                                >
                                <label class="dropdown-item"
                                  ><input
                                    class="form-check-input m-0 me-2"
                                    type="radio"
                                  />
                                  Option 3</label
                                >
                              </div>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#"> Option 4 </a>
                                <a class="dropdown-item" href="#"> Option 5 </a>
                                <a class="dropdown-item" href="#">
                                  Option 6dropdown-menu
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="row">
                      <div class="col-md-6 col-xl-12">
                     
                        <div class="mb-3">
                          <div class="form-label">Inline Radios</div>
                          <div>
                            <label class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="radios-inline"
                                checked
                              />
                              <span class="form-check-label">Option 1</span>
                            </label>
                            <label class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="radios-inline"
                              />
                              <span class="form-check-label">Option 2</span>
                            </label>
                            <label class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="radios-inline"
                                disabled
                              />
                              <span class="form-check-label">Option 3</span>
                            </label>
                          </div>
                        </div>
                       
                        <div class="mb-3">
                          <div class="form-label">Inline Checkboxes</div>
                          <div>
                            <label class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" />
                              <span class="form-check-label">Option 1</span>
                            </label>
                            <label class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                disabled
                              />
                              <span class="form-check-label">Option 2</span>
                            </label>
                            <label class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                checked
                              />
                              <span class="form-check-label">Option 3</span>
                            </label>
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="form-label">Toggle switches</div>
                          <label class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <span class="form-check-label">Option 1</span>
                          </label>
                          <label class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" />
                            <span class="form-check-label">Option 2</span>
                          </label>
                          <label class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" />
                            <span class="form-check-label">Option 3</span>
                          </label>
                        </div>
                        <div class="mb-3">
                          <div class="form-label">Single switch</div>
                          <label class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" />
                            <span class="form-check-label"
                              >I agree with terms and conditions</span
                            >
                          </label>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Notification</label>
                          <div class="divide-y">
                            <div>
                              <label class="row">
                                <span class="col">Push Notifications</span>
                                <span class="col-auto">
                                  <label
                                    class="form-check form-check-single form-switch"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      checked
                                    />
                                  </label>
                                </span>
                              </label>
                            </div>
                            <div>
                              <label class="row">
                                <span class="col">SMS Notifications</span>
                                <span class="col-auto">
                                  <label
                                    class="form-check form-check-single form-switch"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                    />
                                  </label>
                                </span>
                              </label>
                            </div>
                            <div>
                              <label class="row">
                                <span class="col">Email Notifications</span>
                                <span class="col-auto">
                                  <label
                                    class="form-check form-check-single form-switch"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      checked
                                    />
                                  </label>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div class="form-label">Custom File Input</div>
                          <input type="file" class="form-control" />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Date of birth</label>
                          <div class="row g-2">
                            <div class="col-5">
                              <select name="user[month]" class="form-select">
                                <option value="">Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option selected="selected" value="6">
                                  June
                                </option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                              </select>
                            </div>
                            <div class="col-3">
                              <select name="user[day]" class="form-select">
                                <option value="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                      
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20" selected>20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                
                                <option value="30">30</option>
                                <option value="31">31</option>
                              </select>
                            </div>
                            <div class="col-4">
                              <select name="user[year]" class="form-select">
                                <option value="">Year</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                          
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989" selected>1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                    
                              </select>
                            </div>
                          </div>
                        </div>                             
                      </div>
                      <div class="col-md-6 col-xl-12">
                        <div class="mb-3">
                          <label class="form-label">Datalist example</label>
                          <input
                            class="form-control"
                            list="datalistOptions"
                            placeholder="Type to search..."
                          />
                          <datalist id="datalistOptions">
                            <option value="Andorra" />
                            <option value="United Arab Emirates" />
                            <option value="African Union" />
                            <option value="Antigua and Barbuda" />
                            <option value="Anguilla" />
                            <option value="Albania" />
                            <option value="Armenia" />
                            <option value="Angola" />
                            <option value="Antarctica" />
                            <option value="Argentina" />
                          </datalist>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Range input</label>
                          <input
                            type="range"
                            class="form-range mb-2"
                            value="40"
                            min="0"
                            max="100"
                            step="10"
                          />
                          <div class="form-range mb-2" id="range-simple"></div>
                          <div class="form-range mb-2" id="range-connect"></div>
                          <div
                            class="form-range mb-2 text-green"
                            id="range-color"
                          ></div>
                        </div>

                        <div class="mb-3">
                          <label class="form-label">Progress</label>
                          <div class="progress mb-2">
                            <div
                              class="progress-bar"
                              style="width: 38%"
                              role="progressbar"
                              aria-valuenow="38"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-label="38% Complete"
                            >
                              <span class="visually-hidden">38% Complete</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar progress-bar-indeterminate bg-green"
                            ></div>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="form-label">Tags input</label>
                          <select
                            type="text"
                            class="form-select"
                            placeholder="Select tags"
                            id="select-tags"
                            value=""
                            multiple
                          >
                            <option value="HTML">HTML</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="CSS">CSS</option>
                            <option value="jQuery">jQuery</option>
                            <option value="Bootstrap">Bootstrap</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Python">Python</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Advanced select</label>
                          <select
                            type="text"
                            class="form-select"
                            id="select-users"
                            value=""
                          >
                            <option value="1">Chuck Tesla</option>
                            <option value="2">Elon Musk</option>
                            <option value="3">Paweł Kuna</option>
                            <option value="4">Nikola Tesla</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label class="form-label"
                            >Advanced select with optgroup</label
                          >
                          <select
                            type="text"
                            class="form-select"
                            id="select-optgroups"
                            value=""
                          >
                            <optgroup label="Tags">
                              <option value="HTML">HTML</option>
                              <option value="JavaScript">JavaScript</option>
                              <option value="CSS">CSS</option>
                              <option value="jQuery">jQuery</option>
                              <option value="Bootstrap">Bootstrap</option>
                              <option value="Ruby">Ruby</option>
                              <option value="Python">Python</option>
                            </optgroup>
                            <optgroup label="People">
                              <option value="Chuck Tesla">Chuck Tesla</option>
                              <option value="Elon Musk">Elon Musk</option>
                              <option value="Paweł Kuna">Paweł Kuna</option>
                              <option value="Nikola Tesla">Nikola Tesla</option>
                            </optgroup>
                          </select>
                        </div>
                   

                        <div class="mb-3">
                          <label class="form-label"
                            >Advanced select with validation state</label
                          >
                          <select
                            type="text"
                            class="form-select mb-3 is-valid"
                            id="select-countries-valid"
                            value=""
                          >
                            <option value="pl">Poland</option>
                            <option value="de">Germany</option>
                            <option value="cz">Czech Republic</option>
                            <option value="br">Brazil</option>
                          </select>
                          <select
                            type="text"
                            class="form-select is-invalid"
                            id="select-countries-invalid"
                            value=""
                          >
                            <option value="pl">Poland</option>
                            <option value="de">Germany</option>
                            <option value="cz">Czech Republic</option>
                            <option value="br">Brazil</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-end">
                <div class="d-flex">
                  <a href="#" class="btn btn-link">Cancel</a>
                  <button type="submit" class="btn btn-primary ms-auto">
                    Send data
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="footer-form">
            <div class="col-lg-8">
              <div class="row row-cards">
                <div class="col-12">
                  <form class="card">
                    <div class="card-body">
                      <h3 class="card-title">Edit Profile</h3>
                      <div class="row row-cards">
                        <div class="col-md-5">
                          <div class="mb-3">
                            <label class="form-label">Company</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled=""
                              placeholder="Company"
                              value="Creative Code Inc."
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              value="michael23"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Company"
                              value="Chet"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name"
                              value="Faker"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Address</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Home Address"
                              value="Melbourne, Australia"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">City</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="City"
                              value="Melbourne"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Postal Code</label>
                            <input
                              type="test"
                              class="form-control"
                              placeholder="ZIP Code"
                            />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="mb-3">
                            <label class="form-label">Country</label>
                            <select class="form-control form-select">
                              <option value="">Germany</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3 mb-0">
                            <label class="form-label">About Me</label>
                            <textarea
                              rows="5"
                              class="form-control"
                              placeholder="Here can be your description"
                              value="Mike"
                            >
Oh so, your weak rhyme
You doubt I'll bother, reading into it
I'll probably won't, left to my own devices
But that's the difference in our opinions.</textarea
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <button type="submit" class="btn btn-primary">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">HTTP Request</h3>
                    </div>
                    <div class="card-body">
                      <div class="row row-cards">
                        <div class="mb-3 col-sm-4 col-md-2">
                          <label class="form-label required">Method</label>
                          <select class="form-select">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="HEAD">HEAD</option>
                            <option value="DELETE">DELETE</option>
                            <option value="PATCH">PATCH</option>
                          </select>
                        </div>
                      
                      </div>
                      <div class="form-label">Assertions</div>
                      <div class="table-responsive">
                        <table class="table mb-0">
                          <thead>
                            <tr>
                              <th>Source</th>
                              <th>Property</th>
                              <th>Comparison</th>
                              <th>Target</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <select class="form-select">
                                  <option value="STATUS_CODE" selected="">
                                    Status code
                                  </option>
                                  <option value="JSON_BODY">JSON body</option>
                                  <option value="HEADERS">Headers</option>
                                  <option value="TEXT_BODY">Text body</option>
                                  <option value="RESPONSE_TIME">
                                    Response time
                                  </option>
                                </select>
                              </td>
                              <td>
                                <input type="text" class="form-control" />
                              </td>
                              <td>
                                <select class="form-select">
                                  <option value="EQUALS" selected="">
                                    Equals
                                  </option>
                                  <option value="NOT_EQUALS">Not equals</option>
                                  <option value="HAS_KEY">Has key</option>
                                  <option value="NOT_HAS_KEY">
                                    Not has key
                                  </option>
                                  <option value="HAS_VALUE">Has value</option>
                                  <option value="NOT_HAS_VALUE">
                                    Not has value
                                  </option>
                                  <option value="IS_EMPTY">Is empty</option>
                                  <option value="NOT_EMPTY">
                                    Is not empty
                                  </option>
                                  <option value="GREATER_THAN">
                                    Greater than
                                  </option>
                                  <option value="LESS_THAN">Less than</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="200"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <select class="form-select">
                                  <option value="STATUS_CODE">
                                    Status code
                                  </option>
                                  <option value="JSON_BODY" selected="">
                                    JSON body
                                  </option>
                                  <option value="HEADERS">Headers</option>
                                  <option value="TEXT_BODY">Text body</option>
                                  <option value="RESPONSE_TIME">
                                    Response time
                                  </option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="parameters.alt.type"
                                />
                              </td>
                              <td>
                                <select class="form-select">
                                  <option value="EQUALS">Equals</option>
                                  <option value="NOT_EQUALS">Not equals</option>
                                  <option value="HAS_KEY">Has key</option>
                                  <option value="NOT_HAS_KEY">
                                    Not has key
                                  </option>
                                  <option value="HAS_VALUE" selected="">
                                    Has value
                                  </option>
                                  <option value="NOT_HAS_VALUE">
                                    Not has value
                                  </option>
                                  <option value="IS_EMPTY">Is empty</option>
                                  <option value="NOT_EMPTY">
                                    Is not empty
                                  </option>
                                  <option value="GREATER_THAN">
                                    Greater than
                                  </option>
                                  <option value="LESS_THAN">Less than</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="string"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <select class="form-select">
                                  <option value="STATUS_CODE">
                                    Status code
                                  </option>
                                  <option value="JSON_BODY">JSON body</option>
                                  <option value="HEADERS">Headers</option>
                                  <option value="TEXT_BODY">Text body</option>
                                  <option value="RESPONSE_TIME" selected="">
                                    Response time
                                  </option>
                                </select>
                              </td>
                              <td>
                                <input type="text" class="form-control" />
                              </td>
                              <td>
                                <select class="form-select">
                                  <option value="EQUALS">Equals</option>
                                  <option value="NOT_EQUALS">Not equals</option>
                                  <option value="HAS_KEY">Has key</option>
                                  <option value="NOT_HAS_KEY">
                                    Not has key
                                  </option>
                                  <option value="HAS_VALUE">Has value</option>
                                  <option value="NOT_HAS_VALUE">
                                    Not has value
                                  </option>
                                  <option value="IS_EMPTY">Is empty</option>
                                  <option value="NOT_EMPTY">
                                    Is not empty
                                  </option>
                                  <option value="GREATER_THAN">
                                    Greater than
                                  </option>
                                  <option value="LESS_THAN" selected="">
                                    Less than
                                  </option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="500"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <select class="form-select">
                                  <option value="STATUS_CODE">
                                    Status code
                                  </option>
                                  <option value="JSON_BODY">JSON body</option>
                                  <option value="HEADERS" selected="">
                                    Headers
                                  </option>
                                  <option value="TEXT_BODY">Text body</option>
                                  <option value="RESPONSE_TIME">
                                    Response time
                                  </option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="content-type"
                                />
                              </td>
                              <td>
                                <select class="form-select">
                                  <option value="EQUALS" selected="">
                                    Equals
                                  </option>
                                  <option value="NOT_EQUALS">Not equals</option>
                                  <option value="HAS_KEY">Has key</option>
                                  <option value="NOT_HAS_KEY">
                                    Not has key
                                  </option>
                                  <option value="HAS_VALUE">Has value</option>
                                  <option value="NOT_HAS_VALUE">
                                    Not has value
                                  </option>
                                  <option value="IS_EMPTY">Is empty</option>
                                  <option value="NOT_EMPTY">
                                    Is not empty
                                  </option>
                                  <option value="GREATER_THAN">
                                    Greater than
                                  </option>
                                  <option value="LESS_THAN">Less than</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="application/json; charset=UTF-8"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <button type="submit" class="btn btn-primary">
                        Make request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>