import React, { useRef } from 'react'
import './Behaviours.css'
import next_icon from '../../assets/next_arrow.png'
import back_icon from '../../assets/back_arrow.png'

function Behaviour  ()  { 
    const slider1 = useRef();
    let tx = 0;
    const slideForward = () => {
      if(tx > -50){
        tx-= 25;
      }
      slider1.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =()=> {
      if(tx < 0){
        tx += 25;
      }
      slider1.current.style.transform = `translateX(${tx}%)`
  
    }
    return (
      <div className='testimoniels'>
        <img src={back_icon} className='back-btn' onClick={slideForward}  alt="" />
        <img src={next_icon} className='next-btn' onClick={slideBackward} alt="" />
    <div className="slider">
      <ul ref={slider1}>
            <li>
          <div className="slide">
            
             <div className="user-info"><h3>  ምርጡን የሰው ልጅ ማወቅ እና መከተል</h3></div>
  
  
            <div><p>አላህ ሱብሃነሁ ወተዓላ ነብዩ ሙሐመድን (ሶ.ዐ.ወ) ከፍጥረታት ሁሉ የላቀ በሚያደርጓቸው የተከበሩ ባህሪያትና ልዩ ስነ ምግባር ባርኳቸዋል። 

አላህ በተከበረው ቁርኣን እንዲህ ይላል፡-

አላህንና የመጨረሻውን ቀን የሚከጅል አላህንም ብዙ ጊዜ ለሚያወሳ በአላህ መልክተኛ ለናንተ መልካም ምሳሌ አልላችሁ።

"ለእናንተ አላህንና የመጨረሻውን ቀን የሚከጅል አላህንም ብዙ ጊዜ ለሚያወሳ በአላህ መልእክተኛ ላይ መልካም ምሳሌ አላችሁ።" (ሱረቱ አል-አህዛብ 33፡21)

አላህ በብዙ የቁርኣን አንቀጾች ላይ የረሱልን (ሶ.ዐ.ወ) ፈለግ እንድንከተል አዞናል።

“(ሙሐመድ ሆይ ለሰው ልጆች፡- አላህን የምትወዱ እንደሆናችሁ ተከተሉኝ። አላህ ይወዳችኋል ኃጢአቶቻችሁንም ይምራል። አላህም መሓሪ አዛኝ ነው። (ሱረቱ አል-ኢምራን 3፡31)

የእሳቸዉ ህይወት ስፍር ቁጥር የሌላቸው የታማኝነት፣ ርህራሄ፣ ትዕግስት፣ አመራር እና ሌሎች ምሳሌዎችን ያሳያል። የእሳቸዉን ሲራህ በማጥናት ሁሉንም ጥሩ መልካም ምግባሮችን መማር እና የተሻለ ሰው መሆን ትችላለህ።

</p></div>
            </div></li>
            <li>
          <div className="slide">
            
             

             <div className="user-info"><h3>  መንፈሳዊ እድገትን ማሻሻል</h3></div>
  
  
            <div><p>የነብዩ (ሶ.ዐ.ወ) ህይወት ትምህርት የሙስሊሞችን መንፈሳዊ እድገት ያሳድጋል። ትምህርቶቻቸው፣ ተግዳሮቶቻቸዉ እና ከአላህ ጋር ያለውቸዉ ግንኙነት የአማኞችን ህይወት አነሳስቷል እና ይመራል። ሲራህን በማንበብ ከሌሎች ጋር ያለዎትን ግንኙነት ማሻሻል፣ ልባችሁን ማጥራት እና በባህሪያችሁ ላይ በጎ ተጽዕኖ ማሳደር ትችላላችሁ ኢንሻ አላህ። 
  
  </p></div>
            </div></li>
            <li>
          <div className="slide">
            
             <div className="user-info"><h3> የነቢይነትን ምስክርነት ማግኘት
  </h3></div>
  
  
            <div><p>አላህ ሱብሃነሁ ወተዓላ ለአላህ መልእክተኛ ሰለላሁ ዓለይሂ ወሰለም ብዙ ተአምራትን ሰጥቷቸዋል ለምሳሌ ቁርኣንን፣ ኢስራእና ሚእራጅን፣ ጨረቃን መሰንጠቅን፣ ስለወደፊቱ ክስተቶች ትንበያ እና ሌሎችም አል ቁርዓን ከመካከላቸው ትልቁ ተአምር ነበር። 

ኦሪት እና መጽሐፍ ቅዱስ ስለ የመጨረሻው ነቢይ መሐመድ ﷺ ትንቢቶች እና ማጣቀሻዎች አሏቸው ። ሲራህን በማጥናት፣ እምነትህን የሚያጠናክር ስለ እርሳቸዉ የነቢይነት ምስክርነቶች መማር ትችላለህ።
 </p></div>
            </div></li>
            <li>
          <div className="slide">
            
             <div className="user-info"><h3> የሙስሊም ማህበረሰብን መገንባት 
  </h3></div>
  
  
            <div><p>የወህይ መዉረድ  ነብዩ ሙሐመድን (ሶ.ዐ.ወ) እና ባልደረቦቻቸውን (ረዐ) በመንፈሳዊ ጠንካራ ስላደረጋቸው በ23 አመታት ውስጥ ብቻ ሰላማዊ ኢስላማዊ መንግስት መስርተዋል። በሲራህ በኩል ኡማውን እንዴት ወደ ታላቅነት እንደመሩት መማር እንችላለን። 

የአላህ መልእክተኛ ሰለላሁ ዓለይሂ ወሰለም እንዴት የግል እድገታቸውን እንደጀመሩ እና ከዚያም ወደ ቤተሰብ፣ ጎረቤት፣ ዘመድ እና ሰፊው ማህበረሰብ እንደደረሱ ያሳያል። በግል እንድናድግ እና ማህበረሰባችንን እንድናዳብር ይረዳናል።

  
  </p></div>
            </div></li>
          
            </ul>
            </div> 
            </div>   
  
   
  )
}

export default Behaviour