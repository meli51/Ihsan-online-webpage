import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.png'
import play_icon from '../../assets/play_icon..jpg'

const About = ( {setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img} alt=""  className='about_img'/>
        <img src={play_icon} alt=""  className='play_icon' onClick={()=> {setPlayState(true) }}/></div>
        <div className="about-right"><h3>About School</h3>
        <h2>Submitting islamic knowlage for all</h2>
        <p>  ኢህሳን  ኢስላሚክ ኦንላየን ኢድኬሽን በ2016 የተቋቋመ ሲሆን በዋነኛነት አላማ አድርጎ የተነሳው ቦታና ርቀት 
ሳይገድበው የዘመኑን ቴክኖሎጂ በመጠቀም የዲነል ኢስላምን እዉቀት ለኡማው ማድረስ ነዉ፡፡ ኢህሳን ኢስላሚክ ኦንላየን ኤድኬሽን  በጥያቄና መልስ መልኩ ኢልምን ማስጨበጥ 
እንደ ዋና ማስተማሪያ መንገድ አድርጎ ይጠቀማል። በሸሪአችን በጥያቄና መልስ መልኩ ማስተማር ያለዉ ሚና ከፍተኛ ነው። ለዚህም ብዙ ሀዲሶችን ስንመለከት እንደምሳሌ ሀዲሱ ጅብሪልን መጥቀስ ይቻላል። በተለይም ለልጆች  በቀላሉና ሳይጨናነቁ ኢልምን ይማሩ ዘንድ ዘመኑ የደረሰበትን mernstack quiz app በተስያዩ ኢልም ዙሪያ በማዘጋጀት ለተማሪዎች በመስጠት ማስተማር ነዉ። ለስራችን መቃናት የናንተ ድጋፍ ወሳኝ ነዉና ታግዙን ዘንዳ በአላህ ስም እንጠይቃለን። <br />
</p> <br />
<h3>ዙር 1</h3>
 <p>
	በመጀሪያ ዙር የምንጀምረው በሲራ ረውደቱል አንዋር ሲሆን ፈተናውም በ3 ቋንቋዎቸ የሚዘጋጅ ይሆናል። ተማሪዋችም በፈለጉት ቋንቋዎች መርጠው መውሰድ ይችላሉ።
 ቋንቋዎቹም፦ Amharic ,English, Arabic ናቸዉ።
        </p>
            </div></div>
  )
}

export default About