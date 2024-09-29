
 
 ###NOTES####

### Accessing Environment Variables in Vite

In Vite, environment variables are handled differently compared to Create React App. Here’s a note on how to correctly access them:

1. **Using `import.meta.env` in Vite**:
   - Vite uses `import.meta.env` to access environment variables instead of `process.env`.
   - Variables defined in a `.env` file must have a prefix of `VITE_` to be exposed to the front end.
   
   Example:
   - If your `.env` file has the following:
     ```
     VITE_APPWRITE_URL=https://appwrite.example.com
     ```
   - You can access this in your components as:
     ```javascript
     console.log(import.meta.env.VITE_APPWRITE_URL);
     ```

2. **Common Mistake**:
   - In Vite, using `process.env.REACT_APP_*` will result in an undefined value because Vite does not use `process.env` like Create React App.

3. **Important Points**:
   - Always prefix environment variables with `VITE_` in `.env` files for Vite projects.
   - Access the variables using `import.meta.env`.

By following this format, you’ll avoid errors related to environment variables in Vite projects.
