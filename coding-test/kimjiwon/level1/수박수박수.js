function solution(n) {
    return ("수박").repeat(n / 2) + ((n % 2) ? "수" : "");     // repeat에서 n/2를 함으로써 불필요한 반복 횟수를 줄인 것 아주 칭찬.
}

((n % 2) ? "수" : "") // 새로운 접근 Good!
["", "수"][n % 2]     // 이러한 접근도 가능함 -> 사실 3항 연산자는 개발에서 지향하는 방식은 아님. 코드를 해석하기 어려워진다는 이유 때문.
