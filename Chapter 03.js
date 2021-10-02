/* Chapter 03 자바스크립트 데이터 타입과 연산자

/* 3.1 자바스크립트 기본타입

    // 숫자 타입
    var intNum = 10;
    var floatNum = 0.1;

    // 문자열 타입
    var singleQuoteStr = 'single quote string';
    var doubleQuoteStr = 'double quopte siring';

    // 불린 타입
    var boolVar = true;

    // undefined 타입
    var emptyVar;

    // null 타입
    var nullVar = null;

    console.log(
        typeof intNum,
        typeof floatNum,
        typeof singleQuoteStr ,
        typeof doubleQuoteStr,
        typeof boolVar,
        typeof emptyVar,
        typeof nullVar        
        );
*/

/* 3.1.1 숫자
    // 자바스크립트 나눗셈 연산
    var num = 5 /2 ;
    console.log(num);
    console.log(Math.floor(num));
*/

/* 3.1.2 문자

    // 자바스크립트 문자열 예제
    
    // str 문자열 생성
    var str = 'test';
    console.log(str[0], str[1], str[2], str[3]);
    
    // 문자열의 첫 글자를 대문자로 변경?
    str[0] = 'T';
    console.log(str);  //한번 생성된 문자열은 수정 할 수 없다.
*/

/* 3.1.3 불린값
    //불린 값은 Ture와 Flase 로 값이 나뉨
*/

/* 3.1.4 null과 undefined

    //null 타입 변수 생성
    var n = null;

    console.log(typeof n === null); //false
    console.log(n === null); // true
*/

/* 3.2.1 객체 생성
    // 객체 생성 방법 : 1. Object()객체 생성자 함수 / 2.객체 리터럴을 이용 / 3. 생성자 함수 이용
*/

/* 3.2.1.1 object() 생성자 함수 이용

    //Object()를 이용해서 foo 빈 객체 생성
    var foo = new Object();

    // foo 객체 프로퍼티 생성
    foo.name = 'foo';
    foo.age = 30;
    foo.gender = 'male';

    console.log(typeof foo);
    console.log(foo);
*/

/* 3.2.1.2 객체 리터럴(표기법) 방식으로 객체 생성
    
    // 객체 리터럴 방식으로 foo 객체생성
    var foo = {
        age : 30,
        name : 'foo',
        gender : 'male'
    };

    console.log(typeof foo);
    console.log(foo);
*/

/* 3.2.2 객체 프로퍼티 읽기/쓰기/갱신
    // 대괄호 [] 표기법 / 마침표 . 표기법

    // 객체 리터럴 방식을 통한 foo 객체 생성
    var foo = {
        name : 'rimsong',
        nickname : 'cute girl'
    };

    // 객체 프로퍼티 읽기
    console.log(foo.name);
    console.log(foo['name']);
    console.log(foo.nickname);
    console.log(foo.age);

    //객체 프로퍼티 갱신
    foo.major = 'computer science';
    console.log(foo.major);
    console.log(foo['major']);

    // 객체 프로퍼티 동적 생성
    foo.age = "30"
    console.log(foo.age);

    // 대괄호 표기법만을 사용해야 할 경우
    foo['full-name'] = 'foo bar';
    console.log(foo['full-name']);
    console.log(foo.full-name);
    console.log(name);
*/

/* 3.2.3 for in 문과 객체 프로퍼티 출력
    // for in 을 사용하면 반복하여 실행

    //  객체 리터럴을 통한 foo 객체 생성
    var foo = {
        name: 'foo',
        age : 30,
        major : 'computer science'
    };

    // for in 문을 이용한 객체 프로퍼티 출력
    var prop;
    for (prop in foo) {
        console.log(prop, foo[prop]);
    }
*/

/* 3.2.4 객체 프로퍼티 삭제

    // 객체 리터럴을 통한 foo 객체 생성
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
    console.log(foo.name);
*/

/*  3.3 참조타입의 특성

    var objA = {
        val : 40
    };

    var objB = objA;

    console.log(objA.val);
    console.log(objB.val);

    objB.val = 50;

    console.log(objA.val);
    console.log(objB.val);
*/

/* 3.3.1 객체 비교

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
    console.log(objB === objC);
*/

/* 3.3.2 참조에 의한 함수 호출 방식
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
    console.log(objA);
*/

/* 3.4프로토 타입
    //자바스크립트의 모든 객체 << = >> 자신의 부모 역할을 하는 객체와 연결
    // 이때 부모 객체 = 프로토타입 객체( 프로토타입 )    
    // 모든 객체는 자신의 프로토타입을 가리킨 [[Prototype]]라는 숨겨진 프로퍼티를 가진다
    // 크롬 브라우저에서는 __proto__ 프로퍼티가 숨겨진 프로퍼티를 의미
    // 자신의 부모 객체를 __proto__라는 내부 프로퍼티로 연결
    // 객체 리터럴 방식으로 생성된 객체 는 Object.prototype 객체 가 프로토타입의 객체가 된다
    //부모의 객체를 동적으로 바꿀 수 있다.

    var foo = {
        name : "foo",
        age : 30
    };

    console.log(foo.toString());
    console.dir(foo);
*/

/* 3.5.1 배열 리터럴

    // 배열 리터럴을 통한 5개 원소를 가진 배열 생성
    var a = ['a','b','c','d','e'];
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[4]);
    console.log(a);
*/

/* 3.5.2 배열의 요소 생성
    // 각 요소의 값만 포함
    // 객체는 프로퍼티의 이름으로 대괄호나 마침표 표기법을 이용하여 접근
    // 배열은 대괄호 내에 접근하고자 하는 원소에 배열 내 위치 인덱스값을 넣어 접근
    // 모든 배열은 length 프로퍼티 존재

    // 빈 배열
    var a = [];
    console.log(a[0]);

    // 배열의 요소 동적 생성
    a[0] = 100;
    a[3] = 2000;
    a[6] = true;
    console.log(a); // 빈 공간은 empty ( undefined ) 로 채워짐

    console.log(a.length); // 최대 인덱스의 크기 + 1 만큼 길이가 됨

    a[0] = 200;
    a[1] = "hi";
    console.log(a);
*/

/* 3.5.3 배열의 lenght 프로퍼티
    // 배열 내에 가장 큰 인덱스에 1을 더한 값이다.

    var a = [];
    console.log(a.length);

    a[0] = 0;
    a[1] = 1;
    a[2] = 2;
    a[100] = 100;
    console.log(a.length);
    console.log(a);
*/

/*  3.5.3 명시적 변경

    var a = [0,1,2];
    console.log(a.length);

    a.length = 5;
    console.log(a.length);
    console.log(a);

    a.length = 2;
    console.log(a.length);
    console.log(a);
    console.log(a[2]);
*/

/*  3.5.3.1 배열 표준 메서드와 length 프로퍼티
    //배열 메서드는 length 프로퍼티를 기반으로 동작

    // 배열 생성
    var a = [1,2,3];

    //push() 메서드 호출
    a.push(4);
    console.log(a);

    // length 값 변경 후, push() 메서드 호출
    a.length = 5;
    console.log(a); // length 값이 변경 되면 빈자리는 undefined 로 채워짐

    a.push(4);
    console.log(a);
*/

/* 3.5.4 배열과 객체

    var a = ['1','2','3']; // 배열
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);

    var b = {           // 객체
        '0' : 'orange',
        '1' : 'yellow',
        '2' : 'red'
    };

    console.log(b[0]); // 대괄호 안에는 접근하려는 프로퍼티 속성을 문자열 형태로 적어야 하지만 자바스크립트 엔진이 자동으로 문자열로 변환해줬다.
    console.log(b[1]);
    console.log(b[2]);

    // typeof 연산자 비교
    console.log(typeof a); // 배열과 객체는 모두 Object
    console.log(typeof b); // 객체는 lenght 프로퍼티가 존재하지 않는다.

    // length 프로퍼티
    console.log(a.length);
    console.log(b.length);

    // 배열 표준 메서드
    a.push('3'); // 배열의 객체는 Array.prototype 객체가 부모 객체인 프로토타입이다.
    b.push('red'); // 리터럴 방식으로 생성한 객체는 Object.prototype 객체가 프로토 타입이다.
*/

/* 3.5.4 배열과 객체 프로토타입 비교

    var a = []; // 배열 리터럴
    var b = {}; // 객체 리터럴

    console.dir(a.__proto__); // 배열의 프로토타입(Array.prototype 출력)
    console.dir(b.__proto__); // 객체의 프로토타입(Object.prototype 출력)
*/

/*  3.5.5 배열의 프로퍼티 동적 생성

    //배열 생성
    var arr = ['zero','one','two'];

    console.log(arr.length);

    // 프로퍼티 동적 추가
    arr.color = 'blue';
    arr.name = 'number_array';
    console.log(arr.length);

    // 배열 원소 추가
    arr[3] = 'three';
    console.log(arr.length);
    console.dir(arr);

    // 배열 객체 출력
    console.log(arr['name']);
    console.log(arr['color']);

    // 3.5.6 배열의 프로퍼티 열거
    for (var prop in arr) { // 객체는 for in 을 사용하여 열거
        console.log(prop, arr[prop]);
    }

    for(var i=0; i<arr.length; i++) { //배열은 객체이지만 for문을 사용하여 열거
        console.log(i, arr[i]);
    }
*/

/* 3.5.7 배열 요소 삭제

    var arr = ['zero','one','two' , 'three'];
    delete arr[2]; // 배열에서는 index값만 빈값으로 변경 (값 삭제)
    console.log(arr);
    console.log(arr.length);
    */

/* 3.5.7 배열 요소 삭제

    var arr = ['zero','one','two' , 'three'];

    // splice(배열에서 시작 위치 , 시작 위치부터 몇개 삭제할건지 , 그자리에 추가할 요소)
    arr.splice(2,1,'item');  // 2번째 위치부터 1개를 지우고 , 'item' 으로 대체한다
    console.log(arr);
    console.log(arr.length);
*/

/*  Array() 생성자 함수
    // 호출 인자가 1개 and 숫자 : 호출된 인자를 lenght로 갖는 빈 배열 생성
    // 그 외 모두 : 호출된 인자를 요소로 갖는 배열 생성

    var foo = new Array(3);
    console.log(foo);
    console.log(foo.length);

    var bar = new Array(1,2,3);
    console.log(bar);
    console.log(bar.length);
*/

/* 3.5.9 유사 배열 객체
    //객체는 lenght 프로퍼티를 가질수 없음 하지만 갖게한다면 유사 배열 객체가 된다.

    var arr = ['bar']; // 배열
    var obj =  { // 객체
        name : 'foo',
        length : 1
    };

    arr.push('baz'); //배열은 푸시하면 최상단 인덱스값에 추가
    console.log(arr); 
    //obj.push('baz'); // 객체는 푸시가 불가능 ( 키와 벨류값으로 이뤄져있음)
    
    Array.prototype.push.apply(obj, ['baz']); // apply () 를 사용하면 유사배열객체에도 표준 배열 객체 메소드를 사용할 수 있다.
    console.log(obj);
*/

/* 3.6 기본 타입과 표준 메서드

    var num = 0.5;
    //기본 타입은 메서드 처리 순간에 1.객체로 변환 / 2. 타입별 표준 메서드 호출 / 3. 호출 끝나면 기본값으로 복귀
    console.log(num.toExponential(1)); // 표준 숫자형 메소드 ( 지수형태의 문자혈 변환 )

    console.log("test".charAt(2)); // 문자열에서 인자로 받은 위치에 있는 문자 반환
    // 숫자와 문자열은 기본 타입이지만 "객체처럼 호출할 수 있다."
*/

/* 3.7.1 +연산자

    var add1 = 1+2;
    var add2 = "my" + "string";
    var add3 = 1 + "string";
    var add4 = "string" + 2;

    console.log(add1);
    console.log(add2);
    console.log(add3);
    console.log(add4);
*/

/* 3.7.2 type of 연산자
    기본타입 / 숫자 / 'number'
    기본타입 / 문자열 / 'string'
    기본타입 / 불린값 / 'boolean'
    기본타입 / null / 'object'
    기본타입 / undefined / 'undefined'

    참조타입 / 객체 / 'object'
    참조타입 / 배열 / 'object'
    참조타입 / 함수 / 'function'
*/

/* 3.7.3 ==(동등) 연산자와 ===(일치) 연산자

    console.log(1 == '1'); //동등 연산자는 타입을 변환 > 비교
    console.log(1 === '1'); // 일치 연산자는 타입 변환 X  > 비교
*/

/* 3.7.4 !!연산자 
    // !!의 역할은 피연산자를 불린값으로 변환

    console.log(!!0);
    console.log(!!1);;
    console.log(!!'string');
    console.log(!!'');
    console.log(!!true);
    console.log(!!false);
    console.log(!!null);
    console.log(!!undefined);
    console.log(!!{}); // 객체는 값이 비어있더라도 TURE로 변환
    console.log(!![1,2,3]);
*/


