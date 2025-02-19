// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyARkljI4btWYdiZ2XTYO-2f6NtMKjAQZ8M",
    authDomain: "what-do-you-want-tell-teacher2.firebaseapp.com",
    databaseURL: "https://what-do-you-want-tell-teacher2-default-rtdb.firebaseio.com",
    projectId: "what-do-you-want-tell-teacher2",
    storageBucket: "what-do-you-want-tell-teacher2.firebasestorage.app",
    messagingSenderId: "130178760324",
    appId: "1:130178760324:web:b4e91e8b7e4db831d80cd1",
    measurementId: "G-LLY0Z83VE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ฟังก์ชันส่งข้อความ
function sendMessage() {
    let nickname = document.getElementById("nickname").value;
    let studentClass = document.getElementById("class").value;
    let teaching = document.getElementById("teaching").value;
    let personality = document.getElementById("personality").value;

    if (nickname && studentClass && teaching && personality) {
        const messageRef = ref(db, 'messages/' + new Date().getTime());
        set(messageRef, { nickname, studentClass, teaching, personality });

        alert("ครูรับเรื่องแล้วจ้า!! 💖");

        document.getElementById("nickname").value = "";
        document.getElementById("class").value = "";
        document.getElementById("teaching").value = "";
        document.getElementById("personality").value = "";
    }
}

// แสดงข้อความทั้งหมด
function showMessages() {
    document.getElementById("messagesContainer").style.display = "block";
}

// ปิดกล่องข้อความ
function closeMessages() {
    document.getElementById("messagesContainer").style.display = "none";
}

window.sendMessage = sendMessage;
window.showMessages = showMessages;
window.closeMessages = closeMessages;
