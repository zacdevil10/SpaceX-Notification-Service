const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const https = require("https");

exports.upcomingLaunch = onRequest((req, res) => {
    https.get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?search=SpaceX&limit=1", (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.send(data);
        });
    }).on('error', (error) => {
        logger.error(error);
    });
});
