# GoFigure
GoFigure is a LEGO minifigure builder created for LEGO enthusiasts of all ages. It helps users get inspiration for new builds, express their creativity, and share that creativity with other users. Whether users wish to build a custom minifigure or use GoFigure to help them find that brick they didn't know they needed, GoFigure is a go-to LEGO minifigure companion.

# Search Mode
Users have personal virtual inventories, which are banks of all pieces that will be available to them when building. They can add pieces to or delete them from their virtual inventories. Users find new pieces to add by searching either for complete official LEGO minifigures, narrowed by themes or pulled from the collections of other users. Users can also search for individual pieces by search term and part type.

![Search Mode](/public/images/Search.gif)

# Build Mode
This is where users can mix and match pieces from their virtual inventories to create a LEGO minifigure. Users can also view details, including the Bricklink ID for a given piece, which can be used in conjunction with the link to Mecabricks 3D builder available from this page to create a 3D rendering of their minifigure. Users can also use this ID should they wish to round out their physical collection by buying the related brick. After users have selected their bricks, they can their figure a description and name and upload a photo.

![Build Mode](/public/images/FigBuilder.gif)

# Profile
Here users can see all of the minifigures they have created, delete minifigures, or create/delete collections. Collections are publicly viewed from the home screen by all users and can be searched similarly to official LEGO minifigures in the add parts section of the app. Minifigures that have not been added to a collection yet are private.

![Profile](/public/images/ProfilePage.png)

# Technologies Used

## Front-end
HTML5
CSS3
JS ES6
React JS Library
Bulma CSS Framework

## Data
JSON Server
Rebrickable API
Cloudinary API

![ERD](/public/images/GoFigureERD.png)

# Running The App

Setup: Follow these steps exactly
Create an API directory that will have .json data
Clone this repository
cd into the directory it creates
Run json-server -p 8088 -w database.json from the api directory.
Run npm install and wait for all dependencies to be installed.
Run npm start to verify that installation was successful.
Run npm install sweetalert2 to install Sweetalert2.
Run npm install react-image-gallery to install the image gallery.
Run npm install react-rating-stars-component --save to install the stars rating.
Run npm install bootstrap to install Bootstrap.
Note: Your database.json file is already in the .gitignore file for this project, so it will never be added to the repo or pushed to Github.

You will need these resources in your JSON database. "Types" collection must have this data to run the app as is.

### Users
`
    {
      "id": 1,
      "name": "Michael Trevino",
      "username": "Mat93"
    }
`

### Types
`
    {
      "id": 1,
      "rebrickableId": 65,
      "name": "headwear"
    },
    {
      "id": 2,
      "rebrickableId": 59,
      "name": "head"
    },
    {
      "id": 3,
      "rebrickableId": 60,
      "name": "torso"
    },
    {
      "id": 4,
      "rebrickableId": 61,
      "name": "bottom"
    },
    {
      "id": 5,
      "rebrickableId": 27,
      "name": "accessory"
    }
`
You will not need data for the `parts` `savedFigs` and `collections` resources.
