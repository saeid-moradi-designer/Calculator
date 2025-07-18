let monitor_value = "";
let number = 0;
let result = 0;
let n1 = n2 = 0;
let operator = ''
let memory = 0;
let MRC_twice_pressed = 0

const clickSound = new Audio('button-11.mp3')

const buttons = document.querySelectorAll('button')

const monitor = document.getElementById('monitor');

const helper = document.getElementById('helper')

const btnClear = document.getElementById('btnClear');

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const btnDot = document.getElementById('btnDot')

const btnABS = document.getElementById('btnABS')


// + - / % = Radical
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnTimes = document.getElementById('btnTimes');
const btnPercent = document.getElementById('btnPercent')
const btnEquals = document.getElementById('btnEquals')
const btnRadical = document.getElementById('btnRadical')

// Memory M+ M- MRC
const btnMemoryClear = document.getElementById('btnMemoryClear')
const btnMemoryMinus = document.getElementById('btnMemoryMinus')
const btnMemoryPlus = document.getElementById('btnMemoryPlus')



btn0.addEventListener('click', add_zero);
btn1.addEventListener('click', add_one);
btn2.addEventListener('click', add_two);
btn3.addEventListener('click', add_three);
btn4.addEventListener('click', add_four);
btn5.addEventListener('click', add_five);
btn6.addEventListener('click', add_six);
btn7.addEventListener('click', add_seven);
btn8.addEventListener('click', add_eight);
btn9.addEventListener('click', add_nine);
btnDot.addEventListener('click', add_dot)

btnClear.addEventListener('click', clear);

btnABS.addEventListener('click', changeSign);

btnPlus.addEventListener('click', addition);
btnMinus.addEventListener('click', subtract);
btnTimes.addEventListener('click', multiplication)
btnDevide.addEventListener('click', devide)
btnPercent.addEventListener('click', percent)
btnEquals.addEventListener('click', calculate)
btnRadical.addEventListener('click', radical)

btnMemoryClear.addEventListener('click', clearMemory)
btnMemoryMinus.addEventListener('click', minusMemory)
btnMemoryPlus.addEventListener('click', plusMemory)

monitor.addEventListener("input", function (event) {
  alert(1)
})
monitor.addEventListener("change", function (event) {
  alert(1)
})

function changeSign(){
  if(monitor.value != '' && monitor.value != '0'){
    number = parseFloat(monitor.value)
    result = Math.abs(number)
    monitor.value = result
    number = 0
  }
}


buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            clickSound.play();
            const key = e.target.id
            if(key == 'btnMemoryClear'){
              MRC_twice_pressed ++
              clearMemory()
            }
            else
              MRC_twice_pressed = 0

        });
    });

function check_entry(){
  alert('hey')
}

function plusMemory(){
  if(monitor.value != '' && monitor.value != '0'){
    memory += parseFloat(monitor.value)
    number = 0
  }
}

function minusMemory(){
  if(monitor.value != '' && monitor.value != '0'){
    memory -= parseFloat(monitor.value)
    number = 0
  }
}

function clearMemory(){
  if(MRC_twice_pressed == 2){
    memory = 0
    MRC_twice_pressed = 0
    monitor.value = memory
  }
  else {
    monitor.value = memory
  }
}



function addition(){
  operator = '+'
  try {
    result = eval(result + number);
    monitor.value = result;
    number = 0;
  }
  catch(error) {
    monitor.value = 'Error';
  }
}

function subtract(){
  operator = '-'

  try {
    if(result != 0)
      result = eval(result - number);
    else
      result = number
    monitor.value = result;
    number = 0;


  }
  catch(error) {
    monitor.value = 'Error';
  }

}

function multiplication(){
  operator = '*'

  if(result == 0)
    result = 1;
  if(number != 0){
    try {
      result = eval(result * number);
      monitor.value = result;
      number = 0;
    }
    catch(error) {
      monitor.value = 'Error';
    }
  }

}

function devide(){
  operator = '/'

  // یکبار تقسیم انجام شده و بر عدد جدید تقسیم خواهد شد
  if(result != 0 && number !=0){
    result = eval(result / number).toFixed(2)
    monitor.value = result
    number = 0
    return // به طور کلی از تابع بیرون میبرد اجرای برنامه را
  }
  if(number != 0){
    result = number
    number = 0
  }

}

function percent(){
  // if(number != 0){
    try{
      number = eval(monitor.value)
      result = eval(number / 100)
      monitor.value = result

      number = result = 0
    }
    catch(error){

    }
  // }
}

function calculate(){
  if(operator == '+'){
    try {
      result = eval(result + number);
      monitor.value = result;
      number = 0;
      operator = ''
    }
    catch(error) {
      monitor.value = 'Error'
    }

  }
  else if(operator == '-'){
    try {
      if(result != 0)
        result = eval(result - number);
      else
        result = number
      monitor.value = result;
      number = 0;
      operator = ''
    }
    catch(error) {
      monitor.value = 'Error';
    }

  }
  else if(operator == '*'){
      try {
        result = eval(result * number);
        monitor.value = result;
        number = 0;
        operator = ''
      }
      catch(error) {
        monitor.value = 'Error'
      }

    }
  else if(operator == '/'){
    try {
      result = eval(result / number)
      monitor.value = result.toFixed(2);
      number = 0;
      operator = ''
    }
    catch(error) {
      monitor.value = 'Error'
    }

  }
}

function radical(){
  if(number > 0 ){
    result = eval(Math.sqrt(number))
    monitor.value = result
    number = 0
    return
  }
  if(result > 0){
    result = eval(Math.sqrt(result))
    monitor.value = result
  }
}

function clear(){
    monitor.value=""
    n1 = n2 = result = number = 0;


}

function add_dot(){
  monitor.value += '.'
}


function add_zero() {
  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '0');
  number = eval(monitor.value);

}

function add_one() {
  //برای این نوشته شد که امثال این حالت ها رخ ندهد 0222 01 0304
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '1');
  number = eval(monitor.value);


}

function add_two() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '2');
  number = eval(monitor.value);


}

function add_three() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '3');
  number = eval(monitor.value);


}

function add_four() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '4');
  number = eval(monitor.value);

}

function add_five() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '5');
  number = eval(monitor.value);

}

function add_six() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '6');
  number = eval(monitor.value);

}

function add_seven() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '7');
  number = eval(monitor.value);

}

function add_eight() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '8');
  number = eval(monitor.value);

}

function add_nine() {
  if(monitor.value == '0')
    monitor.value = '';

  if(number == 0)
    monitor.value = '';
  monitor.value = eval(monitor.value + '9');
  number = eval(monitor.value);

}

function getInfo(){
  console.log('number: ' + number +' | ' + 'result: ' + result +' | ' + 'number 1 :' + n1 + ' | ' + 'number 2 : ' + n2 + ' | ' + 'sign: ' + operator + ' | ' + 'memory: ' + memory)
}

//------------------------ 7 segment Variables ----------------
const six = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment on e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const zero = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment on e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const one = '<!--Segment A--><svg class="segment a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const two = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment on e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const three = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const four = '<!--Segment A--><svg class="segment a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const five = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const seven = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const eight = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment on e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';

const nine = '<!--Segment A--><svg class="segment on a w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.84 20 22.16 20 0 0 100 0 77.84 20" />        </g>    </g></svg><!--Segment B --><svg class="segment on b w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="0 87.34 0.67 22.16 20.67 0 20.67 100 0 87.34" />        </g>    </g></svg><!--Segment C --><svg class="segment on c w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="0.67 77.84 0 12.66 20.67 0 20.67 100 0.67 77.84" />        </g>    </g></svg><!--Segment D --><svg class="segment on d w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="22.16 0 77.84 0 100 20 0 20 22.16 0" />        </g>    </g></svg><!--Segment E --><svg class="segment e w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon class="cls-1" points="20.67 12.66 20 77.84 0 100 0 0 20.67 12.66" />        </g>    </g></svg><!--Segment F --><svg class="segment on f w-v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 100">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="20 22.16 20.67 87.34 0 100 0 0 20 22.16" />        </g>    </g></svg><!--Segment G --><!--Segment G --><svg class="segment on g w-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.23 20.71">    <g id="Layer_2" data-name="Layer 2">        <g id="Layer_1-2" data-name="Layer 1">            <polygon points="77.2 20.71 47.12 20.71 16.9 20.71 0 10.35 16.9 0 47.12 0 77.2 0 94.23 10.35 77.2 20.71" />        </g>    </g></svg>';
