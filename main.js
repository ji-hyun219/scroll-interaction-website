/* 1. data-index �� �̹���, ��ǳ���� ¦�� �°� �ο��Ѵ�.
 * 2. �ش� ��ǳ���� �ö���� �ش� �̹����� ���̰� �Ѵ�.
 * + ) �̹��� Ŭ������ visible �϶� opacity: 1�� �Ѵ�.
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
            /* �� Element.getBoundingClientRect() �޼���� DOMRect����� ũ��� ����Ʈ�� ������� ��ġ�� ���� ������ ���� �ϴ� ��ü�� ��ȯ�մϴ� . */
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