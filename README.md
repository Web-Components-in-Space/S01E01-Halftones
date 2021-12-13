# S01E01-Halftones

# Step 4: Creating a naive data model
In step 4, we're going to stop hard-coding all of our attributes/properties and let
them flow through to our child components using Lit's "Reactive Properties".
The end result is that we can control all of our settings from the main component.

In step 4 we:

- Create an object in our main component with all of our application properties
- Replace hard-coded attributes with Reactive Properties
- Populate our child components with Reactive Properties and use them in their HTML instead of hard-coded values
- Make Side panel UI reflect data model
- Give selected image a border based on current selection

# Step 3: Filling in the rest of the UI
In step 3, we're continuing our Spectrum Web Components journey. First we'll
fill in the "floatingfooter" component with some download buttons.
Next, we'll go crazy with the side panel and employ several different
Spectrum Web Components

Step 3 covers:

- Creating our 2 remaining application components
- Using Spectrum Web Component's "action button", "field-label", "picker", "color-area" and "color-slider" components
- Finishing our application's UI layout and design

# Step 2: Organizing and our first child component
In this second step, we're going to do some custom organization of our main app component,
but also build out our first child component that allows us to select an image to use for our halftone

Step 2 covers:

- Separating out our HTML/CSS into different files
- Creating the "floatingheader" component
- Mapping an array of image URLs to thumbnails
- Adding our first Spectrum Web Component with icon

# Step 1: Setup
Since this is the first episode and the first time we're setting up a lit application,
lets focus on the first steps of laying out our application.

In this first step, we cover:

- Creating our gitignore and putting our assets into place
- Creating a package.json and installing our dependencies
- Creating our application source folder with a single component folder
- Creating our index.html and pointing to our app component source
- Creating our first component file (app.js) with an index.js entry point
- Fill in our component with Lit functionality and render some HTML
- Import Spectrum Web Components and add a theme container
- Build out our layout using HTML and CSS
- Get the halftone component working
- Add a background slot



