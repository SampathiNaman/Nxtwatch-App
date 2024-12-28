# Video Streaming Platform
A comprehensive and interactive video streaming platform built with React, providing users with the ability to browse, watch, and save videos. This platform integrates with external APIs to fetch and display video content, supports user authentication with JWT tokens, and offers features such as theme switching and video interaction (Like, Dislike, Save).

## Features
- **User Authentication**: Secure login system with JWT-based authentication.
- **Video Browsing**: Browse videos in categories like Home, Trending, and Gaming.
- **Video Details**: Watch videos and interact with Like, Dislike, and Save buttons.
- **Search Functionality**: Search for videos using keywords.
- **Responsive Design**: Fully responsive design for mobile and desktop users.
- **Theme Switching**: Light/Dark mode toggle for user preference.
- **Saved Videos**: Users can save their favorite videos to a personal list.
- **Error Handling**: Retry mechanism for failed API requests.
- **Not Found Route**: Custom page for undefined routes.

## Tech Stack
- **Frontend**: React, React Router, Axios, React Player
- **Backend**: External Video APIs (CCBP APIs)
- **Authentication**: JWT token-based authentication
- **Styling**: CSS, Bootstrap
- **State Management**: React Context API
- **Theming**: CSS for light/dark theme
- **Video Playback**: React Player

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/video-streaming-platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd video-streaming-platform
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm start
   ```

## API Requests & Responses
- Login API: POST request to `https://apis.ccbp.in/login for user authentication`.
- Videos API: GET request to `https://apis.ccbp.in/videos/all?search= for home videos`.
- Trending Videos API: GET request to `https://apis.ccbp.in/videos/trending`.
- Gaming Videos API: GET request to `https://apis.ccbp.in/videos/gaming`.
- Video Details API: GET request to `https://apis.ccbp.in/videos/:id for detailed video information`.

## Additional Features
- **Save and Manage Videos**: Save favorite videos to a personalized list.
- **Responsive Design**: Optimized for all devices.
- **Error Handling**: Graceful handling of API failures with retry options.
- **Modular Components**: Scalable and reusable code structure.
- **Secure Authentication**: Robust session management with JWT.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
Thanks to [CCBP APIs](https://apis.ccbp.in/) for providing API endpoints.
