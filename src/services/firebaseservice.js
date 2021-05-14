import firebase from "firebase";
import { config } from "../config/config";

export default class FirebaseService {
  init = () => {
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  };

  save = (store, data) => {
    let newDoc = firebase.firestore().collection(store).doc();
    newDoc.set(data);
  };

  getMetadata = async (url) => {
    const getMetadata = firebase.functions().httpsCallable("getMetadata");
    let results = {};
    await getMetadata({ url: url }).then((m) => {
      results = m;
    });
    return results;
  };
}
