// 1. 제어할 태그들 전부 가져오기
const serverMsg = document.querySelector('#server-msg');
const myMsg = document.querySelector('#my-msg');
const nameInput = document.querySelector('#guest-name');
const msgInput = document.querySelector('#guest-msg');
const submitBtn = document.querySelector('#submit-btn');

// 2. 1.5초 뒤에 문자열 하나를 주는 함수
function getMessageData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      // 1.5초 뒤에 이 글자를 전달함
      resolve("익명: 웹 기초 파이팅입니다!"); 
    }, 1500);
  });
}

// 3. 기다렸다가 화면 글자 바꾸기
async function initGuestbook() {
  // getMessageData가 끝날 때까지 1.5초 대기! (await)
  const data = await getMessageData();
  
  // 1.5초 뒤 데이터가 도착하면, 저번 시간에 배운 textContent로 글자 바꾸기
  serverMsg.textContent = data; 
}

// 4. 버튼 눌러서 새 방명록 띄우기
submitBtn.addEventListener('click', function() {
  const name = nameInput.value;
  const msg = msgInput.value;

  // 빈칸이면 멈춤
  if (name === '' || msg === '') {
    alert("이름과 메시지를 모두 입력해주세요.");
    return;
  }

  const result = name + ": " + msg;

  // 저번 시간에 배운 textContent로 화면의 글자를 내가 쓴 걸로 덮어씌움
  myMsg.textContent = result;

  // 입력칸 빈칸으로 초기화
  nameInput.value = '';
  msgInput.value = '';
});

// 페이지 열리면 함수 실행
initGuestbook();