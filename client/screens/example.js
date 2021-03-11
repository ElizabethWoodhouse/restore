// ...

// import { firebase } from '../../firebase/config'

// ...

// export default function RegistrationScreen({navigation}) {
//     ...

//     const onRegisterPress = () => {
//         if (password !== confirmPassword) {
//             alert("Passwords don't match.")
//             return
//         }
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then((response) => {
//                 const uid = response.user.uid
//                 const data = {
//                     id: uid,
//                     email,
//                     fullName,
//                 };
//                 const usersRef = firebase.firestore().collection('users')
//                 usersRef
//                     .doc(uid)
//                     .set(data)
//                     .then(() => {
//                         navigation.navigate('Home', {user: data})
//                     })
//                     .catch((error) => {
//                         alert(error)
//                     });
//             })
//             .catch((error) => {
//                 alert(error)
//         });
//     }

//     ...
// }
