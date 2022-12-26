import React from 'react'

function Sidebar() {
    return (
        <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
                <li className=" ">
                    <a href="backend/index.html" className="">
                        <i className="las la-home iq-arrow-left"></i><span>Dashboard</span>
                    </a>
                    <ul id="home" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                    </ul>
                </li>
                <li className=" ">
                    <a href="#layouts" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="lab la-jira iq-arrow-left"></i><span>Layouts</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="layouts" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/layout-1.html">
                                <i className="las la-hotel"></i><span>Layout 1</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-2.html">
                                <i className="las la-percent"></i><span>Layout 2</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-3.html">
                                <i className="las la-dumbbell"></i><span>Layout 3</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-4.html">
                                <i className="las la-magic"></i><span>Layout 4</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-5.html">
                                <i className="las la-coins"></i><span>Layout 5</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-6.html">
                                <i className="las la-utensils"></i><span>Layout 6</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-7.html">
                                <i className="las la-school"></i><span>Layout 7</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-8.html">
                                <i className="las la-home"></i><span>Layout 8</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-9.html">
                                <i className="las la-shopping-bag"></i><span>Layout 9</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-10.html">
                                <i className="lar la-credit-card"></i><span>Layout 10</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-11.html">
                                <i className="lar la-hospital"></i><span>Layout 11</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-12.html">
                                <i className="las la-cut"></i><span>Layout 12</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-13.html">
                                <i className="las la-shopping-cart"></i><span>Layout 13</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-14.html">
                                <i className="lar la-plus-square"></i><span>Layout 14</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-15.html">
                                <i className="las la-icons"></i><span>Layout 15</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/layout-16.html">
                                <i className="las la-icons"></i><span>Layout 16</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#app" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="lab la-patreon iq-arrow-left"></i><span>App Design</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="app" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="#music" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="lab la-wpforms"></i><span>Music</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="music" className="iq-submenu collapse" data-parent="#app">
                                <li className=" ">
                                    <a href="app/music-home.html">
                                        <i className="las la-book"></i><span>Home</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/music-latest.html">
                                        <i className="las la-edit"></i><span>Latest</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/music-albums.html">
                                        <i className="las la-toggle-off"></i><span>Albums</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#book" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-book"></i><span>Books</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="book" className="iq-submenu collapse" data-parent="#app">
                                <li className=" ">
                                    <a href="app/book-shop.html">
                                        <i className="las la-shopping-cart"></i><span>Shop</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/book-category.html">
                                        <i className="ri-function-line"></i><span>Category</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/bookpage.html">
                                        <i className="las la-book"></i><span>Book Page</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#idrive" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="lab la-google-drive"></i><span>Storage Drive</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="idrive" className="iq-submenu collapse" data-parent="#app">
                                <li className=" ">
                                    <a href="app/idrive-home1.html">
                                        <i className="lab la-stack-exchange"></i><span>Drive 1</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/idrive-home2.html">
                                        <i className="las la-memory"></i><span>Drive 2</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#crm" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-chalkboard-teacher"></i><span>CRM</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="crm" className="iq-submenu collapse" data-parent="#app">
                                <li className=" ">
                                    <a href="app/crm-dashboard.html">
                                        <i className="las la-poll"></i><span>Dashboard</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/crm-lead.html">
                                        <i className="las la-poll-h"></i><span>Lead</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/crm-schedule.html">
                                        <i className="las la-money-check"></i><span>Schedule</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#user" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-user"></i><span>User Managerment</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="user" className="iq-submenu collapse" data-parent="#app">
                                <li className=" ">
                                    <a href="app/user-profile.html">
                                        <i className="las la-id-card"></i><span>User Profile</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/user-add.html">
                                        <i className="las la-user-plus"></i><span>User Add</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/user-list.html">
                                        <i className="las la-list-alt"></i><span>User List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#email" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-envelope-open"></i><span>Mail</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="email" className="iq-submenu collapse" data-parent="#app">
                                <li className=" ">
                                    <a href="app/email.html">
                                        <i className="las la-inbox"></i><span>Inbox</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="app/email-compose.html">
                                        <i className="las la-edit"></i><span>Email Compose</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="app/reporting-social-media.html">
                                <i className="las la-passport"></i><span>reporting-social-media</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="app/server-monitoring.html">
                                <i className="las la-server"></i><span>Server Monitoring</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="app/chat.html">
                                <i className="lab la-rocketchat"></i><span>Chat</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="app/todo.html">
                                <i className="las la-clipboard-check"></i><span>Todo</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#widget" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-bullseye iq-arrow-left"></i><span>Widget</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="widget" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/widget-simple.html">
                                <i className="las la-window-minimize"></i><span>widget simple</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/widget-chart.html">
                                <i className="las la-chart-bar"></i><span>widget chart</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#ui" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="lab la-elementor iq-arrow-left"></i><span>UI Elements</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="ui" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/ui-avatars.html">
                                <i className="las la-user-circle"></i><span>Avatars</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-alerts.html">
                                <i className="las la-tag"></i><span>Alerts</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-badges.html">
                                <i className="lab la-atlassian"></i><span>Badges</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-breadcrumb.html">
                                <i className="las la-bars"></i><span>Breadcrumb</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-buttons.html">
                                <i className="las la-tablet"></i><span>Buttons</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-buttons-group.html">
                                <i className="las la-eraser"></i><span>Buttons Group</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-boxshadow.html">
                                <i className="las la-chess-board"></i><span>Box Shadow</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-colors.html">
                                <i className="las la-palette"></i><span>Colors</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-cards.html">
                                <i className="las la-credit-card"></i><span>Cards</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-carousel.html">
                                <i className="las la-film"></i><span>Carousel</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-grid.html">
                                <i className="las la-border-all"></i><span>Grid</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-helper-classes.html">
                                <i className="las la-stream"></i><span>Helper classes</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-images.html">
                                <i className="las la-images"></i><span>Images</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-list-group.html">
                                <i className="las la-list"></i><span>list Group</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-media-object.html">
                                <i className="las la-ad"></i><span>Media</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-modal.html">
                                <i className="las la-columns"></i><span>Modal</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-notifications.html">
                                <i className="las la-bell"></i><span>Notifications</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-pagination.html">
                                <i className="las la-ellipsis-h"></i><span>Pagination</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-popovers.html">
                                <i className="las la-eraser"></i><span>Popovers</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-progressbars.html">
                                <i className="las la-hdd"></i><span>Progressbars</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-typography.html">
                                <i className="las la-keyboard"></i><span>Typography</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-tabs.html">
                                <i className="las la-database"></i><span>Tabs</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-tooltips.html">
                                <i className="las la-magnet"></i><span>Tooltips</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/ui-embed-video.html">
                                <i className="las la-video"></i><span>Video</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#plugin" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-plug iq-arrow-left"></i><span>Plugins</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="plugin" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/plugin-rating.html">
                                <i className="lar la-star"></i><span>Rating</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/plugin-tree-view.html">
                                <i className="las la-tree"></i><span>Treeview</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/plugin-sweetalert.html">
                                <i className="las la-tag"></i><span>Sweetalert</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/plugin-loader.html">
                                <i className="las la-circle-notch"></i><span>Loader</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#form" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="lab la-wpforms iq-arrow-left"></i><span>Forms</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="form" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="#form-controls" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="lab la-wpforms"></i><span>Form Controls</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="form-controls" className="iq-submenu collapse" data-parent="#form">
                                <li className=" ">
                                    <a href="backend/form-layout.html">
                                        <i className="las la-book"></i><span>Form Elements</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-input-group.html">
                                        <i className="las la-keyboard"></i><span>Form Input</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-validation.html">
                                        <i className="las la-edit"></i><span>Form Validation</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-switch.html">
                                        <i className="las la-toggle-off"></i><span>Form Switch</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-chechbox.html">
                                        <i className="las la-check-square"></i><span>Form Checkbox</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-radio.html">
                                        <i className="las la-yin-yang"></i><span>Form Radio</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-textarea.html">
                                        <i className="las la-text-height"></i><span>Form Textarea</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#form-widget" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="lab la-elementor"></i><span>Form Widget</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="form-widget" className="iq-submenu collapse" data-parent="#form">
                                <li className=" ">
                                    <a href="backend/form-datepicker.html">
                                        <i className="las la-calendar"></i><span>Datepicker</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-select.html">
                                        <i className="las la-object-group"></i><span>Select2</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-file-uploader.html">
                                        <i className="las la-cloud-download-alt"></i><span>File Upload</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-quill.html">
                                        <i className="las la-text-height"></i><span>Form quill</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#form-wizard" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-archive"></i><span>Forms Wizard</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="form-wizard" className="iq-submenu collapse" data-parent="#form">
                                <li className=" ">
                                    <a href="backend/form-wizard.html">
                                        <i className="las la-box"></i><span>Simple Wizard</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-wizard-validate.html">
                                        <i className="las la-inbox"></i><span>Validate Wizard</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/form-wizard-vertical.html">
                                        <i className="las la-file-archive"></i><span>Vertical Wizard</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#table" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-table iq-arrow-left"></i><span>Table</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="table" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/tables-basic.html">
                                <i className="las la-border-all"></i><span>Basic Tables</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/table-data.html">
                                <i className="lab la-microsoft"></i><span>Data Table</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/table-editable.html">
                                <i className="lab la-buromobelexperte"></i><span>Editable Table</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/table-tree.html">
                                <i className="las la-tree"></i><span>Table Tree</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#icon" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-list iq-arrow-left"></i><span>Icons</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="icon" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/icon-dripicons.html">
                                <i className="las la-layer-group"></i><span>Dripicons</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/icon-fontawesome.html">
                                <i className="lab la-facebook-f"></i><span>Font Awesome</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/icon-lineawesome.html">
                                <i className="las la-grip-lines-vertical"></i><span>Line Awesome</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/icon-remixicon.html">
                                <i className="lab la-creative-commons-remix"></i><span>Remixicon</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#gallery" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-images iq-arrow-left"></i><span>Gallery</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="gallery" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/gallery-grid.html">
                                <i className="las la-icons"></i><span>Gallery Grid</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/gallery-grid-desc.html">
                                <i className="las la-file-image"></i><span>Gallery Grid Desc</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/gallery-masonry.html">
                                <i className="las la-film"></i><span>Masonry Gallery</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/gallery-masonry-desc.html">
                                <i className="las la-stream"></i><span>Masonry with Desc</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/gallery-hover-effect.html">
                                <i className="las la-wallet"></i><span>Hover Effects</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#blog" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="lab la-blogger iq-arrow-left"></i><span>Blog</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="blog" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/blog-simple.html">
                                <i className="las la-boxes"></i><span>Simple Blog</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/blog-grid.html">
                                <i className="lab la-buromobelexperte"></i><span>Blog Grid</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/blog-list.html">
                                <i className="las la-clipboard-list"></i><span>Blog List</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/blog-detail.html">
                                <i className="las la-film"></i><span>Blog Details</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#chart" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-chart-bar iq-arrow-left"></i><span>Charts</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="chart" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/chart-apex.html">
                                <i className="las la-chart-area"></i><span>Apex Chart</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/chart-am.html">
                                <i className="las la-project-diagram"></i><span>Am Chart</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/chart-morries.html">
                                <i className="las la-chart-pie"></i><span>Morrish chart</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/chart-high.html">
                                <i className="las la-chart-line"></i><span>High chart</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#map" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-map-marker iq-arrow-left"></i><span>Map</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="map" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/map-google.html">
                                <i className="las la-map-signs"></i><span>Google Map</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/map-vector.html">
                                <i className="las la-globe-europe"></i><span>Vector Map</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#auth" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="las la-pager iq-arrow-left"></i><span>Authentication</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="auth" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="backend/auth-sign-in.html">
                                <i className="las la-sign-in-alt"></i><span>Login</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/auth-sign-up.html">
                                <i className="las la-sign-out-alt"></i><span>Register</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/auth-recoverpw.html">
                                <i className="las la-unlock-alt"></i><span>Recover Password</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/auth-confirm-mail.html">
                                <i className="las la-envelope-open-text"></i><span>Confirm Mail</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/auth-lock-screen.html">
                                <i className="las la-lock"></i><span>Lock Screen</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className=" ">
                    <a href="#pages" className="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i className="lab la-readme iq-arrow-left"></i><span>Extra Pages</span>
                        <i className="las la-plus iq-arrow-right arrow-active"></i>
                        <i className="las la-minus iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul id="pages" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        <li className=" ">
                            <a href="#contact" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-address-book"></i><span>Contact</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="contact" className="iq-submenu collapse" data-parent="#pages">
                                <li className=" ">
                                    <a href="backend/contact-list.html">
                                        <i className="las la-file-alt"></i><span>Contact List</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/contact-detail.html">
                                        <i className="las la-address-card"></i><span>Contact Details</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#timeline" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-atom"></i><span>Timeline</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="timeline" className="iq-submenu collapse" data-parent="#pages">
                                <li className=" ">
                                    <a href="backend/timeline.html">
                                        <i className="las la-circle-notch"></i><span>Timeline 1</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/timeline-1.html">
                                        <i className="las la-compact-disc"></i><span>Timeline 2</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/timeline-2.html">
                                        <i className="las la-cog"></i><span>Timeline 3</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/timeline-3.html">
                                        <i className="las la-snowflake"></i><span>Timeline 4</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#pricing" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="lab la-paypal"></i><span>Pricing</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="pricing" className="iq-submenu collapse" data-parent="#pages">
                                <li className=" ">
                                    <a href="backend/pricing.html">
                                        <i className="las la-weight"></i><span>Pricing 1</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/pricing-1.html">
                                        <i className="las la-crutch"></i><span>Pricing 2</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/pricing-2.html">
                                        <i className="las la-tablets"></i><span>Pricing 3</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/pricing-3.html">
                                        <i className="las la-dna"></i><span>Pricing 4</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="#pages-error" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                <i className="las la-exclamation-triangle"></i><span>Error</span>
                                <i className="las la-plus iq-arrow-right arrow-active"></i>
                                <i className="las la-minus iq-arrow-right arrow-hover"></i>
                            </a>
                            <ul id="pages-error" className="iq-submenu collapse" data-parent="#pages">
                                <li className=" ">
                                    <a href="backend/pages-error.html">
                                        <i className="las la-exclamation-circle"></i><span>Error 404</span>
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="backend/pages-error-500.html">
                                        <i className="las la-bug"></i><span>Error 500</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className=" ">
                            <a href="backend/pages-invoice.html">
                                <i className="las la-file-invoice"></i><span>Invoice</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/pages-subscribers.html">
                                <i className="las la-sort"></i><span>Subscribers</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/pages-faq.html">
                                <i className="las la-drafting-compass"></i><span>Faq</span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="backend/pages-blank-page.html">
                                <i className="las la-folder-open"></i><span>Blank Page</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/pages-maintenance.html">
                                <i className="las la-cogs"></i><span>Maintenance</span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="backend/pages-comingsoon.html">
                                <i className="lab la-cc-mastercard"></i><span>Coming Soon</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar