var container = document.getElementById('map');
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.56334246204749, 127.03411221796587), //지도의 중심좌표.
	level: 4 //지도의 확대, 축소 정도
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


// 마커이미지 옵션
var imageSrc = 'images/store_search/search_pin.png',
	imageSize = new kakao.maps.Size(27, 38),
	imageOption = {
		offset: new kakao.maps.Point(13, 36)
	};

// 마커이미지 생성
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
markerPosition = new kakao.maps.LatLng(37.56334246204749, 127.03411221796587);

// 지도에 마커 표시
var marker = new kakao.maps.Marker({
	position: markerPosition,
	image: markerImage // 마커이미지 설정 
});

marker.setMap(map);

// 커스텀 오버레이에 표시할 컨텐츠.
var content = '<div class="info">' +
	'<div class="top_info">' +
	'<h3>왕십리점</h3>' +
	'<button class="btn_close" type="button">창 닫기</button>' +
	'</div>' +
	'<div class="middle_info">' +
	'<dl>' +
	'<dt>주소</dt>' +
	'<dd>서울특별시 성동구 행당동 286-5번지 1층 한동타워</dd>' +
	'<dt>연락처</dt>' +
	'<dd>02-2229-99552</dd>' +
	'<dt>영업시간</dt>' +
	'<dd>08:00 - 22:30</dd>' +
	'</dl>' +
	'</div>' +
	'<div class="bottom_info">' +
	'<a class="btn_detail" href="#" target="_blank">자세히 보기</a>' +
	'</div>' +
	'</div>';

// 마커 위에 커스텀오버레이를 표시
var overlay = new kakao.maps.CustomOverlay({
	content: content,
	map: map,
	position: marker.getPosition()
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시
kakao.maps.event.addListener(marker, 'click', function () {
	overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수 
function closeOverlay() {
	overlay.setMap(null);
}

document.querySelector('.info .btn_close').addEventListener('click', function () {
	closeOverlay();
});
