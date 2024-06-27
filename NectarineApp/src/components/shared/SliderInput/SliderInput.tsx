import { useState } from 'react';
import { NumberInput, Slider } from '@mantine/core';
import classes from './SliderInput.module.css';

interface SliderInputProps {
    label: string,
    placeholder: string,
    step: number,
    min: number,
    max: number
    onChange: any
}

export function SliderInput({label, placeholder, step, min, max, onChange} : SliderInputProps) {

    //states
    const [value, setValue] = useState<number | string>(100000);

    const handleChange = (updatedValue : number) => {
        setValue(updatedValue);
        onChange(updatedValue)
    }

    return (
        <div className={classes.wrapper}>
        <NumberInput
            value={value}
            onChange={setValue}
            label={label}
            placeholder={placeholder}
            step={step}
            min={min}
            max={max}
            hideControls
            classNames={{ input: classes.input, label: classes.label }}
        />
        <Slider
            max={max}
            step={step}
            min={min}
            label={null}
            value={typeof value === 'string' ? 0 : value}
            onChange={handleChange}
            size={2}
            className={classes.slider}
            classNames={classes}
        />
        </div>
    );
}