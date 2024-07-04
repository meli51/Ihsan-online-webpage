import React, { useRef } from 'react'
import './Manners.css'
import next_icon from '../../assets/next_arrow.png'
import back_icon from '../../assets/back_arrow.png'

const Manners = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = ()=>{
    if(tx > -50){
      tx-= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward =()=> {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }
  return (
    <div className='testimoniels'>
      <img src={back_icon} className='back-btn' onClick={slideForward}  alt="" />
      <img src={next_icon} className='next-btn' onClick={slideBackward} alt="" />
  <div className="slider">
    <ul ref={slider}>
      <li>
        <div className="slide">
          
           <div className="user-info"><h3> የእስልምናን ታሪክ ማወቅ</h3></div>


          <div><p>

          ሲራህ የአላህ መልእክተኛ (ሶ.ዐ.ወ) በህይወት በነበሩበት ወቅት ያጋጠሟቸውን አስፈላጊ ሁነቶች ሁሉ ይገልፃል። ሲራህን በማጥናት ከልደት እስከ ሞት ድረስ ህይወታቸዉን በግልፅ መረዳት ይችላሉ።

ነቢይ ከመሆናቸዉ በፊት እንዴት እንደኖሩ፣ ወህይን ከተቀበሉ በኋላ መልእክቱን እንዴት እንደሚያስተላልፉ እና ከስኬቶቻቸዉ ጋር ያጋጠማቸውን መሰናክሎች ያሳየዎታል። ስለ ህይወታቸዉ ሲያነቡ, በዚያ ጊዜ ውስጥ ስለተከሰተው ነገር ማጠቃለያ ማግኘት ይችላሉ። በዚህ መንገድ ሲራህ የእስልምናን ታሪክ እንድትገነዘብ ይረዳል።
 </p></div>
          </div></li>
          <li>
        <div className="slide">
          
           <div className="user-info"><h3> ቁርኣንና ሱናን መረዳት
</h3></div>


          <div><p>ሲራህ በተከበረው ቁርኣን እና ሀዲስ ላይ ታሪካዊ ማብራሪያ ነው። እያንዳንዱ የቁርኣን አንቀፅ በአላህ መልእክተኛ (ሶ.ዐ.ወ) ላይ የወረደው ልዩ ሁኔታዎችን በሚመለከት ነው። ሐዲሥም እንዲሁ።

ሲራህ ለእነዚህ መገለጦች አውድ ያቀርባል። የተወሰኑ የቁርኣን አንቀጾች መቼ እና ለምን እንደወረደ ለመረዳት ይረዳዎታል። ስለዚህ የቁርኣን አንቀጾችን እና ሀዲሶችን ከነብዩ ﷺ ህይወት ጋር በቀላሉ ማዛመድ ትችላላችሁ።
</p></div>
          </div></li>
          <li>
        <div className="slide">
          
           <div className="user-info"><h3>ለአላህ መልእክተኛ ﷺ ያለንን ፍቅር ማሳደግ
</h3></div>


          <div><p>አላህ የሰው ልጆችን እንዲመሩ ነቢዩ ሙሐመድን (ሶ.ዐ.ወ) መረጠ። እሳቸዉን መውደድና መከተል የኢማናችን አካል ነው። 

ነብዩ (ሶ.ዐ.ወ) እንዲህ ብለዋል፡- “ከወላጆቻችሁ፣ ከልጆቻችሁ እና ከመላው አለም በላይ እስከምትወዱኝ ድረስ አንዳችሁም እውነተኛ እምነት (ኢማን) አያገኝም። [ሳሂህ ቡኻሪ]

የነብዩ (ሶ.ዐ.ወ) ባልደረቦች እሳቸውን ጠንቅቀው ስለሚያውቁ ከምንም ነገር በላይ ወደዷቸው። ስለዚህም እርሳቸዉን በሚገባ ተከትለዉ  እውነተኛ እምነትን አጣጥመዋል። ሲራህን ማጥናትህ የእርሳቸዉን ታላላቅ ምግባሮች እንድትማር ይረዳሃል ይህም ኢማንህን ይጨምራል ኢንሻ አላህ።
</p></div>
          </div></li>
          <li>
        <div className="slide">
          
           <div className="user-info"><h3>አብሮ መማር አምልኮ ነው</h3></div>


          <div><p>ሲራህን ማንበብ ለመዝናኛ ብቻ አይደለም። ስለ ነብዩ ሙሐመድ ﷺ ህይወት ለማወቅ በግል ስታነብ ወይም በሃላቃ ስትሰበሰብ ይህ እንደ አምልኮ ይሆናል። 

አቡ ሁረይራ (ረዐ) እና አቡ ሰኢድ አል-ኩድሪይ (ረዲየላሁ ዐንሁ) እንደዘገቡት የአላህ መልእክተኛ (ሶ.ዐ.ወ) እንዲህ ብለዋል፡- “የአላህ መልእክተኛ (ሶ.ዐ.ወ) እንዲህ ብለዋል፡- “የሰዎች ቡድን አላህን ለማስታወስ በተሰበሰቡ ጊዜ መላኢካዎች (በክንፎቻቸው) ይከብቧቸዋል። )እዝነት ሸፈነቻቸው፣ ሰኪናህ (ፀጥታ) በነሱ ላይ ወረደባቸው፣ አላህም ከእነዚያ (አንግሎች) በፊት በነሱ ላይ አውሳቸዋል። [ሳሂህ ሙስሊም]


 </p></div>
          </div></li>
           
          </ul>
          </div>    

    </div>
  )
}

export default Manners