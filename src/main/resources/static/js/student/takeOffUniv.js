//by수경 학생이 휴학신청 버튼을 눌렀을 때
//휴학중인 학생이 눌렀을 때 휴학버튼이 보이지 않도록 구현
//재학중인 학생이 눌렀을 때 휴학신청이 가능하도록 구현
//휴학신청 유의사항 팝업창이 뜨고 확인버튼 누르면 
//휴학신청이 완료 되었습니다. 팝업이 뜬 후 신청현황 페이지로 이동

function applyTakeOffUniv(){

	//모달창 소스
	const modal = new bootstrap.Modal('#takeOffUnivModal');
	//모달 보여주기
	modal.show();
	
}