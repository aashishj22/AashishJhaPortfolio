import React from 'react'
import ImageBgAnimation from '../SectionAnimation/main'
import { ImageContainer, ImageBg, ImageLeftContainer, Img, ImageRightContainer, ImageInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './MySectionStyle';
import ImageImg from '../../assests/AashishImg.jpeg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/myData';


const MySection = () => {
    return (
        <div id="about">
            <ImageContainer>
                <ImageBg>
                    <ImageBgAnimation />
                </ImageBg>
                <ImageInnerContainer >
                    <ImageLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </ImageLeftContainer>

                    <ImageRightContainer id="Right">

                        <Img src={ImageImg} alt="Image-image" />
                    </ImageRightContainer>
                </ImageInnerContainer>

            </ImageContainer>
        </div>
    )
}

export default MySection;