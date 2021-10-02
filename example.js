/*
var i = 0;
for (i=0; i<=10; i++) {
    document.write("hello javascript");
    document.write("<br>") 
}*/

/*
var n = null;
console.log(typeof n)*/

/*
var num = 5 /2 ;
console.log(num);
console.log(Math.floor(num));*/

/*
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);

str[0] = 'T';
console.log(str);  //한번 생성된 문자열은 수정 할 수 없다.*/

/*
var n = null;
console.log(typeof n === null); //false
console.log(n === null); // true*/

/* object() 생성자 함수 이용
var foo = new Object();

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);*/

/* 객체 리터럴(표기법) 방식으로 객체 생성
var foo = {
    age : 30,
    name : 'foo',
    gender : 'male'
};

console.log(typeof foo);
console.log(foo);*/

/*
var foo = {
    name : 'rimsong',
    nickname : 'cute girl'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);
console.log(foo.age);

foo.major = 'police';
console.log(foo.major);
console.log(foo['major']);

foo.age = "21"
console.log(foo.age);

foo['full-name'] = 'rimsong Park';
console.log(foo['full-name']);
console.log(foo.full-name);
console.log(name);*/

/* for in 을 사용하면 반복하여 실행
var foo = {
    name: 'foo',
    age : 30,
    major : 'computer science'
};

var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}*/

/*
var foo = {
    name : "fao",
    nickname : "babo"
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

foo.nickname = "babo";
console.log(foo.nickname);

delete foo; // delete 는  프로퍼티(키,밸류) 값만 삭제한다
console.log(foo.name);*/

/*
var objA = {
    val : 40
};

var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;

console.log(objA.val);
console.log(objB.val);*/

/*
var a = 100;
var b = 100;

var objA = { val : 100 };
var objB = { val : 100 };
var objC = objB;

console.log(a == b);
console.log(objA == objB);
console.log(objB == objC);

console.log(a === b);
console.log(objA === objB);
console.log(objB === objC);*/

/*
var a = 100;
var objA = { val : 100 };

function changeArg(num, obj) {
    num = 200;
    obj.val = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);*/

/*
var foo = {
    name : "foo",
    age : 30
};

console.log(foo.toString());
console.dir(foo);*/

/*
var a = ['a','b','c','d','e'];
console.log(a[0]);
console.log(a[1]);
console.log(a[4]);
console.log(a);*/

/*
var a = [];
console.log(a[0]);

a[0] = 100;
a[3] = 2000;
a[6] = true;
console.log(a);

console.log(a.length);

a[0] = 200;
a[1] = "hi";
console.log(a);*/

/*
var a = [];
console.log(a.length);

a[0] = 0;
a[1] = 1;
a[2] = 2;
a[100] = 100;
console.log(a.length);
console.log(a);*/

/*
var a = [0,1,2];
console.log(a.length);

a.length = 5;
console.log(a.length);
console.log(a);

a.length = 2;
console.log(a.length);
console.log(a);
console.log(a[2]);*/

/*
var a = [1,2,3];

a.push(4);
console.log(a);

a.length = 5;
console.log(a);

a.push(4);
console.log(a);*/

/*
var a = ['1','2','3']; // 배열
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

var b = {           // 객체
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'red'
};

console.log(b[0]);
console.log(b[1]);
console.log(b[2]);

console.log(typeof a);
console.log(typeof b);
console.log(a.length);
console.log(b.length);

a.push('3');
b.push('red');*/

/*
var a = [];
var b = {};

console.dir(a.__proto__);
console.dir(b.__proto__);*/

/*
var arr = ['zero','one','two'];

console.log(arr.length);

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

arr[3] = 'three';
console.log(arr.length);
console.dir(arr);

console.log(arr['name']);
console.log(arr['color']);


for (var prop in arr) { // 객체는 for in 을 사용하여 열거
    console.log(prop, arr[prop]);
}

for(var i=0; i<arr.length; i++) { //배열은 객체이지만 for문을 사용하여 열거
    console.log(i, arr[i]);
}*/

/*
var arr = ['zero','one','two' , 'three'];
delete arr[2]; // 배열에서는 index값만 빈값으로 변경 (값 삭제)
console.log(arr);
console.log(arr.length);*/

/*
var arr = ['zero','one','two' , 'three'];

arr.splice(2,1,'item'); // splice(배열에서 시작 위치 , 시작 위치부터 몇개 삭제할건지 , 그자리에 추가할 요소)
console.log(arr);
console.log(arr.length);*/

/*
var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);*/

/*
var arr = ['bar']; // 배열
var obj =  { // 객체
    name : 'foo',
    length : 1
};

arr.push('baz'); //배열은 푸시하면 최상단 인덱스값에 추가
console.log(arr); 
//obj.push('baz'); // 객체는 푸시가 불가능 ( 키와 벨류값으로 이뤄져있음)
 
Array.prototype.push.apply(obj, ['baz']); // apply () 를 사용하면 유사배열객체에도 표준 배열 객체 메소드를 사용할 수 있다.
console.log(obj);*/

var num = 0.5;
 //기본 타입은 메서드 처리 순간에 1.객체로 변환 / 2. 타입별 표준 메서드 호출 / 3. 호출 끝나면 기본값으로 복귀
 console.log(num.toExponential(1)); // 표준 숫자형 메소드 ( 지수형태의 문자혈 변환 )

console.log("test".charAt(2));


