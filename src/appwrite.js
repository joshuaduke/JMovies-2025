import { Client, ID, Query, Databases, Account } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPRWITE_COLLECTION_ID;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

const database = new Databases(client);

export const account = new Account(client);

// export const user = await account.create(ID.unique(), 'email@example.com', 'password');

export const createUser = async (email, password) => {
    try {
        const result = await account.create(ID.unique(), email, password)
        console.log('User created', result);

    } catch (error) {
        console.error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const promise = account.createEmailPasswordSession(email, password)

        promise.then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.error(error)
    }
}



export const updateSearchCount = async (searchTerm, movie) =>{
    // use appwrite sdk to check if document exists in the db
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal('searchTerm', searchTerm)])
        
        // if yes, update the count
        if (result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {count: doc.count + 1})
        } else {
            // else create new document with the search term and count as 1         
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }

    } catch (error) {
        console.error(error)
    }
    
    

}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])
        return result.documents;
    } catch (error) {
        console.error(error)
    }
}