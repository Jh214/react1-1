import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

// 물이 끓는지 여부를 판단하는 컴포넌트
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// 화씨를 섭씨로 변환하는 함수
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨를 화씨로 변환하는 함수
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 주어진 온도를 변환하는 함수
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    // 소수점 세 자리로 반올림
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// 온도 변환기 컴포넌트
function Calculator(props) {
    // 온도 상태 관리
    const [temperature, setTemperature] = useState('');
    // 온도 단위 상태 관리
    const [scale, setScale] = useState('c');

    // 섭씨 온도 변경 핸들러
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    // 화씨 온도 변경 핸들러
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    // 현재 스케일에 따라 온도 변환
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    // 렌더링
    return (
        <div>
            {/* 섭씨 입력 컴포넌트 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 화씨 입력 컴포넌트 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 물이 끓는지 여부를 보여주는 컴포넌트 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// Calculator 컴포넌트를 기본으로 내보냄
export default Calculator;