import cloud from '../Images/cloud-1.png'
import projectimg from '../Images/game-dev-img.jpg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const gallery = ({ }) => {
    return (
        <>
            <section className='py-5'>
                <div className='gallery'>
                    <div className='gallery__column'>
                        <a href="https://unsplash.com/@jeka_fe" target="_blank" className='gallery__link'>
                            <figure className="gallery__thumb">
                                <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" class="gallery__image"/>
                                    <figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default gallery


