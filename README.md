# portfolio
personnal portfolio using MERN stack

## installation instruction

First install server dependencies:

`npm install`

then run client installation:

`npm install client`

## Create your .env variable

### server variable

you need to enter your MongoDB connection string under the `.env` file
in the directory `.../portfolio`

`MONGODB_URL = "< your connection string >"`

### client variable

in the `.../portfolio/client` directory create a `.env` file with the following
content :

`# emailjs-com API configuration`

 `REACT_APP_API_USER = "<your user ID>"`
 
 `REACT_APP_API_TEMPLATE = "<your template mail ID>"`
 
 `# ReCAPTCHA service by Google`
 
 `REACT_APP_RECAPTCHA = "<your API key>"`
 
 `# Login crednetial for login page`
 
 `REACT_APP_MAIL = "<your mail>"`
 
 `REACT_APP_PASSWD = "<your password>"`
 
 # Running the app
 
 To run the dev server simply launch
 
 `npm run dev`
 
 it will launch front server at [http://localhost:3000](http://localhost:3000)
 and backend API at [http://localhost:5000](http://localhost:5000)
 
 if you want to serve the production build you have to do :
 
 `npm run build --prefix=client`
 
 to create the production build, then :
 
 `npm start`
 
 the app is now running at [http://localhost:5000](http://localhost:5000)