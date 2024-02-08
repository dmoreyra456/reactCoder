import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";

const getLibros = async () => {
    const books = collection(db, 'libros');

    try {
        const querySnapshot = await getDocs(books);
        const array = querySnapshot.docs.map(doc => {
            const fields = doc.data();
            return { id: doc.id, ...fields }
        });
        return array;
    } catch (error) {
        console.error("Error getting libros:", error);
        return []; // Devolver un array vacío en caso de error
    }
}

export default getLibros;
