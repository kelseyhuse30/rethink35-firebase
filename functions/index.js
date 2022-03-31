const functions = require("firebase-functions");

exports.newPetitionSignature =
    functions.https.onRequest((request, response) => {
      const body = request.body;
      const signature = body[0]["osdi:signature"];
      const person = signature["person"];
      const familyName = person["family_name"];
      const givenName = person["given_name"];
      functions.logger.info(`Name is: ${givenName} ${familyName}`);
      functions.logger.info(`Person is: ${JSON.stringify(person)}`);
      const emailAddress = person["addresses"][0]["address"]; // doesn't work
      const phoneNumber = person["phone_numbers"][0]["number"]; // doesn't work
      functions.logger.info(`phone: ${phoneNumber}, email: ${emailAddress}`);
      response.sendStatus(200);
    });
