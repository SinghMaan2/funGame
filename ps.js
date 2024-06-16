let body = document.querySelector('body');
let urName = document.querySelector('.you input');
let ptName = document.querySelector('.other input');
let percentage = document.querySelector('.percentage');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
btn2.style.display = 'none';

function calculate() {
    if (urName.value == '' || ptName.value == '') {
        urName.style.border = '2px solid red';
        urName.style.color = 'red';
        ptName.style.border = '2px solid red';
        ptName.style.color = 'red';
    }
    else
    {
        
        const combinedNames = urName.value.toLowerCase() + ptName.value.toLowerCase();
        let loveScore = 0;

        for (let i = 0; i < combinedNames.length; i++) {
            loveScore += combinedNames.charCodeAt(i);
        }

        loveScore = loveScore % 101;
        percentage.innerText = loveScore + '%';
        btn1.style.display = 'none';
        btn2.style.display = 'block';
    }
}

function RefreshPage() {
    percentage.innerText = '';
    urName.value = '';
    ptName.value = '';
    btn2.style.display = 'none';
    btn1.style.display = 'block';
}

btn1.addEventListener('click',calculate);
btn2.addEventListener('click',RefreshPage);