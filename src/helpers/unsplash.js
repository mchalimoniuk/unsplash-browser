import Unsplash from 'unsplash-js';
import { APP_ID, APP_SECRET, APP_CALLBACK_URL } from "../constants/Unsplash";


const unsplash = new Unsplash({
  applicationId: APP_ID,
  secret: APP_SECRET,
  callbackUrl: APP_CALLBACK_URL
});

export default unsplash;