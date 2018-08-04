# React Flash Cards

https://arthurhwang.github.io/react-flash-cards/

An interactive ReactJS application to let users create, edit, delete, and view flashcards.  Users can use the test / practice feature to quiz themselves to get ready for their next big exam!

## Technologies Used
- ReactJS
- Javascript
- CSS3
- HTML5
- Bootstrap 4

## Key Features

### Users can create flashcards
<img src="https://user-images.githubusercontent.com/18460401/43681249-3a9e4688-9803-11e8-9ee0-d05aead1dcda.gif" alt="Oops...cant display">

### Users can view saved flashcards
<img src="https://user-images.githubusercontent.com/18460401/43681250-3ab8fbea-9803-11e8-9c8f-1bd082974b5c.gif" alt="Oops...cant display" width="674" height="433">

### Users can edit flashcards
<img src="https://user-images.githubusercontent.com/18460401/43681251-3ad131b0-9803-11e8-9535-3e64a924dfb3.gif" alt="Oops...cant display" width="674" height="433">

### Users can delete flashcards
<img src="https://user-images.githubusercontent.com/18460401/43681251-3ad131b0-9803-11e8-9535-3e64a924dfb3.gif" alt="Oops...cant display" width="674" height="433">

### Users can practice their flashcards
<img src="https://user-images.githubusercontent.com/18460401/43681252-3ae86e2a-9803-11e8-8448-bd5bc7a79d6d.gif" alt="Oops...cant display" width="674" height="433">

### Users can show and hide the answer while practicing flashcards
<img src="https://user-images.githubusercontent.com/18460401/43681253-3afdf52e-9803-11e8-82e7-de4f1fdc9eea.gif" alt="Oops...cant display" width="674" height="433">

### Users can cycle through their flashcards with visual feedback
<img src="https://user-images.githubusercontent.com/18460401/43681254-3b1756ae-9803-11e8-8ae1-437745368bba.gif" alt="Oops...cant display" width="674" height="433">

## Development

### System Requirements
- Node.js v10
- NPM v6
- MongoDB v4

### Getting Started

Clone the repository.
```
git clone https://github.com/ArthurHwang/toneify.git
```

Install dependencies.
```
cd toneify/
npm install
```

Create a `.env` file in the project root.  Example:
```
MONGODB_URI=mongodb://localhost:27017/toneify
PORT=3000
```

### Automatically run/restart server with `nodemon` and live reload page on update with `browser-sync`
```
npm run watch
```

### Run without `nodemon` and `browser-sync`
```
npm run build
npm run start
```
