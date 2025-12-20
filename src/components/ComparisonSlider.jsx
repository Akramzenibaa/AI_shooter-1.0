import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import '../styles/landing.css';

export default function ComparisonSlider({ beforeImage, afterImage }) {
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMouseDown = () => setIsResizing(true);
    const handleTouchStart = () => setIsResizing(true);

    const handleMouseUp = () => setIsResizing(false);
    const handleTouchEnd = () => setIsResizing(false);

    const handleMove = (clientX) => {
        if (!isResizing || !containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = clientX - left;
        const newPos = Math.min(Math.max((x / width) * 100, 0), 100);

        setPosition(newPos);
    };

    const onMouseMove = (e) => handleMove(e.clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('touchmove', onTouchMove);
        };
    }, [isResizing]);

    return (
        <div
            ref={containerRef}
            className="comparison-container"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <img
                src={afterImage}
                alt="After"
                className="comparison-image after"
                draggable="false"
            />
            <img
                src={beforeImage}
                alt="Before"
                className="comparison-image before"
                draggable="false"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`
                }}
            />

            <div
                className="slider-handle"
                style={{ left: `${position}%` }}
            >
                <div className="slider-line" />
                <div className="slider-button">
                    <MoveHorizontal size={20} color="#000" />
                </div>
            </div>

            <div className="labels">
                <span className="label before-label" style={{ opacity: position > 10 ? 1 : 0 }}>Original</span>
                <span className="label after-label" style={{ opacity: position < 90 ? 1 : 0 }}>AI Enhanced</span>
            </div>
        </div>
    );
}
