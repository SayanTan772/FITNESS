'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState('none');
  const [show, setShow] = useState('flex');

  const click = () => {
    if(display === 'none') {
      setDisplay('flex');
      setShow('none');
    } else {
      setDisplay('none');
      setShow('flex');
    }
  }

  return (
    <main className={styles.main}>

    <div className={styles.dropdown} style={{ display: `${display}` }}>
      <ul>
        <li className={styles.link}><a href="#facility">Facility</a></li>
        <li className={styles.link}><a href="#methods">Methods</a></li>
        <li className={styles.link}><a href="#challenges">Challenges</a></li>
        <li className={styles.link}><a href="#memberships">Memberships</a></li>
        <li className={styles.link}><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.the}>The</div>
        <div className={styles.name}>studio</div>
      </div>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_link}><a href="#facility">Facility</a></li>
        <li className={styles.nav_link}><a href="#methods">Methods</a></li>
        <li className={styles.nav_link}><a href="#challenges">Challenges</a></li>
        <li className={styles.nav_link}><a href="#memberships">Memberships</a></li>
        <li className={styles.nav_link}><a href="#contact">Contact</a></li>
        <li className={styles.login}>
          <Image className={styles.user_icon}
            src="/user.png"
            alt=""
            width={25}
            height={25}
          />
          Log In
          <Image className={styles.bag}
            src="/bag.png"
            alt=""
            width={34}
            height={34} 
          />
        </li>
      </ul>
      <Image className={styles.burger_menu}
        src="/burger-menu.svg"
        alt=""
        width={44}
        height={44}
        onClick={click}
      />
    </nav>

    <div className={styles.home} id="facility" style={{ display: `${show}` }}>
      <div className={styles.left}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}></div>
      <div className={styles.overlay_1}>
        <h1 className={styles.h1}>Train Hard. Sweat Hard.</h1>
        <p className={styles.title}>I am a Title. Click on me to edit.</p>
        <div className={styles.btn_div}>
          <button className={`${styles.btn} ${styles.white}`}>Become a Member</button>
          <button className={`${styles.btn} ${styles.black}`}>Book Now</button>
        </div>
      </div>
    </div>

    <div className={styles.chat}>
      <Image style={{ marginRight: '14px' }}
        src="/message.png"
        alt=""
        width={24}
        height={24}
      />
      Let's Chat!
    </div>

    <div className={styles.section} id="challenges" style={{ display: `${show}` }}>
      <h2 className={styles.h}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</h2>
      <button className={`${styles.btn} ${styles.black}`} style={{ width: '190px', marginTop: '54px' }}>Start Sweating</button>
    </div>

    <div className={styles.about} id="memberships" style={{ display: `${show}` }}>

      {
        ( window.innerWidth < 600 ) ? (
          <>
          <Image className={styles.gym}
            src="/women.jpg"
            alt=""
            width={288}
            height={285}
          />
          <div className={styles.about_top}></div>
          <div className={styles.card_bottom}>
          <h1 className={styles.heading}>100% Results <br />Guaranteed</h1>
          <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
          <button className={`${styles.btn} ${styles.black} ${styles.hover}`} style={{ width: '180px' }}>Learn More</button>
          </div>
          </>
        ) : (
          <>
      <div className={styles.bottom}></div>
      <Image className={styles.gym}
        src="/women.jpg"
        alt=""
        width={870}
        height={534}
      />
      <div className={styles.card}>
        <h1 className={styles.heading}>100% Results <br />Guaranteed</h1>
        <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
        <button className={`${styles.btn} ${styles.black} ${styles.hover}`} style={{ width: '180px' }}>Learn More</button>
      </div>
          </>
        )
      }
    </div>

    <div className={styles.methods} id="methods" style={{ display: `${show}` }}>
      <h1 className={styles.section_heading} style={{ color: '#000' }}>OUR METHODS</h1>
      <div className={styles.container}>
        <div className={styles.bar}></div>
        <div className={styles.sec_card}>
          <Image className={styles.tab_img}
            src="/tab1.webp"
            alt=""
            width={315}
            height={360}
          />
          <h1 className={styles.heading} style={{ color: '#000', margin: '16px 0px' }}>Body Shape</h1>
          <p className={styles.para_small}>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
        </div>
        <div className={styles.sec_card}>
          <Image className={styles.tab_img}
            src="/tab2.webp"
            alt=""
            width={315}
            height={360}
          />
          <h1 className={styles.heading} style={{ color: '#000', margin: '16px 0px' }}>Extreme</h1>
          <p className={styles.para_small}>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
        </div>
        <div className={styles.sec_card}>
          <Image className={styles.tab_img}
            src="/tab3.webp"
            alt=""
            width={315}
            height={360}
          />
          <h1 className={styles.heading} style={{ color: '#000', margin: '16px 0px' }}>Burn</h1>
          <p className={styles.para_small}>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
        </div>
        <div className={styles.sec_card}>
          <Image className={styles.tab_img}
            src="/tab4.webp"
            alt=""
            width={315}
            height={360}
          />
          <h1 className={styles.heading} style={{ color: '#000', margin: '16px 0px' }}>Hit</h1>
          <p className={styles.para_small}>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
        </div>
      </div>
      <button className={`${styles.btn} ${styles.white}`} style={{ width: '180px', marginBottom: '20px' }}>Our Classes</button>
    </div>

    <div className={styles.contact} id="contact" style={{ display: `${show}` }}>
      <h1 className={styles.section_heading} style={{ color: '#000' }}>HIT US UP ANYTIME</h1>
      <div className={styles.bg}></div>
      <div className={`${styles.card} ${styles.form}`}>
        <h1 className={styles.heading}>Contact Us</h1>

        <div className={styles.input_div}>
          <input type="text" className={styles.input} placeholder="First Name*" spellcheck="false" />
          <input type="text" className={styles.input} placeholder="Last Name*" spellcheck="false" />
        </div>

        <div className={styles.input_div}>
          <input type="number" className={styles.input} placeholder="Phone No*" spellcheck="false" />
          <input type="email" className={styles.input} placeholder="Email*" spellcheck="false" />
        </div>

        <div className={styles.input_div} style={{ flexDirection: 'column', height: 'auto' }}>
          <label className={styles.label}>Leave us a Message*</label>
          <textarea className={styles.textarea} spellcheck="false"></textarea>
        </div>

        <button className={`${styles.btn} ${styles.black} ${styles.hover}`} style={{ width: '180px', height: '48px' }}>Submit</button>
      </div>
    </div>

    <footer className={styles.footer} style={{ display: `${show}` }}>
      <div className={styles.logo} style={{ backgroundColor: 'rgb(38,38,38)', height: 'auto' }}>
        <div className={styles.the}>The</div>
        <div className={styles.name}>studio</div>
      </div>
      <ul>
        <li className={`${styles.footer_nav} ${styles.footer_nav_h}`}>Menu</li>
        <li className={`${styles.footer_nav}`}>Facility</li>
        <li className={`${styles.footer_nav}`}>Methods</li>
        <li className={`${styles.footer_nav}`}>Challenges</li>
        <li className={`${styles.footer_nav}`}>Memberships</li>
        <li className={`${styles.footer_nav}`}>Contacts</li>
      </ul>
      <ul>
        <li className={`${styles.footer_nav} ${styles.footer_nav_h}`}>Contact Us</li>
        <li className={`${styles.footer_nav}`}>500 Terry Francine Street</li>
        <li className={`${styles.footer_nav}`}>San Francisco, CA 94158</li>
        <li className={`${styles.footer_nav}`}>Mail: info@mysite.com</li>
        <li className={`${styles.footer_nav}`}>Tel: 123-456-7890</li>
      </ul>
      <ul>
        <li className={`${styles.footer_nav} ${styles.footer_nav_h}`}>Opening Hours</li>
        <li className={`${styles.footer_nav}`}>Sun-Fri: 9AM to 10PM</li>
        <li className={`${styles.footer_nav}`}>Saturday: 10AM to 7PM</li>
      </ul>
    </footer>

    <div className={styles.copyright} style={{ display: `${show}` }}>
    © 2035 by The Studio. Powered and secured by Wix
    </div>

    </main>
  );
}
