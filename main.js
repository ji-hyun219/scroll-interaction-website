/* 1. data-index 를 이미지, 말풍선에 짝에 맞게 부여한다.
 * 2. 해당 말풍선이 올라오면 해당 이미지를 보이게 한다.
 * + ) 이미지 클래스가 visible 일때 opacity: 1로 한다.
 * */


const $graphic_item = document.querySelectorAll('.graphic-item');
const $step = document.querySelectorAll('.step');
let currentItem = $graphic_item[0];

(() => {
    for (let i = 0; i < $step.length; i++) {
        $step[i].setAttribute('data-index', i);
        $graphic_item[i].setAttribute('data-index', i); //.dataset.index = i;
    }


    function activate() {
        currentItem.classList.add('visible');
    }

    function inactivate() {
        currentItem.classList.remove('visible');
    }

    
    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;

        for (let i = 0; i < $step.length; i++) {
            step = $step[i];
            boundingRect = step.getBoundingClientRect();
            /* 이 Element.getBoundingClientRect() 메서드는 DOMRect요소의 크기와 뷰포트에 상대적인 위치에 대한 정보를 제공 하는 객체를 반환합니다 . */
            // console.log(boundingRect);

            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {

                inactivate();
                currentItem = $graphic_item[step.dataset.index];
                activate();
                


            }
        }
    })
    activate();
    
})();