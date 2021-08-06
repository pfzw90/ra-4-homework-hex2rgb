import React from 'react'
import './HexRgbConverter.css'

const DEFAULT_CONVERTER_STATE = {
    hex: '',
    rgb: '',
    background: '#cccccc'
}

export default function HexRgbConverter() {
    const [converterState, changeConverterState] = React.useState(DEFAULT_CONVERTER_STATE);

    const returnRGB = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb\(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null
    }

    const handleHexChange = (e) => {
        const hex = e.target.value;
        const calc = (hex.length ===7)
        const calculetedRgb = returnRGB(hex);
        changeConverterState(prev => ({
            hex,
            rgb: calc ? (calculetedRgb || 'Ошибка') : DEFAULT_CONVERTER_STATE.rgb,
            background: calc ? (calculetedRgb || prev.background) : prev.background 
        }));
    }

    return (
        <div className="HexRgbConverter" style={{background: converterState.background}}>
            <form className="HexRgbConverter-Form">
                <input 
                    className="HexRgbConverter-Form-HexInput" 
                    id="hex" 
                    name="hex" 
                    value={converterState.hex} 
                    onChange={handleHexChange} 
                    maxLength="7"/>
                <div className="HexRgbConverter-Form-RgbOutput">{converterState.rgb}</div>
            </form>
        </div>
    )




        
}