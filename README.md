# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Cat Encyclopedia

This project is a Cat Encyclopedia web application that fetches data from TheCatAPI to display information about different cat breeds. Users can explore random cat images and learn more about their breed characteristics.

## Features

Displays a random cat image fetched from TheCatAPI.

Provides a "Learn More" button that takes users to a details page with breed information.

The details page includes the breed name, a description, and tempermant 

A "Back" button allows users to return to the main page, where the last viewed cat remains visible until a new cat is fetched.

## Technologies Used

HTML: Structure of the web pages

CSS: Styling and layout

JavaScript: Fetching API data and updating the DOM dynamically

TheCatAPI: Source of cat images and breed information

Vite: Development environment for handling API keys securely

## Installation and Setup

### Prerequisites

Ensure you have Node.js installed

Install Vite globally by running:

```
npm create vite@latest my-cat-app --template vanilla
cd my-cat-app
npm install
```

Sign up at TheCatAPI and obtain an API key.

### Setting Up the Project

1. Clone this repository:

```
git clone https://github.com/yourusername/cat-encyclopedia.git
cd cat-encyclopedia
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory and add your API key:

```
VITE_API_KEY=your_api_key_here
```

4. Start the development server:

```
npm run dev
```

## Usage

Open the application in your browser.

View a randomly displayed cat image.

Click the "Learn More" button to see details about the cat breed.

Use the "Back" button to return to the main page.

Click the "Next Arrow" to fetch a new cat.


## File Structure

├── App.jsx          # Main page displaying cat image
├── AboutPage.jsx    # About page displaying cat information
├── index.css        # Styling for the application
├── .env             # Environment file for storing API key
├── README.md        # Project documentation

## API Reference

### Endpoint to fetch a random cat with breed data:

```
GET https://api.thecatapi.com/v1/images/search?has_breeds=1
```

### Endpoint to fetch specific cat breed data:
```
GET https://api.thecatapi.com/v1/images/search?breed_ids=${id}
```

## Known Issues & Future Improvements

Improve navigation performance and allow users to move forward and backwards through the data.

Enhance styling for better user experience.

Implement a search feature to look up specific breeds.

License

This project is licensed under the MIT License.
