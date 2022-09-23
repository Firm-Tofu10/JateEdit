import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('PUT to the database');
const jateDB = await openDB("jate", 1);
const transition = await openDB("jate", "readwrite");
const store = transition.objectStore("jate");
const request = store.put({id: id, jate: content });
const result = await request;
console.log("Saved to Data", result);
};


// TODO: Add logic for a method that gets all the content from the database
export const getAllDb = async () => {
	console.log('GET all from the database');
	const jateDB = await openDB("jate", 1);
	const transition = jateDB.transaction("jate","readonly");
	const store = jateDB.objectStore("jate");
	const request = store.getALL();  
	// get(1); might be correct but the comment says get all?
	const result = await request;
	// result ("Thought this may work like return at the end of a if?")
	console.log("Got data from DB",result)
	console.log("Did not get from DB");
	return result;
};


initdb();
