const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

//sample
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello Raviteja, from Firebase!");
});

const createNotification = (notification) => {
    return admin.firestore().collection("notifications")
        .add(notification)
        .then(doc => console.log('Notification created', doc))
}
exports.projectCreated = functions.firestore
    .document("projects/{projectId}")
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: "Added a new project",
            user: `${project.authFirstName} ${project.authLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    });

exports.userJoined = functions.auth.user().onCreate((user) => {
    return admin.firestore().collection("users")
        .doc(user.id).get().then(doc => {
            const newUser = doc.data()
            const notification = {
                content: "New user joined",
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification);
        })
})