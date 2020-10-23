import React, {useRef, useEffect} from 'react'
import '@carto/airship-style/dist/airship.css'
import '@carto/airship-icons'
import { defineCustomElements } from '@carto/airship-components/dist/loader'

defineCustomElements(window)

function CustomTheme(){ 

    const rangeSliderWidget = useRef()
    const dropdown = useRef()
    const widget0 = useRef()
    const histogramWidget = useRef()
    const categoryWidget = useRef()
    const responsiveContent = useRef()
    const jsButtonModal = useRef()
    const jsButtonModalClose = useRef()
    const jsModal = useRef()

    const asInfowindow = {
        position: "absolute",
        top: "30px",
        left: "30px"
    }

    const asMapArea = {
        background: "#B5E0F9"
    }

    function feedRangeSlider () {
        rangeSliderWidget.current.minValue = 10;
        rangeSliderWidget.current.maxValue = 20;
        rangeSliderWidget.current.value = 12;
        rangeSliderWidget.current.step = 2;
    }

    function feedDropdown () {
    dropdown.current.options = [
        {
        text: 'All',
        value: 'all'
        },
        {
        text: 'Open',
        value: 'open'
        },
        {
        text: 'Unfulfilled',
        value: 'unfulfilled'
        },
        {
        text: 'Unpaid',
        value: 'unpaid'
        }
    ];
    }

    function feedHistogram () {
    widget0.current.data = [{
        category: 'Star Wars Ep. IV: A New Hope',
        values: {
            dvd: 27229125,
            blue: 3555058,
        }
        },
        {
        category: 'Star Wars Ep. V: The Empire Strikes Back',
        values: {
            dvd: 24928640,
            blue: 2738207,
        },
        },
        {
        category: 'Star Wars Ep. VI: Return of the Jedi',
        values: {
            dvd: 23786454,
            blue: 1908593,
        }
        }
    ];

    widget0.current.metadata = {
        dvd: {
        label: 'Domestic DVD Sales',
        color: '#17b0ff'
        },
        blue: {
        label: 'Domestic Blu-ray Sales',
        color: '#17ff66'
        }
    }

    histogramWidget.current.data = [{
        start: 0,
        end: 10,
        value: 5
        },
        {
        start: 10,
        end: 20,
        value: 10
        },
        {
        start: 20,
        end: 30,
        value: 15
        },
        {
        start: 30,
        end: 40,
        value: 20
        },
        {
        start: 40,
        end: 50,
        value: 30
        },
    ];
    }

    function feedCategories () {
    categoryWidget.current.showHeader = true;
    categoryWidget.current.showClearButton = true;
    categoryWidget.current.useTotalPercentage = false;
    categoryWidget.current.visibleCategories = Infinity;
    categoryWidget.current.categories = [{
        name: 'Bars & Restaurants',
        value: 1000
        },
        {
        name: 'Fashion',
        value: 900
        },
        {
        name: 'Grocery',
        value: 800
        },
        {
        name: 'Health',
        value: 400
        },
        {
        name: 'Shopping mall',
        value: 250
        },
        {
        name: 'Transportation',
        value: 1000
        },
        {
        name: 'Leisure',
        value: 760
        }
    ];
    }

    function jsButtonModalOnClick(){
        jsModal.current.classList.remove('as-modal--hidden');
        jsModal.current.classList.add('as-modal');
    }

    function jsButtonModalCloseOnclick(){
        jsModal.current.classList.remove('as-modal');
        jsModal.current.classList.add('as-modal--hidden');
    }

    useEffect(() => {
        feedRangeSlider()
        feedDropdown()
        feedHistogram()
        feedCategories()
    }, [])

    return(
        <body className="as-app-body as-app">
            <as-toolbar>
                <div className="as-toolbar__item">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSI3NjIgLTU4IDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2Mi4wMDAwMDAsIC01OC4wMDAwMDApIj4KICAgIDxjaXJjbGUgY2xhc3M9IkhhbG8iIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMiIgY3g9IjE2IiBjeT0iMTYiIHI9IjE2Ij48L2NpcmNsZT4KICAgIDxjaXJjbGUgY2xhc3M9InBvaW50IiBmaWxsPSIjRkZGRkZGIiBjeD0iMTYiIGN5PSIxNiIgcj0iNS41Ij48L2NpcmNsZT4KICA8L2c+Cjwvc3ZnPgo="
                    alt="Logo" />
                </div>
                <p className="as-toolbar__item">Paragraph</p>
                <a href="./default.html" className="as-toolbar__item">Default Theme</a>
                <a href="./light.html" className="as-toolbar__item">Light Theme</a>
                <a href="./dark.html" className="as-toolbar__item">Dark Theme</a>
                <i className="as-toolbar__item as-icon as-icon-points"></i>
            </as-toolbar>

            <as-responsive-content>
                <aside className="as-sidebar as-sidebar--left as-sidebar--left--l">
                <div className="as-container">
                    <as-tabs>
                    <div className="as-p--12" role="tabpanel" data-title="Styles">
                        <section>
                            <h2 className="as-subheader">Badges</h2>
                            <span className="as-badge as-bg--badge-blue">Blue</span>
                            <span className="as-badge as-bg--badge-gray">Gray</span>
                            <span className="as-badge as-bg--badge-green">Green</span>
                            <span className="as-badge as-bg--badge-pink">Pink</span>
                            <span className="as-badge as-bg--badge-yellow">Yellow</span>
                        </section>
                        <br />
                        <section>
                        <h2 className="as-subheader">Breadcrumbs</h2>
                        <ul className="as-breadcrumb">
                            <li className="as-breadcrumb__item">
                            <a href="#">Home</a>
                            </li>
                            <li className="as-breadcrumb__item">
                            <a href="#">Users</a>
                            </li>
                            <li className="as-breadcrumb__item">
                            New user
                            </li>
                        </ul>
                        </section>
                        <br />
                        <section>
                        <h2 className="as-subheader">Buttons</h2>
                        <button className="as-btn as-m--4"> I'm a regular button</button>
                        <button className="as-btn as-btn--primary as-m--4"> I'm a primary button</button>
                        <button className="as-btn as-btn--secondary as-m--4"> I'm a secondary button</button>
                        <button className="as-btn as-btn--complementary as-m--4"> I'm a complementary button</button>
                        <button disabled className="as-btn as-m--4"> I'm a disabled base button</button>
                        <button disabled className="as-btn as-btn--primary as-m--4"> I'm a disabled primary button</button>
                        <button disabled className="as-btn as-btn--secondary as-m--4"> I'm a disabled secondary button</button>

                        <a className="as-btn as-m--4"> I'm a regular a</a>
                        <a className="as-btn as-btn--primary as-m--4"> I'm a primary a</a>
                        <a className="as-btn as-btn--secondary as-m--4"> I'm a secondary a</a>
                        </section>
                        <br />
                        <section>
                        <button className="as-btn as-btn--primary as-m--4">
                            <i className="as-icon as-icon-plus"></i>
                            <p>Icon button</p>
                        </button>

                        <button className="as-btn as-btn--secondary as-m--4">
                            <p>Icon button</p>
                            <i aria-hidden className="as-icon as-icon-twitter"></i>
                        </button>

                        <div className="as-button-group as-m--4" role="group">
                            <button aria-label="twitter" className="as-btn as-btn--secondary">
                            <i aria-hidden className="as-icon as-icon-twitter"></i>
                            </button>
                            <button aria-label="facebook" className="as-btn as-btn--secondary">
                            <i aria-hidden className="as-icon as-icon-facebook"></i>
                            </button>
                            <button aria-label="home" className="as-btn as-btn--secondary">
                            <i aria-hidden className="as-icon as-icon-home"></i>
                            </button>
                        </div>
                        </section>
                        <br />
                        <section>
                        <ul className="as-list--simple">
                            <li className="as-radio">
                            <input className="as-radio__input" type="radio" name="contact" id="first" value="first" checked />
                            <label className="as-caption" htmlFor="first">First</label>
                            </li>

                            <li className="as-radio">
                            <input className="as-radio__input" type="radio" name="contact" id="second" value="second" />
                            <label className="as-caption" htmlFor="second">Second</label>
                            </li>

                            <li className="as-radio">
                            <input className="as-radio__input" type="radio" name="contact" id="third" value="third" disabled />
                            <label className="as-caption" htmlFor="third">Third</label>
                            </li>

                            <li className="as-radio">
                            <input className="as-radio__input" type="radio" name="contact2" id="fourth" value="fourth" checked disabled />
                            <label className="as-caption" htmlFor="fourth">Fourth</label>
                            </li>
                        </ul>
                        </section>
                        <section>
                        <div className="as-checkbox">
                            <input className="as-checkbox-input" type="checkbox" id="checkbox-0" name="checkbox-0" value="checkbox-0"/>
                            <span className="as-checkbox-decoration">
                            <svg className="as-checkbox-media">
                                <polyline className="as-checkbox-check" points="1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191"></polyline>
                            </svg>
                            </span>
                            <label className="as-caption" htmlFor="checkbox-0"> Checkbox</label>
                        </div>
                        <div className="as-checkbox">
                            <input className="as-checkbox-input as-checkbox-input--error" type="checkbox" id="checkbox3" name="checkbox3" value="checkbox3"/>
                            <span className="as-checkbox-decoration">
                            <svg className="as-checkbox-media">
                                <polyline className="as-checkbox-check" points="1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191"></polyline>
                            </svg>
                            </span>
                            <label className="as-caption" htmlFor="checkbox3"> Checkbox Error</label>
                        </div>
                        <div className="as-checkbox">
                            <input disabled className="as-checkbox-input" type="checkbox" id="checkbox2" name="checkbox2" value="checkbox2"/>
                            <span className="as-checkbox-decoration">
                            <svg className="as-checkbox-media">
                                <polyline className="as-checkbox-check" points="1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191"></polyline>
                            </svg>
                            </span>
                            <label className="as-caption" htmlFor="checkbox2"> Checkbox Disabled</label>
                        </div>
                        <div className="as-checkbox">
                            <input disabled checked className="as-checkbox-input" type="checkbox" id="checkbox2" name="checkbox2" value="checkbox2"/>
                            <span className="as-checkbox-decoration">
                            <svg className="as-checkbox-media">
                                <polyline className="as-checkbox-check" points="1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191"></polyline>
                            </svg>
                            </span>
                            <label className="as-caption" htmlFor="checkbox2"> Checkbox Disabled</label>
                        </div>
                        <div className="as-checkbox">
                            <input disabled className="as-checkbox-input as-checkbox-input--error" type="checkbox" id="checkbox3" name="checkbox3" value="checkbox3"/>
                            <span className="as-checkbox-decoration">
                            <svg className="as-checkbox-media">
                                <polyline className="as-checkbox-check" points="1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191"></polyline>
                            </svg>
                            </span>
                            <label className="as-caption" htmlFor="checkbox3"> Checkbox Error Disabled</label>
                        </div>
                        <div className="as-checkbox">
                            <input disabled checked className="as-checkbox-input as-checkbox-input--error" type="checkbox" id="checkbox3" name="checkbox3" value="checkbox3"/>
                            <span className="as-checkbox-decoration">
                                <svg className="as-checkbox-media">
                                <polyline className="as-checkbox-check" points="1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191"></polyline>
                                </svg>
                            </span>
                            <label className="as-caption" htmlFor="checkbox3"> Checkbox Error Disabled Checked</label>
                            </div>

                        </section>
                        <br />
                        <section>
                        <p>
                            <span className="as-caption">Default</span>
                            <input className="as-input" type="text"/>
                        </p>
                        <p>
                            <span className="as-caption">With placeholder</span>
                            <input className="as-input" type="text" placeholder="Hello there"/>
                        </p>
                        <p>
                            <span className="as-caption">With value</span>
                            <input className="as-input" type="text" value="Hello there"/>
                        </p>
                        <p>
                            <span className="as-caption">Default</span>
                            <input className="as-input" type="text" disabled/>
                        </p>
                        <p>
                            <span className="as-caption">With placeholder</span>
                            <input className="as-input" type="text" placeholder="Hello there" disabled/>
                        </p>
                        <p>
                            <span className="as-caption">With value</span>
                            <input className="as-input" type="text" value="Hello there" disabled/>
                        </p>
                        <p>
                            <span className="as-caption">Default</span>
                            <input className="as-input" type="text" readOnly/>
                        </p>
                        <p>
                            <span className="as-caption">With placeholder</span>
                            <input className="as-input" type="text" placeholder="Hello there" readOnly/>
                        </p>
                        <p>
                            <span className="as-caption">With value</span>
                            <input className="as-input" type="text" value="Hello there" readOnly/>
                        </p>
                        <p>
                            <span className="as-caption">Default</span>
                            <input className="as-input" type="text" required/>
                        </p>
                        <p>
                            <span className="as-caption">With placeholder</span>
                            <input className="as-input" type="text" placeholder="Hello there" required/>
                        </p>
                        <p>
                            <span className="as-caption">With value</span>
                            <input className="as-input" type="email" value="Hello there"/>
                        </p>
                        <p>
                            <span className="as-caption">Textarea</span>
                            <textarea className="as-textarea" rows="4" required></textarea>
                        </p>
                        </section>
                        <section>
                        <span className="as-loading">
                            <svg viewBox="0 0 50 50">
                            <circle cx="25" cy="25" r="20" fill="none" />
                            </svg>
                        </span>
                        </section>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Table">
                        <as-responsive-content>
                        <table className="as-table as-table--stripped">
                            <thead>
                            <tr>
                                <th>Food</th>
                                <th>Calories</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Cookies</td>
                                <td>345</td>
                            </tr>
                            <tr>
                                <td>Chocolate</td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>Carrot cake</td>
                                <td>250</td>
                            </tr>
                            </tbody>
                        </table>
                        </as-responsive-content>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Switch">
                        <h2 className="as-title">Switch</h2>
                        <as-switch label="Test me"></as-switch>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Tooltips">
                        <h2 className="as-title">Tooltips</h2>
                        <ul className="as-list--simple">
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--left as-bg--color-blue">Tooltip left</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--right">Tooltip right</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top">Tooltip top</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--bottom">Tooltip bottom</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top as-tooltip--error">Error</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top as-tooltip--warning">Warning</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top as-tooltip--success">Success</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top as-tooltip--primary">Primary</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top as-tooltip--secondary">Secondary</span></li>
                        <li className="as-m--16"><span role="tooltip" className="as-tooltip as-tooltip--top as-tooltip--complementary">Complementary</span></li>
                        </ul>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Modal">
                        <h2 className="as-title">Modal</h2>
                        <button className="as-btn as-btn--primary as-m--4" ref={jsButtonModal} onClick={jsButtonModalOnClick}>
                        Open modal
                        </button>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Range slider">
                        <h2 className="as-title">Range slider</h2>
                        <as-range-slider ref={rangeSliderWidget}></as-range-slider>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Dropdown">
                        <h2 className="as-title">Dropdown</h2>
                        <as-dropdown default-text="Dropdown" can-clear="true" ref={dropdown}></as-dropdown>
                        <br />
                        <h2 className="as-title">Menu dropdown</h2>
                        <div style={{width: "240px"}} className="as-menu-dropdown">
                        <button aria-haspopup="listbox" className="as-menu-dropdown--input"> I'm a dropdown </button>
                        <ul tabIndex="-1" className="as-menu-dropdown--options">
                            <li>
                            <button>All</button>
                            </li>
                            <li>
                            <button>spent</button>
                            </li>
                            <li>
                            <button>Loaded</button>
                            </li>
                            <li>
                            <button>Waiting</button>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="as-p--12" role="tabpanel" data-title="Banner">
                        <div className="as-banner">
                        <div className="as-banner__icon">
                            <i className="as-icon as-icon-info"></i>
                        </div>
                        <div className="as-banner__content">This is the default banner without any support colors</div>
                        </div>
                        <div className="as-banner as-banner--success">
                        <div className="as-banner__icon">
                            <i className="as-icon as-icon-tick-circle-fill"></i>
                        </div>
                        <div className="as-banner__content">Your profile settings have been updated successfully</div>
                        </div>
                        <div className="as-banner as-banner--warning">
                        <div className="as-banner__icon">
                            <i className="as-icon as-icon-alert-fill"></i>
                        </div>
                        <div className="as-banner__content">It seems like you're over platforms limits, please contact us or upgrade your account plan</div>
                        </div>
                        <div className="as-banner as-banner--error">
                        <div className="as-banner__icon">
                            <i className="as-icon as-icon-alert-fill"></i>
                        </div>
                        <div className="as-banner__content">An error has ocurred. Could not retreive customer information</div>
                        </div>
                    </div>
                    </as-tabs>
                </div>
                </aside>

                <main className="as-main">
                <div style={asMapArea}>
                    <div id="map"></div>
                    <div className="as-map-panels">
                    <div className="as-panel as-panel--top as-panel--right">
                        <div className="as-panel__element">
                        <div className="as-box">
                            <p className="as-body">This is a panel example</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <as-infowindow src="http://on-desktop.com/wps/Animals___Cats_Black_Cat_Panther_043844_.jpg" style={asInfowindow}>
                    <h2 className="as-title">Cat</h2>
                    <p>
                        <span className="as-badge">mammal</span>
                        <span className="as-badge as-bg--badge-pink">carnivorous</span>
                    </p>
                    <p className="as-body">
                        The domestic cat is a small, typically furry, carnivorous mammal. They are often called house cats when
                        kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.
                    </p>
                    </as-infowindow>
                </div>

                <footer className="as-map-footer as-p--12">
                    <div className="as-box">
                    <as-stacked-bar-widget ref={widget0} show-legend="true" heading="Star Wars Revenue" description="Description"></as-stacked-bar-widget>
                    </div>
                    <div className="as-box">
                    <as-histogram-widget heading="Title" description="Description" show-header show-clear-button ref={histogramWidget}></as-histogram-widget>
                    </div>
                </footer>
                </main>

                <aside className="as-sidebar as-sidebar--right as-sidebar--l">
                <div className="as-container">
                    <as-category-widget className="as-p--16" heading="Business Volume" description="Description" ref={categoryWidget}></as-category-widget>
                </div>
                </aside>
            </as-responsive-content>

            <div ref={jsModal} className="as-modal--hidden">
                <div className="as-modal__content">
                    <a style={{position: "absolute", right: "12px", top: "12px"}} ref={jsButtonModalClose} className="as-btn" onClick={jsButtonModalCloseOnclick}>Close</a>
                    <h2 className="as-title">This is a modal</h2>
                    <p className="as-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit sequi provident maxime illum possimus debitis, at
                        natus voluptatem praesentium itaque sunt commodi odio incidunt fugiat, cupiditate ipsum officiis eligendi?
                    </p>
                    <hr/>
                    <h2 className="as-subheader">I have padding</h2>
                    <p className="as-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptas vitae praesentium itaque corporis, soluta iure optio
                        labore minus modi ab quibusdam accusamus delectus dolores rem impedit cupiditate tenetur illum?
                    </p>
                </div>
            </div>
        </body>
    )
}

export default CustomTheme