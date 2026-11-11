console.log("자기소개 페이지 JS 연결 완료")
/*const goalInput = document.querySelector("#goalInput");
const addGoalBtn = document.querySelector("#addGoalBtn");
const goalList = document.querySelector("#goalList");
const errorMessage = document.querySelector("#errorMessage");
const goalCount = document.querySelector("#goalCount");

addGoalBtn.addEventListener("click", function () {
	console.log("추가 버튼 클릭");
});

addGoalBtn.addEventListener("click",function () {
	const goalText = goalInput.value;

	console.log(goalText);
});

addGoalBtn.addEventListener("click",function () {
	const goalText=goalInput.value.trim();

	if (goalText === "") {
		errorMessage.textContent="목표를 입력해주세요.";
		return;
  }

	errorMessage.textContent="";
	console.log(goalText);
});


addGoalBtn.addEventListener("click",function () {
	const goalText = goalInput.value.trim();

	if (goalText === "") {
		errorMessage.textContent = "목표를 입력해주세요.";
		return;
  }

	errorMessage.textContent = "";

	const li=document.createElement("li");
	li.textContent = goalText;

	goalList.appendChild(li);

	goalInput.value = "";
});




addGoalBtn.addEventListener("click",function () {
	const goalText=goalInput.value.trim();
	
	if (goalText==="") {
		errorMessage.textContent="목표를 입력해주세요.";
		return;
  }

	errorMessage.textContent="";

	const li=document.createElement("li");
	li.classList.add("goal-item");

	const span=document.createElement("span");
	span.textContent=goalText;
	span.classList.add("goal-text");

	const deleteBtn=document.createElement("button");
	deleteBtn.textContent="삭제";
	deleteBtn.classList.add("delete-btn");

	li.appendChild(span);
	li.appendChild(deleteBtn);

    span.addEventListener("click", function () {
	span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function () {
	li.remove();
    });

	goalList.appendChild(li);

	goalInput.value="";
});*/

const goalInput=document.querySelector("#goalInput");
const addGoalBtn=document.querySelector("#addGoalBtn");
const goalList=document.querySelector("#goalList");
const errorMessage=document.querySelector("#errorMessage");
const goalCount=document.querySelector("#goalCount");

let goalTotal=0;

function updateGoalCount() {
	goalCount.textContent=`현재 목표 ${goalTotal}개`;
}

function addGoal() {
	const goalText=goalInput.value.trim();

	if (goalText==="") {
		errorMessage.textContent="목표를 입력해주세요.";
		return;
  }

	errorMessage.textContent="";

	const li=document.createElement("li");
	li.classList.add("goal-item");

	const span=document.createElement("span");
	span.textContent=goalText;
	span.classList.add("goal-text");

	const deleteBtn=document.createElement("button");
	deleteBtn.textContent="삭제";
	deleteBtn.classList.add("delete-btn");

	span.addEventListener("click",function () {
		span.classList.toggle("done");
  });

	deleteBtn.addEventListener("click",function () {
		li.remove();
		goalTotal=goalTotal-1;
		updateGoalCount();
  });

	li.appendChild(span);
	li.appendChild(deleteBtn);
	goalList.appendChild(li);

	goalTotal=goalTotal+1;
	updateGoalCount();

	goalInput.value="";
}
const changeBtn=document.querySelector("#changeBtn");
const result=document.querySelector("#result");

changeBtn.addEventListener("click",function () {
	result.textContent="버튼을 눌렀습니다!";
});

changeBtn.addEventListener("mouseover", function () {
    result.textContent = "마우스 올렸네?";
})

const introText=document.querySelector("#introText");
const changeIntroBtn=document.querySelector("#changeIntroBtn");

const introList= [
	"안녕하세요. 저는 웹기초 부트캠프를 듣고 있습니다.",
	"저는 사용자에게 편한 서비스를 만드는 것에 관심이 있습니다.",
	"HTML, CSS, JavaScript를 활용해 자기소개 페이지를 만들고 있습니다.",
	"앞으로 프로젝트 경험을 쌓으며 성장하고 싶습니다.",
	"웹기초 파이팅!"
];

let currentIndex=0;

changeIntroBtn.addEventListener("click",function () {
	currentIndex=currentIndex+1;

	if (currentIndex>=introList.length) {
		currentIndex=0;
	}
	
	introText.textContent=introList[currentIndex];
});

addGoalBtn.addEventListener("click",addGoal);

console.log("1. 첫 번째 명령 실행");

setTimeout(() => {
  console.log("2. 2초 뒤에 실행되는 명령!");
}, 2000);

console.log("3. 두 번째 명령 실행");

