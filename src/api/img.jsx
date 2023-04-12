import Axios from 'axios';
export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID pBzzfuKXMFmNfyWwbZOSQr0Wus-eFDA41lQA57h0G08"
    }
});
