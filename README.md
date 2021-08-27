# SliDe-Messages
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Technologies Used](#technologies-used)
* [Installations](#installations)
* [Demo](#demo)
* [Known Issues](#known-issues)
* [Future Ideas](#future-ideas)
* [Sources](#sources)
* [License](#license)


## Introduction
Users can login to view received and sent messages. Users can send and delete messages.
* GitHub: https://github.com/JXIong15/slide-messages-1
<p align="center"><img src="https://i2.paste.pics/0627bfc06d87a429d8b7f3e89611e9c9.png" width="100%"  stylealt="inbox"/></p>


## Functionality
* To start the app locally, `cd` into the `backend` directory
    * Make sure you're in an Environmental Variable by running `source env/bin/activate` in the terminal
    * Next, `cd` into the `project` directory and run `python manage.py runserver` to initiate the backend server
* Go to the `frontend` folder and run `npm start` to initiate the ReactJS code
* If the user is not logged in, they are promtped to. User can also create a login.
* Once logged in, user is brought to their inbox containing any messages recieved
* User can click on the left-hand navigation to bring them to various pages
    * The Sent page displays all messages the user has sent
    * The Compose page allows the user to create and send messages
* Clicking on the message titles in Inbox and Sent allows the user to view the whole message
* Individual messages can be deleted



## Tasks Completed
* Login page saves authentication token to cookies, allowing user to access the rest of the app
* Inbox and Sent shows all messages received
    * user can delete individual messages
* User can compose messages to be sent to others
* User can click on a message title to view the whole message
* If page does not exist, an error page displays

<p align="center"><img src="https://i2.paste.pics/8efba2895809074558d8591254c123fd.png" width="100%" stylealt="sent messages"/></p>


## Technologies Used
* React (frontend)
* Django (backend)
* MySqlite
* Insomnia


## Installations
* React-Router-Dom
* React
* Django
* Axios
* restframework
* react-cookie


## Demo
* App Demo:
<p align="center"><img src="./assets/slide-messages.gif" width="100%" height="100%" stylealt="app demo"/></p>


## Known Issues
* logging in sometimes doesn't have the inbox messages displayed. Refreshing the page fixes this
* can't style `PATH`s


## Future Ideas
* get page to reroute accurately once a Message (message being viewed) is deleted
* add pictures/ make site more visually appealing
* fix footer
* indicate how many messages are unread
* deploy to Ubuntu server
* better CSS styling overall (and mobile)


## Sources
* Parwiz Forogh: https://www.youtube.com/watch?v=VBqJ0-imSMU&t=21922s
    * used to learn Django and combine React and Django


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong</p>