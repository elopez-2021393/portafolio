import { useEffect, useState } from 'react';

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_AFTER_DELETING = 300;

function Typewriter({ words, className = '' }) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];
        let timeout;

        if (!isDeleting && text.length < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, TYPING_SPEED);
        } else if (!isDeleting && text.length === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
        } else if (isDeleting && text.length > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1));
            }, DELETING_SPEED);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, PAUSE_AFTER_DELETING);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <span className={className}>
            {text}
            <span className="animate-blink">▌</span>
        </span>
    );
}

export default Typewriter;