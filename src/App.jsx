import './App.css';
import {conf} from './conf/conf.js'

function App() {
    //console.log(import.meta.env.VITE_APPWRITE_URL); // Check individual variable
    //console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    //console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID);
    //console.log(import.meta.env.VITE_APPWRITE_COLLECTION_ID);
    //console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID);
    console.log(conf);

    return (
        <>
            <h1>A Blog App with Appwrite</h1>
        </>
    );
}

export default App;
