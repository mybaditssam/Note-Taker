# Note Taker App
Note Taker is a web application that allows users to take and manage notes. It is built using Express.js and utilizes a simple API to handle note creation, deletion, and retrieval.

## Features
- Create new notes with a title and text content.
- Save notes to the server.
- Delete existing notes.
- View and edit saved notes.

## Getting Started
To run the Note Taker app on your local machine, follow these steps:
1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:
4. Start the application:
5. Open your web browser and visit http://localhost:3000 to access the Note Taker app.


## Home Page
The home page displays a welcome message and a "Get Started" button. Clicking the "Get Started" button will redirect you to the note-taking interface.

## Note-Taking Interface
The note-taking interface allows you to create, edit, and delete notes. It consists of the following elements:

- Note Title - Input field for entering the title of the note.
- Note Text - Text area for entering the content of the note.
- Save Note - Button for saving the note to the server.
- New Note - Button for creating a new empty note.
- Note List - Displays a list of saved notes. Clicking a note in the list will load its contents for viewing or editing.
- Delete Note - Trash can icon next to each note in the list. Clicking it will delete the corresponding note.

## API Routes
The Note Taker app provides the following API routes for managing notes:

- GET /api/notes - Retrieves all saved notes.
- POST /api/notes - Creates a new note.
- DELETE /api/notes/:note_id - Deletes a note with the specified note_id.
- Technologies Used
- The Note Taker app is built using the following technologies:

## Technologies:
- Front-end:
1. HTML
2. CSS (Bootstrap 5.2.3)
3. JavaScript
- Back-end:
1. Node.js
2. Express.js
- Data Storage:
1. JSON file (./db/notes.json)

## Screenshots
<img width="1361" alt="Screenshot 2023-07-27 at 2 46 22 PM" src="https://github.com/mybaditssam/Note-Taker/assets/127529427/9c2e72b8-f8fd-4fe2-806a-257838a797d2">
<img width="1272" alt="Screenshot 2023-07-27 at 2 46 30 PM" src="https://github.com/mybaditssam/Note-Taker/assets/127529427/3dfdd4c4-3314-4494-a438-ac709e0acb2d">

## Deployed Application
https://calm-sands-77396-84b5d87f8ca6.herokuapp.com/

## License
The Note Taker app is licensed under the MIT License.
