import Image from '../Image/Image'
import src from '../../assets/imgs/cardImage.jpeg'
import fallbackSrc from '../../assets/imgs/cardImage.webp'
import { useState } from 'react'

const Card = () => {

  const [toggleCard, setToggleCard] = useState<boolean>(false)

  const onSetToggleCard = () => {
    setToggleCard((prev) => !prev);
  }

  return (
    <div className={toggleCard ? "card open flex-center" : "card flex-center"} onClick={onSetToggleCard}>
      <div className="card__left">
        <div className="card__left--face">
          <Image
            src={src}
            fallbackSrc={fallbackSrc}
            alt='Christmas card image of family'
          />
          <p className="front-hooray">Merry <span className="red">Christmas</span></p>
        </div>
        <div className="card__left--back"></div>
      </div>
      <div className="card__right">
        <h1>Merry <span className="red">Christmas</span></h1>
        <p className="message"><em><strong>„Iată, fecioara va rămâne însărcinată, va naşte un Fiu şi Îi vor pune numele Emanuel“,</strong></em> nume care, tradus, înseamnă <em><strong>„Dumnezeu este cu noi“</strong></em>.</p>
        <div className="card__right--footer">
          <small>Claudiu, Carmen, Eric, Ezra Gubernu</small>
          <small>Matei 01:23</small>
        </div>
      </div>
    </div >
  )
}

export default Card