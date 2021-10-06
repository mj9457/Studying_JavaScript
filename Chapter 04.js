// Chapter 04  함수와 프로토타입 체이닝

/* 4.1 함수 정의
    // 함수 생성 방법 : 1. 함수 선언문( function statement ) / 2. 함수 표현식 ( function expression ) / 3. Function() 생성자 함수
*/

/* 4.1.1 함수 리터럴
    // 함수도 객체 처럼 값으로 취급
    // function 함수명 (매개변수 리스트) {
        함수 몸체(실행 부분)
    }

    // 함수명이 없는 함수 : 익명 함수
*/

/* 4.1.2 함수 선언 문 방식으로 함수 생성하기
    //함수 선언문 방식으로 정의된 함수는 반드시 "함수명이 정의 되어 있어야 한다".
    
    // add() 함수 선언문
    function add(x,y) {
        return x + y
    };

    console.log(add(1,2));
*/

/* 4.1.3 함수 표현식 방식으로 함수 생성하기
    // 함수 표현식 : 함수 리터럴로 하나의 함수 생성 > 생성된 함수를 변수에 할당
    // 외부 코드는 함수 변수( 함수명 )를 통해서 실제 함수 호출이 가능

    // add() 함수 표현식
    var add = function (x,y) {
        return x+y
    };

    var plus = add;

    console.log(add(3,4));
    console.log(plus(5,6));    
*/


/* 4.1.3.1 기명 함수 표현식의 함수 호출
    // 함수 표현식에서 사용된 함수명이 외부 코드에서 접근 불가능 하다

    var add = function sum(x,y) {
        return x+y
    };

    console.log(add(3,4)); // 정상출력 
    console.log(sum(3,4)); // 에러발생
*/

/* 4.1.3.2 재귀적으로 구현한 함수
    // 함수 내부에서는 함수명을 사용할 수 있다. ( 재귀 호출 )

    var factorialVar = function factorial(n) {
        if(n<=1) {
            return 1;
        }
        return n * factorial(n-1);
    }

    console.log(factorialVar(3));
    console.log(factorial(3));
*/

/* 4.1.4 Function() 생성자 함수를 통한 함수 생성하기
    // 함수란 Function()이라는 기본 내장 생성자 함수로부터 생성된 객체

    new Function( 함수의 매개변수, 함수 호출시 실행될 코드를 포함한 "문자열" )

    var add = new Function('x','y', 'return x+y');
    console.log(add(3,4))

    // 잘 사용하지 않음
*/

/* 4.1.5 ★ 함수 호이스팅 ★
    // 함수 호이스팅 : "함수 선언문" 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다.
    // 호이스팅 발생 원인 : 변수 생성과 초기화의 작업이 분리되서 진행되기 때문에

    console.log(add(2,3)); // 함수 호이스팅으로 인해 밑에있는 add 함수가 처음부터 시작해서 값을 출력함

    function add(x,y) {
        return x+y
    };

    console.log(add(4,5));
*/

/* 4.1.5.1 함수 호이스팅 잘못된 예제
    // "함수 표현식" 형태로 정의된 함수는 함수 호이스팅이 일어 나지 않는다.

    console.log(add(2,3)); // 호이스팅이 발생하지 않아 에러발생

    var add = function (x,y) {
        return x+y
    };

    console.log(add(4,5));
*/

/* 4.2.1 자바스크립트에서는 함수도 객체다
    // 함수의 코드실행 , 일반 객체처럼 프로퍼티를 가질 수 있다.
    // 함수 생성시 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에 자동 저장 된다.

    //함수 선언 방식으로 add() 함수 정의
    function add(x,y) {
        return x+y
    };

    //add() 함수 객체에 result, status 프로퍼티 추가
    add.result = add(3,2);
    add.status = 'OK';

    console.log(add.result);
    console.log(add.status);
    console.log(add);
    console.dir(add); // 프로퍼티 확인 가능
*/

/* 4.2.2 자바스크립트에서 함수는 값으로 취급된다.
    // 함수도 일반 객체처럼 취급 될 수 있다.
    // 자바스크립트 함수의 동작 가능 요소
        // 1. 리터럴에 의한 생성
        // 2. 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
        // 3. 함수의 인자로 전달 가능
        // 4. 함수의 리턴값으로 리턴 가능
        // 5. 동적으로 프로퍼티를 생성 및 할당 가능

    // 자바스크립트 함수는 일급 객체 이다. ( 위에 나열된 것이 모두 가능 해야함)
*/

/* 4.2.2.1 변수나 프로퍼티의 값으로 할당

    // 변수에 함수 할당
    var foo = 100;
    var bar = function() { return 100; }; // 함수의 참조값을 저장하고 있으며 실제 함수 호출 가능
    console.log(bar()); 

    // 프로퍼티에 함수 할당
    var obj = {};
    obj.baz = function() { return 200; }; // 객체의 프로퍼티나 배열의 원소에도 할당 가능
    console.log(obj.baz()) 
*/

/* 4.2.2.2 함수 인자로 전달

    // 함수 표현식으로 foo() 함수 생성
    var foo = function(func) {
        func(); // 인자로 받은 func() 함수 호출
    };

    // foo() 함수 실행
    foo(function() {
        console.log('Function can be used as the argument.');
    });
*/

/* 4.2.2.3 리턴값으로 활용
    // 익명함수를 리턴하는 역할
    // 가능한 이유 : 함수 자체가 값으로 취급되기 때문

    var foo = function() {
        return function() {
            console.log('this function is the return value.');
        };
    };

    var bar = foo()
    bar();
*/

/* 4.2.3 함수 객체의 기본 프로퍼티
    // 함수 객체만의 표준 프로퍼티 정의 되어 있다.
    // 모든 함수는 lenght와 prototype 프로퍼티를 가져야 한다.

    function add(x,y) {
        return x+y;
    };

    console.dir(add); // arguments , caller , lenght , name ...

    // name 프로퍼티는 함수의 이름, 익명 함수라면 빈 문자열 출력
    // caller 프로퍼티는 자신을 호출한 함수, 호출하지 않았기 때문에 null
    // arguments 프로퍼티는 함수를 호출할때 인자값, 호출하지 않았기 때문에 null
    // __proto__ 프로퍼티는 [[Prototype]] 과 동일 , 자신의 부모 역할 프로토 타입 객체를 가리킴
    // 자신의 부모 역할 프로토타입 객체 = Function.prototype 객체 = 함수 객체( 정의 내림 ) ( 모든 함수의 부모 객체 )
    // Function Prototyep 객체 = Empty() 함수 ( 프로퍼티 존재 )
*/

/* 4.2.3.1 length 프로퍼티
    // length 프로퍼티는 모든 함수가 가져야하는 표준 프로퍼티
    // 함수가 정삭적으로 실행될 때 기대되는 인자의 개수

    // 받는 인자의 개수에 따라 달라짐
    function func0() { }
    function func1(x) { return x; }
    function func2(x,y) { return x+y; }
    function func3(x,y,z) { return x+y+z; }

    // 함수 작성시 정의한 인자 개수 나타냄
    console.log('func0.lenght - ' + func0.length); 
    console.log('func1.lenght - ' + func1.length);
    console.log('func2.lenght - ' + func2.length);
    console.log('func3.lenght - ' + func3.length);
*/

/* 4.2.3.2 prototype 프로퍼티
    // 모든 함수는 prototype 프로퍼티를 가지고 있다.
    // prototpye 프로퍼티는 [[Prototype]](내부 프로퍼티) 와 다르다
    // [[Prototype]] 는 객체 입장에서 자신의 부모역할 프로토타입 객체를 가리킴
    // prototype 프로퍼티는 이 함수가 생성자로 사용될 때 함수를 생성된 객체의 부모 역할 하는 프로토타입 객체를 가리킴 , 함수 생성시 만들어짐 ( constructor 한개만 가지고 있음)

    // 함수 정의
    function myFunction() {
        return true;
    }

    console.dir(myFunction.prototype);
    console.dir(myFunction.prototype.constructor);
*/

/* 4.3.1 콜백 함수
    // 익명함수의 대표적인 용도
    // 함수를 등록만 하고 이벤트 발생하거나 특정 시점 도달시 시스템에서 호출되는 함수
    // 또한 특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수 또한 콜백함수가 될수 있다.

    // 페이지 로드시 호출될 콜백 함수
    <script>
    window.onload = function() {
        alert('This is the callback function.');
    };
    </script>
*/

/* 4.3.2 즉시 실행 함수
    // 즉시 실행 함수 : 함수를 정의함과 동시에 바로 실행
     // 라이브러리 코드가 처음 로드되어 초기화 할때 많이 사용한다

    // 즉시 실행 함수 생성 방법 
        // 1. 함수 리터럴을 괄호() 로 둘러싼다.
        // 2. ()괄호 쌍을 추가한다. ( 괄호 안에 값을 추가해 즉시 실행 함수의 인자로 넘길 수 있다. )
        // 주의사항 : 같은 함수를 재 호출 불가능
        // 최초 한번의 실행만을 필요로 하는 초기화 코드 부분에 사용 가능

    // 즉시 실행 함수 예제
    (function (name) {
        console.log('This is the immediate function ㅡ> ' + name);
    })('foo');

    // jQuery 사용된 즉시 함수 예제
    (function (window, undefined) {
        ...
    })( window );
    
    // jQuery 에서 즉시 실행 함수 사용 이유 : 변수 유효 범위 특성 에서 함수 유효 범위를 지원하여
    // 라이브러리 코드를 즉시 실행 함수 내부에 정의하게 둘 때 이점
        //라이브러리 내의 변수들은 함수 외부에 접근 불가능
        // 라이브러리 코드 추가해도 변수 이름 충돌 같은 문제 방지   
*/

/* 4.3.3 내부 함수
    // 내부 함수 사용처 : 클로저 생성, 부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수를 구현하는 용도
    // 내부 함수는 자신을 둘러싼 부모 함수의 변수에 접근 가능 하다.
    // 접근 가능 이유는  스코프 체이닝( 5장 )
    // 내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다.

    // parent() 함수 정의
    function parent() {
        var a = 100;
        var b = 200;

        // child() 함수 정의
        function child() {
            var b = 300;
        
        console.log(a); // 내부 함수는 부모 함수로 접근 할 수 있다.
        console.log(b); // 내부 함수에서 다시 선언 됬기 때문에 내부 함수가 출력 된다.
        }

        child();
    }

    parent();
    child(); // 실행되지 않은 이유 : 함수 스코핑 때문 ( 함수 내부에 선언된 변수는 함수 외부에서 접근 불가능 )
*/

/* 4.3.3.1 내부 함수 예외 예제

    function parent() {
        var a = 100;

        // child() 내부 함수
        var child = function () {
            console.log(a);
        }
        // child 함수 반환
            return child;
    }

    var inner = parent(); // 부모 함수 호출시 리턴으로 내부 함수를 받았기 때문에 외부에서 접근이 가능했다.
    inner(); // 호출하는 내부 함수에는 a의 변수가 정의 되어 있지 않아 스코프 체이닝으로 부모 함수 에 a 변수가 정의되어 있는지 확인하고, a가 정의되어있으면 그 값이 출력된다.

    // inner() 함수 : 클로저 ( 5장 )
*/

/* 4.3.4 함수를 리턴하는 함수
    // 함수를 호출함과 동시에 다른 함수로 변경 가능 , 자기 자신을 재정의 하는 함수 구현 가능 ( 유연성 )

    var self = function () {
        console.log('a');
        return function () {
            console.log('b');
        }
    }

    self = self(); // 함수 호출시 a 출력 
    self(); // 위에서 함수가 호출됬고 return 값으로 새로운 함수가 변경되어 b 출력
*/

/* 4.4.1 arguments 객체
    // 함수 호출시 인수들과 함께 arguments 객체가 함수 내부로 전달
    // arguments 객체 :  함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 객체
    // 실제 배열이 아닌 유사 배열 객체 이다.
    function func(arg1, arg2) {
        console.log(arg1,arg2);
    }

    func(); // 함수 인자보다 적게 함수 호출하면 undefined 값 할당
    func(1);
    func(1,2);
    func(1,2,3); // 함수 인자보다 많게 함수 호출하면 값 무시
*/

/* 4.4.1.1 arguments 유사 객체
    // arguments 객체 구성 요소
        // 1. 함수를 호출할 때 넘겨진 인자( 배열 형태 ex. 0 : 1 ) 
        // 2. length 프로퍼티 : 호출할 때 넘겨진 인자의 개수
        // 3. callee 프로퍼티 : 현재 실행 중인 함수의 참조값
    function add(a,b) {
        //arguments 객체 출력
        console.dir(arguments);
        return a+b;
    }

    console.log(add(1));
    console.log(add(1,2));
    console.log(add(1,2,3));
*/

/* 4.4.1.2 arguments 매개변수 개수 정해지지 않은 함수
    // 매개변수가 정해지지 않은 함수 구현 , 전달된 인자의 개수에 따라 서로 다른 처리 해줘야 하는 함수 개발 에 유용

    function sum() {
        var result = 0;

        for(var i=0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    }

    console.log(sum(1,2,3));
    console.log(sum(1,2,3,4,5,6,7,8,9));
    console.dir(sum);
*/

/* 4.4.2 호출 패턴과 this 바인딩
    // arguments 객체 와 this 인자가 함수 내부로 암묵적 전달
    // this바인딩 : 다른 객체 참조
    // this 는 함수가 호출되는 방식( 호출 패턴 ) 에 따라 다른 객체를 참조( this 바인딩 )
*/

/* 4.4.2.1 객체의 메서드 호출할 때 this 바인딩
    // this는 자신을 호출한 객체에 바인딩 된다.

    // myObject 객체 생성
    var myObject = {
        name : 'foo',
        sayName : function () {
            console.log(this.name);
        }
    };

    // otherObject 객체 생성
    var otherObject = {
        name : 'bar'
    };

    // otherObject.sayName() 메서드
    otherObject.sayName = myObject.sayName;

    // sayName() 메서드 호출
    myObject.sayName();
    otherObject.sayName();
*/

/* 4.4.2.2 함수를 호출할 때 this 바인딩
    // 함수 호출 시 해당 함수 내부 코드에서 사용된 this 는 전역 객체에 바인딩 된다.
    // 브라우저에서 js 실행시 전역 객체는 window 객체
    // 전역 객체 
        // 브라우저 > window  객체
        // js통해 서버 프로그래밍 해주는 js 런타임 환경 ( ex. node.js )> global 객체
    // js의 모든 전역 변수는 실제로 전역 객체의 프로퍼티들

    // 전역 객체와 전역 변수의 관계를 보여주는 예제 코드
        var foo = "I`m foo"; // 전역 변수 선언

        console.log(foo);
        console.log(window.foo);

    // 함수를 호출할 때 this 바인딩을 보여주는 예제 코드 
        var test = 'This is test';
        console.log(window.test);

        // sayFoo() 함수
        var sayFoo = function () {
            console.log(this.test); // sayFoo() 함수 호출 시 this 라는 전역 객체에 바인딩 된다.
        }

        sayFoo();

    // 내부 함수의 this 바인딩 동작을 보여주는 예제 코드    
        // 전역 변수 value 정의
        var value = 100;

        // myObject 객체 생성
        var myObject = {
            value : 1,
            func1 : function () {
                this.value += 1;
                console.log('func1 called. this.value : ' + this.value);

                // func2() 내부 함수
                func2 = function () {
                    this.value += 1;
                    console.log('func2 called. this.value : ' + this.value);

                    // func3() 내부 함수
                    func3 = function () {
                        this.value += 1;
                        console.log('func3 called. this.value : ' + this.value);
                    }
                    func3(); // window에 바인딩 되어 102 가 출력
                }
                func2(); // window에 바인딩 되어 101 이 출력
            }
        };
        myObject.func1(); // 메서드 호출시 메서드 코드 내에서 사용된 this는 자신을 호출한 객체를 가리킴

        // 부모 함수의 this를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법 사용하면 myObject 참조 가능
        // 내부 함수의 this 바인딩 문제를 해결한 예제 코드
            // 내부 함수 this 바인딩
            var value = 100;

            var myObject = {
                value : 1,
                func1 : function () {
                    var that = this;
                    console.log('func1 called. this.value : ' + this.value);

                    // func2() 내부 함수
                    func2 = function () {
                        that.value += 1;
                        console.log('func2 called. this.value : ' + that.value);

                        // func3() 내부 함수
                        func3 = function () {
                            that.value += 1;
                            console.log('func3 called. this.value : ' + that.value);
                        }
                        func3(); // myObject를 바인딩
                    }
                    func2(); // myObject를 바인딩
                }
            };
            myObject.func1(); // 메서드 호출시 메서드 코드 내에서 사용된 this는 자신을 호출한 객체를 가리킴
*/

/* 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
    // 생성자 함수 :객체를 생성하는 역할
    // 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
    // 함수명의 첫 문자를 댐누자로 쓰기를 권함 ( 생성자 함수 ex. new List )

    // 첫번째 . 생성자 함수가 동작하는 방식
        // 1. 빈 객체 생성 및 this 바인딩
            // ★ 생성자 함수가 빈 객체를 생성하고 빈 객체는 자신을 생성자 함수의 prototype 프로퍼티를 가리키는 객체를 자신의 프로토 타입 객체로 설정 ★
        // 2. this를 통한 프로퍼티 생성
        // 3. 생성된 객체 리턴
            // 리턴문이 없을 경우 : this 로 바인딩 된 새로 생성한 객체가 리턴
            // 다른 객체를 반환하는 경우 : 생성자 함수가 호출 해도 this가 아닌 해당 객체가 리턴

    // Person() 생성자 함수
    var Person = function (name) {
        // 함수 코드 실행 전
        this.name = name;
        // 함수 리턴
    };

    // foo 객체 생성 
    var foo = new Person('foo'); // new 로 호출하면 Person은 생성자 함수로 동작
    console.log(foo.name);

    // 두번째 . 객체 리터럴 방식과 생성자 함수를 통한 객체 생성 방식의 차이

    // 객체 리터럴 방식으로 객체 생성
    var foo = {
        name : 'foo',
        age : 30,
        gender : 'male'
    };
    console.dir(foo);

    //생성자 함수
    function Person(name, age, gender, position) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };

    // Person 생성자 함수를 이용해 bar 객체 , baz 객체 생성
    var bar = new Person('bar',33,'femal');
    console.dir(bar);

    var baz = new Person('baz',25,'male');
    console.dir(bar);

    // 차이는 프로토타입 객체(__proto__ 프로퍼티)에 있다.
    // 차이나는 이유는 자바스크립트 생성 규칙 때문에
    // 자바스크립트 객체는 자신을 생성한 생성자의 함수 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다
    // 객체 리터럴 방식 : 프로토타입 객체가 Object  ( 원본은 Ojbect.prototype)
    // 생성자 함수 방식 : 프로토타입 객체가 Person ( 원본은 Person.prototype)

    // 세번째 . new를 붙이지 않고 생성자 함수 호출 시의 오류
    // 일반 함수 호출시 this가 window 전역 객체에 바인딩
    // 생성자 함수 호출시 this가 새로 생성되는 빈 객체에 바인딩

    //생성자 함수
    function Person(name, age, gender, position) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };
    var qux = Person('qux', 20, 'man');
    console.log(qux);

    console.log(window.name);
    console.log(window.age);
    console.log(window.gender);

    // 생성자 함수의 구분은 일반적으로 첫글자를 대문자로 표기하는 네이밍 규칙, new 사용

    // 강제로 인스턴스 생성하기
    function A(arg) {
        if (!(this instanceof arguments.callee)) // 매우 중요 표현식 / 함수가 작성자의 의도와 다르게 호출되어도 문제 발생 X, new로 반한된 인스턴스를 사용할 것을 확신하고 자신의 코드 작성 가능
        return new A(arg);
        this.value = arg ? arg : 0;
    }

    var a = new A(100);
    var b = A(10);

    console.log(a.value);
    console.dir(a);
    console.log(b.value);
    console.dir(b);
    console.log(globalThis.value);
*/

/* 4.4.2.4 call과 apply 메서드를 이용한 명시적인 this 바인딩
    //this를 특정 객체에 명시적으로 바인딩 하는 방법
    // 4.2.3 함수 객체의 기본 프로퍼티인 apply() 와 call() 메서드
    // 두 메서드는 모든 함수의 부모 객체인 Function.prototype 객체의 메서드이다
    // 모든 함수는 다음과 같은 형태로 apply() 메서드를 호출하는 것이 가능하다

    // apply() 메서드 호출 방법
    function.apply(thisArg, argArray)

    // thisArg는 apply() 메서드를 호출한 함수 내부에서 사용한 this에 바인딩할 객체를 가리킴
    // argArray는 함수 호출할때 넘길 인자들의 배열을 가리킴

    // apply() 메서드 호출 주체 = 함수
    // apply() 메서드도 this를 특정 객체에 바인딩 할뿐
    // 본질적인 기능은 "함수 호출"이다.

    // 정리 : argArray 배열을 자신을 호출한 함수의 인자로 사용하되,
    // 이 함수 내부에서 사용된 this는 thisArg 객체로 바인딩해서 함수를 호출하는 기능
    
    // apply() 메서드를 이용한 명시적인 this 바인딩
    //생성자 함수
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // foo 빈 객체 생성
    var foo = {};

    // apply() 메서드 호출
    Person.apply(foo, ['foo',30,'male']); // apply()메서드는 배열을 넘김
    console.dir(foo);
    console.log(foo);

    // call() 메서드 호출
    Person.call(foo, 'foo',30,'male'); // call() 메서드는 배열의 인자를 각각 한개씩 넘김
    console.dir(foo);
    console.log(foo);

    // apply()나 call() 메서드의 장점 : this를 원하는 값으로 명시적으로 매핑해서 특정 함수나 메서드를 호출할 수 있다.

    // apply()메서드를 활용한 arguments 객체의 배열 표준 메서드 slice() 활용 코드    
    function myFunction() {
        console.dir(arguments); // __proto__ = Object

        //arguments.shift(); // arguments 배열은 실제 배열이 아닌 유사 배열 객체로 pop. shift 등 표준 배열 메서드를 사용 할 수 없다.

    var args = Array.prototype.slice.apply(arguments); // 배열 메서드가 있는것 처럼 처리하는 코드
    console.dir(args); // __proto__ = Array[0]
    }

    myFunction(1,2,3);

    // slice() 활용법 코드
    var arrA = [1,2,3];
    var arrB = arrA.slice(0); // 아무 인자 안넘기면 전체 배열 복사
    var arrC = arrA.slice(); // 아무 인자 안넘기면 전체 배열 복사
    var arrD = arrA.slice(1); // END 인자 넘기지 않으면 기본값은 배열의 lenght값 즉 slcie(1,3);
    var arrF = arrA.slice(1,3); // arrD와 동일하다
    var arrE = arrA.slice(1,2); 

    console.log(arrA);
    console.log(arrB);
    console.log(arrC);
    console.log(arrD);
    console.log(arrE);
    console.log(arrF);
*/

/* 4.4.3.1 함수 리턴 규칙 1) 일반 함수나 메서드는 리턴값을 지정하지 않을경우, undefined 값이 리턴된다.
    // 자바스크립트 함수는 항상 리턴값을 반환한다.

    // return 문 없는 일반 함수의 리턴값 확인

    // noReturnFunc() 함수
    var noReturnFunc = function() {
        console.log('This function has no return statement.');
    };

    var result = noReturnFunc();
    console.log(result);

*/

/* 4.4.3.2 함수 리턴 규칙 2) 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.
    // 생성자 함수가에서 명시적으로 객체를 리턴했을 경우

    //Person() 생성자 함수
    function Person(name, age, gender) {
        this.na으로me = name;
        this.age = age;
        this.gender = gender;

        // 명시적 다른 객체 반환
        return {name:'bar', age:20, gender:'woman'};
    }
    var foo = new Person('foo',30,'male');
    console.log(foo);
    console.dir(foo);

    // 생성자 함수의 리턴값으로 넘긴값이 객체가 아닌 불린, 숫자, 문자열의 경우는 이러한 리턴값을 무시하고 this로 바인딩된 객체가 리턴된다.
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;

        return 100; // 불린, 숫자, 문자열의 경우는 이러한 리턴값을 무시한다.
    }

    var foo = new Person('foo',30,'male'); // 위에 리턴값은 무시하고 해당 객체가 바인딩 된다.
    console.dir(foo);
    console.log(foo);
*/

/* 4.5.1 프로토타입 체이닝
    // 프로토타입 체이닝 두가지 의미 :  js에서 특정 객체의 프로퍼티나 메서드에 접근시 , 그 p 나 m 이 없다면 [[Prototype]] 링크를 따라 프로토타입 객체의 p를 차례대로 검색하는 것

    // 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조링크 형태의 숨겨진 프로퍼티 : 암묵적 프로퍼티 링크(implicit prototype link)
    // [[Prototype]] 프로퍼티에 저장된다

    // prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모 객체로 설정하는 [[Prototype]]링크로 연결한다.

    // prototype 프로퍼티와 [[Prototype]] 링크 구분하는 방법
    // 차이점 : js의 객체 생성 규칙을 알아야 한다.
    // prototype 프로퍼티 : 함수의 입장에서 자신과 링크된 프로토타입 객체를 가리킴
    // [[Prototype]] 링크 : 객체의 입장에서 자신의 부모 객체인 프로토타입 객체를 내부의 숨겨진 링크로 가리킴
    
    function Person(name) {
        this.name = name;
    }

    var foo = new Person('foo');

    console.dir(Person);
    console.dir(foo);

    // 생성된 객체의 실제 부모 역할은 생성자 자신이 아닌 생성자의 prototype 프로퍼티가 가리키는 프로토타입 객체이다.
*/

/* 4.5.2 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝
    var myObject = {
        name : 'foo',
        sayName : function() {
            console.log('My name is ' + this.name);
        }
    };

    myObject.sayName();
    console.log(myObject.hasOwnProperty('name')); // hasOwnProperty() 메서드는 이 메서드를 호출한 객체에 인자로 넘긴 문자열 이름의 프로퍼티나 메서드가 있는지 체크하는 js 표준 api 함수다.
    console.log(myObject.hasOwnProperty('nickName'));
    myObject.sayNickName();
*/

/* 4.5.3 생성자 함수로 생성된 객체의 프로토타입 체이닝
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    var foo = new Person('foo',30,'male'); // 이 객체의 프로토타입 객체는 Person.prototype 이다.
    console.log(foo.hasOwnProperty('name'));

    console.dir(Person.prototype);
*/

/* 4.5.4 프로토타입 체이닝의 종점
    // js에서 Object.prototype 객체는 프로토타입 체이닝의 종점이다.
    // ★객체 리터럴, 생성자 함수 방식에 상관없이 js의 모든 객체는 프로토타입 체이닝으로 Object.prototype 객체가 가진 프로퍼티와 메서드에 접근하고, 서로 공유 가능하다. ★
    
*/

/* 4.5.5 기본 데이터 타입 확장
    // Object.prototype에 정의한 메서드는 모든 객체의 표준 메서드라고 볼 수 있다.
        // Number.prototype = 숫자 표준 메서드 / String.prototype = 문자열 표준 메서드 / Array.prototype = 배열 표준 메서드 로 정의
        // 위 객체들도 Object.prototype을 자신의 프로토타입으로 가지고 있어서 프로토타입 체이닝으로 연결된다.
        // 프로토타입 객체에도 사용자가 직접 정의한 메서드 추가 허용한다.

    // String 기본 타입에 메서드 추가
    String.prototype.testMethod = function() {
        console.log('This is the String.prototype.testMethod()');
    };

    var str = "this is test";
    str.testMethod();

    console.dir(String.prototype);
*/

/* 4.5.6 프로토타입도 js 객체다.
    // 함수 생성시, 자신의 p 프로퍼티에 연결되는 p 객체는 default 로 constructor 프로퍼티만 가진 객체다
    // 프로토타입 객체 = js 객체
    // 동적으로 프로퍼티 추가 / 삭제 가능
    // 하게되면 실시간으로 프로토타입 체이닝에 실시간 반영
    
    function Person(name) {
        this.name = name;
    }

    var foo = new Person('foo');

    Person.prototype.sayHello = function () {
        console.log('Hello');
    }

    foo.sayHello();
*/

/* 4.5.7 프로토타입 메서드와 this 바인딩
    // this의 바인딩은 메서드 호출 패턴에서의 this 는 그 메서드를 호출한 객체에 바인딩 된다.

    function Person(name) {
        this.name = name;
    }

    // getName() 프로토타입 메서드
    Person.prototype.getName = function () {
        return this.name;
    }

    var foo = new Person('foo');

    console.log(foo.getName());

    // Person.prototype 객체에 name 프로퍼티 동적 추가
    Person.prototype.name = 'person';

    console.log(Person.prototype.getName());
*/

/* 4.5.8 디폴트 프로토타입은 다른 객체로 변경이 가능하다
    // 변경할때 생성자 함수의 p 객체가 변경되면 , 변경된 시점 이후에 생성된 객체는 변경된 p 객체로 [[Prototype]] 링크를 연결한다는 점

    function Person(name) {
        this.name = name;
    }
    console.log(Person.prototype.constructor);

    var foo = new Person('foo');
    console.log(foo.country);

    Person.prototype = {
        country : 'Korea',
    };
    console.log(Person.prototype.constructor);

    var bar = new Person('bar');
    console.log(foo.country);
    console.log(bar.country);
    console.log(foo.constructor);
    console.log(bar.constructor);
*/

/* 4.5.9 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다
    // 객체의 특정 프로퍼티를 읽으려고 할 때, 프로퍼티가 해당 객체에 없는 경우 프로토타입 체이닝이 동작한다
    // 반대로 객체에 존재하면 프로토타입 체이닝은 동작하지 않는다
    // 객체에 없는 프로퍼티에 값을 쓰려고 할때 동적으로 객체에 프로퍼티를 추가하기 때문이다.

    function Person(name) {
        this.name = name;
    }

    Person.prototype.country = 'Korea';

    var foo = new Person('foo');
    var bar = new Person('bar');
    console.log(foo.country);
    console.log(bar.country);
    foo.country = 'USA'; // 프로토타입 체이닝이 동작 한게 아님 > 프로퍼티값이 동적으로 생성된 것

    console.log(foo.country);
    console.log(bar.country);
*/

