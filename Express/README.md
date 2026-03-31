# FUTURE MAP FELLOWSHIP BACKEND CLASS
This repository shows all we have don so far in express.js

to begin
```bash
npm init -y
npm install express
npm install nodemon
npm install bcryptjs jsonwebtoken
npm install ejs

```

### Key Mongoose methods to know:
#### Method What it does
- User.create({...}) `Saves a new user to MongoDB`
- User.findOne({ email }) `Finds one user by email`
- User.findById(id) `Finds a user by their _id`
- .select("-password") `Returns all fields except password`