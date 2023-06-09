function exec() {
    //롤링 배너 복제본 생성
    let roller = document.querySelector('.roller');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('.wrap').appendChild(clone); //부착

    //원본, 복제본 배너 위치 지정
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth + 'px';

    //클래스 할당
    roller.classList.add('original');
    clone.classList.add('clone');
    let rollerWidth = document.querySelector('.roller ul').offsetWidth;//회전 배너 너비값
    let betweenDistance = 1;//이동 크기 - 정수여야 함
    originalID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller1'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller2'));

    //인터벌 애니메이션 함수(공용)
    function betweenRollCallback(d, roller) {
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d) + 'px';//이동
        //조건부 위치 리셋
        if (rollerWidth + (left - d) <= 0) {
            roller.style.left = rollerWidth + 'px';
        }
    }
}