
<div align="center">
  <img src="https://user-images.githubusercontent.com/87027579/179196899-d7218ec9-e54b-401b-9cf6-9cb89fc26538.png">

# LightsOut Video v2

</div>


## Table of Contents

- [About](#about)
- [Technologies used](#-technologies-used)
- [Features](#features)
- [Live link](#live-link)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Connect with me](#-connect-with-me)

## About
 - Watch everything going on in the motorsport world in one place whether it be the science behind things or the story of drivers and teams.

## 🛠 Technologies used
- ReactJS
- [Mantine UI](https://mantine.dev/) component library
- [Mockbee](https://mockbee.netlify.app/) for backend
- React Router

## Live link
[LightsOut Video v2](https://lightsout-video-v2.vercel.app/)

## Features
**Home Page**: 
- The home page consists of different categories, clicking them navigates the user to the video listing page with that category applied as a filter.

**Video Listing (Explore)**
- On this page, users can see all the videos and can watch the video by clicking on them. 

**Video details**
- After a user clicks on any video in video listing page, it will navigate to this page, where user can:
  - Watch the video
  - Can like the video
  - Add the video into watch later, playlist and can create a playlist
  - Add video to watch later
  - Create new playlist
 
 **Playlist Management**
 - On this page user can view all the playlists.
 - On clicking on any one open's that playlist, where user get option to:
    - Delete the playlist
    - Remove video from playlist

**Watch later**
- Users can add any video into watch later if a video is already in watch later then the user can remove it.

**Like video**
- Users can like any video, if the video is already liked then the user can remove it from liked videos.

**History**
- Once the user watches the video it gets added to watch history. On the history page, the user can clear all history.

**Authentication**
- LightsOut Video also has login, signup and logout feature
  - For Signup, form validation is done for all the fields.


## Getting Started

- Clone the repository on your local machine with the command below in your terminal, and cd into the **lightsout-video** folder

```sh
https://github.com/hiteshverma27/lightsout-video.git
cd lightsout-video
```

- Install dependencies (if you are using **yarn** then do with that)

```sh
npm install
```

- Create a `.env` file at the root level of the directory (at the level of `package.json`) and create a environment variable

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

- Start the server🚀

```
npm start
```

## Screenshots
![Screenshot (54)](https://user-images.githubusercontent.com/87027579/179197357-dabcb5e8-7dbb-4cb8-a9af-d982ea1a9564.png)
![Screenshot (50)](https://user-images.githubusercontent.com/87027579/179197362-c45d1df0-5554-4a23-95f1-985c51e7ed15.png)
![Screenshot (51)](https://user-images.githubusercontent.com/87027579/179197367-85ea47ba-74b4-46a3-998f-31e0f4803049.png)
![Screenshot (52)](https://user-images.githubusercontent.com/87027579/179197372-40cf8d5f-d2c5-4d83-8d28-41eaa3cd5857.png)
![Screenshot (53)](https://user-images.githubusercontent.com/87027579/179197374-dd7a9c19-3a55-4ef5-b8b6-5239d2597972.png)



## 👨‍💻 Connect with me 

<a href="https://twitter.com/hitesh27v"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/hiteshverma27/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
