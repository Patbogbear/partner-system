<template>
  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <div
        class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"
      >
        <span> Partner System 2.1 </span>
      </div>
      <header class="navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbar-menu">
          <div class="navbar">
            <div class="container-xl">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <!-- Download SVG icon from http://tabler-icons.io/i/home -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                      </svg>
                    </span>
                    <span class="nav-link-title">Home</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/partner-list" class="nav-link">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                        <path
                          d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                        <path
                          d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                        <path
                          d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                      </svg>
                    </span>
                    <span class="nav-link-title"> Partner List </span>
                  </router-link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#navbar-base"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span class="nav-link-icon d-md-none d-lg-inline-block"
                      ><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                        <path d="M12 12l8 -4.5" />
                        <path d="M12 12l0 9" />
                        <path d="M12 12l-8 -4.5" />
                        <path d="M16 5.25l-8 4.5" />
                      </svg>
                    </span>
                    <span class="nav-link-title"> Interface </span>
                  </a>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu-columns">
                      <div class="dropdown-menu-column">
                        <a class="dropdown-item" href="./alerts.html">
                          Alerts
                        </a>
                        <a class="dropdown-item" href="./accordion.html">
                          Accordion
                        </a>
                        <div class="dropend">
                          <a
                            class="dropdown-item dropdown-toggle"
                            href="#sidebar-authentication"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            Authentication
                          </a>
                          <div class="dropdown-menu">
                            <a href="./sign-in.html" class="dropdown-item">
                              Sign in
                            </a>
                            <a href="./sign-in-link.html" class="dropdown-item">
                              Sign in link
                            </a>
                            <a
                              href="./sign-in-illustration.html"
                              class="dropdown-item"
                            >
                              Sign in with illustration
                            </a>
                            <a
                              href="./sign-in-cover.html"
                              class="dropdown-item"
                            >
                              Sign in with cover
                            </a>
                            <a href="./sign-up.html" class="dropdown-item">
                              Sign up
                            </a>
                            <a
                              href="./forgot-password.html"
                              class="dropdown-item"
                            >
                              Forgot password
                            </a>
                            <a
                              href="./terms-of-service.html"
                              class="dropdown-item"
                            >
                              Terms of service
                            </a>
                            <a href="./auth-lock.html" class="dropdown-item">
                              Lock screen
                            </a>
                            <a
                              href="./2-step-verification.html"
                              class="dropdown-item"
                            >
                              2 step verification
                            </a>
                            <a
                              href="./2-step-verification-code.html"
                              class="dropdown-item"
                            >
                              2 step verification code
                            </a>
                          </div>
                        </div>
                        <a class="dropdown-item" href="./blank.html">
                          Blank page
                        </a>
                        <a class="dropdown-item" href="./badges.html">
                          Badges
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./buttons.html">
                          Buttons
                        </a>
                        <div class="dropend">
                          <a
                            class="dropdown-item dropdown-toggle"
                            href="#sidebar-cards"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            Cards
                            <span
                              class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                              >New</span
                            >
                          </a>
                          <div class="dropdown-menu">
                            <a href="./cards.html" class="dropdown-item">
                              Sample cards
                            </a>
                            <a href="./card-actions.html" class="dropdown-item">
                              Card actions
                              <span
                                class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                                >New</span
                              >
                            </a>
                            <a
                              href="./cards-masonry.html"
                              class="dropdown-item"
                            >
                              Cards Masonry
                            </a>
                          </div>
                        </div>
                        <a class="dropdown-item" href="./carousel.html">
                          Carousel
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./charts.html">
                          Charts
                        </a>
                        <a class="dropdown-item" href="./colors.html">
                          Colors
                        </a>
                        <a class="dropdown-item" href="./colorpicker.html">
                          Color picker
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./datagrid.html">
                          Data grid
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./datatables.html">
                          Datatables
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./dropdowns.html">
                          Dropdowns
                        </a>
                        <a class="dropdown-item" href="./dropzone.html">
                          Dropzone
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <div class="dropend">
                          <a
                            class="dropdown-item dropdown-toggle"
                            href="#sidebar-error"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            Error pages
                          </a>
                          <div class="dropdown-menu">
                            <a href="./error-404.html" class="dropdown-item">
                              404 page
                            </a>
                            <a href="./error-500.html" class="dropdown-item">
                              500 page
                            </a>
                            <a
                              href="./error-maintenance.html"
                              class="dropdown-item"
                            >
                              Maintenance page
                            </a>
                          </div>
                        </div>
                        <a class="dropdown-item" href="./flags.html">
                          Flags
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./inline-player.html">
                          Inline player
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                      </div>
                      <div class="dropdown-menu-column">
                        <a class="dropdown-item" href="./lightbox.html">
                          Lightbox
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./lists.html"> Lists </a>
                        <a class="dropdown-item" href="./modals.html">
                          Modal
                        </a>
                        <a class="dropdown-item" href="./maps.html"> Map </a>
                        <a class="dropdown-item" href="./map-fullsize.html">
                          Map fullsize
                        </a>
                        <a class="dropdown-item" href="./maps-vector.html">
                          Map vector
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./markdown.html">
                          Markdown
                        </a>
                        <a class="dropdown-item" href="./navigation.html">
                          Navigation
                        </a>
                        <a class="dropdown-item" href="./offcanvas.html">
                          Offcanvas
                        </a>
                        <a class="dropdown-item" href="./pagination.html">
                          <!-- Download SVG icon from http://tabler-icons.io/i/pie-chart -->
                          Pagination
                        </a>
                        <a class="dropdown-item" href="./placeholder.html">
                          Placeholder
                        </a>
                        <a class="dropdown-item" href="./steps.html">
                          Steps
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./stars-rating.html">
                          Stars rating
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                        <a class="dropdown-item" href="./tabs.html"> Tabs </a>
                        <a class="dropdown-item" href="./tables.html">
                          Tables
                        </a>
                        <a class="dropdown-item" href="./typography.html">
                          Typography
                        </a>
                        <a class="dropdown-item" href="./tinymce.html">
                          TinyMCE
                          <span
                            class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                            >New</span
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item active dropdown">
                  <router-link to="/personal"
                    class="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                  >
                    <span class="nav-link-icon d-md-none d-lg-inline-block"
                      ><!-- Download SVG icon from http://tabler-icons.io/i/layout-2 -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                        <path
                          d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                        <path
                          d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                        <path
                          d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        />
                      </svg>
                    </span>
                    <span class="nav-link-title"> Personal Page </span>
                  </router-link>
                </li>     
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 text-reset p-0"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            
            <div class="d-none d-xl-block ps-2">
              <div>User A</div>
              <div class="mt-1 small text-secondary">Sales</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Status</a>
            <a href="./profile.html" class="dropdown-item">Profile</a>
            <a href="#" class="dropdown-item">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="./settings.html" class="dropdown-item">Settings</a>
            <a href="./sign-in.html" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav>
    <!-- <router-link  to="/add">add</router-link> -->
    <router-view />
  </nav>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  created() {
    if (localStorage.userToken) {
      const decoded = jwt_decode(localStorage.userToken);

      this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
      this.$store.dispatch("setUser", decoded);
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e7eaef;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-item .router-link-active {
  color: #42b983;
}

.navbar-light {
  box-shadow: inset 0 -1px 0 0 rgba(101, 109, 119, 0.16);
  background-color: #fff;
}

.navbar {
  align-items: stretch;
  min-height: 3.5rem;
  color: rgba(35, 46, 60, 0.7);
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
}

/* .avatar {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: $color-border-light no-repeat center/cover;
  border-radius: $border-radius;
  vertical-align: bottom;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .1);
} */

.avatar-rounded {
  border-radius: 50%;
}

.avatar-sm {
  width: 1.5rem;
  height: 1.5rem;
}

.avatar-lg {
  width: 3rem;
  height: 3rem;
}

.avatar-xl {
  width: 5rem;
  height: 5rem;
}
</style>
