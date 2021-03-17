import React, {useState, useEffect} from 'react';

function Slides({slides}) {

    //const [currentSlide, setCurrentSlide] = useState(slides[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    const onRestartButtonClicked = () => {
        setCurrentIndex(0)
    }
    const onPrevButtonClicked = () => {
        setCurrentIndex(currentIndex - 1)
    }
    const onNextButtonClicked = () => {
        setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        console.log(currentIndex)
        if (currentIndex == 0) {
            document.getElementById('restartBtn').disabled = true
            document.getElementById('prevBtn').disabled = true
            document.getElementById('nextBtn').disabled = false
        }
        else if (currentIndex == slides.length - 1) {
            document.getElementById('nextBtn').disabled = true
        }
        else {
            document.getElementById('restartBtn').disabled = false
            document.getElementById('prevBtn').disabled = false
        }
    }, [currentIndex])
    return (
        <div>
            <div id="navigation" className="text-center">
                <button id="restartBtn" onClick={onRestartButtonClicked} data-testid="button-restart" className="small outlined">Restart</button>
                <button id="prevBtn" onClick={onPrevButtonClicked} data-testid="button-prev" className="small">Prev</button>
                <button id="nextBtn" onClick={onNextButtonClicked} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentIndex].title}</h1>
                <p data-testid="text">{slides[currentIndex].text}</p>
            </div>
        </div>
    );

}

export default Slides;
