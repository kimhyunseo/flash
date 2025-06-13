

const FlashCard = ({cardData, onSelected, onLearn}) => {
    return (
        <div className="flash-card">
            <h2>{cardData.name}</h2>
        <ul className = "flash-card">
            {
                cardData.flashcards.map((obj)=>{
                    return <li key={obj.id}>{obj.question}</li>
                })
            }
        </ul>
        <button onClick={()=>{onLearn(true)}}>학습 시작</button>
        <button onClick={()=>{onSelected(null)}}>뒤로 가기</button>
        </div>
    );
};

export default FlashCard;