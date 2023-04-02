import { useCallback, useEffect, useState } from 'react';
import { congratulationText } from '../logic/Congratulation';

const BirthdayText = props => {
    let [text, setText] = useState('');
    let [rowIndex, setRowIndex] = useState(0);
    let [charIndex, setCharIndex] = useState(0);

    const typeText = useCallback(() => {
        if (rowIndex >= congratulationText.length) {
            console.log('Here');
            return;
        }

        const row = congratulationText[rowIndex];
        if (charIndex == 0) {
            setText(text += '<p>');
            if (row.isCommand) {
                setText(text += '> ');
            }
        }
        
        if (!row.typed) {
            setText(text += row.text);
            setCharIndex(0);
            setRowIndex(rowIndex + 1);
            setText(text += '</p>');
        } else {
            setText(text += row.text[charIndex]);

            if (charIndex < row.text.length - 1) {
                setCharIndex(charIndex + 1);
            } else {
                setCharIndex(0);
                setRowIndex(rowIndex + 1);
                setText(text += '</p>');                
            }
        }
    });

    useEffect(() => {
        const intervalId = setTimeout(typeText, 150);
        return () => clearInterval(intervalId);
    }, [typeText]);

    return <div {...props} dangerouslySetInnerHTML={{ __html: text }}></div>;
}

export default BirthdayText;